import responseAsJson from "@assets/responseAsJson";
import type { APIRoute } from "astro";
import { ControllerBuilder } from "src/controllers/builder";
import { Proyectos, ProyectosMiembros, Miembros } from "@model";

const controller = new ControllerBuilder();
export const GET: APIRoute = async () => {
  const response = await controller
    .setModel(Proyectos)
    .setIncludedModels([
      {
        model: Miembros,
        attributes: [
          "nombreCompleto",
          "nombre",
          "apepat",
          "apemat",
          "idmiembro",
        ],
        as: "miembros_proyecto",
        through: { attributes: [] },
      },
      {
        model: Miembros,
        as: "director_proyecto",
        attributes: [
          "nombreCompleto",
          "nombre",
          "apepat",
          "apemat",
          "idmiembro",
        ],
      },
    ])
    .getResult()
    .getAll();
  return responseAsJson(response);
};
