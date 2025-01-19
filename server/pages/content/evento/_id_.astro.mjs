/* empty css                                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as renderTransition, u as unescapeHTML } from '../../../chunks/astro/server_DmhofpIV.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_ByZJSsIi.mjs';
import { $ as $$EtiquetasHeading, a as $$BadgeEtiquetas } from '../../../chunks/EtiquetasHeading_Cp6fBb2Y.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_t6jYWpBq.mjs';
import { f as formatDate } from '../../../chunks/format_Cetxi1N9.mjs';
/* empty css                                      */
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const blog = await fetch(
    `http://localhost:4321/api/blogs?idblog=${id}`
  ).then((res) => res.json());
  if (!blog) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blog.response?.titulo ?? "", "data-astro-cid-m7vt4mq7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4" data-astro-cid-m7vt4mq7> <h1 data-astro-cid-m7vt4mq7>${blog.response?.titulo}</h1> ${renderComponent($$result2, "Image", $$Image, { "class": "object-contain lg:object-cover aspect-video h-96 lg:h-[500px] w-full revealing-image rounded-box", "src": blog.response.imagen, "width": 100, "height": 100, "loading": "lazy", "alt": blog.response.titulo, "data-astro-cid-m7vt4mq7": true, "data-astro-transition-scope": renderTransition($$result2, "t6l4l4nc", "", `img-${id}`) })} <span class="font-bold flex gap-2" data-astro-cid-m7vt4mq7> <i class="bi bi-calendar-fill" data-astro-cid-m7vt4mq7></i> ${formatDate(blog.response.fecha, "LL")}.</span> <div data-astro-cid-m7vt4mq7>${unescapeHTML(blog.response?.contenido)}</div> ${renderComponent($$result2, "EtiquetasHeading", $$EtiquetasHeading, { "data-astro-cid-m7vt4mq7": true })} <div class="flex gap-4 flex-wrap not-prose" data-astro-cid-m7vt4mq7> ${blog.response?.etiquetas.map((el) => renderTemplate`${renderComponent($$result2, "BadgeEtiquetas", $$BadgeEtiquetas, { "nombre": el.nombre, "ruta": `/content/etiqueta/${el.idetiqueta}`, "data-astro-cid-m7vt4mq7": true })}`)} </div> </main> ` })} `;
}, "/home/blanco/Documentos/ca-astro/src/pages/content/evento/[id].astro", "self");

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/content/evento/[id].astro";
const $$url = "/content/evento/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
