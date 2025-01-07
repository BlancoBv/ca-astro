/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_BYikK1dL.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, useTemplateRef, ref, onMounted, onUnmounted, withCtx, createVNode, toDisplayString, createTextVNode, reactive, mergeProps } from 'vue';
import { a as useGetData } from '../../chunks/http_yrNfcJQc.mjs';
import { a as script, s as script$1 } from '../../chunks/index_CfC-Oi8h.mjs';
import { s as script$2 } from '../../chunks/index_BDWk0A62.mjs';
import { f as formatDate, b as formatMoneda } from '../../chunks/format_DDvzIGDn.mjs';
import { ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
/* empty css                                    */
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_5v_ptjmN.mjs';
import { $ as $$LayoutPanel } from '../../chunks/LayoutPanel_CQujMbSO.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_DJ3BG1z4.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListaProyectos",
  props: {
    data: {},
    isPending: { type: Boolean },
    mutationDelete: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const cm = useTemplateRef("cm");
    const selectedItem = ref(null);
    const isMounted = ref(false);
    const items = ref([
      {
        label: "Eliminar",
        icon: "bi bi-trash-fill",
        command: () => {
        }
      }
    ]);
    const onRowContextMenu = (event) => {
      cm.value?.show(event.originalEvent);
    };
    onMounted(() => {
      isMounted.value = true;
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    const __returned__ = { props, cm, selectedItem, isMounted, items, onRowContextMenu, get DataTable() {
      return script;
    }, get Column() {
      return script$1;
    }, get ContextMenu() {
      return script$2;
    }, get formatDate() {
      return formatDate;
    }, get formatMoneda() {
      return formatMoneda;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->${ssrInterpolate($setup.selectedItem)} `);
  _push(ssrRenderComponent($setup["ContextMenu"], {
    ref: "cm",
    model: $setup.items,
    onHide: ($event) => $setup.selectedItem = null
  }, null, _parent));
  if (!$setup.isMounted) {
    _push(`<div class="skeleton h-96 w-full"></div>`);
  } else {
    _push(ssrRenderComponent($setup["DataTable"], {
      class: { "skeleton select-none": $setup.props.isPending },
      value: $setup.props.data,
      paginator: true,
      rows: 5,
      onRowContextmenu: $setup.onRowContextMenu,
      "context-menu": "",
      contextMenuSelection: $setup.selectedItem,
      "onUpdate:contextMenuSelection": ($event) => $setup.selectedItem = $event
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["Column"], {
            field: "clave",
            header: "Clave del proyecto",
            sortable: ""
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "titulo",
            header: "Titulo del proyecto"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "tipo",
            header: "Tipo de proyecto",
            sortable: ""
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="${ssrRenderClass([{ "badge-accent": data[field] === "externo", "badge-info": data[field] !== "externo" }, "badge h-max"])}"${_scopeId2}>${ssrInterpolate(data[field].toUpperCase())}</div>`);
              } else {
                return [
                  createVNode("div", {
                    class: ["badge h-max", { "badge-accent": data[field] === "externo", "badge-info": data[field] !== "externo" }]
                  }, toDisplayString(data[field].toUpperCase()), 3)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "director_proyecto.nombreCompleto",
            header: "Director de proyecto"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "miembros_proyecto",
            header: "Miembros del proyecto"
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(data[field].map((el) => el.nombreCompleto).join(","))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(data[field].map((el) => el.nombreCompleto).join(",")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: (data) => {
              return data.otrosColaboradores ?? "---";
            },
            header: "Otros colaboradores"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "estatus",
            header: "Estatus del proyecto",
            sortable: ""
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="${ssrRenderClass([{
                  "badge-warning": data[field] === "en proceso",
                  "badge-success": data[field] === "finalizado",
                  "badge-error": data[field] === "no finalizado"
                }, "badge h-max"])}"${_scopeId2}>${ssrInterpolate(data[field].toUpperCase())}</div>`);
              } else {
                return [
                  createVNode("div", {
                    class: ["badge h-max", {
                      "badge-warning": data[field] === "en proceso",
                      "badge-success": data[field] === "finalizado",
                      "badge-error": data[field] === "no finalizado"
                    }]
                  }, toDisplayString(data[field].toUpperCase()), 3)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "monto",
            header: "Monto del proyecto",
            sortable: ""
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate($setup.formatMoneda(data[field]))}`);
              } else {
                return [
                  createTextVNode(toDisplayString($setup.formatMoneda(data[field])), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
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
              field: "clave",
              header: "Clave del proyecto",
              sortable: ""
            }),
            createVNode($setup["Column"], {
              field: "titulo",
              header: "Titulo del proyecto"
            }),
            createVNode($setup["Column"], {
              field: "tipo",
              header: "Tipo de proyecto",
              sortable: ""
            }, {
              body: withCtx(({ data, field }) => [
                createVNode("div", {
                  class: ["badge h-max", { "badge-accent": data[field] === "externo", "badge-info": data[field] !== "externo" }]
                }, toDisplayString(data[field].toUpperCase()), 3)
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "director_proyecto.nombreCompleto",
              header: "Director de proyecto"
            }),
            createVNode($setup["Column"], {
              field: "miembros_proyecto",
              header: "Miembros del proyecto"
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString(data[field].map((el) => el.nombreCompleto).join(",")), 1)
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: (data) => {
                return data.otrosColaboradores ?? "---";
              },
              header: "Otros colaboradores"
            }, null, 8, ["field"]),
            createVNode($setup["Column"], {
              field: "estatus",
              header: "Estatus del proyecto",
              sortable: ""
            }, {
              body: withCtx(({ data, field }) => [
                createVNode("div", {
                  class: ["badge h-max", {
                    "badge-warning": data[field] === "en proceso",
                    "badge-success": data[field] === "finalizado",
                    "badge-error": data[field] === "no finalizado"
                  }]
                }, toDisplayString(data[field].toUpperCase()), 3)
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "monto",
              header: "Monto del proyecto",
              sortable: ""
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString($setup.formatMoneda(data[field])), 1)
              ]),
              _: 1
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
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaProyectos.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListaProyectos = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddProyecto",
  setup(__props, { expose: __expose }) {
    __expose();
    const { data, isPending } = useGetData("proyectos", "proyectosData");
    const { data: miembros, isPending: miembrosIsPending } = useGetData("miembros", "miembrosData");
    const miembrosSelect = ref();
    const body = reactive({ miembrosColaboradores: [] });
    const __returned__ = { data, isPending, miembros, miembrosIsPending, miembrosSelect, body, ListaProyectos };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["ListaProyectos"], mergeProps({
    data: $setup.data?.response ?? [],
    "mutation-delete": () => {
    },
    "is-pending": $setup.isPending
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddProyecto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddProyecto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Lista de proyectos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddProyecto", AddProyecto, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/forms/AddProyecto.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/proyectos/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/proyectos/index.astro";
const $$url = "/panel/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
