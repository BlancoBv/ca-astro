import { C as ControllerBuilder } from '../../chunks/controllerBuilder_D2x1Pjlp.mjs';
import { L as Logs } from '../../chunks/index_DRmzzIYG.mjs';
import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import moment from 'moment';
export { renderers } from '../../renderers.mjs';

const controller = new ControllerBuilder();
const GET = async ({ locals }) => {
  const { user } = locals;
  const date = new Date(Date.now());
  const thirtyDaysAgo = moment(date).locale("es-MX").subtract(30, "days").toDate();
  if (user?.idRol !== 1) {
    return responseAsJson(
      { msg: "Error al obtener los logs" },
      { sendAsMessage: true },
      400
    );
  }
  try {
    await controller.setModel(Logs).setWhereFilters({ createdAt: { [controller.Op.lt]: thirtyDaysAgo } }).getModelResult().delete();
    const response = await controller.setModel(Logs).setOrderFilters([["idlog", "DESC"]]).getModelResult().getAll();
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(
      { msg: "Error al obtener los logs" },
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
