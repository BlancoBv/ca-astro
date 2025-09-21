import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_PXGLLX5r.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_DeXEjhey.mjs';
import { $ as $$CardBlog2 } from '../../../../chunks/CardBlog2_J_SNEbue.mjs';
import { $ as $$Breadcumb } from '../../../../chunks/Breadcumb_S2ffQydz.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$etiqueta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$etiqueta;
  const { etiqueta } = Astro2.params;
  const response = await fetch(
    `http://localhost:4321/api/etiquetas?idetiqueta=${etiqueta}&includeBlogs=true`
  ).then((res) => res.json());
  if (!response) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Secciones con la etiqueta" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full prose max-w-full p-4"> ${renderComponent($$result2, "Breadcumb", $$Breadcumb, { "items": [
    { name: "Eventos", url: "/content/evento" },
    { name: response.response.nombre }
  ] })} <h1 class="flex items-center gap-4 flex-wrap">
Eventos con la etiqueta:
<div class="badge badge-accent badge-outline not-prose h-7 flex gap-1"> <i class="bi bi-tag-fill"></i> ${response.response.nombre} </div> </h1> <div class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${response.response.blogs.map((el) => renderTemplate`${renderComponent($$result2, "CardBlog2", $$CardBlog2, { "titulo": el.titulo, "imagen": el.imagen, "id": el.idblog, "fecha": el.fecha })}`)} </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/content/evento/etiqueta/[etiqueta].astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/content/evento/etiqueta/[etiqueta].astro";
const $$url = "/content/evento/etiqueta/[etiqueta]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$etiqueta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
