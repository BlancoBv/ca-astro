import { DataTypes } from "sequelize";
import { sequelize } from "@db";

const Submenus = sequelize.define("submenus", {
  idsubmenu: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idmenu: { type: DataTypes.INTEGER, allowNull: false },
  show: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
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
});

export default Submenus;
