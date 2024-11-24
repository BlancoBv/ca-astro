import { sequelize } from "@db";
import { DataTypes } from "sequelize";

const Banners = sequelize.define("banners", {
  idbanner: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcion: {
    type: DataTypes.STRING(100),
  },
  imagen: { type: DataTypes.STRING(100), allowNull: false },
  mostrar: { type: DataTypes.BOOLEAN, allowNull: false },
  url: { type: DataTypes.STRING(100) },
  idUsuario: {
    type: DataTypes.INTEGER,
  },
});
export default Banners;
