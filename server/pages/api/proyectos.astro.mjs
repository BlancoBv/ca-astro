import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_C_HVqbzM.mjs';
import { P as Proyectos, d as Miembros } from '../../chunks/index_DQ7uLXIm.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_DJ3BG1z4.mjs';

const controller = new ControllerBuilder();
const GET = async () => {
  const response = await controller.setModel(Proyectos).setIncludedModels([
    {
      model: Miembros,
      attributes: [
        "nombreCompleto",
        "nombre",
        "apepat",
        "apemat",
        "idmiembro"
      ],
      as: "miembros_proyecto",
      through: { attributes: [] }
    },
    {
      model: Miembros,
      as: "director_proyecto",
      attributes: [
        "nombreCompleto",
        "nombre",
        "apepat",
        "apemat",
        "idmiembro"
      ]
    }
  ]).getResult().getAll();
  return responseAsJson(response);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
