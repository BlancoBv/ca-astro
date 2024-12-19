/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_BYikK1dL.mjs';
import { $ as $$EtiquetasHeading, a as $$BadgeEtiquetas } from '../../chunks/EtiquetasHeading_Dls-Ys2f.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DjXo9FaI.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_DB6v8AOh.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$route = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$route;
  const { route, resource } = Astro2.params;
  const content = await fetch(
    `http://localhost:4321/api/articulos?ruta=${resource}/${route}`
  ).then((res) => res.json());
  if (!content) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": content.response.titulo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <h1>${content.response.titulo}</h1> <div>${unescapeHTML(content.response.contenido)}</div> ${renderComponent($$result2, "EtiquetasHeading", $$EtiquetasHeading, {})} <div class="flex gap-4 flex-wrap not-prose"> ${content.response.etiquetas.map((el) => renderTemplate`${renderComponent($$result2, "BadgeEtiquetas", $$BadgeEtiquetas, { "nombre": el.nombre, "ruta": `/content/articulos/${el.idetiqueta}` })}`)} </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/[resource]/[route].astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/[resource]/[route].astro";
const $$url = "/[resource]/[route]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$route,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
