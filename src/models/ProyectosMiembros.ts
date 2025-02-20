import { sequelize } from "@db";
import { DataTypes } from "sequelize";
import { Proyectos, Miembros } from "@model";

const ProyectosMiembros = sequelize.define(
  "proyectos_has_miembros",
  {
    idproyecto: {
      type: DataTypes.INTEGER,
      references: {
        model: Proyectos,
        key: "idproyecto",
      },
    },
    idmiembro: {
      type: DataTypes.INTEGER,
      references: {
        model: Miembros,
        key: "idmiembro",
      },
    },
  },
  { timestamps: false }
);

export default ProyectosMiembros;
