import { sequelize } from "@db";
import { DataTypes } from "sequelize";

const Contactos = sequelize.define("contactos", {
  idcontacto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  tipo: {
    type: DataTypes.ENUM("facebook", "x", "correo", "linkedin", "otro"),
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  idmiembro: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
export default Contactos;
