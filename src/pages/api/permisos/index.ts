import responseAsJson from "@assets/responseAsJson";
import { Permisos } from "@model";
import type { APIRoute } from "astro";
import { ControllerBuilder } from "src/controllers/builder";

export const POST: APIRoute = async ({ request }) => {
  const {
    tipo,
    nombre,
    descripcion,
  }: { tipo: string; nombre: string; descripcion: string } =
    await request.json();
  try {
    const response = await Permisos.create({ tipo, nombre, descripcion });
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};

export const GET: APIRoute = async () => {
  const controller = new ControllerBuilder(Permisos);

  const response = await controller.getResult().getAll();

  return responseAsJson(response);
};
