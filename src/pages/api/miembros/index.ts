import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import { sequelize } from "@db";
import { Contactos, Miembros, Proyectos, Publicaciones } from "@model";
import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { ControllerBuilder } from "src/controllers/builder";

const querysObject = z.object({
  uuid: z
    .string()
    .refine((val) => {
      const regExp = new RegExp(/\D+/);
      return regExp.test(val);
    })
    .optional(),
  colaborador: z.enum(["true", "false"]).optional(),
});

export const GET: APIRoute = async ({ url, locals }) => {
  const search = searchParamsToObject(url.searchParams);
  const controller = new ControllerBuilder();

  try {
    const querys = querysObject.safeParse(search);
    if (!querys.success) {
      throw querys.error;
    }

    if (querys.data.uuid) {
      let proyectos: any[] | null = null;
      let publicaciones: any[] | null = null;
      const miembro = await controller
        .setModel(Miembros)
        .setWhereFilters({
          uuid: search.uuid,
        })
        .setIncludedModels([
          {
            model: Contactos,
            required: false,
            attributes: ["tipo", "url"],
          },
        ])
        .setAttributes({
          exclude: locals.user ? [] : ["idUsuario", "createdAt", "updatedAt"],
        })
        .getResult()
        .getOne();

      if (search.includeProyectos === "true" && miembro) {
        proyectos = await controller
          .setModel(Proyectos)
          .setWhereFilters({
            visible: true,
            [controller.Op.or]: [
              { director: miembro!.idmiembro }, // Condición para la columna director
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
          .setOrderFilters([["fechaTermino", "DESC"]])
          .setReplacements({ idmiembro: miembro.idmiembro })
          .getResult()
          .getAll();
      }
      if (search.includePublicaciones === "true" && miembro) {
        publicaciones = await controller
          .setModel(Publicaciones)
          .setWhereFilters({
            visible: true,
            idpublicacion: {
              [controller.Op.in]: sequelize.literal(
                `(SELECT idpublicacion FROM publicaciones_has_miembros WHERE idmiembro = :idmiembro)`
              ),
            },
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
              as: "miembros_publicacion",
              through: { attributes: [] },
            },
          ])
          .setOrderFilters([["year", "DESC"]])
          .setReplacements({ idmiembro: miembro.idmiembro })
          .getResult()
          .getAll();
      }

      return responseAsJson({
        ...miembro?.toJSON(),
        ...(proyectos && { proyectos }),
        ...(publicaciones && { publicaciones }),
      });
    }

    const response = await controller
      .setModel(Miembros)
      .setWhereFilters({
        ...(search.colaborador === "true" && { colaborador: true }),
        ...(search.colaborador === "false" && { colaborador: false }),
      })
      .setIncludedModels([
        ...(search.includeProyectos === "true" ? [{ model: Proyectos }] : []),
      ])
      .getResult()
      .getAll(); /* Miembros.findAll({
      where: {
        ...(search.colaborador === "true" && { colaborador: true }),
        ...(search.colaborador === "false" && { colaborador: false }),
      },
      include: [
        ...(search.includeProyectos === "true" ? [{ model: Proyectos }] : []),
      ],
    }); */
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};
