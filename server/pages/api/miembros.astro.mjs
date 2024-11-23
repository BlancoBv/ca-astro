import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { s as searchParamsToObject } from '../../chunks/searchParamsToObject_Dwl9vmnE.mjs';
import { c as Miembros, C as Contactos, P as Proyectos } from '../../chunks/index_BkSKolFm.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CY4cSyXV.mjs';

const GET = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);
  try {
    if (search.idmiembro) {
      const miembro = await Miembros.findOne({
        where: {
          idmiembro: search.idmiembro
        },
        include: [
          {
            model: Contactos,
            required: false,
            attributes: ["tipo", "url"]
          }
        ]
      });
      if (search.includeProyectos === "true" && miembro) {
        const proyectos = await Proyectos.findAll({
          where: { director: search.idmiembro },
          include: [
            {
              model: Miembros,
              attributes: ["nombreCompleto", "nombre", "apepat", "apemat"],
              through: { attributes: [] }
            }
          ]
        });
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
