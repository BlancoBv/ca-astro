import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { e as Publicaciones, d as Miembros, s as sequelize, h as PublicacionesMiembros } from '../../chunks/index_K0Lb7C1D.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_BlgJlZuX.mjs';
import * as z from 'zod';
import { n as noEmptyOrBlankSpaces } from '../../chunks/zodValidations_7RuNDgkL.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BnjbwtTW.mjs';

const controller = new ControllerBuilder();
const pubsObject = z.object({
  miembrosColaboradores: z.number({
    required_error: "No ingresaste miembros colaboradores",
    message: "Colaboradores no es un array."
  }).array().nonempty({ message: "No se recibio ningun colaborador." }),
  titulo: z.string().refine(
    noEmptyOrBlankSpaces.callback,
    noEmptyOrBlankSpaces.message("Titulo")
  ),
  year: z.string().min(4),
  ISSN: z.string().nullable().refine(noEmptyOrBlankSpaces.callback, noEmptyOrBlankSpaces.message("ISSN")).optional(),
  otrosAutores: z.string().nullable().refine(
    noEmptyOrBlankSpaces.callback,
    noEmptyOrBlankSpaces.message("Otros autores")
  ).optional(),
  tipo: z.enum(["arbitrado", "memoria en extenso", "journal", "indexado"]),
  descripcion: z.string().nullable().refine(
    noEmptyOrBlankSpaces.callback,
    noEmptyOrBlankSpaces.message("Descripción")
  ),
  url: z.string().url().nullable().refine(noEmptyOrBlankSpaces.callback, noEmptyOrBlankSpaces.message("URL")).optional(),
  visible: z.boolean()
});
const GET = async () => {
  const response = await controller.setModel(Publicaciones).setIncludedModels([
    {
      model: Miembros,
      attributes: [
        "nombreCompleto",
        "nombre",
        "apepat",
        "apemat",
        "idmiembro"
      ],
      as: "miembros_publicacion",
      through: { attributes: [] }
    }
  ]).setOrderFilters([["createdAt", "DESC"]]).getResult().getAll();
  return responseAsJson(response);
};
const POST = async ({ request }) => {
  const {
    tipo,
    titulo,
    miembrosColaboradores,
    visible,
    year,
    ISSN,
    url,
    otrosAutores,
    descripcion
  } = await request.json();
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
      descripcion
    });
    await sequelize.transaction(async (t) => {
      const publicacion = await controller.setModel(Publicaciones).setBody({
        tipo,
        titulo,
        visible,
        year,
        ISSN,
        url,
        otrosAutores,
        descripcion
      }).setTransaction(t).getResult().create();
      await controller.setModel(PublicacionesMiembros).setTransaction(t).getResult().bulkCreate(
        miembrosColaboradores.map((el) => ({
          idpublicacion: publicacion.toJSON().idpublicacion,
          idmiembro: el
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
const PUT = async ({ request }) => {
  const { idpublicacion, ...body } = await request.json();
  try {
    pubsObject.partial().parse(body);
    await sequelize.transaction(async (t) => {
      if (body.miembrosColabAdd || body.miembrosColabDelete) {
        if (body.miembrosColabAdd.length > 0) {
          await controller.setModel(PublicacionesMiembros).setTransaction(t).getResult().bulkCreate(
            body.miembrosColabAdd.map((el) => ({
              idpublicacion,
              idmiembro: el
            }))
          );
        }
        if (body.miembrosColabDelete.length > 0) {
          await controller.setModel(PublicacionesMiembros).setWhereFilters({
            [controller.Op.and]: {
              idpublicacion,
              idmiembro: body.miembrosColabDelete
            }
          }).setTransaction(t).getResult().delete();
        }
        return responseAsJson({ msg: "Miembros editados correctamente" });
      }
      await controller.setModel(Publicaciones).setTransaction(t).setWhereFilters({ idpublicacion }).setBody(body).getResult().update();
    });
    return responseAsJson(
      { msg: "Actualizado correctamente" },
      { sendAsMessage: true }
    );
  } catch (error) {
    return responseAsJson({ error }, { sendAsMessage: true }, 400);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
