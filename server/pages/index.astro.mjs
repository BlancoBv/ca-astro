import { c as createComponent, m as maybeRenderHead, aj as renderSlot, a as renderTemplate, r as renderComponent, ak as Fragment, b as createAstro, an as renderScript, d as addAttribute } from '../chunks/astro/server_PXGLLX5r.mjs';
import { $ as $$Layout } from '../chunks/Layout_DeXEjhey.mjs';
import { $ as $$CardBlog2 } from '../chunks/CardBlog2_J_SNEbue.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CtY31-wz.mjs';
export { renderers } from '../renderers.mjs';

const $$CardMVO = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="indicator group w-full"> <div class="indicator-item indicator-bottom indicator-center size-22 flex items-center justify-center group-hover:scale-110 ease-in duration-150"> ${renderSlot($$result, $$slots["card-icon"])} </div> <div class="card bg-base-200 w-full h-60 shadow-sm"> <div class="card-body"> <h2 class="card-title text-4xl"> ${renderSlot($$result, $$slots["card-title"])} </h2> <p class="text-balance font-light"> ${renderSlot($$result, $$slots["card-body"])} </p> </div> </div> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/cards/CardMVO.astro", void 0);

const $$BlogsContainer = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await fetch(`http://localhost:4321/api/blogs?status=aceptado&limit=3`).then(
    (res) => res.json()
  );
  return renderTemplate`${maybeRenderHead()}<div class="prose max-w-full p-4"> <h1>Eventos destacados</h1> <div class="not-prose gap-4 place-items-center place-content-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> ${blogs.response?.blogs && blogs.response?.blogs.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${blogs.response?.blogs.map((el) => renderTemplate`${renderComponent($$result2, "CardBlog2", $$CardBlog2, { "titulo": el.titulo, "imagen": el.imagen, "fecha": el.fecha, "id": el.idblog })}`)}<div class="card bg-base-100 image-full w-full h-100 shadow-sm"> <figure> <img class="object-cover h-full w-full" src="/eventos.webp" alt="Eventos"> </figure> <div class="card-body items-end justify-end"> <div class="card-actions justify-end"> <a href="/content/evento" class="btn btn-primary">
Ver todos los eventos
</a> </div> </div> </div> ` })}`} ${blogs.response?.blogs && blogs.response?.blogs.length < 1 && renderTemplate`<div class="h-96 flex flex-col justify-center items-center gap-4 md:col-span-2 lg:col-span-3"> <i class="bi bi-clouds text-9xl"></i> <h1 class="text-xl">Sin eventos recientes</h1> </div>`} </div> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/BlogsContainer.astro", void 0);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { banners } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel h-60 sm:h-96 md:h-[600px] lg:h-[750px] w-full"> ${banners.length > 0 && banners.map((el, index, array) => renderTemplate`<div${addAttribute(`banner-${el.idbanner}`, "id")} class="carousel-item relative w-full scroll-mt-40"> ${renderComponent($$result, "Image", $$Image, { "src": el.imagen, "class": "w-full object-cover", "height": "100", "width": "100", "alt": el.createdAt, "loading": "eager" })} ${(el.descripcion || el.url) && renderTemplate`<div class="stats bg-base-100 bottom-4 sm:right-4 shadow absolute w-full sm:w-fit"> <div class="stat"> <div class="stat-value text-secondary text-wrap"> ${el.descripcion} </div> ${el.url && renderTemplate`<div class="stat-desc"> <a${addAttribute(el.url, "href")} class="link">
Enlace adjunto <i class="bi bi-box-arrow-up-right"></i> </a> </div>`} </div> </div>`}  <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"> <a${addAttribute(`#banner-${array[(index - 1 + array.length) % array.length].idbanner}`, "href")} class="btn btn-circle selector-banner-main"> <i class="bi bi-caret-left-fill text-xl"></i> </a> <a${addAttribute(`#banner-${array[(index + 1) % array.length].idbanner}`, "href")} class="btn btn-circle selector-banner-main"> <i class="bi bi-caret-right-fill text-xl"></i> </a> </div> </div>`)} </div> <div class="flex w-full justify-center gap-2 py-2"> ${banners.map((el, index) => renderTemplate`<a${addAttribute(`#banner-${el.idbanner}`, "href")} class="btn btn-xs selector-banner"> ${index + 1} </a>`)} </div> ${renderScript($$result, "/home/blanco/Documentos/ca-astro/src/components/gui/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/Carousel.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const banners = await fetch(
    "http://localhost:4321/api/banners?mostrar=true"
  ).then((res) => res.json());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cuerpo Acad\xE9mico - C\xF3mputo Distribuido" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "CarouselA", $$Carousel, { "banners": banners?.response ?? [] })} <!-- <YoutubeVideos /> --> ${renderComponent($$result2, "BlogsContainer", $$BlogsContainer, {})} <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-4 py-10 gap-4 place-items-center"> ${renderComponent($$result2, "CardMVO", $$CardMVO, {}, { "card-body": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "card-body" }, { "default": async ($$result4) => renderTemplate`
Contribuir con el mejoramiento de la formación académica de los
          estudiantes de la carrera de Ingeniería en Sistemas computacionales
          del Instituto tecnológico Superior de los Ríos.
` })}`, "card-icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "card-icon" }, { "default": async ($$result4) => renderTemplate` <i class="bi bi-search text-7xl text-secondary"></i> ` })}`, "card-title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "card-title" }, { "default": async ($$result4) => renderTemplate`Misión` })}` })} ${renderComponent($$result2, "CardMVO", $$CardMVO, {}, { "card-body": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "card-body" }, { "default": async ($$result4) => renderTemplate`
Lograr la consolidación del cuerpo académico a través del incremento
          de nuestra producción académica, investigación con reconocimiento
          nacional e internacional.
` })}`, "card-icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "card-icon" }, { "default": async ($$result4) => renderTemplate` <i class="bi bi-eye text-7xl text-accent"></i> ` })}`, "card-title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "card-title" }, { "default": async ($$result4) => renderTemplate`Visión` })}` })} ${renderComponent($$result2, "CardMVO", $$CardMVO, {}, { "card-body": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "card-body" }, { "default": async ($$result4) => renderTemplate`
Desarrollar un cuerpo académico para el desarrollo de proyectos de
          investigación, dirección de tesís, desarrollo de aplicación de sistema
          distribuido, así como el mejoramiento de los planes de estudios de la
          carrera.
` })}`, "card-icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "card-icon" }, { "default": async ($$result4) => renderTemplate` <i class="bi bi-graph-up-arrow text-7xl text-info"></i> ` })}`, "card-title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "card-title" }, { "default": async ($$result4) => renderTemplate`Objetivos` })}` })} </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
