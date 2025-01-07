import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { M as Menus, S as Submenus, U as Users } from '../../chunks/index_DQ7uLXIm.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_C_HVqbzM.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BbUQvcMQ.mjs';

const GET = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);
  const controller = new ControllerBuilder();
  controller.setModel(Menus).setIncludedModels([
    {
      model: Submenus,
      required: false,
      attributes: ["ruta", "idsubmenu", "nombre", "descripcion"]
    },
    ...Boolean(search.showUser) ? [
      {
        model: Users,
        attributes: { exclude: ["password", "usuario", "idRol"] }
      }
    ] : []
  ]).setOrderFilters([
    ["idmenu", "ASC"],
    [Submenus, "idsubmenu", "ASC"]
  ]);
  const response = await controller.getResult().getAll();
  return responseAsJson(response);
};
const POST = async ({ request }) => {
  const {
    show,
    dropcollapse,
    descripcion,
    nombre,
    ruta,
    idUsuario
  } = await request.json();
  try {
    await Menus.create({
      nombre,
      dropcollapse,
      ruta,
      descripcion,
      show,
      idUsuario
    });
    return responseAsJson(
      { msg: "Ruta añadida correctamente" },
      { sendAsMessage: true }
    );
  } catch (error) {
    return responseAsJson(
      { msg: "Error al crear la ruta", error },
      { sendAsMessage: true },
      404
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
