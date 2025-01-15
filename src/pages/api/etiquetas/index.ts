import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";

import { Articulo, Blog, Etiquetas } from "@model";

import type { APIRoute } from "astro";
export const GET: APIRoute = async ({ url, locals }) => {
  const search = searchParamsToObject(url.searchParams);
  try {
    if (search.idetiqueta) {
      const response = await Etiquetas.findOne({
        where: { idetiqueta: search.idetiqueta },
        include: [
          ...(search.includeArticulos === "true"
            ? [
                {
                  model: Articulo,
                  attributes: ["ruta", "titulo", "fecha", "idarticulo"],
                  through: {
                    attributes: [],
                  },
                },
              ]
            : []),
          ...(search.includeBlogs === "true"
            ? [
                {
                  model: Blog,
                  attributes: {
                    exclude: locals.user
                      ? []
                      : [
                          "usuarios_id",
                          "fechavigente",
                          "createdAt",
                          "updatedAt",
                        ],
                  },
                  through: {
                    attributes: [],
                  },
                },
              ]
            : []),
        ],
        attributes: {
          exclude: locals.user ? [] : ["idUsuario", "createdAt", "updatedAt"],
        },
      });
      return responseAsJson(response);
    }

    const response = await Etiquetas.findAll({ include: Articulo });
    return responseAsJson(response);
  } catch (error) {
    console.log(error);

    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};

export const POST: APIRoute = async ({ request }) => {
  const { nombre, idUsuario }: { nombre: string; idUsuario: number } =
    await request.json();
  try {
    const response = await Etiquetas.create({ nombre, idUsuario });
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};

export const PUT: APIRoute = async ({ request }) => {
  const { nombre, idetiqueta }: { nombre: string; idetiqueta: number } =
    await request.json();

  try {
    if (!idetiqueta) {
      throw new Error("Sin id");
    }

    const response = await Etiquetas.update(
      { nombre },
      { where: { idetiqueta: idetiqueta } }
    );
    return responseAsJson(response);
  } catch (error) {
    console.log(error);

    return responseAsJson(error as any, { sendAsMessage: true }, 404);
  }
};
