import responseAsJson from "@assets/responseAsJson";
import { YoutubeLinks } from "@model";
import type { APIRoute } from "astro";
import { ControllerBuilder } from "src/controllers/controllerBuilder";

const controller = new ControllerBuilder();
export const GET: APIRoute = async () => {
  try {
    const response = await controller
      .setModel(YoutubeLinks)
      .setWhereFilters({ visible: true })
      .getModelResult()
      .getAll();
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(
      { msg: "Error al obtener links" },
      { sendAsMessage: true },
      400
    );
  }
};
