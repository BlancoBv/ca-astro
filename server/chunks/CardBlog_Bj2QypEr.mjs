import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, e as renderTransition } from './astro/server_DmhofpIV.mjs';
import { f as formatDate } from './format_Cetxi1N9.mjs';
import { $ as $$Image } from './_astro_assets_t6jYWpBq.mjs';
/* empty css                         */

const $$Astro = createAstro("https://computodistribuido.org");
const $$CardBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardBlog;
  const { titulo, id, imagen, fecha } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/content/evento/${id}`, "href")} class="card bg-base-100 image-full w-full h-96 shadow-xl group"> <figure class="w-full"> ${renderComponent($$result, "Image", $$Image, { "class": "object-contain group-hover:scale-110 duration-200 ease-in h-full w-full", "src": imagen, "alt": titulo, "width": 100, "height": 100, "loading": "eager", "data-astro-transition-scope": renderTransition($$result, "vimrg3rc", "", `img-${id}`) })} </figure> <div class="card-body"> <h2 class="card-title text-2xl">${titulo}</h2> <p>${formatDate(fecha, "LL")}</p> </div> </a>`;
}, "/home/blanco/Documentos/ca-astro/src/components/cards/CardBlog.astro", "self");

export { $$CardBlog as $ };
