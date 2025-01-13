import { sequelize } from "@db";
import { DataTypes } from "sequelize";
import { Miembros, Publicaciones } from "@model";

const PublicacionesMiembros = sequelize.define(
  "publicaciones_has_miembros",
  {
    idpublicacion: {
      type: DataTypes.INTEGER,
      references: {
        model: Publicaciones,
        key: "idpublicacion",
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

export default PublicacionesMiembros;
