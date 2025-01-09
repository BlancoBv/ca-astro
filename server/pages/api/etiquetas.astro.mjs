import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { E as Etiquetas, A as Articulo, b as Blog } from '../../chunks/index_DSuUdubB.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_Ciejw6DY.mjs';

const GET = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);
  try {
    if (search.idetiqueta) {
      const response2 = await Etiquetas.findOne({
        where: { idetiqueta: search.idetiqueta },
        include: [
          ...search.includeArticulos === "true" ? [
            {
              model: Articulo,
              attributes: [
                "ruta",
                "titulo",
                "fecha",
                "idarticulo",
                "createdAt"
              ],
              through: {
                attributes: []
              }
            }
          ] : [],
          ...search.includeBlogs === "true" ? [
            {
              model: Blog,
              through: {
                attributes: []
              }
            }
          ] : []
        ]
      });
      return responseAsJson(response2);
    }
    const response = await Etiquetas.findAll({ include: Articulo });
    return responseAsJson(response);
  } catch (error) {
    console.log(error);
    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};
const POST = async ({ request }) => {
  const { nombre, idUsuario } = await request.json();
  try {
    const response = await Etiquetas.create({ nombre, idUsuario });
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};
const PUT = async ({ request }) => {
  const { nombre, idetiqueta } = await request.json();
  try {
    if (!idetiqueta) {
      throw new Error("Sin id");
    }
    const response = await Etiquetas.update(
      { nombre },
      { where: { idetiqueta } }
    );
    return responseAsJson(response);
  } catch (error) {
    console.log(error);
    return responseAsJson(error, { sendAsMessage: true }, 404);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
