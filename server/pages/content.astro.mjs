/* empty css                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_PUIICibt.mjs';
import { $ as $$Layout } from '../chunks/Layout_BOXDJUk2.mjs';
import 'vue3-toastify';
import '@primevue/themes/aura';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_BAiHI28O.mjs';
import { $ as $$CardBlog } from '../chunks/CardBlog_DBnAzLkM.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CY4cSyXV.mjs';

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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "join" }, _attrs))}><a${ssrRenderAttr("href", `?page=${$setup.props.actualPage === 1 ? "1" : $props.actualPage - 1}`)} class="${ssrRenderClass([{ " btn-disabled": $props.actualPage === 1 }, "join-item btn"])}"> \xAB </a><button class="join-item btn">P\xE1gina ${ssrInterpolate($setup.props.actualPage)} de ${ssrInterpolate($setup.props.totalPages)}</button><a${ssrRenderAttr("href", `?page=${$setup.props.actualPage === $setup.props.totalPages ? $props.totalPages : $props.actualPage + 1}`)} class="${ssrRenderClass([{ " btn-disabled": $setup.props.actualPage === $setup.props.totalPages }, "join-item btn"])}"> \xBB </a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { origin, searchParams } = Astro2.url;
  const page = searchParams.get("page");
  const eventos = await fetch(
    `${origin}/api/blogs?status=aceptado&limit=10&page=${page ?? 0}`
  ).then((res) => res.json());
  if (eventos.response?.blogs?.length < 1) {
    return Astro2.redirect("/404");
  }
  console.log(eventos);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Todos los eventos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full w-full p-4"> <h1>Todos los eventos</h1> <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 not-prose"> ${eventos.response?.blogs.map((el) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "titulo": el.titulo, "fecha": el.fecha, "id": el.idblog, "imagen": el.imagen })}`)} </div> <div class="not-prose w-full flex justify-center"> ${renderComponent($$result2, "Pagination", Pagination, { "totalPages": eventos.response.totalPages, "actualPage": eventos.response.currentPage })} </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/content/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/content/index.astro";
const $$url = "/content";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
