/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BYikK1dL.mjs';
import { f as formatDate } from '../../chunks/format_BnSwxyOw.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, computed } from 'vue';
import { ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_BiaGrSvn.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CC5I6w4Y.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_DB6v8AOh.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocumentList",
  props: {
    years: {},
    minutas: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const value = ref("");
    const minutasFiltered = computed(() => {
      if (value.value === "") {
        return props.minutas;
      }
      return props.minutas.filter((el) => formatDate(el.fechaCreacion, "YYYY") === value.value);
    });
    const __returned__ = { props, value, minutasFiltered };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><form class="flex gap-4 items-end mb-4 not-prose"><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">A\xF1o de consulta</span></div><select class="select select-bordered" id="selectFecha"><option selected value="">Todas</option><!--[-->`);
  ssrRenderList($setup.props.years, (year) => {
    _push(`<option${ssrRenderAttr("value", year)}>${ssrInterpolate(year)}</option>`);
  });
  _push(`<!--]--></select></label></form><div class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
  ssrRenderList($setup.minutasFiltered, (minuta) => {
    _push(`<a${ssrRenderAttr("href", minuta.url)} target="_blank" class="card bg-base-100 image-full w-full h-96 shadow-xl group"><figure class="w-full"><i class="bi bi-file-earmark-pdf-fill text-9xl group-hover:scale-110 duration-200 ease-in"></i></figure><div class="card-body"><h2 class="card-title text-2xl">${ssrInterpolate(`${minuta.fileName.split(";")[0]}
                    ${minuta.fechaCreacionFormated}`)}</h2></div></a>`);
  });
  _push(`<!--]--></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DocumentList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocumentList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const minutas = await fetch("http://localhost:4321/api/minutas").then((res) => res.json());
  const years = /* @__PURE__ */ new Set();
  if (minutas.files.length > 0) {
    minutas.files.forEach((el) => {
      const year = formatDate(el.fechaCreacion, "YYYY");
      years.add(year);
    });
  }
  minutas.files.forEach(
    (el) => el.fechaCreacionFormated = formatDate(el.fechaCreacion, "MMMM YYYY")
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Minutas del CA" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <h1>Minutas</h1> ${renderComponent($$result2, "DocumentList", DocumentList, { "years": Array.from(years), "minutas": minutas.files, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/DocumentList.vue", "client:component-export": "default" })} </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/documentos/minutas/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/documentos/minutas/index.astro";
const $$url = "/documentos/minutas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
