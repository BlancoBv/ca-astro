import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { A as Articulo, E as Etiquetas, s as sequelize, a as EtiquetasArticulos } from '../../chunks/index_BkSKolFm.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CY4cSyXV.mjs';

const GET = async ({ url, locals }) => {
  console.log(locals);
  const search = searchParamsToObject(url.searchParams);
  try {
    if (search.ruta !== void 0) {
      const response2 = await Articulo.findOne({
        where: { ruta: search.ruta },
        include: [
          {
            model: Etiquetas,
            required: false,
            attributes: ["nombre", "idetiqueta"]
          }
        ],
        attributes: { exclude: ["idUsuario"] }
      });
      if (!response2) {
        throw new Error("No encontrado");
      }
      return responseAsJson(response2);
    }
    const response = await Articulo.findAll();
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 400);
  }
};
const POST = async ({ request }) => {
  const {
    titulo,
    contenido,
    fecha,
    ruta,
    idUsuario,
    etiquetas
  } = await request.json();
  try {
    const response = await sequelize.transaction(async (t) => {
      const articuloResult = await Articulo.create(
        {
          titulo,
          contenido,
          fecha,
          ruta,
          idUsuario
        },
        { transaction: t }
      );
      const etiquetasResult = await EtiquetasArticulos.bulkCreate(
        etiquetas.map((el) => ({
          articuloIdarticulo: Number(articuloResult.dataValues.idarticulo),
          etiquetaIdetiqueta: el.id
        })),
        { transaction: t }
      );
      return { articuloResult, etiquetasResult };
    });
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson({ error }, {}, 400);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
