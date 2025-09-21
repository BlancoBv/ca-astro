import 'vue3-toastify';
import { defineComponent, useSSRContext, ref, computed, watch, onWatcherCleanup, onMounted, onUnmounted, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock } from 'vue';
import './format_CRU5uAFP.mjs';
import { P as PlaceholderListPP, L as List, D as DebounceInputSearch, S as StatInfoPP } from './PlaceholderListPP_CY4UbmDH.mjs';
import { ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_tWar_dvF.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaPublicacionesMiembros2",
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
    const filtroYear = ref("");
    const filtroTexto = ref("");
    const getCollabs = (element) => {
      const formatter = new Intl.ListFormat("es", {
        type: "conjunction",
        style: "long"
      });
      const miembrosF = [];
      if (Object.keys(element).length < 1) return "---";
      element.miembros_publicacion.forEach((el) => {
        miembrosF.push(el.nombreCompleto);
      });
      if (element.otrosAutores) {
        const otherCollabsArr = element.otrosAutores.split(";");
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
      () => [filtroEstatus.value, filtroYear.value, filtroTipo.value].reduce((a, b) => {
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
          const rowText = normalize(`${el.titulo} ${getCollabs(el)}`);
          return regExp.test(rowText);
        });
      }
      return newData;
    });
    const sortedData = computed(() => {
      if (filtroYear.value === "ASC") {
        return filteredData.value.toSorted(
          (a, b) => Number(a.year) - Number(b.year)
        );
      }
      if (filtroYear.value === "DESC") {
        return filteredData.value.toSorted(
          (a, b) => Number(b.year) - Number(a.year)
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
      const modal = document.getElementById(
        "modal_publicaciones"
      );
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
    const __returned__ = { props, isMounted, page, maxRows, rowData, filtroEstatus, filtroTipo, filtroYear, filtroTexto, getCollabs, recortarTexto, normalize, totalFiltros, filteredData, sortedData, paginatedData, totalPages, totalElements, modalData, openModal, StatInfoPP, DebounceInputSearch, List, PlaceholderListPP };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><dialog id="modal_publicaciones" class="modal modal-bottom sm:modal-middle not-prose"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><i class="bi bi-x text-2xl"></i></button></form><h3 class="text-lg text-balance font-bold">${ssrInterpolate($setup.modalData.titulo)}</h3><div class="py-4"><div class="grid grid-cols-2 grid-rows-3 gap-2 mb-2">`);
  _push(ssrRenderComponent($setup["StatInfoPP"], { class: "row-span-3" }, {
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
        _push2(`Autores`);
      } else {
        return [
          createTextVNode("Autores")
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
  _push(ssrRenderComponent($setup["StatInfoPP"], null, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-book-fill"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-book-fill" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ISSN`);
      } else {
        return [
          createTextVNode("ISSN")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.modalData.ISSN ?? "---")}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.modalData.ISSN ?? "---"), 1)
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
        _push2(`<i class="bi bi-calendar-fill"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-calendar-fill" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`A\xF1o de publicaci\xF3n`);
      } else {
        return [
          createTextVNode("A\xF1o de publicaci\xF3n")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.modalData.year)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.modalData.year), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent($setup["StatInfoPP"], { class: "w-full min-h-50" }, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-body-text"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-body-text" })
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Resumen`);
      } else {
        return [
          createTextVNode("Resumen")
        ];
      }
    }),
    data: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.modalData.descripcion ?? "---")}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.modalData.descripcion ?? "---"), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex justify-end mt-2">`);
  if ($setup.modalData.url) {
    _push(`<a class="btn btn-primary"${ssrRenderAttr("href", $setup.modalData.url ?? "#")} target="_blank"> Ver art\xEDculo <i class="bi bi-box-arrow-up-right"></i></a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></dialog>`);
  if (!$setup.isMounted) {
    _push(ssrRenderComponent($setup["PlaceholderListPP"], null, null, _parent));
  } else {
    _push(`<div class="sm:px-20 lg:px-40 not-prose"><div class="grid grid-cols-2 mb-2"><div class="dropdown col-span-2"><div tabindex="0" role="button" class="btn mb-2"><i class="bi bi-filter"></i> Filtros <div class="badge badge-xs badge-secondary">${ssrInterpolate($setup.totalFiltros)}</div></div><div tabindex="0" class="dropdown-content bg-base-100 shadow menu rounded-box w-80 sm:w-96"><div class="collapse collapse-arrow bg-base-100 border border-base-300"><input type="radio" name="filtros-proyectos"><div class="collapse-title font-semibold"><div class="indicator">`);
    if ($setup.filtroYear !== "") {
      _push(`<span class="indicator-item status status-secondary"></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(` A\xF1o de publicaci\xF3n </div></div><div class="collapse-content text-sm"><form class="filter"><input class="btn btn-square" type="reset" value="\xD7"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroYear, "DESC")) ? " checked" : ""} value="DESC" class="btn" type="radio" name="frameworks" aria-label="Del m\xE1s reciente al m\xE1s antig\xFCo"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroYear, "ASC")) ? " checked" : ""} value="ASC" class="btn" type="radio" name="frameworks" aria-label="Del m\xE1s antig\xFCo al m\xE1s reciente"></form></div></div><div class="collapse collapse-arrow bg-base-100 border border-base-300"><input type="radio" name="filtros-proyectos"><div class="collapse-title font-semibold"><div class="indicator">`);
    if ($setup.filtroTipo !== "") {
      _push(`<span class="indicator-item status status-secondary"></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(` Tipo </div></div><div class="collapse-content text-sm"><form class="filter"><input class="btn btn-square" type="reset" value="\xD7"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroTipo, "arbitrado")) ? " checked" : ""} value="arbitrado" class="btn" type="radio" name="frameworks" aria-label="Arbitrado"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroTipo, "memoria en extenso")) ? " checked" : ""} value="memoria en extenso" class="btn" type="radio" name="frameworks" aria-label="Memor\xEDa en extenso"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroTipo, "journal")) ? " checked" : ""} value="journal" class="btn" type="radio" name="frameworks" aria-label="Journal"><input${ssrIncludeBooleanAttr(ssrLooseEqual($setup.filtroTipo, "indexado")) ? " checked" : ""} value="indexado" class="btn" type="radio" name="frameworks" aria-label="Indexado"></form></div></div></div></div><div>`);
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
          _push2(`Todos las publicaciones`);
        } else {
          return [
            createTextVNode("Todos las publicaciones")
          ];
        }
      }),
      row: withCtx(({ data }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li class="list-row"${_scopeId}><div${_scopeId}><i class="bi bi-journal text-4xl"${_scopeId}></i></div><div${_scopeId}><div${_scopeId}>${ssrInterpolate($setup.getCollabs(data))}</div><div class="text-xs uppercase font-semibold opacity-60"${_scopeId}><span class="hidden sm:block"${_scopeId}>${ssrInterpolate(data.titulo)}</span><span class="sm:hidden"${_scopeId}>${ssrInterpolate($setup.recortarTexto(data.titulo))}</span></div></div><div class="list-col-wrap flex flex-wrap gap-2"${_scopeId}><div class="badge badge-info badge-xs"${_scopeId}><i class="bi bi-calendar-fill"${_scopeId}></i>${ssrInterpolate(data.year)}</div><div class="badge badge-neutral badge-xs"${_scopeId}><i class="bi bi-info-circle-fill"${_scopeId}></i>${ssrInterpolate(data.tipo?.toUpperCase())}</div><div class="badge badge-secondary badge-xs"${_scopeId}><i class="bi bi-book-fill"${_scopeId}></i>${ssrInterpolate(data.ISSN ?? "---")}</div></div><button class="btn btn-square btn-ghost"${_scopeId}><i class="bi bi-arrows-fullscreen text-xl"${_scopeId}></i></button></li>`);
        } else {
          return [
            (openBlock(), createBlock("li", {
              class: "list-row",
              key: `publicacion-${data.idpublicacion}`
            }, [
              createVNode("div", null, [
                createVNode("i", { class: "bi bi-journal text-4xl" })
              ]),
              createVNode("div", null, [
                createVNode("div", null, toDisplayString($setup.getCollabs(data)), 1),
                createVNode("div", { class: "text-xs uppercase font-semibold opacity-60" }, [
                  createVNode("span", { class: "hidden sm:block" }, toDisplayString(data.titulo), 1),
                  createVNode("span", { class: "sm:hidden" }, toDisplayString($setup.recortarTexto(data.titulo)), 1)
                ])
              ]),
              createVNode("div", { class: "list-col-wrap flex flex-wrap gap-2" }, [
                createVNode("div", { class: "badge badge-info badge-xs" }, [
                  createVNode("i", { class: "bi bi-calendar-fill" }),
                  createTextVNode(toDisplayString(data.year), 1)
                ]),
                createVNode("div", { class: "badge badge-neutral badge-xs" }, [
                  createVNode("i", { class: "bi bi-info-circle-fill" }),
                  createTextVNode(toDisplayString(data.tipo?.toUpperCase()), 1)
                ]),
                createVNode("div", { class: "badge badge-secondary badge-xs" }, [
                  createVNode("i", { class: "bi bi-book-fill" }),
                  createTextVNode(toDisplayString(data.ISSN ?? "---"), 1)
                ])
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
          _push2(`<li class="list-row"${_scopeId}><div${_scopeId}><i class="bi bi-emoji-frown-fill text-4xl"${_scopeId}></i></div><div${_scopeId}><div${_scopeId}>Sin publicaciones</div></div><p class="list-col-wrap text-xs"${_scopeId}> No existen registros que incluyan a este miembro del cuerpo academico como autor. </p></li>`);
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
                createVNode("div", null, "Sin publicaciones")
              ]),
              createVNode("p", { class: "list-col-wrap text-xs" }, " No existen registros que incluyan a este miembro del cuerpo academico como autor. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaPublicacionesMiembros2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListaPublicacionesMiembros2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ListaPublicacionesMiembros2 as L };
