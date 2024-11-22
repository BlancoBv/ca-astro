import { DataTypes } from "sequelize";
import { sequelize } from "@db";

const Menus = sequelize.define("menus", {
  idmenu: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  show: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  dropcollapse: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT("tiny"),
    allowNull: false,
  },
  ruta: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Menus;
