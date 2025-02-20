import responseAsJson from "@assets/responseAsJson";
import type { APIRoute } from "astro";
import { ControllerBuilder } from "src/controllers/builder";
import { Proyectos, ProyectosMiembros, Miembros } from "@model";
import { sequelize } from "@db";
import { z } from "astro/zod";
import { noEmptyOrBlankSpaces } from "@assets/zodValidations";

interface bodyRequest {
  miembrosColaboradores: number[];
  titulo: string;
  clave: string;
  fechaInicio: string;
  fechaTermino: string;
  estatus: string;
  tipo: string;
  otrosColaboradores: string;
  director: string;
  monto: string;
  fechaInicioEntrega: string;
  fechaTerminoEntrega: string;
  convocatoria: string;
  visible: boolean;
}
const proyectoSchema = z.object({
  miembrosColaboradores: z
    .number({
      required_error: "No ingresaste miembros colaboradores",
      message: "Colaboradores no es un array.",
    })
    .array()
    .nonempty({ message: "No se recibio ningun colaborador." }),
  titulo: z
    .string({ required_error: "El titulo es requerido" })
    .refine(
      noEmptyOrBlankSpaces.callback,
      noEmptyOrBlankSpaces.message("Titulo")
    ),
  tipo: z.enum(["interno", "externo"], {
    required_error: "Tipo de proyecto requerido.",
  }),
  clave: z
    .string({ required_error: "Clave de proyecto requerida" })
    .refine(
      noEmptyOrBlankSpaces.callback,
      noEmptyOrBlankSpaces.message("Clave")
    ),
  fechaInicio: z
    .string({ required_error: "Fecha de inicio de proyecto requerida." })
    .date(),
  fechaTermino: z.string().date().optional(),
  fechaInicioEntrega: z.string().date(),
  fechaTerminoEntrega: z.string().date(),
  otrosColaboradores: z
    .string()
    .refine(
      noEmptyOrBlankSpaces.callback,
      noEmptyOrBlankSpaces.message("Otros colaboradores")
    )
    .optional(),
  director: z
    .number({ required_error: "Director de proyecto es requerido." })
    .nonnegative(),
  monto: z
    .number({
      required_error: "El monto es requerido.",
      message: "Monto no es un número.",
    })
    .nonnegative(),
  convocatoria: z
    .string({ required_error: "La convocatoria es requerida." })
    .refine(
      noEmptyOrBlankSpaces.callback,
      noEmptyOrBlankSpaces.message("Convocatoria")
    ),
  estatus: z.enum(["finalizado", "no finalizado", "en proceso"], {
    required_error: "El estatus es requerido.",
  }),
  visible: z.boolean({ required_error: "Visibilidad del proyecto requerida" }),
  miembrosColabDelete: z
    .number({
      required_error: "No ingresaste miembros colaboradores",
      message: "Colaboradores no es un array.",
    })
    .array()
    .optional(),
  miembrosColabAdd: z
    .number({
      required_error: "No ingresaste miembros colaboradores",
      message: "Colaboradores no es un array.",
    })
    .array()
    .optional(),
});
const controller = new ControllerBuilder();
export const GET: APIRoute = async ({ locals }) => {
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
    .setOrderFilters([["createdAt", "DESC"]])
    .setAttributes({
      exclude: locals.user
        ? []
        : ["descripcion", "url", "createdAt", "updatedAt"],
    })
    .getResult()
    .getAll();
  return responseAsJson(response);
};

export const POST: APIRoute = async ({ request }) => {
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
    visible,
  }: bodyRequest = await request.json();

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
      visible,
    });
    await sequelize.transaction(async (t) => {
      const proyecto = await controller
        .setModel(Proyectos)
        .setBody({
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
          visible,
        })
        .setTransaction(t)
        .getResult()
        .create();

      await controller
        .setModel(ProyectosMiembros)
        .setTransaction(t)
        .getResult()
        .bulkCreate(
          miembrosColaboradores.map((el) => ({
            idproyecto: proyecto.toJSON<{ idproyecto: number }>().idproyecto,
            idmiembro: el,
          }))
        );
    });

    return responseAsJson({ msg: "Proyecto añadido correctamente" });
  } catch (error) {
    return responseAsJson({ error }, { sendAsMessage: true }, 400);
  }
};

export const PUT: APIRoute = async ({ request }) => {
  const { idproyecto, ...body } = await request.json();

  try {
    proyectoSchema.partial().parse(body);

    await sequelize.transaction(async (t) => {
      if (body.miembrosColabAdd || body.miembrosColabDelete) {
        if ((body.miembrosColabAdd as number[]).length > 0) {
          await controller
            .setModel(ProyectosMiembros)
            .setTransaction(t)
            .getResult()
            .bulkCreate(
              body.miembrosColabAdd.map((el: number) => ({
                idproyecto,
                idmiembro: el,
              }))
            );
        }
        if ((body.miembrosColabDelete as number[]).length > 0) {
          await controller
            .setModel(ProyectosMiembros)
            .setWhereFilters({
              [controller.Op.and]: {
                idproyecto,
                idmiembro: body.miembrosColabDelete,
              },
            })
            .setTransaction(t)
            .getResult()
            .delete();
        }

        return responseAsJson({ msg: "Miembros editados correctamente" });
      }

      await controller
        .setModel(Proyectos)
        .setTransaction(t)
        .setWhereFilters({ idproyecto })
        .setBody(body)
        .getResult()
        .update();

      /*         if ((body.miembrosColabDelete as number[]).length > 0) {
          await controller
            .setModel(ProyectosMiembros)
            .setTransaction(t)
            .getResult()
            .bulkCreate(
              body.miembrosColabAdd.map((el: number) => ({
                idproyecto: idproyecto,
                idmiembro: el,
              }))
            );
        } */
    });

    return responseAsJson({ msg: "Proyecto actualizado correctamente" });
  } catch (error) {
    return responseAsJson({ error }, { sendAsMessage: true }, 400);
  }
};
