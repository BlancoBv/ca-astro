/* empty css                                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_DmhofpIV.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_CYu2Rs5Q.mjs';
import { $ as $$CardBlog } from '../../../chunks/CardBlog_B2WtcCG0.mjs';
export { renderers } from '../../../renderers.mjs';

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Secciones con la etiqueta" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full prose max-w-full p-4"> <h1 class="flex items-center gap-4 flex-wrap">
Eventos con la etiqueta:
<div class="badge badge-accent badge-outline not-prose h-7 flex gap-1"> <i class="bi bi-tag-fill"></i> ${response.response.nombre} </div> </h1> <main class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${response.response.blogs.map((el) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "titulo": el.titulo, "imagen": el.imagen, "id": el.idblog, "fecha": el.fecha })}`)} </main> </div> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/content/etiqueta/[etiqueta].astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/content/etiqueta/[etiqueta].astro";
const $$url = "/content/etiqueta/[etiqueta]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$etiqueta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
