import { DataTypes } from "sequelize";
import { sequelize } from "@db";

const Permisos = sequelize.define("permisos", {
  idpermiso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM("r", "w", "d", "u"),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(255), //cambiarlo
    allowNull: false,
  },
});

export default Permisos;
