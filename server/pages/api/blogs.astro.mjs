import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { b as Blog, E as Etiquetas, s as sequelize, c as EtiquetasBlogs } from '../../chunks/index_K0Lb7C1D.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_BlgJlZuX.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BnjbwtTW.mjs';

const controller = new ControllerBuilder();
const GET = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);
  try {
    if (search.idblog) {
      const response2 = await Blog.findOne({
        where: { idblog: search.idblog },
        include: [
          { model: Etiquetas, required: false, through: { attributes: [] } }
        ]
      });
      return responseAsJson(response2);
    }
    const limit = Number(search?.limit ?? 10);
    const page = Math.max(1, Number(search?.page ?? 0));
    const offset = (page - 1) * limit;
    const response = await Blog.findAndCountAll({
      limit,
      offset,
      ...search.status && { where: { estatus: search.status } }
    });
    const totalPages = Math.ceil(response.count / limit);
    return responseAsJson(
      { blogs: response.rows, totalPages, currentPage: page },
      { count: true, pages: true }
    );
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};
const POST = async ({ request }) => {
  const {
    titulo,
    contenido,
    fecha,
    usuarios_id,
    etiquetas,
    estatus,
    imagen
  } = await request.json();
  try {
    const response = await sequelize.transaction(async (t) => {
      const articuloResult = await Blog.create(
        {
          titulo,
          contenido,
          fecha,
          usuarios_id,
          estatus,
          fechavigente: fecha,
          imagen
        },
        { transaction: t }
      );
      const etiquetasResult = await EtiquetasBlogs.bulkCreate(
        etiquetas.map((el) => ({
          idblog: Number(articuloResult.dataValues.idblog),
          idetiqueta: el.id
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
const PUT = async ({ request }) => {
  const { idblog, ...body } = await request.json();
  try {
    await controller.setModel(Blog).setWhereFilters({ idblog }).setBody(body).getResult().update();
    return responseAsJson({ msg: "Actualizado correctamente" });
  } catch (error) {
    return responseAsJson({ msg: "Error al actualizar" }, {}, 401);
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
