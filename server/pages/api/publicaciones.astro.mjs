import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { g as Publicaciones, d as Miembros } from '../../chunks/index_CDY0us9h.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_BlgJlZuX.mjs';
import * as z from 'zod';
export { r as renderers } from '../../chunks/_@astro-renderers_BnjbwtTW.mjs';

const controller = new ControllerBuilder();
z.object({
  titulo: z.string(),
  fecha: z.string().date()
});
const GET = async ({ locals }) => {
  const response = await controller.setModel(Publicaciones).setIncludedModels([
    {
      model: Miembros,
      attributes: [
        "nombreCompleto",
        "nombre",
        "apepat",
        "apemat",
        "idmiembro"
      ],
      as: "miembros_publicacion",
      through: { attributes: [] }
    }
  ]).getResult().getAll();
  return responseAsJson(response);
};
const POST = async () => {
  return responseAsJson({ msg: "Publicación añadida correctamente" });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
