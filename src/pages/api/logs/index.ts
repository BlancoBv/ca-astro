import type { APIRoute } from "astro";
import { ControllerBuilder } from "src/controllers/controllerBuilder";
import { Logs } from "@model";
import responseAsJson from "@assets/responseAsJson";
import moment from "moment";

const controller = new ControllerBuilder();
export const GET: APIRoute = async ({ locals }) => {
  const { user } = locals;
  const date = new Date(Date.now());
  const thirtyDaysAgo = moment(date)
    .locale("es-MX")
    .subtract(30, "days")
    .toDate();

  if (user?.idRol !== 1) {
    return responseAsJson(
      { msg: "Error al obtener los logs" },
      { sendAsMessage: true },
      400
    );
  }

  try {
    await controller
      .setModel(Logs)
      .setWhereFilters({ createdAt: { [controller.Op.lt]: thirtyDaysAgo } })
      .getModelResult()
      .delete(); //elimina los registros antiguos a 30 dias
    const response = await controller
      .setModel(Logs)
      .setOrderFilters([["idlog", "DESC"]])
      .getModelResult()
      .getAll();
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(
      { msg: "Error al obtener los logs" },
      { sendAsMessage: true },
      400
    );
  }
};
