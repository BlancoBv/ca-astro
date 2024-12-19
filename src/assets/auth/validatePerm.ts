import { Permisos, Roles } from "@model";
import { ControllerBuilder } from "src/controllers/builder";

export enum permType {
  r = "r",
  w = "w",
  d = "d",
  u = "u",
}

export async function validatePerm(
  idRol: number | undefined,
  permType: permType,
  permName: string
) {
  if (idRol === 1) {
    return false;
  }
  const controller = new ControllerBuilder();

  const rol = await controller
    .setModel(Roles)
    .setIncludedModels([
      {
        model: Permisos,
        through: { attributes: [] },
        attributes: ["nombre", "tipo"],
      },
    ])
    .setWhereFilters({ id: idRol })
    .getResult()
    .getOne();

  const permisos = rol?.toJSON<{
    permisos: { nombre: string; tipo: string }[];
  }>().permisos;

  return !permisos?.some(
    (el) => el.nombre === permName && el.tipo === permType
  );
}
