import { b as Blog, E as Etiquetas } from '../../chunks/index_BkSKolFm.mjs';
import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CY4cSyXV.mjs';

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
