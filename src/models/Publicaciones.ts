import { sequelize } from "@db";
import { DataTypes } from "sequelize";

const Publicaciones = sequelize.define(
  "publicaciones",
  {
    idpublicacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ISSN: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM("arbitrado", "memoria en extenso "),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT("medium"),
    },
    url: {
      type: DataTypes.STRING(100),
    },
    otrosAutores: {
      type: DataTypes.STRING(100),
    },
    year: {
      type: DataTypes.STRING(4),
    },
    visible: {
      type: DataTypes.BOOLEAN(),
      allowNull: false,
    },
  }
  /*   {
    hooks: {
      afterFind(instancesOrInstance, options) {
        console.log(instancesOrInstance);

        instancesOrInstance.forEach((el) => {
          el.dataValues.fechaInicio = formatDate(el.dataValues.fechaInicio, "LL");
        });
      },
    },
  } */
);
export default Publicaciones;
