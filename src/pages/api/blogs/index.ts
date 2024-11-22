import type { APIRoute } from "astro";
import { Blog, Etiquetas } from "@model";
import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";

export const GET: APIRoute = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);

  try {
    if (search.idblog) {
      const response = await Blog.findOne({
        where: { idblog: search.idblog },
        include: [
          { model: Etiquetas, required: false, through: { attributes: [] } },
        ],
      });
      return responseAsJson(response);
    }

    const limit = Number(search?.limit ?? 10);
    const page = Math.max(1, Number(search?.page ?? 0));
    const offset = (page - 1) * limit;

    const response = await Blog.findAndCountAll({
      limit,
      offset,
      ...(search.status && { where: { estatus: search.status } }),
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
