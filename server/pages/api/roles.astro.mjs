import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { R as Roles, d as Permisos } from '../../chunks/index_BkSKolFm.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_oQYjIXct.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CY4cSyXV.mjs';

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
const GET = async ({ url }) => {
  const controller = new ControllerBuilder(Roles);
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
