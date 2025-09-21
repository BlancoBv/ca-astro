import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../../chunks/astro/server_PXGLLX5r.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_DeXEjhey.mjs';
import { f as formatDate } from '../../../../chunks/format_CRU5uAFP.mjs';
import { $ as $$Breadcumb } from '../../../../chunks/Breadcumb_S2ffQydz.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$etiqueta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$etiqueta;
  const { etiqueta } = Astro2.params;
  const response = await fetch(
    `http://localhost:4321/api/etiquetas?idetiqueta=${etiqueta}&includeArticulos=true`
  ).then((res) => res.json());
  if (!response) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Secciones con la etiqueta" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full prose max-w-full p-4"> ${renderComponent($$result2, "Breadcumb", $$Breadcumb, { "items": [{ name: "Secciones" }, { name: response.response.nombre }] })} <h1 class="flex items-center gap-4 flex-wrap">
Contenido del sitio con la etiqueta:
<div class="badge badge-accent badge-outline not-prose h-7 flex gap-1"> <i class="bi bi-tag-fill"></i> ${response.response.nombre} </div> </h1> <div class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${response.response.articulos.map((el) => renderTemplate`<div class="card bg-base-100 max-w-screen-sm shadow-xl"> <div class="card-body"> <h2 class="card-title">${el.titulo}</h2> <p>Creado el ${formatDate(el.createdAt, "LLL")}.</p> <div class="card-actions justify-end"> <a class="btn btn-primary"${addAttribute(`/${el.ruta}`, "href")}>
Ver <i class="bi bi-box-arrow-up-right"></i> </a> </div> </div> </div>`)} </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/content/articulos/etiqueta/[etiqueta].astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/content/articulos/etiqueta/[etiqueta].astro";
const $$url = "/content/articulos/etiqueta/[etiqueta]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$etiqueta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
