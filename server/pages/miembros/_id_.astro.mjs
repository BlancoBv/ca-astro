/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BLMGylKI.mjs';
import { $ as $$Layout, f as formatDate } from '../../chunks/Layout_DfQEY_hd.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_C3jSEVob.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_Dy1BIr2k.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const miembro = await fetch(
    `http://localhost:4321/api/miembros?idmiembro=${id}&includeProyectos=true`
  ).then((res) => res.json());
  const getMiembro = async (id2) => {
    if (id2) {
      const response = await fetch(
        `http://localhost:4321/api/miembros?idmiembro=${id2}`
      ).then((res) => res.json());
      return response.response.nombreCompleto;
    }
    return "";
  };
  const redesSocialesIcon = {
    facebook: "bi bi-facebook",
    x: "bi bi-twitter-x",
    correo: "bi bi-envelope-fill",
    linkedin: "bi bi-linkedin",
    otro: "bi bi-link-45deg"
  };
  if (!miembro || miembro.hasOwnProperty("msg")) {
    return Astro2.redirect("/404");
  }
  const getCollabs = (element) => {
    const formatter = new Intl.ListFormat("es", {
      type: "conjunction",
      style: "long"
    });
    const miembrosF = [];
    element.miembros.forEach((el) => {
      miembrosF.push(el.nombreCompleto);
    });
    if (element.otrosColaboradores) {
      const otherCollabsArr = element.otrosColaboradores.split(",");
      miembrosF.push(...otherCollabsArr);
    }
    if (miembrosF.length < 1) {
      return "----";
    }
    return formatter.format(miembrosF);
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": miembro.response.nombreCompleto }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <div class="stats md:grid-cols-2 shadow stats-vertical md:stats-horizontal w-full not-prose min-h-40"> <div class="stat flex flex-col md:inline-grid place-items-center place"> <div class="stat-figure text-secondary size-40"> ${miembro.response?.imgPerfil && renderTemplate`<div class="avatar size-full"> <div class="rounded-full"> ${renderComponent($$result2, "Image", $$Image, { "src": miembro.response.imgPerfil, "alt": miembro.response.nombreCompleto, "class": "aspect-square", "width": 100, "height": 100, "loading": "eager" })} </div> </div>`} ${!miembro.response?.imgPerfil && renderTemplate`<div class="avatar placeholder size-full"> <div class="bg-neutral text-neutral-content rounded-full"> <span class="text-3xl"> ${miembro.response.nombreCompleto.charAt(0)} </span> </div> </div>`} </div> <div class="stat-value text-wrap text-center"> ${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto} </div> <div class="stat-title">${miembro.response.puesto.toUpperCase()}</div> <div class="stat-desc text-wrap"> ${miembro.response.tipoMiembro.toUpperCase()} </div> </div> <div class="stat place-items-center"> <div class="stat-figure text-primary"> <i class="bi bi-share-fill text-2xl"></i> </div> <div class="stat-title">Información de contacto</div> <div class="stat-value text-base-content flex flex-wrap gap-4 text-wrap"> ${miembro.response.contactos.length > 0 && miembro.response.contactos.map((el) => renderTemplate`<a class="hover:text-primary hover:scale-105 duration-100 ease-in"${addAttribute(`${el.tipo === "correo" ? "mailto:" : ""}${el.url}`, "href")} target="_blank"> <i${addAttribute(redesSocialesIcon[el.tipo], "class")}></i> </a>`)} ${miembro.response.contactos.length < 1 && renderTemplate`<span>Sin información de contacto.</span>`} </div> </div> </div> <p class="text-justify">${miembro.response.resumen}</p> <h2 class="mt-0">Proyectos</h2> <div class="overflow-x-auto"> <table class="table table-zebra text-balance not-prose"> <!-- head --> <thead> <tr> <th class="w-40">Clave</th> <th>Proyecto</th> <th>Duración</th> <th>Director</th> <th>Colaboradores</th> <th>Tipo</th> </tr> </thead> <tbody> ${miembro.response.proyectos.length > 0 && miembro.response.proyectos.map((el) => renderTemplate`<tr> <th>${el.clave}</th> <td>${el.titulo}</td> <td> ${`${formatDate(el.fechaInicio, "LL")} a ${formatDate(el.fechaTermino, "LL")}`}${" "} </td> <td>${getMiembro(el.director)}</td> <td>${getCollabs(el) ?? "---"}</td> <td>${el.tipo.toUpperCase()}</td> </tr>`)} ${miembro.response.proyectos.length < 1 && renderTemplate`<tr> <th colspan="6" class="text-center text-xl">
Sin datos.
</th> </tr>`} </tbody> </table> </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/miembros/[id].astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/miembros/[id].astro";
const $$url = "/miembros/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
