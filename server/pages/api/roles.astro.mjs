import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { R as Roles, e as Permisos } from '../../chunks/index_DQ7uLXIm.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_C_HVqbzM.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BbUQvcMQ.mjs';

const POST = async ({ request }) => {
  const body = await request.json();
  try {
    const res = await Roles.create({ nombre: body.nombre });
    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(JSON.stringify({ msg: "Error al crear rol", error }), {
      status: 400
    });
  }
};
const GET = async () => {
  const controller = new ControllerBuilder();
  controller.setModel(Roles);
  controller.setIncludedModels([{ model: Permisos }]);
  const res = await controller.getResult().getAll();
  return responseAsJson(res);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
