import { Lucia, TimeSpan } from "lucia";
import { Mysql2Adapter } from "@lucia-auth/adapter-mysql";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  password: process.env.PASSWORD_DB,
});
const adapter = new Mysql2Adapter(pool, {
  user: "usuarios",
  session: "user_session",
});

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: { secure: import.meta.env.PROD ?? false, sameSite: "strict" },
  },
  sessionExpiresIn: new TimeSpan(12, "h"),
  getUserAttributes: (attributes) => {
    const { nombres, apemat, apepat, idRol } = attributes;

    return {
      nombre_completo: `${nombres} ${apepat} ${apemat}`,
      idRol,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }

  interface DatabaseUserAttributes {
    idRol: number;
    nombres: string;
    apepat: string;
    apemat: string;
  }
}
