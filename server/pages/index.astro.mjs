/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, ac as Fragment, b as createAstro, d as addAttribute, ag as renderScript } from '../chunks/astro/server_DmhofpIV.mjs';
import { $ as $$Layout } from '../chunks/Layout_CYu2Rs5Q.mjs';
import { $ as $$CardBlog } from '../chunks/CardBlog_B2WtcCG0.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_t6jYWpBq.mjs';
export { renderers } from '../renderers.mjs';

const $$BlogsContainer = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await fetch(`http://localhost:4321/api/blogs?status=aceptado&limit=3`).then(
    (res) => res.json()
  );
  return renderTemplate`${maybeRenderHead()}<div class="prose max-w-full p-4"> <h1>Eventos destacados</h1> <div class="not-prose gap-4 place-items-center place-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${blogs.response?.blogs && blogs.response?.blogs.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${blogs.response?.blogs.map((el) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "titulo": el.titulo, "imagen": el.imagen, "fecha": el.fecha, "id": el.idblog })}`)}<div class="md:col-span-2 lg:col-span-3 w-full flex justify-center"> <a class="btn btn-primary w-1/2" href="/content/evento">
Ver todos
</a> </div> ` })}`} ${blogs.response?.blogs && blogs.response?.blogs.length < 1 && renderTemplate`<div class="h-96 flex flex-col justify-center items-center gap-4 md:col-span-2 lg:col-span-3"> <i class="bi bi-clouds text-9xl"></i> <h1 class="text-xl">Sin eventos recientes</h1> </div>`} </div> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/BlogsContainer.astro", void 0);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { banners } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel h-60 md:h-96 lg:h-[450px] w-full"> ${banners.length > 0 && banners.map((el, index, array) => renderTemplate`<div${addAttribute(`banner-${el.idbanner}`, "id")} class="carousel-item relative w-full scroll-mt-40"> ${renderComponent($$result, "Image", $$Image, { "src": el.imagen, "class": "w-full object-cover", "height": "100", "width": "100", "alt": el.createdAt, "loading": "eager" })} ${(el.descripcion || el.url) && renderTemplate`<div class="card bg-base-100/70 backdrop-blur-sm shadow-xl w-full md:w-3/4 md:min-h-32 min-h-24 absolute bottom-4 md:right-4"> <div class="card-body"> <p>${el.descripcion}</p> ${el.url && renderTemplate`<div class="card-actions justify-end"> <a target="_blank"${addAttribute(el.url, "href")} class="btn btn-primary btn-sm">
Ver enlace adjunto
</a> </div>`} </div> </div>`} <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"> <a${addAttribute(`#banner-${array[(index - 1 + array.length) % array.length].idbanner}`, "href")} class="btn btn-circle selector-banner-main"> <i class="bi bi-caret-left-fill text-xl"></i> </a> <a${addAttribute(`#banner-${array[(index + 1) % array.length].idbanner}`, "href")} class="btn btn-circle selector-banner-main"> <i class="bi bi-caret-right-fill text-xl"></i> </a> </div> </div>`)} </div> <div class="flex w-full justify-center gap-2 py-2"> ${banners.map((el, index) => renderTemplate`<a${addAttribute(`#banner-${el.idbanner}`, "href")} class="btn btn-xs selector-banner"> ${index + 1} </a>`)} </div> ${renderScript($$result, "/home/blanco/Documentos/ca-astro/src/components/gui/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/Carousel.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const banners = await fetch(
    "http://localhost:4321/api/banners?mostrar=true"
  ).then((res) => res.json());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CA - c\xF3mputo distribuido." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "CarouselA", $$Carousel, { "banners": banners?.response ?? [] })} ${renderComponent($$result2, "BlogsContainer", $$BlogsContainer, {})} <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"> <div class="card bg-accent text-accent-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Misión</h2> <p class="text-balance">
Contribuir con el mejoramiento de la formación académica de los
            estudiantes de la carrera de Ingeniería en Sistemas computacionales
            del Instituto tecnológico Superior de los Ríos.
</p> </div> </div> <div class="card bg-secondary text-secondary-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Visión</h2> <p class="text-balance">
Lograr la consolidación del cuerpo académico a través del incremento
            de nuestra producción académica, investigación con reconocimiento
            nacional e internacional.
</p> </div> </div> <div class="card bg-neutral text-neutral-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Objetivos</h2> <p class="text-balance">
Desarrollar un cuerpo académico para el desarrollo de proyectos de
            investigación, dirección de tesís, desarrollo de aplicación de
            sistema distribuido, así como el mejoramiento de los planes de
            estudios de la carrera.
</p> </div> </div> </div> </main> ` })}`;
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
