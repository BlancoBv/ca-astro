/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DmhofpIV.mjs';
import { f as formatDate } from '../../chunks/format_CRU5uAFP.mjs';
import { L as ListaProyectosMiembros } from '../../chunks/ListaProyectosMiembros_TlUWCWYL.mjs';
import { L as ListaPublicacionesMiembros } from '../../chunks/ListaPublicacionesMiembros_CcFM-53z.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CYu2Rs5Q.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_t6jYWpBq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const miembro = await fetch(
    `http://localhost:4321/api/miembros?idmiembro=${id}&includeProyectos=true&includePublicaciones=true`
  ).then((res) => res.json());
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
  miembro.response.proyectos.forEach((el) => {
    el.fechaInicio = formatDate(el.fechaInicio, "LL");
    el.fechaTermino = formatDate(el.fechaTermino, "LL");
    el.fechaInicioEntrega = el.fechaInicioEntrega ? formatDate(el.fechaInicioEntrega, "LL") : el.fechaInicioEntrega;
    el.fechaTerminoEntrega = el.fechaTerminoEntrega ? formatDate(el.fechaTerminoEntrega, "LL") : el.fechaTerminoEntrega;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <div class="stats md:grid-cols-2 shadow stats-vertical md:stats-horizontal w-full not-prose min-h-40"> <div class="stat flex flex-col md:inline-grid place-items-center place"> <div class="stat-figure text-secondary size-40"> ${miembro.response?.imgPerfil && renderTemplate`<div class="avatar size-full"> <div class="rounded-full"> ${renderComponent($$result2, "Image", $$Image, { "src": miembro.response.imgPerfil, "alt": miembro.response.nombreCompleto, "class": "aspect-square", "width": 100, "height": 100, "loading": "eager" })} </div> </div>`} ${!miembro.response?.imgPerfil && renderTemplate`<div class="avatar placeholder size-full"> <div class="bg-neutral text-neutral-content rounded-full"> <span class="text-3xl"> ${miembro.response.nombreCompleto.charAt(0)} </span> </div> </div>`} </div> <div class="stat-value text-wrap text-center"> ${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto} </div> <div class="stat-title">${miembro.response.puesto.toUpperCase()}</div> <div class="stat-desc text-wrap"> ${miembro.response.tipoMiembro.toUpperCase()} </div> </div> <div class="stat place-items-center"> <div class="stat-figure text-secondary"> <i class="bi bi-share-fill text-2xl"></i> </div> <div class="stat-title">Enlaces de contacto</div> <div class="stat-value text-base-content flex flex-wrap gap-4 text-wrap"> ${miembro.response.contactos.length > 0 && miembro.response.contactos.map((el) => renderTemplate`<a class="hover:text-primary hover:scale-105 duration-100 ease-in"${addAttribute(`${el.tipo === "correo" ? "mailto:" : ""}${el.url}`, "href")}${addAttribute(el.tipo, "aria-label")} target="_blank"> <i${addAttribute(redesSocialesIcon[el.tipo], "class")}></i> </a>`)} ${miembro.response.contactos.length < 1 && renderTemplate`<span>Sin información de contacto.</span>`} </div> </div> </div> <p>${miembro.response.resumen}</p> <h2 class="mt-0">Proyectos</h2> ${renderComponent($$result2, "ListaProyectosMiembros", ListaProyectosMiembros, { "data": miembro.response.proyectos, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/listas/ListaProyectosMiembros.vue", "client:component-export": "default" })} <h2 class="mt-0">Publicaciones</h2> ${renderComponent($$result2, "ListaPublicacionesMiembros", ListaPublicacionesMiembros, { "data": miembro.response.publicaciones, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/listas/ListaPublicacionesMiembros.vue", "client:component-export": "default" })} </main> ` })}`;
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
