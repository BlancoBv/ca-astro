/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, e as renderTransition, u as unescapeHTML } from '../../chunks/astro/server_BFGjhIM4.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B1i9773a.mjs';
import { $ as $$EtiquetasHeading, a as $$BadgeEtiquetas } from '../../chunks/EtiquetasHeading_DS9r3wQ_.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BZO7N-6B.mjs';
/* empty css                                   */
/* empty css                                    */
export { r as renderers } from '../../chunks/_@astro-renderers_CY4cSyXV.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { origin } = Astro2.url;
  const { id } = Astro2.params;
  const blog = await fetch(`${origin}/api/blogs?idblog=${id}`).then(
    (res) => res.json()
  );
  if (!blog) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blog.response.titulo, "data-astro-cid-rlwzeo4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4" data-astro-cid-rlwzeo4r> <h1 data-astro-cid-rlwzeo4r>${blog.response.titulo}</h1> ${renderComponent($$result2, "Image", $$Image, { "class": "object-contain lg:object-cover aspect-video h-96 lg:h-[500px] w-full revealing-image rounded-box", "src": blog.response.imagen, "width": 100, "height": 100, "loading": "lazy", "alt": blog.response.titulo, "data-astro-cid-rlwzeo4r": true, "data-astro-transition-scope": renderTransition($$result2, "la2qhzgk", "", `img-${id}`) })} <div data-astro-cid-rlwzeo4r>${unescapeHTML(blog.response.contenido)}</div> ${renderComponent($$result2, "EtiquetasHeading", $$EtiquetasHeading, { "data-astro-cid-rlwzeo4r": true })} <div class="flex gap-4 flex-wrap not-prose" data-astro-cid-rlwzeo4r> ${blog.response.etiquetas.map((el) => renderTemplate`${renderComponent($$result2, "BadgeEtiquetas", $$BadgeEtiquetas, { "nombre": el.nombre, "ruta": `/content/eventos/${el.idetiqueta}`, "data-astro-cid-rlwzeo4r": true })}`)} </div> </main> ` })} `;
}, "/home/blanco/Documentos/ca-astro/src/pages/content/[id].astro", "self");

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/content/[id].astro";
const $$url = "/content/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
