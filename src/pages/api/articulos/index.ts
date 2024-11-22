import type { APIRoute } from "astro";
import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import { sequelize } from "@db";
import { EtiquetasArticulos, Etiquetas, Articulo } from "@model";

export const GET: APIRoute = async ({ url, locals }) => {
  console.log(locals);

  const search = searchParamsToObject(url.searchParams);

  try {
    if (search.ruta !== undefined) {
      const response = await Articulo.findOne({
        where: { ruta: search.ruta },
        include: [
          {
            model: Etiquetas,
            required: false,
            attributes: ["nombre", "idetiqueta"],
          },
        ],
        attributes: { exclude: ["idUsuario"] },
      });
      if (!response) {
        throw new Error("No encontrado");
      }
      return responseAsJson(response);
    }

    const response = await Articulo.findAll();

    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 400);
  }
};

export const POST: APIRoute = async ({ request }) => {
  const {
    titulo,
    contenido,
    fecha,
    ruta,
    idUsuario,
    etiquetas,
  }: {
    titulo: string;
    contenido: string;
    fecha: string;
    ruta: string;
    idUsuario: number;
    etiquetas: { id: number; label: string }[];
  } = await request.json();

  try {
    const response = await sequelize.transaction(async (t) => {
      const articuloResult = await Articulo.create(
        {
          titulo,
          contenido,
          fecha,
          ruta,
          idUsuario,
        },
        { transaction: t }
      );

      const etiquetasResult = await EtiquetasArticulos.bulkCreate(
        etiquetas.map((el) => ({
          articuloIdarticulo: Number(articuloResult.dataValues.idarticulo),
          etiquetaIdetiqueta: el.id,
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
