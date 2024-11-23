import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { I as ImageController } from '../../chunks/ImageController_C-fX2tjk.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CY4cSyXV.mjs';

const imageController = new ImageController("images");
const GET = async ({ url }) => {
  try {
    const files = await imageController.readFiles(url.origin);
    return new Response(JSON.stringify({ files }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error retrieving files", details: error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
const POST = async ({ request }) => {
  const body = await request.formData();
  const file = body.get("imagen");
  if (typeof file !== "object") {
    return new Response("No file provided", { status: 400 });
  }
  try {
    const preBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(preBuffer);
    await imageController.save(buffer);
    return responseAsJson({ msg: "Imagen subida correctamente" });
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
