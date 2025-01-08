import responseAsJson from "@assets/responseAsJson";
import type { APIRoute } from "astro";
import { ControllerBuilder } from "src/controllers/builder";
import { Proyectos, ProyectosMiembros, Miembros } from "@model";
import { sequelize } from "@db";

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
}

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
    .setOrderFilters([["createdAt", "DESC"]])
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
  }: bodyRequest = await request.json();

  try {
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
    return responseAsJson({ msg: "Error al insertar proyecto" }, {}, 401);
  }
};
