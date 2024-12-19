import { Lucia, TimeSpan } from 'lucia';
import { Mysql2Adapter } from '@lucia-auth/adapter-mysql';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 6e4,
  // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  password: process.env.PASSWORD_DB
});
const adapter = new Mysql2Adapter(pool, {
  user: "usuarios",
  session: "user_session"
});
const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: { secure: true, sameSite: "strict" }
  },
  sessionExpiresIn: new TimeSpan(12, "h"),
  getUserAttributes: (attributes) => {
    const { nombres, apemat, apepat, idRol } = attributes;
    return {
      nombre_completo: `${nombres} ${apepat} ${apemat}`,
      idRol
    };
  }
});

class CookiesManager {
  cookies;
  request;
  constructor(cookie, request) {
    this.cookies = cookie;
    this.request = request;
  }
  async validate() {
    try {
      const sessionID = this.getSessionID();
      if (sessionID) {
        const { session, user } = await lucia.validateSession(sessionID);
        if (session) {
          return { isValid: true, session, user };
        }
      }
      return { isValid: false };
    } catch (error) {
      throw error;
    }
  }
  async create(userID) {
    try {
      const { id } = await lucia.createSession(userID, {});
      const { name, attributes, value } = lucia.createSessionCookie(id);
      this.cookies.set(name, value, attributes);
    } catch (error) {
      throw error;
    }
  }
  async invalidateAndDelete() {
    try {
      await this.invalidate();
      this.delete();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  delete() {
    const sessionCookie = lucia.createBlankSessionCookie();
    this.request.headers.set("Set-Cookie", sessionCookie.serialize());
    this.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }
  async invalidate() {
    try {
      const sessionID = this.getSessionID();
      if (sessionID) {
        await lucia.invalidateSession(sessionID);
      }
      await lucia.deleteExpiredSessions();
    } catch (error) {
      throw error;
    }
  }
  getSessionID() {
    return this.cookies.get(lucia.sessionCookieName)?.value;
  }
}

export { CookiesManager as C };
