import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, onMounted, onUnmounted, withCtx, createVNode, withDirectives, vModelText, toDisplayString, createTextVNode } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import { a as script, s as script$1 } from './index_h5t5GPhD.mjs';
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
/* empty css                        */
import { _ as _export_sfc } from './_plugin-vue_export-helper_3ktPLYsj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaPublicacionesMiembros",
  props: {
    data: {},
    rows: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const rowData = ref({});
    const isMounted = ref(false);
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const getCollabs = (element) => {
      const formatter = new Intl.ListFormat("es", {
        type: "conjunction",
        style: "long"
      });
      const miembrosF = [];
      element.miembros_publicacion.forEach((el) => {
        miembrosF.push(el.nombreCompleto);
      });
      if (element.otrosAutores) {
        const otherAutoresArr = element.otrosAutores.split(";");
        miembrosF.push(...otherAutoresArr);
      }
      if (miembrosF.length < 1) {
        return "---";
      }
      return formatter.format(miembrosF);
    };
    const handleClick = (ev) => {
      rowData.value = ev.data;
      const modal = document.getElementById("modal-articulos");
      modal.showModal();
    };
    onMounted(() => {
      isMounted.value = true;
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    const __returned__ = { props, rowData, isMounted, filters, getCollabs, handleClick, get Column() {
      return script;
    }, get DataTable() {
      return script$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><dialog id="modal-articulos" class="modal modal-bottom sm:modal-middle"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><i class="bi bi-x text-xl"></i></button></form><h3 class="text-lg font-bold">${ssrInterpolate($setup.rowData.titulo)}</h3><p class="py-4">${ssrInterpolate($setup.rowData.descripcion ?? "Sin resumen.")}</p>`);
  if ($setup.rowData.url) {
    _push(`<a class="btn btn-primary"${ssrRenderAttr("href", $setup.rowData.url ?? "#")} target="_blank"> Ver art\xEDculo <i class="bi bi-box-arrow-up-right"></i></a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
  _push(ssrRenderComponent($setup["DataTable"], {
    value: $setup.props.data,
    paginator: true,
    rows: $setup.props.rows ?? 10,
    rowsPerPageOptions: $setup.props.rows ? void 0 : [5, 10, 20, 50],
    filters: $setup.filters,
    "onUpdate:filters": ($event) => $setup.filters = $event,
    globalFilterFields: ["ISSN", "titulo", "otrosAutores"],
    loading: $setup.props.data.length < 1 ? false : !$setup.isMounted,
    onRowClick: $setup.handleClick,
    pt: { bodyrow: { class: "hover cursor-pointer" } }
  }, {
    loading: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="absolute top-0 left-0 h-full w-full z-30 select-none skeleton bg-base-300/60 backdrop-blur-[0.5px] rounded-btn"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "absolute top-0 left-0 h-full w-full z-30 select-none skeleton bg-base-300/60 backdrop-blur-[0.5px] rounded-btn" })
        ];
      }
    }),
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex justify-end mb-4"${_scopeId}><label class="input input-bordered flex items-center gap-2 w-full max-w-xs"${_scopeId}><i class="bi bi-search"${_scopeId}></i><input${ssrRenderAttr("value", $setup.filters.global.value)} type="text" class="grow" placeholder="Buscar publicaci\xF3n (ISSN, titulo, autores)"${_scopeId}></label></div>`);
      } else {
        return [
          createVNode("div", { class: "flex justify-end mb-4" }, [
            createVNode("label", { class: "input input-bordered flex items-center gap-2 w-full max-w-xs" }, [
              createVNode("i", { class: "bi bi-search" }),
              withDirectives(createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.filters.global.value = $event,
                type: "text",
                class: "grow",
                placeholder: "Buscar publicaci\xF3n (ISSN, titulo, autores)"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $setup.filters.global.value]
              ])
            ])
          ])
        ];
      }
    }),
    empty: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center font-bold"${_scopeId}>Sin datos.</div>`);
      } else {
        return [
          createVNode("div", { class: "text-center font-bold" }, "Sin datos.")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["Column"], {
          field: "ISSN",
          header: "ISSN"
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-20"${_scopeId2}>${ssrInterpolate(data[field] ?? "---")}</div>`);
            } else {
              return [
                createVNode("div", { class: "w-20" }, toDisplayString(data[field] ?? "---"), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "titulo",
          header: "Titulo"
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="min-w-32"${_scopeId2}>${ssrInterpolate(data[field])}</div>`);
            } else {
              return [
                createVNode("div", { class: "min-w-32" }, toDisplayString(data[field]), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "year",
          header: "A\xF1o",
          sortable: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "miembros_publicacion",
          header: "Autores"
        }, {
          body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-32"${_scopeId2}>${ssrInterpolate($setup.getCollabs(data))}</div>`);
            } else {
              return [
                createVNode("div", { class: "w-32" }, toDisplayString($setup.getCollabs(data)), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "tipo",
          header: "Tipo",
          sortable: ""
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(data[field].toUpperCase())}`);
            } else {
              return [
                createTextVNode(toDisplayString(data[field].toUpperCase()), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode($setup["Column"], {
            field: "ISSN",
            header: "ISSN"
          }, {
            body: withCtx(({ data, field }) => [
              createVNode("div", { class: "w-20" }, toDisplayString(data[field] ?? "---"), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "titulo",
            header: "Titulo"
          }, {
            body: withCtx(({ data, field }) => [
              createVNode("div", { class: "min-w-32" }, toDisplayString(data[field]), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "year",
            header: "A\xF1o",
            sortable: ""
          }),
          createVNode($setup["Column"], {
            field: "miembros_publicacion",
            header: "Autores"
          }, {
            body: withCtx(({ data }) => [
              createVNode("div", { class: "w-32" }, toDisplayString($setup.getCollabs(data)), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "tipo",
            header: "Tipo",
            sortable: ""
          }, {
            body: withCtx(({ data, field }) => [
              createTextVNode(toDisplayString(data[field].toUpperCase()), 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaPublicacionesMiembros.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListaPublicacionesMiembros = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ListaPublicacionesMiembros as L };
