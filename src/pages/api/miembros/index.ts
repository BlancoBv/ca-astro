import { formatDate } from "@assets/format";
import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import { sequelize } from "@db";
import { Contactos, Miembros, Proyectos } from "@model";
import type { APIRoute } from "astro";
import { ControllerBuilder } from "src/controllers/builder";

export const GET: APIRoute = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);
  const controller = new ControllerBuilder();

  try {
    if (search.idmiembro) {
      /*  const miembro = await Miembros.findOne({
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
      }); */
      const miembro = await controller
        .setModel(Miembros)
        .setWhereFilters({
          idmiembro: search.idmiembro,
        })
        .setIncludedModels([
          {
            model: Contactos,
            required: false,
            attributes: ["tipo", "url"],
          },
        ])
        .getResult()
        .getOne();

      if (search.includeProyectos === "true" && miembro) {
        const proyectos = await controller
          .setModel(Proyectos)
          .setWhereFilters({
            [controller.Op.or]: [
              { director: search.idmiembro }, // Condición para la columna director
              {
                idproyecto: {
                  [controller.Op.in]: sequelize.literal(
                    `(SELECT idproyecto FROM proyectos_has_miembros WHERE idmiembro = :idmiembro)`
                  ),
                }, // Subconsulta segura usando reemplazos
              },
            ],
          })
          .setIncludedModels([
            {
              model: Miembros,
              attributes: [
                "nombreCompleto",
                "nombre",
                "apepat",
                "apemat",
                "idmiembro",
              ],
              as: "miembros_proyecto",
              through: { attributes: [] },
            },
            {
              model: Miembros,
              as: "director_proyecto",
              attributes: [
                "nombreCompleto",
                "nombre",
                "apepat",
                "apemat",
                "idmiembro",
              ],
            },
          ])
          .setReplacements({ idmiembro: search.idmiembro })
          .getResult()
          .getAll();

        /*           if (search.includePubs ==="true" && miembro){
            const pubs= await controller.setModel()
          } */

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
