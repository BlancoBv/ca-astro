import 'vue3-toastify';
import { defineComponent, useSSRContext, ref, computed, watch, onWatcherCleanup, onMounted, onUnmounted, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock } from 'vue';
import { b as formatMoneda } from './format_CRU5uAFP.mjs';
import { P as PlaceholderListPP, L as List, D as DebounceInputSearch, S as StatInfoPP } from './PlaceholderListPP_CY4UbmDH.mjs';
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
/* empty css                          */
import { _ as _export_sfc } from './_plugin-vue_export-helper_tWar_dvF.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaProyectosMiembros2",
  props: {
    data: {},
    rows: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isMounted = ref(false);
    const page = ref(1);
    const maxRows = ref(5);
    const rowData = ref({});
    const filtroEstatus = ref("");
    const filtroTipo = ref("");
    const filtroMonto = ref("");
    const filtroTexto = ref("");
    const getCollabs = (element) => {
      const formatter = new Intl.ListFormat("es", {
        type: "conjunction",
        style: "long"
      });
      const miembrosF = [];
      if (Object.keys(element).length < 1) return "---";
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
    const recortarTexto = (titulo) => {
      return titulo.slice(0, 30) + "...";
    };
    const normalize = (text) => text.normalize("NFD").replace(
      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
      "$1"
    ).normalize();
    const totalFiltros = computed(
      () => [filtroEstatus.value, filtroMonto.value, filtroTipo.value].reduce((a, b) => {
        if (b !== "") return a + 1;
        return a;
      }, 0)
    );
    const filteredData = computed(() => {
      const defaultData = props.data;
      var newData = defaultData;
      if (filtroEstatus.value !== "") {
        newData = newData.filter((el) => el.estatus === filtroEstatus.value);
      }
      if (filtroTipo.value !== "") {
        newData = newData.filter((el) => el.tipo === filtroTipo.value);
      }
      if (filtroTexto.value !== "") {
        const searchText = normalize(filtroTexto.value);
        newData = newData.filter((el) => {
          const regExp = new RegExp(searchText, "gi");
          const rowText = normalize(
            `${el.titulo} ${el.director_proyecto?.nombreCompleto} ${getCollabs(el)}`
          );
          return regExp.test(rowText);
        });
      }
      return newData;
    });
    const sortedData = computed(() => {
      if (filtroMonto.value === "ASC") {
        return filteredData.value.toSorted(
          (a, b) => Number(a.monto) - Number(b.monto)
        );
      }
      if (filtroMonto.value === "DESC") {
        return filteredData.value.toSorted(
          (a, b) => Number(b.monto) - Number(a.monto)
        );
      }
      return filteredData.value;
    });
    const paginatedData = computed(() => {
      const indexStart = (page.value - 1) * maxRows.value;
      const indexEnd = indexStart + maxRows.value;
      const defaultData = sortedData.value.slice(indexStart, indexEnd);
      return defaultData;
    });
    const totalPages = computed(
      () => Math.ceil(sortedData.value.length / maxRows.value)
    );
    const totalElements = computed(
      () => String(sortedData.value.length).padStart(3, "0")
    );
    const modalData = computed(() => rowData.value);
    const openModal = (data) => {
      const modal = document.getElementById("modal_proyectos");
      rowData.value = data;
      modal.showModal();
    };
    watch(sortedData, () => {
      page.value = 1;
      onWatcherCleanup(() => {
        page.value = 1;
      });
    });
    onMounted(() => {
      isMounted.value = true;
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    const __returned__ = { props, isMounted, page, maxRows, rowData, filtroEstatus, filtroTipo, filtroMonto, filtroTexto, getCollabs, recortarTexto, normalize, totalFiltros, filteredData, sortedData, paginatedData, totalPages, totalElements, modalData, openModal, get formatMoneda() {
      return formatMoneda;
    }, StatInfoPP, DebounceInputSearch, List, PlaceholderListPP };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><dialog id="modal_proyectos" class="modal modal-bottom sm:modal-middle not-prose"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><i class="bi bi-x text-2xl"></i></button></form><h3 class="text-lg text-balance font-bold">${ssrInterpolate($setup.modalData.titulo)}</h3><div class="py-4"><ul class="steps w-full pb-4"><li class="${ssrRenderClass([{
    "step-info": !($setup.rowData.estatus === "finalizado"),
    "step-success": $setup.rowData.estatus === "finalizado"
  }, "step step-info"])}"><span class="step-icon"><i class="bi bi-flag"></i></span>En proceso </li><li class="${ssrRenderClass([{
    "step-success": $setup.rowData.estatus === "finalizado"
  }, "step"])}"><span class="step-icon"><i class="bi bi-flag-fill"></i></span>Finalizado </li></ul><div class="grid grid-cols-2 grid-rows-6 gap-2">`);
  _push(ssrRenderComponent($setup["StatInfoPP"], null, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-key-fill"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-key-fill" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Clave`);
      } else {
        return [
          createTextVNode("Clave")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.modalData.clave)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.modalData.clave), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["StatInfoPP"], null, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-info-circle-fill"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-info-circle-fill" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tipo`);
      } else {
        return [
          createTextVNode("Tipo")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.modalData.tipo?.toUpperCase())}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.modalData.tipo?.toUpperCase()), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["StatInfoPP"], null, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-file-earmark-fill"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-file-earmark-fill" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Convocatoria`);
      } else {
        return [
          createTextVNode("Convocatoria")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.modalData.convocatoria)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.modalData.convocatoria), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["StatInfoPP"], null, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-currency-dollar"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-currency-dollar" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Monto`);
      } else {
        return [
          createTextVNode("Monto")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.formatMoneda($setup.modalData.monto))}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.formatMoneda($setup.modalData.monto)), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["StatInfoPP"], { class: "row-span-2" }, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-calendar-range"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-calendar-range" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vigencia`);
      } else {
        return [
          createTextVNode("Vigencia")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.modalData.fechaInicio)} - ${ssrInterpolate($setup.modalData.fechaTermino)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.modalData.fechaInicio) + " - " + toDisplayString($setup.modalData.fechaTermino), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["StatInfoPP"], { class: "row-span-2" }, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-calendar-range-fill"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-calendar-range-fill" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Entrega final`);
      } else {
        return [
          createTextVNode("Entrega final")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.modalData.fechaInicio)} - ${ssrInterpolate($setup.modalData.fechaTermino)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.modalData.fechaInicio) + " - " + toDisplayString($setup.modalData.fechaTermino), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["StatInfoPP"], { class: "col-span-2" }, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-person-fill"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-person-fill" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Director de proyecto`);
      } else {
        return [
          createTextVNode("Director de proyecto")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.modalData.director_proyecto?.nombreCompleto)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.modalData.director_proyecto?.nombreCompleto), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["StatInfoPP"], { class: "col-span-2" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Otros colaboradores`);
      } else {
        return [
          createTextVNode("Otros colaboradores")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.getCollabs($setup.modalData ?? {}))}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.getCollabs($setup.modalData ?? {})), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></dialog>`);
  if (!$setup.isMounted) {
    _push(ssrRenderComponent($setup["PlaceholderListPP"], null, null, _parent));
  } else {
    _push(`<div class="sm:px-20 lg:px-40 not-prose"><div class="grid grid-cols-2 mb-2"><div class="dropdown col-span-2"><div tabindex="0" role="button" class="btn mb-2"><i class="bi bi-filter"></i> Filtros <div class="badge badge-xs badge-secondary">${ssrInterpolate($setup.totalFiltros)}</div></div><div tabindex="0" class="dropdown-content bg-base-100 shadow menu rounded-box w-80 sm:w-96"><div class="collapse collapse-arrow bg-base-100 border border-base-300"><input type="radio" name="filtros-proyectos" checked><div class="collapse-title font-semibold"><div class="indicator">`);
    if ($setup.filtroEstatus !== "") {
      _push(`<span class="indicator-item status status-secondary"></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(` Estatus </div></div><div class="collapse-content text-sm"><form class="filter"><input class="btn btn-square" type="reset" value="\xD7"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroEstatus, "en proceso")) ? " checked" : ""} value="en proceso" class="btn" type="radio" name="frameworks" aria-label="En proceso"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroEstatus, "finalizado")) ? " checked" : ""} value="finalizado" class="btn" type="radio" name="frameworks" aria-label="Finalizado"></form></div></div><div class="collapse collapse-arrow bg-base-100 border border-base-300"><input type="radio" name="filtros-proyectos"><div class="collapse-title font-semibold"><div class="indicator">`);
    if ($setup.filtroMonto !== "") {
      _push(`<span class="indicator-item status status-secondary"></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(` Monto </div></div><div class="collapse-content text-sm"><form class="filter"><input class="btn btn-square" type="reset" value="\xD7"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroMonto, "DESC")) ? " checked" : ""} value="DESC" class="btn" type="radio" name="frameworks" aria-label="De mayor a menor"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroMonto, "ASC")) ? " checked" : ""} value="ASC" class="btn" type="radio" name="frameworks" aria-label="De menor a mayor"></form></div></div><div class="collapse collapse-arrow bg-base-100 border border-base-300"><input type="radio" name="filtros-proyectos"><div class="collapse-title font-semibold"><div class="indicator">`);
    if ($setup.filtroTipo !== "") {
      _push(`<span class="indicator-item status status-secondary"></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(` Tipo </div></div><div class="collapse-content text-sm"><form class="filter"><input class="btn btn-square" type="reset" value="\xD7"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroTipo, "interno")) ? " checked" : ""} value="interno" class="btn" type="radio" name="frameworks" aria-label="Interno"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroTipo, "externo")) ? " checked" : ""} value="externo" class="btn" type="radio" name="frameworks" aria-label="Externo"></form></div></div></div></div><div>`);
    _push(ssrRenderComponent($setup["DebounceInputSearch"], {
      value: $setup.filtroTexto,
      "onUpdate:value": ($event) => $setup.filtroTexto = $event,
      placeholder: "Nombre miembro/colaborador o t\xEDtulo de proyecto"
    }, null, _parent));
    _push(`</div><div class="join place-self-end"><button class="join-item btn"${ssrIncludeBooleanAttr($setup.totalPages === 0 || $setup.page <= 1) ? " disabled" : ""}><i class="bi bi-caret-left-fill"></i></button><button class="join-item btn"${ssrIncludeBooleanAttr($setup.totalPages === 0 || $setup.page >= $setup.totalPages) ? " disabled" : ""}><i class="bi bi-caret-right-fill"></i></button></div></div>`);
    _push(ssrRenderComponent($setup["List"], {
      data: $setup.paginatedData ?? [],
      "key-title": "proyecto-title",
      "key-empty": "proyecto-empty"
    }, {
      titulo: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Todos los proyectos`);
        } else {
          return [
            createTextVNode("Todos los proyectos")
          ];
        }
      }),
      row: withCtx(({ data }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li class="list-row"${_scopeId}><div${_scopeId}><i class="bi bi-puzzle-fill text-4xl"${_scopeId}></i></div><div${_scopeId}><div${_scopeId}>${ssrInterpolate(data.director_proyecto?.nombreCompleto)}</div><div class="text-xs uppercase font-semibold opacity-60"${_scopeId}><span class="hidden sm:block"${_scopeId}>${ssrInterpolate(data.titulo)}</span><span class="sm:hidden"${_scopeId}>${ssrInterpolate($setup.recortarTexto(data.titulo))}</span></div></div><div class="list-col-wrap flex flex-wrap gap-2"${_scopeId}><div class="badge badge-accent badge-xs"${_scopeId}>${ssrInterpolate($setup.formatMoneda(data.monto))}</div><div class="badge badge-neutral badge-xs"${_scopeId}><i class="bi bi-info-circle-fill"${_scopeId}></i>${ssrInterpolate(data.tipo?.toUpperCase())}</div><div class="${ssrRenderClass([{
            "badge-success": data.estatus === "finalizado",
            "badge-info": data.estatus === "en proceso"
          }, "badge badge-xs"])}"${_scopeId}><i class="bi bi-flag-fill"${_scopeId}></i>${ssrInterpolate(data.estatus?.toUpperCase())}</div></div><button class="btn btn-square btn-ghost"${_scopeId}><i class="bi bi-arrows-fullscreen text-xl"${_scopeId}></i></button></li>`);
        } else {
          return [
            (openBlock(), createBlock("li", {
              class: "list-row",
              key: `proyecto-${data.idproyecto}`
            }, [
              createVNode("div", null, [
                createVNode("i", { class: "bi bi-puzzle-fill text-4xl" })
              ]),
              createVNode("div", null, [
                createVNode("div", null, toDisplayString(data.director_proyecto?.nombreCompleto), 1),
                createVNode("div", { class: "text-xs uppercase font-semibold opacity-60" }, [
                  createVNode("span", { class: "hidden sm:block" }, toDisplayString(data.titulo), 1),
                  createVNode("span", { class: "sm:hidden" }, toDisplayString($setup.recortarTexto(data.titulo)), 1)
                ])
              ]),
              createVNode("div", { class: "list-col-wrap flex flex-wrap gap-2" }, [
                createVNode("div", { class: "badge badge-accent badge-xs" }, toDisplayString($setup.formatMoneda(data.monto)), 1),
                createVNode("div", { class: "badge badge-neutral badge-xs" }, [
                  createVNode("i", { class: "bi bi-info-circle-fill" }),
                  createTextVNode(toDisplayString(data.tipo?.toUpperCase()), 1)
                ]),
                createVNode("div", {
                  class: ["badge badge-xs", {
                    "badge-success": data.estatus === "finalizado",
                    "badge-info": data.estatus === "en proceso"
                  }]
                }, [
                  createVNode("i", { class: "bi bi-flag-fill" }),
                  createTextVNode(toDisplayString(data.estatus?.toUpperCase()), 1)
                ], 2)
              ]),
              createVNode("button", {
                class: "btn btn-square btn-ghost",
                onClick: ($event) => $setup.openModal(data)
              }, [
                createVNode("i", { class: "bi bi-arrows-fullscreen text-xl" })
              ], 8, ["onClick"])
            ]))
          ];
        }
      }),
      empty: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li class="list-row"${_scopeId}><div${_scopeId}><i class="bi bi-emoji-frown-fill text-4xl"${_scopeId}></i></div><div${_scopeId}><div${_scopeId}>Sin proyectos</div></div><p class="list-col-wrap text-xs"${_scopeId}> No existen registros que incluyan a este miembro del cuerpo academico como director o colaborador. </p></li>`);
        } else {
          return [
            createVNode("li", {
              class: "list-row",
              key: "proyecto-empty"
            }, [
              createVNode("div", null, [
                createVNode("i", { class: "bi bi-emoji-frown-fill text-4xl" })
              ]),
              createVNode("div", null, [
                createVNode("div", null, "Sin proyectos")
              ]),
              createVNode("p", { class: "list-col-wrap text-xs" }, " No existen registros que incluyan a este miembro del cuerpo academico como director o colaborador. ")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<p class="font-light text-sm opacity-60 text-end mt-2">${ssrInterpolate($setup.totalElements)} elementos </p></div>`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaProyectosMiembros2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListaProyectosMiembros2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ListaProyectosMiembros2 as L };
