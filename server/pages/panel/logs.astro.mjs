/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_BYikK1dL.mjs';
import { $ as $$LayoutPanel } from '../../chunks/LayoutPanel_CaHZTzr2.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, onMounted, onUnmounted, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { a as script, s as script$1 } from '../../chunks/index_DoPSSCG4.mjs';
import { f as formatDate } from '../../chunks/format_DR5bMIry.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
/* empty css                                    */
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_ChU72wyx.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BnjbwtTW.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaLogs",
  props: {
    data: {}
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
    }, get formatDate() {
      return formatDate;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (!$setup.isMounted) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "skeleton h-96 w-full" }, _attrs))}></div>`);
  } else {
    _push(ssrRenderComponent($setup["DataTable"], mergeProps({
      value: $setup.props.data,
      paginator: true,
      rows: 10
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["Column"], {
            field: "method",
            header: "M\xE9todo",
            sortable: ""
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "ruta",
            header: "Ruta"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "idUsuario",
            header: "Usuario",
            sortable: ""
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "createdAt",
            header: "Fecha de creaci\xF3n",
            sortable: ""
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate($setup.formatDate(data[field], "DD-MM-YYYY"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString($setup.formatDate(data[field], "DD-MM-YYYY")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode($setup["Column"], {
              field: "method",
              header: "M\xE9todo",
              sortable: ""
            }),
            createVNode($setup["Column"], {
              field: "ruta",
              header: "Ruta"
            }),
            createVNode($setup["Column"], {
              field: "idUsuario",
              header: "Usuario",
              sortable: ""
            }),
            createVNode($setup["Column"], {
              field: "createdAt",
              header: "Fecha de creaci\xF3n",
              sortable: ""
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString($setup.formatDate(data[field], "DD-MM-YYYY")), 1)
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaLogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListaLogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.locals;
  const { request } = Astro2;
  if (user?.idRol !== 1) {
    return Astro2.redirect("404");
  }
  const data = await fetch(`http://localhost:4321/api/logs`, {
    headers: { Cookie: request.headers.get("cookie") ?? "" }
  }).then((res) => res.json());
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Logs" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ListaLogs", ListaLogs, { "data": data?.response ?? [], "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/listas/ListaLogs.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/logs/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/logs/index.astro";
const $$url = "/panel/logs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
