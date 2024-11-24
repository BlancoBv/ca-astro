import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { d as Permisos } from '../../chunks/index_lYbwe5rL.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_DAop8mSr.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_Dy1BIr2k.mjs';

const POST = async ({ request }) => {
  const {
    tipo,
    nombre,
    descripcion
  } = await request.json();
  try {
    const response = await Permisos.create({ tipo, nombre, descripcion });
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};
const GET = async () => {
  const controller = new ControllerBuilder();
  const response = await controller.setModel(Permisos).getResult().getAll();
  return responseAsJson(response);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
