import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, e as renderTransition } from '../../../chunks/astro/server_PXGLLX5r.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_DeXEjhey.mjs';
import { $ as $$EtiquetasHeading, a as $$BadgeEtiquetas } from '../../../chunks/EtiquetasHeading_CW-3ksZc.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_CtY31-wz.mjs';
import { f as formatDate } from '../../../chunks/format_CRU5uAFP.mjs';
import { $ as $$Breadcumb } from '../../../chunks/Breadcumb_S2ffQydz.mjs';
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
  function reemplazarCarousel(contenido) {
    return contenido.replace(
      /;carousel-start([\s\S]*?);carousel-end/g,
      (_match, contenido2) => {
        const images = contenido2.match(/<img[^>]*>/g) || [];
        return `
      <div class="flex items-center justify-center w-full">
        <div class="carousel carousel-center bg-neutral rounded-box w-full md:w-11/12 space-x-4 p-4 revealing-image">
          ${images.map((img) => `<div class="carousel-item">${img}</div>`).join("\n")}
        </div>
      </div>`.trim();
      }
    );
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blog.response?.titulo ?? "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4 main-container"> ${renderComponent($$result2, "Breadcumb", $$Breadcumb, { "items": [
    { name: "Eventos", url: "/content/evento" },
    { name: blog.response?.titulo ?? "" }
  ] })} <h1>${blog.response?.titulo}</h1> ${renderComponent($$result2, "Image", $$Image, { "class": "object-cover aspect-video h-60 md:h-[600px] xl:h-[800px] w-full revealing-image rounded-box", "src": blog.response.imagen, "width": 100, "height": 100, "loading": "lazy", "alt": blog.response.titulo, "data-astro-transition-scope": renderTransition($$result2, "tmysawml", "", `img-${id}`) })} <span class="font-bold flex gap-2"> <i class="bi bi-calendar-fill"></i> ${formatDate(blog.response.fecha, "LL")}.</span> <div>${unescapeHTML(reemplazarCarousel(blog.response.contenido))}</div> ${renderComponent($$result2, "EtiquetasHeading", $$EtiquetasHeading, {})} <div class="flex gap-4 flex-wrap not-prose"> ${blog.response?.etiquetas.map((el) => renderTemplate`${renderComponent($$result2, "BadgeEtiquetas", $$BadgeEtiquetas, { "nombre": el.nombre, "ruta": `/content/evento/etiqueta/${el.idetiqueta}` })}`)} </div> </main> ` })} `;
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
