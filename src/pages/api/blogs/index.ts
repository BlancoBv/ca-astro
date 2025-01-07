import type { APIRoute } from "astro";
import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import { EtiquetasBlogs, Etiquetas, Blog } from "@model";
import { sequelize } from "@db";
import { ControllerBuilder } from "src/controllers/builder";

const controller = new ControllerBuilder();

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

export const POST: APIRoute = async ({ request }) => {
  const {
    titulo,
    contenido,
    fecha,
    usuarios_id,
    etiquetas,
    estatus,
    imagen,
  }: {
    titulo: string;
    contenido: string;
    fecha: string;
    usuarios_id: number;
    etiquetas: { id: number; label: string }[];
    estatus: string;
    imagen: string;
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
          imagen,
        },
        { transaction: t }
      );

      const etiquetasResult = await EtiquetasBlogs.bulkCreate(
        etiquetas.map((el) => ({
          idblog: Number(articuloResult.dataValues.idblog),
          idetiqueta: el.id,
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

export const PUT: APIRoute = async ({ request }) => {
  const { idblog, ...body } = await request.json();

  try {
    await controller
      .setModel(Blog)
      .setWhereFilters({ idblog })
      .setBody(body)
      .getResult()
      .update();

    return responseAsJson({ msg: "Actualizado correctamente" });
  } catch (error) {
    return responseAsJson({ msg: "Error al actualizar" }, {}, 401);
  }
};
