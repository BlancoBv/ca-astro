import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, onMounted, onUnmounted, mergeProps, withCtx, createVNode, withDirectives, vModelText, toDisplayString, createTextVNode, openBlock, createBlock, Fragment } from 'vue';
import { a as script, s as script$1 } from './index_h5t5GPhD.mjs';
import { FilterMatchMode } from '@primevue/core/api';
import { b as formatMoneda } from './format_CRU5uAFP.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
/* empty css                        */
import { _ as _export_sfc } from './_plugin-vue_export-helper_3ktPLYsj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaProyectosMiembros",
  props: {
    data: {},
    rows: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
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
      element.miembros_proyecto.forEach((el) => {
        miembrosF.push(el.nombreCompleto);
      });
      if (element.otrosColaboradores) {
        const otherCollabsArr = element.otrosColaboradores.split(";");
        miembrosF.push(...otherCollabsArr);
      }
      if (miembrosF.length < 1) {
        return "---";
      }
      return formatter.format(miembrosF);
    };
    onMounted(() => {
      isMounted.value = true;
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    const __returned__ = { props, isMounted, filters, getCollabs, get Column() {
      return script;
    }, get DataTable() {
      return script$1;
    }, get formatMoneda() {
      return formatMoneda;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["DataTable"], mergeProps({
    value: $setup.props.data,
    paginator: true,
    rows: $setup.props.rows ?? 10,
    rowsPerPageOptions: $setup.props.rows ? void 0 : [5, 10, 20, 50],
    filters: $setup.filters,
    "onUpdate:filters": ($event) => $setup.filters = $event,
    globalFilterFields: ["clave", "titulo", "convocatoria", "director_proyecto.nombreCompleto", "otrosColaboradores"],
    loading: $setup.props.data.length < 1 ? false : !$setup.isMounted
  }, _attrs), {
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
        _push2(`<div class="flex justify-end mb-4"${_scopeId}><label class="input input-bordered flex items-center gap-2 w-full max-w-xs"${_scopeId}><i class="bi bi-search"${_scopeId}></i><input${ssrRenderAttr("value", $setup.filters.global.value)} type="text" class="grow" placeholder="Buscar proyecto (clave, titulo, convocatoria, director)"${_scopeId}></label></div>`);
      } else {
        return [
          createVNode("div", { class: "flex justify-end mb-4" }, [
            createVNode("label", { class: "input input-bordered flex items-center gap-2 w-full max-w-xs" }, [
              createVNode("i", { class: "bi bi-search" }),
              withDirectives(createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.filters.global.value = $event,
                type: "text",
                class: "grow",
                placeholder: "Buscar proyecto (clave, titulo, convocatoria, director)"
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
          field: "clave",
          header: "Clave"
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-20"${_scopeId2}>${ssrInterpolate(data[field])}</div>`);
            } else {
              return [
                createVNode("div", { class: "w-20" }, toDisplayString(data[field]), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "convocatoria",
          header: "Convocatoria"
        }, null, _parent2, _scopeId));
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
          field: "director_proyecto.nombreCompleto",
          header: "Director(a) responsable",
          sortable: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "fechaInicio",
          header: "Vigencia"
        }, {
          body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-24"${_scopeId2}>${ssrInterpolate(data.fechaInicio)} a ${ssrInterpolate(data.fechaTermino)}</div>`);
            } else {
              return [
                createVNode("div", { class: "w-24" }, toDisplayString(data.fechaInicio) + " a " + toDisplayString(data.fechaTermino), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "miembros_proyecto",
          header: "Colaboradores"
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
        _push2(ssrRenderComponent($setup["Column"], {
          field: "monto",
          header: "Monto aprobado",
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
          field: "fechaInicioEntrega",
          header: "Entrega final"
        }, {
          body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (!data.fechaInicioEntrega || !data.fechaTerminoEntrega) {
                _push3(`<!--[--> --- <!--]-->`);
              } else {
                _push3(`<div class="w-24"${_scopeId2}>${ssrInterpolate(data.fechaInicioEntrega)} a ${ssrInterpolate(data.fechaTerminoEntrega)}</div>`);
              }
            } else {
              return [
                !data.fechaInicioEntrega || !data.fechaTerminoEntrega ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" --- ")
                ], 64)) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-24"
                }, toDisplayString(data.fechaInicioEntrega) + " a " + toDisplayString(data.fechaTerminoEntrega), 1))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "estatus",
          header: "Estatus",
          sortable: ""
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass([{
                "badge-success": data[field] === "finalizado",
                "badge-info": data[field] === "en proceso"
              }, "badge h-max"])}"${_scopeId2}>${ssrInterpolate(data[field].toUpperCase())}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["badge h-max", {
                    "badge-success": data[field] === "finalizado",
                    "badge-info": data[field] === "en proceso"
                  }]
                }, toDisplayString(data[field].toUpperCase()), 3)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode($setup["Column"], {
            field: "clave",
            header: "Clave"
          }, {
            body: withCtx(({ data, field }) => [
              createVNode("div", { class: "w-20" }, toDisplayString(data[field]), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "convocatoria",
            header: "Convocatoria"
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
            field: "director_proyecto.nombreCompleto",
            header: "Director(a) responsable",
            sortable: ""
          }),
          createVNode($setup["Column"], {
            field: "fechaInicio",
            header: "Vigencia"
          }, {
            body: withCtx(({ data }) => [
              createVNode("div", { class: "w-24" }, toDisplayString(data.fechaInicio) + " a " + toDisplayString(data.fechaTermino), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "miembros_proyecto",
            header: "Colaboradores"
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
          }),
          createVNode($setup["Column"], {
            field: "monto",
            header: "Monto aprobado",
            sortable: ""
          }, {
            body: withCtx(({ data, field }) => [
              createTextVNode(toDisplayString($setup.formatMoneda(data[field])), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "fechaInicioEntrega",
            header: "Entrega final"
          }, {
            body: withCtx(({ data }) => [
              !data.fechaInicioEntrega || !data.fechaTerminoEntrega ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(" --- ")
              ], 64)) : (openBlock(), createBlock("div", {
                key: 1,
                class: "w-24"
              }, toDisplayString(data.fechaInicioEntrega) + " a " + toDisplayString(data.fechaTerminoEntrega), 1))
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "estatus",
            header: "Estatus",
            sortable: ""
          }, {
            body: withCtx(({ data, field }) => [
              createVNode("div", {
                class: ["badge h-max", {
                  "badge-success": data[field] === "finalizado",
                  "badge-info": data[field] === "en proceso"
                }]
              }, toDisplayString(data[field].toUpperCase()), 3)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaProyectosMiembros.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListaProyectosMiembros = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ListaProyectosMiembros as L };
