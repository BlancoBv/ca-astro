import { Sequelize } from "sequelize";

const { PASSWORD_DB, DATABASE, USER_DB, PORT_DB, HOST_DB } = process.env;

export const sequelize = new Sequelize(DATABASE, USER_DB, PASSWORD_DB, {
  host: HOST_DB,
  dialect: "mysql",
  port: PORT_DB,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

/* sequelize
  .sync({ force: true }) // Solo usar en desarrollo para recrear las tablas
  .then(() => {
    console.log("Tablas sincronizadas");
  })
  .catch((err) => {
    console.error("Error sincronizando tablas:", err);
  });
 */
sequelize
  .authenticate()
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.log("Error", err));
