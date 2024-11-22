import { DataTypes } from "sequelize";
import { sequelize } from "@db";

const Blog = sequelize.define("blogs", {
  idblog: {
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
  estatus: {
    type: DataTypes.ENUM("aceptado", "rechazado", "pendiente"),
    allowNull: false,
    defaultValue: "pendiente",
  },
  imagen: { type: DataTypes.STRING(60), allowNull: false },
  usuarios_id: { type: DataTypes.INTEGER, allowNull: true },
  fechavigente: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Blog;
