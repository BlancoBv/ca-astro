/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as renderTransition, u as unescapeHTML } from '../../chunks/astro/server_BYikK1dL.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DtO5PETH.mjs';
import { $ as $$EtiquetasHeading, a as $$BadgeEtiquetas } from '../../chunks/EtiquetasHeading_Dls-Ys2f.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Dp_aSPpe.mjs';
/* empty css                                   */
/* empty css                                    */
export { r as renderers } from '../../chunks/_@astro-renderers_BnjbwtTW.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const blog = await fetch(`http://localhost:4321/api/blogs?idblog=${id}`).then(
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
