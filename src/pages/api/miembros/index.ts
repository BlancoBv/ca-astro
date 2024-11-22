import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import { Contactos, Miembros, Proyectos } from "@model";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);
  try {
    if (search.idmiembro) {
      const miembro = await Miembros.findOne({
        where: {
          idmiembro: search.idmiembro,
        },
        include: [
          {
            model: Contactos,
            required: false,
            attributes: ["tipo", "url"],
          },
        ],
      });

      if (search.includeProyectos === "true" && miembro) {
        const proyectos = await Proyectos.findAll({
          where: { director: search.idmiembro },
          include: [
            {
              model: Miembros,
              attributes: ["nombreCompleto", "nombre", "apepat", "apemat"],
              through: { attributes: [] },
            },
          ],
        });

        return responseAsJson({
          ...miembro?.toJSON(),
          proyectos,
        });
      }
      return responseAsJson(miembro);
    }
    const response = await Miembros.findAll({
      where: {
        ...(search.colaborador === "true" && { colaborador: true }),
        ...(search.colaborador === "false" && { colaborador: false }),
      },
      include: [
        ...(search.includeProyectos === "true" ? [{ model: Proyectos }] : []),
      ],
    });
    return responseAsJson(response);
  } catch (error) {
    console.log(error);

    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};
