import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { d as Miembros, C as Contactos, P as Proyectos, s as sequelize, e as Publicaciones } from '../../chunks/index_CM2BeHHC.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_Cv7uo8Sa.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url, locals }) => {
  const search = searchParamsToObject(url.searchParams);
  const controller = new ControllerBuilder();
  try {
    if (search.idmiembro) {
      let proyectos = null;
      let publicaciones = null;
      const miembro = await controller.setModel(Miembros).setWhereFilters({
        idmiembro: search.idmiembro
      }).setIncludedModels([
        {
          model: Contactos,
          required: false,
          attributes: ["tipo", "url"]
        }
      ]).setAttributes({
        exclude: locals.user ? [] : ["idUsuario", "createdAt", "updatedAt"]
      }).getResult().getOne();
      if (search.includeProyectos === "true" && miembro) {
        proyectos = await controller.setModel(Proyectos).setWhereFilters({
          visible: true,
          [controller.Op.or]: [
            { director: search.idmiembro },
            // Condición para la columna director
            {
              idproyecto: {
                [controller.Op.in]: sequelize.literal(
                  `(SELECT idproyecto FROM proyectos_has_miembros WHERE idmiembro = :idmiembro)`
                )
              }
              // Subconsulta segura usando reemplazos
            }
          ]
        }).setIncludedModels([
          {
            model: Miembros,
            attributes: [
              "nombreCompleto",
              "nombre",
              "apepat",
              "apemat",
              "idmiembro"
            ],
            as: "miembros_proyecto",
            through: { attributes: [] }
          },
          {
            model: Miembros,
            as: "director_proyecto",
            attributes: [
              "nombreCompleto",
              "nombre",
              "apepat",
              "apemat",
              "idmiembro"
            ]
          }
        ]).setOrderFilters([["fechaTermino", "DESC"]]).setReplacements({ idmiembro: search.idmiembro }).getResult().getAll();
      }
      if (search.includePublicaciones === "true" && miembro) {
        publicaciones = await controller.setModel(Publicaciones).setWhereFilters({
          visible: true,
          idpublicacion: {
            [controller.Op.in]: sequelize.literal(
              `(SELECT idpublicacion FROM publicaciones_has_miembros WHERE idmiembro = :idmiembro)`
            )
          }
        }).setIncludedModels([
          {
            model: Miembros,
            attributes: [
              "nombreCompleto",
              "nombre",
              "apepat",
              "apemat",
              "idmiembro"
            ],
            as: "miembros_publicacion",
            through: { attributes: [] }
          }
        ]).setOrderFilters([["year", "DESC"]]).setReplacements({ idmiembro: search.idmiembro }).getResult().getAll();
      }
      return responseAsJson({
        ...miembro?.toJSON(),
        ...proyectos && { proyectos },
        ...publicaciones && { publicaciones }
      });
    }
    const response = await controller.setModel(Miembros).setWhereFilters({
      ...search.colaborador === "true" && { colaborador: true },
      ...search.colaborador === "false" && { colaborador: false }
    }).setIncludedModels([
      ...search.includeProyectos === "true" ? [{ model: Proyectos }] : []
    ]).getResult().getAll();
    return responseAsJson(response);
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
