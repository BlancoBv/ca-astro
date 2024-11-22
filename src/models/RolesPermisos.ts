import { DataTypes } from "sequelize";
import { sequelize } from "@db";
import Permisos from "./Permisos";
import Roles from "./Roles";

const RolesPermisos = sequelize.define("roles_has_permisos", {
  idrol: { type: DataTypes.INTEGER, references: { model: Roles, key: "id" } },
  idpermiso: {
    type: DataTypes.INTEGER,
    references: { model: Permisos, key: "idpermiso" },
  },
});

export default RolesPermisos;
