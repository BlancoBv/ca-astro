import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { c as Miembros, C as Contactos, P as Proyectos, s as sequelize } from '../../chunks/index_lYbwe5rL.mjs';
import { C as ControllerBuilder } from '../../chunks/builder_DAop8mSr.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_Dy1BIr2k.mjs';

const GET = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);
  const controller = new ControllerBuilder();
  try {
    if (search.idmiembro) {
      const miembro = await controller.setModel(Miembros).setWhereFilters({
        idmiembro: search.idmiembro
      }).setIncludedModels([
        {
          model: Contactos,
          required: false,
          attributes: ["tipo", "url"]
        }
      ]).getResult().getOne();
      if (search.includeProyectos === "true" && miembro) {
        const proyectos = await controller.setModel(Proyectos).setWhereFilters({
          [controller.Op.or]: [
            { director: search.idmiembro },
            // Condición para la columna director
            /* {
              "$miembros.idmiembro$": search.idmiembro, // Condición para la tabla de unión
            }, */
            /*   {
              idproyecto: {
                [Op.in]: sequelize.literal(
                  `(SELECT idproyecto FROM proyectos_has_miembros WHERE idmiembro = ${search.idmiembro})`
                ),
              }, // Filtrar proyectos relacionados al miembro en la tabla de unión
            }, */
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
            through: { attributes: [] }
          }
        ]).setReplacements({ idmiembro: search.idmiembro }).getResult().getAll();
        return responseAsJson({
          ...miembro?.toJSON(),
          proyectos
        });
      }
      return responseAsJson(miembro);
    }
    const response = await Miembros.findAll({
      where: {
        ...search.colaborador === "true" && { colaborador: true },
        ...search.colaborador === "false" && { colaborador: false }
      },
      include: [
        ...search.includeProyectos === "true" ? [{ model: Proyectos }] : []
      ]
    });
    return responseAsJson(response);
  } catch (error) {
    console.log(error);
    return responseAsJson(null, { sendAsMessage: true }, 404);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
