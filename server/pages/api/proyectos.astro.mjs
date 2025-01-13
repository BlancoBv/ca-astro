import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_BlgJlZuX.mjs';
import { P as Proyectos, d as Miembros, s as sequelize, f as ProyectosMiembros } from '../../chunks/index_CDY0us9h.mjs';
import * as z from 'zod';
import { n as noEmptyOrBlankSpaces } from '../../chunks/zodValidations_2nZAise9.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BnjbwtTW.mjs';

const proyectoSchema = z.object({
  miembrosColaboradores: z.number({
    required_error: "No ingresaste miembros colaboradores",
    message: "Colaboradores no es un array."
  }).array().nonempty({ message: "No se recibio ningun colaborador." }),
  titulo: z.string({ required_error: "El titulo es requerido" }).refine(
    noEmptyOrBlankSpaces.callback,
    noEmptyOrBlankSpaces.message("Titulo")
  ),
  tipo: z.enum(["interno", "externo"], {
    required_error: "Tipo de proyecto requerido."
  }),
  clave: z.string({ required_error: "Clave de proyecto requerida" }).refine(
    noEmptyOrBlankSpaces.callback,
    noEmptyOrBlankSpaces.message("Clave")
  ),
  fechaInicio: z.string({ required_error: "Fecha de inicio de proyecto requerida." }).date(),
  fechaTermino: z.string().date().optional(),
  fechaInicioEntrega: z.string().date(),
  fechaTerminoEntrega: z.string().date(),
  otrosColaboradores: z.string().refine(
    noEmptyOrBlankSpaces.callback,
    noEmptyOrBlankSpaces.message("Otros colaboradores")
  ).optional(),
  director: z.number({ required_error: "Director de proyecto es requerido." }).nonnegative(),
  monto: z.number({
    required_error: "El monto es requerido.",
    message: "Monto no es un número."
  }).nonnegative(),
  convocatoria: z.string({ required_error: "La convocatoria es requerida." }).refine(
    noEmptyOrBlankSpaces.callback,
    noEmptyOrBlankSpaces.message("Convocatoria")
  ),
  estatus: z.enum(["finalizado", "no finalizado", "en proceso"], {
    required_error: "El estatus es requerido."
  }),
  visible: z.boolean({ required_error: "Visibilidad del proyecto requerida" }),
  miembrosColabDelete: z.number({
    required_error: "No ingresaste miembros colaboradores",
    message: "Colaboradores no es un array."
  }).array().optional(),
  miembrosColabAdd: z.number({
    required_error: "No ingresaste miembros colaboradores",
    message: "Colaboradores no es un array."
  }).array().optional()
});
const controller = new ControllerBuilder();
const GET = async () => {
  const response = await controller.setModel(Proyectos).setIncludedModels([
    {
      model: Miembros,
      attributes: [
        "nombreCompleto",
        "nombre",
        "apepat",
        "apemat",
        "idmiembro"
      ],
      as: "miembros_proyecto",
      through: { attributes: [] }
    },
    {
      model: Miembros,
      as: "director_proyecto",
      attributes: [
        "nombreCompleto",
        "nombre",
        "apepat",
        "apemat",
        "idmiembro"
      ]
    }
  ]).setOrderFilters([["createdAt", "DESC"]]).getResult().getAll();
  return responseAsJson(response);
};
const POST = async ({ request }) => {
  const {
    miembrosColaboradores,
    titulo,
    tipo,
    clave,
    fechaInicio,
    fechaTermino,
    fechaInicioEntrega,
    fechaTerminoEntrega,
    otrosColaboradores,
    director,
    monto,
    convocatoria,
    estatus,
    visible
  } = await request.json();
  try {
    proyectoSchema.parse({
      miembrosColaboradores,
      titulo,
      tipo,
      clave,
      fechaInicio,
      fechaTermino,
      fechaInicioEntrega,
      fechaTerminoEntrega,
      otrosColaboradores,
      director,
      monto,
      convocatoria,
      estatus,
      visible
    });
    await sequelize.transaction(async (t) => {
      const proyecto = await controller.setModel(Proyectos).setBody({
        titulo,
        tipo,
        director,
        clave,
        fechaInicio,
        fechaTermino,
        fechaInicioEntrega,
        fechaTerminoEntrega,
        monto,
        convocatoria,
        otrosColaboradores,
        estatus,
        visible
      }).setTransaction(t).getResult().create();
      await controller.setModel(ProyectosMiembros).setTransaction(t).getResult().bulkCreate(
        miembrosColaboradores.map((el) => ({
          idproyecto: proyecto.toJSON().idproyecto,
          idmiembro: el
        }))
      );
    });
    return responseAsJson({ msg: "Proyecto añadido correctamente" });
  } catch (error) {
    return responseAsJson({ error }, { sendAsMessage: true }, 400);
  }
};
const PUT = async ({ request }) => {
  const { idproyecto, ...body } = await request.json();
  try {
    proyectoSchema.partial().parse(body);
    await sequelize.transaction(async (t) => {
      if (body.miembrosColabAdd || body.miembrosColabDelete) {
        if (body.miembrosColabAdd.length > 0) {
          await controller.setModel(ProyectosMiembros).setTransaction(t).getResult().bulkCreate(
            body.miembrosColabAdd.map((el) => ({
              idproyecto,
              idmiembro: el
            }))
          );
        }
        if (body.miembrosColabDelete.length > 0) {
          await controller.setModel(ProyectosMiembros).setWhereFilters({
            [controller.Op.and]: {
              idproyecto,
              idmiembro: body.miembrosColabDelete
            }
          }).setTransaction(t).getResult().delete();
        }
        return responseAsJson({ msg: "Miembros editados correctamente" });
      }
      await controller.setModel(Proyectos).setTransaction(t).setWhereFilters({ idproyecto }).setBody(body).getResult().update();
    });
    return responseAsJson({ msg: "Proyecto actualizado correctamente" });
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
