import { sequelize } from "@db";
import { DataTypes } from "sequelize";
const Logs = sequelize.define("logs", {
  idlog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ruta: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  method: {
    type: DataTypes.STRING(7),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
  },
});

export default Logs;
