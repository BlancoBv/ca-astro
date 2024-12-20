/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../../chunks/astro/server_BYikK1dL.mjs';
import { $ as $$LayoutPanel } from '../../../chunks/LayoutPanel_DDdtpqDe.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, onMounted, onUnmounted, mergeProps, withCtx, createVNode } from 'vue';
import { a as useGetData } from '../../../chunks/http_Cz-Emh2m.mjs';
import { a as script, s as script$1 } from '../../../chunks/index_BzFM4fBN.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
/* empty css                                       */
import { _ as _export_sfc } from '../../../chunks/_plugin-vue_export-helper_BiaGrSvn.mjs';
import 'moment';
export { r as renderers } from '../../../chunks/_@astro-renderers_DB6v8AOh.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListaMinutas",
  props: {
    data: {},
    isPending: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    const __returned__ = { props, isMounted, get DataTable() {
      return script;
    }, get Column() {
      return script$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (!$setup.isMounted) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "skeleton h-96 w-full" }, _attrs))}></div>`);
  } else {
    _push(ssrRenderComponent($setup["DataTable"], mergeProps({
      class: { "skeleton select-none": $setup.props.isPending },
      value: $setup.props.data,
      paginator: true,
      rows: 5
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["Column"], {
            field: "fileName",
            header: "Nombre del archivo",
            sortable: ""
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "fechaCreacion",
            header: "Fecha de creaci\xF3n",
            sortable: ""
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode($setup["Column"], {
              field: "fileName",
              header: "Nombre del archivo",
              sortable: ""
            }),
            createVNode($setup["Column"], {
              field: "fechaCreacion",
              header: "Fecha de creaci\xF3n",
              sortable: ""
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaMinutas.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListaMinutas = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddMinuta",
  setup(__props, { expose: __expose }) {
    __expose();
    const { data, isPending } = useGetData("minutas", "minutasData");
    const formData = new FormData();
    const handle = () => {
    };
    const __returned__ = { data, isPending, formData, handle, ListaMinutas };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["ListaMinutas"], mergeProps({
    data: $setup.data?.files ?? [],
    "is-pending": $setup.isPending
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddMinuta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddMinuta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Lista de minutas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddMinuta", AddMinuta, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/forms/AddMinuta.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/documentos/minutas/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/documentos/minutas/index.astro";
const $$url = "/panel/documentos/minutas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
