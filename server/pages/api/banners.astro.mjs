import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { I as ImageController } from '../../chunks/ImageController_Vn72BPHB.mjs';
import { B as Banners } from '../../chunks/index_CM2BeHHC.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_Cv7uo8Sa.mjs';
export { renderers } from '../../renderers.mjs';

const imageController = new ImageController("banners");
const controller = new ControllerBuilder();
const GET = async ({ url, locals }) => {
  const search = searchParamsToObject(url.searchParams);
  try {
    const response = await controller.setModel(Banners).setWhereFilters({
      ...search.mostrar === "true" && { mostrar: true }
    }).setOrderFilters([["createdAt", "DESC"]]).setAttributes({
      exclude: locals.user ? [] : ["updatedAt", "idUsuario", "mostrar"]
    }).getResult().getAll();
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 400);
  }
};
const POST = async ({ request, url }) => {
  const body = await request.formData();
  const file = body.get("imagen");
  const descripcion = body.get("descripcion");
  const mostrar = body.get("mostrar");
  const urlC = body.get("url");
  const idUsuario = body.get("idUsuario");
  if (typeof file !== "object") {
    return new Response("No file provided", { status: 400 });
  }
  try {
    const preBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(preBuffer);
    const fileName = await imageController.save(buffer);
    const response = await Banners.create({
      descripcion,
      mostrar,
      url: urlC,
      idUsuario,
      imagen: `${url.origin}/uploads/banners${fileName}`
    });
    return responseAsJson(response);
  } catch (error) {
    return new Response(
      JSON.stringify({ msg: "Error al subir imagen", error }),
      { status: 400 }
    );
  }
};
const DELETE = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);
  try {
    await imageController.deleteFile(search.fileName);
    return responseAsJson({ msg: "Eliminado correctamente" });
  } catch (error) {
    return responseAsJson({ msg: "Error eliminando imagen" }, {}, 400);
  }
};
const PUT = async ({ request }) => {
  const { idbanner, ...body } = await request.json();
  try {
    await controller.setModel(Banners).setWhereFilters({ idbanner }).setBody(body).getResult().update();
    return responseAsJson({});
  } catch (error) {
    return responseAsJson({ msg: "Error al actualizar ", error }, {}, 401);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
