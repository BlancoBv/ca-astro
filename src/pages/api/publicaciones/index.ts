import responseAsJson from "@assets/responseAsJson";
import type { APIRoute } from "astro";
import { Miembros, Publicaciones } from "@model";
import { ControllerBuilder } from "src/controllers/builder";
import { z } from "astro/zod";

const controller = new ControllerBuilder();
const pubsObject = z.object({
  titulo: z.string(),
  fecha: z.string().date(),
});

export const GET: APIRoute = async ({ locals }) => {
  const { user } = locals;
  const response = await controller
    .setModel(Publicaciones)
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
        as: "miembros_publicacion",
        through: { attributes: [] },
      },
    ])
    .getResult()
    .getAll();

  return responseAsJson(response);
};

export const POST: APIRoute = async () => {
  return responseAsJson({ msg: "Publicación añadida correctamente" });
};
