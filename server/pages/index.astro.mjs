/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, ac as Fragment, b as createAstro, d as addAttribute } from '../chunks/astro/server_DmhofpIV.mjs';
import { $ as $$Layout } from '../chunks/Layout_ByZJSsIi.mjs';
import { $ as $$CardBlog } from '../chunks/CardBlog_BLcP2bsw.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_t6jYWpBq.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_Bxo6ggSM.mjs';
export { renderers } from '../renderers.mjs';

const $$BlogsContainer = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await fetch(`http://localhost:4321/api/blogs?status=aceptado&limit=3`).then(
    (res) => res.json()
  );
  return renderTemplate`${maybeRenderHead()}<div class="prose max-w-full p-4"> <h1>Eventos destacados</h1> <div class="not-prose gap-4 place-items-center place-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${blogs.response?.blogs && blogs.response?.blogs.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${blogs.response?.blogs.map((el) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "titulo": el.titulo, "imagen": el.imagen, "fecha": el.fecha, "id": el.idblog })}`)}<div class="md:col-span-2 lg:col-span-3 w-full flex justify-center"> <a class="btn btn-primary w-1/2" href="/content/evento">
Ver todos
</a> </div> ` })}`} ${blogs.response?.blogs && blogs.response?.blogs.length < 1 && renderTemplate`<div class="h-96 flex flex-col justify-center items-center gap-4 md:col-span-2 lg:col-span-3"> <i class="bi bi-clouds text-9xl"></i> <h1 class="text-xl">Sin eventos recientes</h1> </div>`} </div> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/BlogsContainer.astro", void 0);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CarouselPagination",
  props: {
    banners: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const activeIndex = ref(0);
    const handleClick = (index) => {
      activeIndex.value = index;
    };
    const __returned__ = { props, activeIndex, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full justify-center gap-2 py-2" }, _attrs))}><!--[-->`);
  ssrRenderList($setup.props.banners, (banner, index) => {
    _push(`<a${ssrRenderAttr("href", `#banner-${banner.idbanner}`)} class="${ssrRenderClass([{ "btn-active": $setup.activeIndex === index }, "btn btn-circle btn-xs selector-banner"])}">${ssrInterpolate(index + 1)}</a>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/CarouselPagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CarouselPagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { banners } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel h-60 md:h-[450px] w-full"> ${banners.length > 0 && banners.map((el, index, array) => renderTemplate`<div${addAttribute(`banner-${el.idbanner}`, "id")} class="carousel-item relative w-full scroll-mt-32 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": el.imagen, "class": "w-full object-cover", "width": 50, "height": 50, "alt": el.createdAt, "loading": "eager" })} ${(el.descripcion || el.url) && renderTemplate`<div class="card bg-base-100/70 backdrop-blur-sm shadow-xl w-full md:w-3/4 md:min-h-32 min-h-24 absolute bottom-4 md:right-4"> <div class="card-body"> <p>${el.descripcion}</p> ${el.url && renderTemplate`<div class="card-actions justify-end"> <a target="_blank"${addAttribute(el.url, "href")} class="btn btn-primary btn-sm">
Ver enlace adjunto
</a> </div>`} </div> </div>`} <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"> <a${addAttribute(`#banner-${array[(index - 1 + array.length) % array.length].idbanner}`, "href")} class="btn btn-circle">
❮
</a> <a${addAttribute(`#banner-${array[(index + 1) % array.length].idbanner}`, "href")} class="btn btn-circle">
❯
</a> </div> </div>`)} </div> ${renderComponent($$result, "CarouselPagination", CarouselPagination, { "banners": banners, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/blanco/Documentos/ca-astro/src/components/gui/CarouselPagination.vue", "client:component-export": "default" })} <!-- <div class="flex w-full justify-center gap-2 py-2">
  {
    banners.map((el, index) => (
      <a href={\`#banner-\${el.idbanner}\`} class="btn btn-xs selector-banner">
        {index + 1}
      </a>
    ))
  }
</div> -->`;
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
