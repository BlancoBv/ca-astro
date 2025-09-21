import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { Y as YoutubeLinks } from '../../chunks/index_DRmzzIYG.mjs';
import { C as ControllerBuilder } from '../../chunks/controllerBuilder_D2x1Pjlp.mjs';
export { renderers } from '../../renderers.mjs';

const controller = new ControllerBuilder();
const GET = async () => {
  try {
    const response = await controller.setModel(YoutubeLinks).setWhereFilters({ visible: true }).getModelResult().getAll();
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(
      { msg: "Error al obtener links" },
      { sendAsMessage: true },
      400
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
