import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_PXGLLX5r.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DeXEjhey.mjs';
import 'vue3-toastify';
import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_tWar_dvF.mjs';
import { $ as $$CardBlog2 } from '../../chunks/CardBlog2_J_SNEbue.mjs';
import { $ as $$Breadcumb } from '../../chunks/Breadcumb_S2ffQydz.mjs';
export { renderers } from '../../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  props: {
    totalPages: {},
    actualPage: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "join" }, _attrs))}><a${ssrRenderAttr("href", `?page=${$setup.props.actualPage === 1 ? "1" : $props.actualPage - 1}`)} class="${ssrRenderClass([{ " btn-disabled": $props.actualPage === 1 }, "join-item btn"])}"> \xAB </a><div class="join-item btn">P\xE1gina ${ssrInterpolate($setup.props.actualPage)} de ${ssrInterpolate($setup.props.totalPages)}</div><a${ssrRenderAttr("href", `?page=${$setup.props.actualPage === $setup.props.totalPages ? $props.totalPages : $props.actualPage + 1}`)} class="${ssrRenderClass([{ " btn-disabled": $setup.props.actualPage === $setup.props.totalPages }, "join-item btn"])}"> \xBB </a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { searchParams } = Astro2.url;
  const page = searchParams.get("page");
  const eventos = await fetch(
    `http://localhost:4321/api/blogs?status=aceptado&limit=10&page=${page ?? 0}`
  ).then((res) => res.json());
  if (eventos.response?.blogs && eventos.response?.blogs.length < 1) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Todos los eventos" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full w-full p-4"> ${renderComponent($$result2, "Breadcumb", $$Breadcumb, { "items": [{ name: "Eventos" }] })} <h1>Todos los eventos</h1> <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 not-prose"> ${eventos.response?.blogs.map((el) => renderTemplate`${renderComponent($$result2, "CardBlog2", $$CardBlog2, { "titulo": el.titulo, "fecha": el.fecha, "id": el.idblog, "imagen": el.imagen })}`)} </div> <div class="not-prose w-full flex justify-center pt-4"> ${renderComponent($$result2, "Pagination", Pagination, { "totalPages": eventos.response?.totalPages ?? 0, "actualPage": eventos.response?.currentPage ?? 0 })} </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/content/evento/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/content/evento/index.astro";
const $$url = "/content/evento";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
