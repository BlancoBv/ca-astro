import type { APIRoute } from "astro";
import responseAsJson from "@assets/responseAsJson";
import { Roles, Permisos } from "@model";
import { ControllerBuilder } from "src/controllers/builder";

interface roles {
  nombre: string;
}

export const POST: APIRoute = async ({ request }) => {
  const body: roles = await request.json();
  try {
    const res = await Roles.create({ nombre: body.nombre });
    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(JSON.stringify({ msg: "Error al crear rol", error }), {
      status: 400,
    });
  }
};

export const GET: APIRoute = async ({ url }) => {
  const controller = new ControllerBuilder(Roles);
  controller.setIncludedModels([{ model: Permisos }]);

  const res = await controller.getResult().getAll();

  return responseAsJson(res);
};
