import { formatDate } from "@assets/format";
import { sequelize } from "@db";
import { DataTypes } from "sequelize";

const Proyectos = sequelize.define(
  "proyectos",
  {
    idproyecto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clave: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fechaTermino: {
      type: DataTypes.DATEONLY,
    },
    estatus: {
      type: DataTypes.ENUM("finalizado", "no finalizado", "en proceso"),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM("interno", "externo"),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT("medium"),
    },
    url: {
      type: DataTypes.STRING(60),
    },
    otrosColaboradores: {
      type: DataTypes.STRING(100),
    },
    director: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monto: {
      type: DataTypes.DECIMAL(12, 2),
    },
    fechaInicioEntrega: {
      type: DataTypes.DATE,
    },
    fechaTerminoEntrega: {
      type: DataTypes.DATE,
    },
    convocatoria: {
      type: DataTypes.STRING(100),
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
export default Proyectos;
