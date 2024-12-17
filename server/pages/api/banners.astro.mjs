import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { I as ImageController } from '../../chunks/ImageController_D96zdncs.mjs';
import { B as Banners } from '../../chunks/index_DBE-PR5w.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BuVY0NLu.mjs';

const imageController = new ImageController("banners");
const GET = async () => {
  try {
    const response = await Banners.findAll({ where: { mostrar: true } });
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
