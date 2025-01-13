import responseAsJson from "@assets/responseAsJson";
import type { APIRoute } from "astro";
import { Miembros, Publicaciones, PublicacionesMiembros } from "@model";
import { ControllerBuilder } from "src/controllers/builder";
import { z } from "astro/zod";
import { noEmptyOrBlankSpaces } from "@assets/zodValidations";
import { sequelize } from "@db";

interface pubsBody {
  miembrosColaboradores: number[];
  titulo: string;
  year: string;
  ISSN: string;
  otrosAutores: string;
  tipo: string;
  descripcion: string;
  url: string;
  visible: boolean;
}

const controller = new ControllerBuilder();

const pubsObject = z.object({
  miembrosColaboradores: z
    .number({
      required_error: "No ingresaste miembros colaboradores",
      message: "Colaboradores no es un array.",
    })
    .array()
    .nonempty({ message: "No se recibio ningun colaborador." }),
  titulo: z
    .string()
    .refine(
      noEmptyOrBlankSpaces.callback,
      noEmptyOrBlankSpaces.message("Titulo")
    ),
  year: z.string().min(4),
  ISSN: z
    .string()
    .refine(
      noEmptyOrBlankSpaces.callback,
      noEmptyOrBlankSpaces.message("Titulo")
    ),
  otrosAutores: z
    .string()
    .refine(
      noEmptyOrBlankSpaces.callback,
      noEmptyOrBlankSpaces.message("Otros autores")
    )
    .optional(),
  tipo: z.enum(["arbitrado", "memoria en extenso"]),
  descripcion: z
    .string()
    .refine(
      noEmptyOrBlankSpaces.callback,
      noEmptyOrBlankSpaces.message("Descripción")
    ),
  url: z
    .string()
    .url()
    .refine(noEmptyOrBlankSpaces.callback, noEmptyOrBlankSpaces.message("URL")),
  visible: z.boolean(),
});

export const GET: APIRoute = async () => {
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
    .setOrderFilters([["createdAt", "DESC"]])
    .getResult()
    .getAll();

  return responseAsJson(response);
};

export const POST: APIRoute = async ({ request }) => {
  const {
    tipo,
    titulo,
    miembrosColaboradores,
    visible,
    year,
    ISSN,
    url,
    otrosAutores,
    descripcion,
  }: pubsBody = await request.json();

  try {
    pubsObject.parse({
      tipo,
      titulo,
      miembrosColaboradores,
      visible,
      year,
      ISSN,
      url,
      otrosAutores,
      descripcion,
    });

    await sequelize.transaction(async (t) => {
      const publicacion = await controller
        .setModel(Publicaciones)
        .setBody({
          tipo,
          titulo,
          visible,
          year,
          ISSN,
          url,
          otrosAutores,
          descripcion,
        })
        .setTransaction(t)
        .getResult()
        .create();

      await controller
        .setModel(PublicacionesMiembros)
        .setTransaction(t)
        .getResult()
        .bulkCreate(
          miembrosColaboradores.map((el) => ({
            idpublicacion: publicacion.toJSON<{ idpublicacion: number }>()
              .idpublicacion,
            idmiembro: el,
          }))
        );
    });
    return responseAsJson(
      { msg: "Publicacion añadida correctamente" },
      { sendAsMessage: true }
    );
  } catch (error) {
    return responseAsJson({ error }, { sendAsMessage: true }, 400);
  }
};
