import { DataTypes } from "sequelize";
import { sequelize } from "@db";

const Articulo = sequelize.define("articulos", {
  idarticulo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  idUsuario: { type: DataTypes.INTEGER, allowNull: true },
  ruta: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
});

export default Articulo;
