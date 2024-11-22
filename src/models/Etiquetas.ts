import { DataTypes } from "sequelize";
import { sequelize } from "@db";

const Etiquetas = sequelize.define("etiquetas", {
  idetiqueta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Etiquetas;
