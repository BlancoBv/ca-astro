/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_DmhofpIV.mjs';
import { toast } from 'vue3-toastify';
import { useSSRContext, defineComponent, ref, computed, onMounted, onUnmounted, toRaw, resolveDirective, withCtx, withDirectives, createVNode, vModelText, toDisplayString, vModelSelect, createTextVNode, openBlock, createBlock, Fragment, renderList, withModifiers, withKeys, mergeProps, reactive } from 'vue';
import { a as useGetData, u as useSendData } from '../../chunks/http_yWF3wTfY.mjs';
import { v as validateBuilder } from '../../chunks/zodValidations_7RuNDgkL.mjs';
import { a as script, s as script$1 } from '../../chunks/index_CBT2s1oX.mjs';
import { s as script$2 } from '../../chunks/index_DTPrYIW4.mjs';
import { s as script$3 } from '../../chunks/index_CGsuZwon.mjs';
import { f as formatDate, a as formatMoneda } from '../../chunks/format_Cetxi1N9.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttrs, ssrGetDirectiveProps, ssrGetDynamicModelProps } from 'vue/server-renderer';
/* empty css                                    */
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_Bxo6ggSM.mjs';
import { v as validatePerm, p as permType, $ as $$LayoutPanel } from '../../chunks/LayoutPanel_DFkgkw4R.mjs';
export { renderers } from '../../renderers.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListaProyectos",
  props: {
    data: {},
    isPending: { type: Boolean },
    mutationUpdate: {},
    miembros: {},
    refetch: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
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
    const miembros = computed(() => {
      return props?.miembros.map((el) => ({ label: el.nombreCompleto, value: el.idmiembro })) ?? [];
    });
    const colaboradores = ref([]);
    const handleEdit = (event) => {
      handleEdit: {
        const { data, newValue, field } = event;
        if (field === "miembrosCol") {
          if (data[field] !== toRaw(colaboradores.value)) {
            const prevValues = new Set(data[field]);
            const newValues = new Set(toRaw(colaboradores.value));
            const idsToDelete = prevValues.difference(newValues);
            const idsToAdd = newValues.difference(prevValues);
            props.mutationUpdate.mutate({ idproyecto: data.idproyecto, miembrosColabAdd: Array.from(idsToAdd), miembrosColabDelete: Array.from(idsToDelete) });
          }
          break handleEdit;
        }
        if (newValue !== data[field]) {
          props.mutationUpdate.mutate({ idproyecto: data.idproyecto, [field]: newValue });
        }
        break handleEdit;
      }
    };
    onMounted(() => {
      isMounted.value = true;
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    const __returned__ = { props, selectedItem, isMounted, items, miembros, colaboradores, handleEdit, get DataTable() {
      return script;
    }, get Column() {
      return script$1;
    }, get MultiSelect() {
      return script$2;
    }, get ContextMenu() {
      return script$3;
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
  const _directive_uppercase = resolveDirective("uppercase");
  let _temp0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent($setup["ContextMenu"], {
    ref: "cm",
    model: $setup.items,
    onHide: ($event) => $setup.selectedItem = null
  }, null, _parent));
  if (!$setup.isMounted) {
    _push(`<div class="skeleton h-96 w-full"></div>`);
  } else {
    _push(ssrRenderComponent($setup["DataTable"], {
      class: { "skeleton select-none": $setup.props.isPending, "cursor-wait select-none": $setup.props.mutationUpdate.isPending.value },
      value: $setup.props.data,
      paginator: true,
      rows: 5,
      "edit-mode": "cell",
      onCellEditComplete: $setup.handleEdit
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["Column"], {
            field: "clave",
            header: "Clave del proyecto",
            sortable: ""
          }, {
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input${ssrRenderAttr("value", data[field])} type="text" class="input input-bordered w-full max-w-xs"${_scopeId2}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    type: "text",
                    class: "input input-bordered w-full max-w-xs"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "titulo",
            header: "Titulo del proyecto"
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="w-60"${_scopeId2}>${ssrInterpolate(data[field])}</div>`);
              } else {
                return [
                  createVNode("div", { class: "w-60" }, toDisplayString(data[field]), 1)
                ];
              }
            }),
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<textarea class="textarea textarea-bordered h-24"${_scopeId2}>${ssrInterpolate(data[field])}</textarea>`);
              } else {
                return [
                  withDirectives(createVNode("textarea", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    class: "textarea textarea-bordered h-24"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
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
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<select class="select select-bordered w-full max-w-xs"${_scopeId2}><option disabled selected${_scopeId2}>Selecciona un tipo</option><option value="interno"${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], "interno") : ssrLooseEqual(data[field], "interno")) ? " selected" : ""}${_scopeId2}>Interno</option><option value="externo"${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], "externo") : ssrLooseEqual(data[field], "externo")) ? " selected" : ""}${_scopeId2}>Externo</option></select>`);
              } else {
                return [
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    class: "select select-bordered w-full max-w-xs"
                  }, [
                    createVNode("option", {
                      disabled: "",
                      selected: ""
                    }, "Selecciona un tipo"),
                    createVNode("option", { value: "interno" }, "Interno"),
                    createVNode("option", { value: "externo" }, "Externo")
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "director",
            header: "Director(a) responsable del proyecto"
          }, {
            body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(data.director_proyecto.nombreCompleto)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(data.director_proyecto.nombreCompleto), 1)
                ];
              }
            }),
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<select class="select select-bordered w-full max-w-xs"${_scopeId2}><option disabled selected value=""${_scopeId2}>Selecciona un miembro</option><!--[-->`);
                ssrRenderList($setup.props.miembros, (miembro) => {
                  _push3(`<option${ssrRenderAttr("value", miembro.idmiembro)}${_scopeId2}>${ssrInterpolate(miembro.nombreCompleto)}</option>`);
                });
                _push3(`<!--]--></select>`);
              } else {
                return [
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    class: "select select-bordered w-full max-w-xs"
                  }, [
                    createVNode("option", {
                      disabled: "",
                      selected: "",
                      value: ""
                    }, "Selecciona un miembro"),
                    (openBlock(true), createBlock(Fragment, null, renderList($setup.props.miembros, (miembro) => {
                      return openBlock(), createBlock("option", {
                        value: miembro.idmiembro
                      }, toDisplayString(miembro.nombreCompleto), 9, ["value"]);
                    }), 256))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "miembrosCol",
            header: "Miembros colaboradores"
          }, {
            body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(data.miembros_proyecto.map((el) => el.nombreCompleto).join(","))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(data.miembros_proyecto.map((el) => el.nombreCompleto).join(",")), 1)
                ];
              }
            }),
            editor: withCtx(({ data, field, editorSaveCallback, editorCancelCallback }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex gap-4 items-center mb-4"${_scopeId2}><form${_scopeId2}><button type="submit" class="btn btn-error btn-xs"${_scopeId2}>Cancelar</button></form><form${_scopeId2}><button type="submit" class="btn btn-primary btn-xs"${_scopeId2}>Guardar</button></form></div>`);
                _push3(ssrRenderComponent($setup["MultiSelect"], {
                  modelValue: $setup.colaboradores,
                  "onUpdate:modelValue": ($event) => $setup.colaboradores = $event,
                  onVnodeMounted: ($event) => $setup.colaboradores = data[field],
                  options: $setup.miembros,
                  "option-label": "label",
                  "option-value": "value",
                  display: "chip",
                  filter: "",
                  onKeydown: [() => {
                  }, () => {
                  }]
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode("div", { class: "flex gap-4 items-center mb-4" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(editorCancelCallback, ["prevent"])
                    }, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-error btn-xs"
                      }, "Cancelar")
                    ], 40, ["onSubmit"]),
                    createVNode("form", {
                      onSubmit: withModifiers(editorSaveCallback, ["prevent"])
                    }, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-primary btn-xs"
                      }, "Guardar")
                    ], 40, ["onSubmit"])
                  ]),
                  createVNode($setup["MultiSelect"], {
                    modelValue: $setup.colaboradores,
                    "onUpdate:modelValue": ($event) => $setup.colaboradores = $event,
                    onVnodeMounted: ($event) => $setup.colaboradores = data[field],
                    options: $setup.miembros,
                    "option-label": "label",
                    "option-value": "value",
                    display: "chip",
                    filter: "",
                    onKeydown: [
                      withKeys(withModifiers(() => {
                      }, ["stop"]), ["enter"]),
                      withKeys(withModifiers(() => {
                      }, ["stop"]), ["escape"])
                    ]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onVnodeMounted", "options", "onKeydown"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "otrosColaboradores",
            header: "Otros colaboradores"
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(data[field] ?? "---")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(data[field] ?? "---"), 1)
                ];
              }
            }),
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<textarea class="textarea textarea-bordered h-24"${_scopeId2}>${ssrInterpolate(data[field])}</textarea>`);
              } else {
                return [
                  withDirectives(createVNode("textarea", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    class: "textarea textarea-bordered h-24"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
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
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<select class="select select-bordered w-full max-w-xs"${_scopeId2}><option disabled selected value=""${_scopeId2}>Selecciona un estatus</option><option value="en proceso"${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], "en proceso") : ssrLooseEqual(data[field], "en proceso")) ? " selected" : ""}${_scopeId2}>En proceso</option><option value="finalizado"${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], "finalizado") : ssrLooseEqual(data[field], "finalizado")) ? " selected" : ""}${_scopeId2}>Finalizado</option><option value="no finalizado"${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], "no finalizado") : ssrLooseEqual(data[field], "no finalizado")) ? " selected" : ""}${_scopeId2}>No finalizado</option></select>`);
              } else {
                return [
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    class: "select select-bordered w-full max-w-xs"
                  }, [
                    createVNode("option", {
                      disabled: "",
                      selected: "",
                      value: ""
                    }, "Selecciona un estatus"),
                    createVNode("option", { value: "en proceso" }, "En proceso"),
                    createVNode("option", { value: "finalizado" }, "Finalizado"),
                    createVNode("option", { value: "no finalizado" }, "No finalizado")
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, data[field]]
                  ])
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
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input${ssrRenderAttr("value", data[field])} type="number" step="0.01" min="0" class="input input-bordered w-full max-w-xs"${_scopeId2}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "input input-bordered w-full max-w-xs"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "convocatoria",
            header: "Convocatoria"
          }, {
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input${ssrRenderAttrs((_temp0 = mergeProps({
                  value: data[field],
                  type: "text",
                  class: "input input-bordered w-full max-w-xs"
                }, ssrGetDirectiveProps(_ctx, _directive_uppercase)), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, data[field]))))}${_scopeId2}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    type: "text",
                    class: "input input-bordered w-full max-w-xs"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, data[field]],
                    [_directive_uppercase]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "fechaInicio",
            header: "Fecha de inicio del proyecto",
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
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input${ssrRenderAttr("value", data[field])} type="date" class="input input-bordered w-full max-w-xs"${_scopeId2}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    type: "date",
                    class: "input input-bordered w-full max-w-xs"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "fechaTermino",
            header: "Fecha de termino del proyecto",
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
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input${ssrRenderAttr("value", data[field])} type="date"${ssrRenderAttr("min", data.fechaInicio)} class="input input-bordered w-full max-w-xs"${_scopeId2}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    type: "date",
                    min: data.fechaInicio,
                    class: "input input-bordered w-full max-w-xs"
                  }, null, 8, ["onUpdate:modelValue", "min"]), [
                    [vModelText, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "visible",
            header: "Visibilidad del proyecto"
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="${ssrRenderClass([{
                  "badge-success": data[field],
                  "badge-error": !data[field]
                }, "badge h-max"])}"${_scopeId2}>${ssrInterpolate(data[field] ? "Visible" : "No visible")}</div>`);
              } else {
                return [
                  createVNode("div", {
                    class: ["badge h-max", {
                      "badge-success": data[field],
                      "badge-error": !data[field]
                    }]
                  }, toDisplayString(data[field] ? "Visible" : "No visible"), 3)
                ];
              }
            }),
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<select class="select select-bordered w-full max-w-xs"${_scopeId2}><option disabled selected value=""${_scopeId2}>Selecciona una visibilidad</option><option${ssrRenderAttr("value", true)}${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], true) : ssrLooseEqual(data[field], true)) ? " selected" : ""}${_scopeId2}>Visible</option><option${ssrRenderAttr("value", false)}${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], false) : ssrLooseEqual(data[field], false)) ? " selected" : ""}${_scopeId2}>No visible</option></select>`);
              } else {
                return [
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    class: "select select-bordered w-full max-w-xs"
                  }, [
                    createVNode("option", {
                      disabled: "",
                      selected: "",
                      value: ""
                    }, "Selecciona una visibilidad"),
                    createVNode("option", { value: true }, "Visible"),
                    createVNode("option", { value: false }, "No visible")
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "fechaInicioEntrega",
            header: "Fecha de inicio de entrega final",
            sortable: ""
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(data[field] ? $setup.formatDate(data[field], "DD-MM-YYYY") : "---")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(data[field] ? $setup.formatDate(data[field], "DD-MM-YYYY") : "---"), 1)
                ];
              }
            }),
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input${ssrRenderAttr("value", data[field])} type="date" class="input input-bordered w-full max-w-xs"${_scopeId2}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    type: "date",
                    class: "input input-bordered w-full max-w-xs"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, data[field]]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "fechaTerminoEntrega",
            header: "Fecha de termino de entrega final",
            sortable: ""
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(data[field] ? $setup.formatDate(data[field], "DD-MM-YYYY") : "---")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(data[field] ? $setup.formatDate(data[field], "DD-MM-YYYY") : "---"), 1)
                ];
              }
            }),
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input${ssrRenderAttr("value", data[field])} type="date"${ssrRenderAttr("min", data.fechaInicioEntrega)} class="input input-bordered w-full max-w-xs"${_scopeId2}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    type: "date",
                    min: data.fechaInicioEntrega,
                    class: "input input-bordered w-full max-w-xs"
                  }, null, 8, ["onUpdate:modelValue", "min"]), [
                    [vModelText, data[field]]
                  ])
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
          _push2(ssrRenderComponent($setup["Column"], {
            field: "updatedAt",
            header: "Ultima actualizaci\xF3n",
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
            }, {
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  type: "text",
                  class: "input input-bordered w-full max-w-xs"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, data[field]]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "titulo",
              header: "Titulo del proyecto"
            }, {
              body: withCtx(({ data, field }) => [
                createVNode("div", { class: "w-60" }, toDisplayString(data[field]), 1)
              ]),
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("textarea", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  class: "textarea textarea-bordered h-24"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, data[field]]
                ])
              ]),
              _: 1
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
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  class: "select select-bordered w-full max-w-xs"
                }, [
                  createVNode("option", {
                    disabled: "",
                    selected: ""
                  }, "Selecciona un tipo"),
                  createVNode("option", { value: "interno" }, "Interno"),
                  createVNode("option", { value: "externo" }, "Externo")
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, data[field]]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "director",
              header: "Director(a) responsable del proyecto"
            }, {
              body: withCtx(({ data }) => [
                createTextVNode(toDisplayString(data.director_proyecto.nombreCompleto), 1)
              ]),
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  class: "select select-bordered w-full max-w-xs"
                }, [
                  createVNode("option", {
                    disabled: "",
                    selected: "",
                    value: ""
                  }, "Selecciona un miembro"),
                  (openBlock(true), createBlock(Fragment, null, renderList($setup.props.miembros, (miembro) => {
                    return openBlock(), createBlock("option", {
                      value: miembro.idmiembro
                    }, toDisplayString(miembro.nombreCompleto), 9, ["value"]);
                  }), 256))
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, data[field]]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "miembrosCol",
              header: "Miembros colaboradores"
            }, {
              body: withCtx(({ data }) => [
                createTextVNode(toDisplayString(data.miembros_proyecto.map((el) => el.nombreCompleto).join(",")), 1)
              ]),
              editor: withCtx(({ data, field, editorSaveCallback, editorCancelCallback }) => [
                createVNode("div", { class: "flex gap-4 items-center mb-4" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(editorCancelCallback, ["prevent"])
                  }, [
                    createVNode("button", {
                      type: "submit",
                      class: "btn btn-error btn-xs"
                    }, "Cancelar")
                  ], 40, ["onSubmit"]),
                  createVNode("form", {
                    onSubmit: withModifiers(editorSaveCallback, ["prevent"])
                  }, [
                    createVNode("button", {
                      type: "submit",
                      class: "btn btn-primary btn-xs"
                    }, "Guardar")
                  ], 40, ["onSubmit"])
                ]),
                createVNode($setup["MultiSelect"], {
                  modelValue: $setup.colaboradores,
                  "onUpdate:modelValue": ($event) => $setup.colaboradores = $event,
                  onVnodeMounted: ($event) => $setup.colaboradores = data[field],
                  options: $setup.miembros,
                  "option-label": "label",
                  "option-value": "value",
                  display: "chip",
                  filter: "",
                  onKeydown: [
                    withKeys(withModifiers(() => {
                    }, ["stop"]), ["enter"]),
                    withKeys(withModifiers(() => {
                    }, ["stop"]), ["escape"])
                  ]
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onVnodeMounted", "options", "onKeydown"])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "otrosColaboradores",
              header: "Otros colaboradores"
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString(data[field] ?? "---"), 1)
              ]),
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("textarea", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  class: "textarea textarea-bordered h-24"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, data[field]]
                ])
              ]),
              _: 1
            }),
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
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  class: "select select-bordered w-full max-w-xs"
                }, [
                  createVNode("option", {
                    disabled: "",
                    selected: "",
                    value: ""
                  }, "Selecciona un estatus"),
                  createVNode("option", { value: "en proceso" }, "En proceso"),
                  createVNode("option", { value: "finalizado" }, "Finalizado"),
                  createVNode("option", { value: "no finalizado" }, "No finalizado")
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, data[field]]
                ])
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
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  type: "number",
                  step: "0.01",
                  min: "0",
                  class: "input input-bordered w-full max-w-xs"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, data[field]]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "convocatoria",
              header: "Convocatoria"
            }, {
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  type: "text",
                  class: "input input-bordered w-full max-w-xs"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, data[field]],
                  [_directive_uppercase]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "fechaInicio",
              header: "Fecha de inicio del proyecto",
              sortable: ""
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString($setup.formatDate(data[field], "DD-MM-YYYY")), 1)
              ]),
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  type: "date",
                  class: "input input-bordered w-full max-w-xs"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, data[field]]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "fechaTermino",
              header: "Fecha de termino del proyecto",
              sortable: ""
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString($setup.formatDate(data[field], "DD-MM-YYYY")), 1)
              ]),
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  type: "date",
                  min: data.fechaInicio,
                  class: "input input-bordered w-full max-w-xs"
                }, null, 8, ["onUpdate:modelValue", "min"]), [
                  [vModelText, data[field]]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "visible",
              header: "Visibilidad del proyecto"
            }, {
              body: withCtx(({ data, field }) => [
                createVNode("div", {
                  class: ["badge h-max", {
                    "badge-success": data[field],
                    "badge-error": !data[field]
                  }]
                }, toDisplayString(data[field] ? "Visible" : "No visible"), 3)
              ]),
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  class: "select select-bordered w-full max-w-xs"
                }, [
                  createVNode("option", {
                    disabled: "",
                    selected: "",
                    value: ""
                  }, "Selecciona una visibilidad"),
                  createVNode("option", { value: true }, "Visible"),
                  createVNode("option", { value: false }, "No visible")
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, data[field]]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "fechaInicioEntrega",
              header: "Fecha de inicio de entrega final",
              sortable: ""
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString(data[field] ? $setup.formatDate(data[field], "DD-MM-YYYY") : "---"), 1)
              ]),
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  type: "date",
                  class: "input input-bordered w-full max-w-xs"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, data[field]]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "fechaTerminoEntrega",
              header: "Fecha de termino de entrega final",
              sortable: ""
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString(data[field] ? $setup.formatDate(data[field], "DD-MM-YYYY") : "---"), 1)
              ]),
              editor: withCtx(({ data, field }) => [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  type: "date",
                  min: data.fechaInicioEntrega,
                  class: "input input-bordered w-full max-w-xs"
                }, null, 8, ["onUpdate:modelValue", "min"]), [
                  [vModelText, data[field]]
                ])
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
            }),
            createVNode($setup["Column"], {
              field: "updatedAt",
              header: "Ultima actualizaci\xF3n",
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
    const { data, isPending, refetch } = useGetData("proyectos", "proyectosData");
    const noMiembrosColab = ref(false);
    const { data: miembros, isPending: miembrosIsPending } = useGetData("miembros", "miembrosData");
    const addProyecto = useSendData("proyectos", "post", {
      onSuccess() {
        refetch();
        body.miembrosColaboradores = [];
        body.titulo = "";
        body.clave = "";
        body.fechaInicio = "";
        body.fechaTermino = "";
        body.estatus = "";
        body.tipo = "";
        body.otrosColaboradores = "";
        body.director = "";
        body.monto = "";
        body.fechaInicioEntrega = "";
        body.fechaTerminoEntrega = "";
        body.convocatoria = "";
      }
    });
    const updateProyecto = useSendData("proyectos", "put", {
      onSuccess() {
        refetch();
      }
    });
    const body = reactive({
      miembrosColaboradores: [],
      titulo: "",
      clave: "",
      fechaInicio: "",
      fechaTermino: "",
      estatus: "",
      tipo: "",
      director: "",
      monto: "",
      fechaInicioEntrega: "",
      fechaTerminoEntrega: "",
      convocatoria: "",
      visible: true
    });
    const proyectos = computed(() => {
      return data.value?.response.map((el) => ({ ...el, director: el.director_proyecto.idmiembro, miembrosCol: el.miembros_proyecto.map((miembro) => miembro.idmiembro) })) ?? [];
    });
    const validator = new validateBuilder();
    const handleSubmit = () => {
      handleSubmit: {
        if (body.miembrosColaboradores.length > 0) {
          noMiembrosColab.value = false;
        }
        if (body.miembrosColaboradores.length < 1) {
          noMiembrosColab.value = true;
          toast.error("No seleccionaste ningun miembro colaborador.");
          break handleSubmit;
        }
        addProyecto.mutate(body);
        break handleSubmit;
      }
    };
    const __returned__ = { data, isPending, refetch, noMiembrosColab, miembros, miembrosIsPending, addProyecto, updateProyecto, body, proyectos, validator, handleSubmit, ListaProyectos, get MultiSelect() {
      return script$2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_uppercase = resolveDirective("uppercase");
  let _temp0;
  _push(`<!--[--><form class="mb-4 grid grid-cols-4 grid-rows-3 gap-4 items-end"><label class="form-control w-full max-w-xs h-full row-span-2"><div class="label"><span class="label-text">Titulo del proyecto</span></div><textarea class="${ssrRenderClass([{ "textarea-error": $setup.validator.setErrorObject($setup.addProyecto.error.value).setField("titulo").getValidator().isError() }, "textarea textarea-bordered h-full"])}" required>${ssrInterpolate($setup.body.titulo)}</textarea></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Clave</span></div><input type="text"${ssrRenderAttr("value", $setup.body.clave)} required class="${ssrRenderClass([{ "input-error": $setup.validator.setErrorObject($setup.addProyecto.error.value).setField("clave").getValidator().isError() }, "input input-bordered w-full max-w-xs"])}"></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Fecha de inicio</span></div><input type="date"${ssrRenderAttr("value", $setup.body.fechaInicio)} class="input input-bordered w-full max-w-xs" required></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Fecha de termino</span></div><input type="date"${ssrRenderAttr("min", $setup.body.fechaInicio)}${ssrRenderAttr("value", $setup.body.fechaTermino)} class="input input-bordered w-full max-w-xs"></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Monto del proyecto</span></div><input type="number" placeholder="50.00" step="0.01" min="0.00"${ssrRenderAttr("value", $setup.body.monto)} class="input input-bordered w-full max-w-xs" required></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Estatus</span></div><select class="select select-bordered" required><option disabled selected value="">Selecciona un estatus</option><option value="en proceso"${ssrIncludeBooleanAttr(Array.isArray($setup.body.estatus) ? ssrLooseContain($setup.body.estatus, "en proceso") : ssrLooseEqual($setup.body.estatus, "en proceso")) ? " selected" : ""}>En proceso</option><option value="finalizado"${ssrIncludeBooleanAttr(Array.isArray($setup.body.estatus) ? ssrLooseContain($setup.body.estatus, "finalizado") : ssrLooseEqual($setup.body.estatus, "finalizado")) ? " selected" : ""}>Finalizado</option><option value="no finalizado"${ssrIncludeBooleanAttr(Array.isArray($setup.body.estatus) ? ssrLooseContain($setup.body.estatus, "no finalizado") : ssrLooseEqual($setup.body.estatus, "no finalizado")) ? " selected" : ""}>No finalizado</option></select></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Tipo de proyecto</span></div><select class="select select-bordered" required><option disabled selected value="">Selecciona un tipo</option><option value="interno"${ssrIncludeBooleanAttr(Array.isArray($setup.body.tipo) ? ssrLooseContain($setup.body.tipo, "interno") : ssrLooseEqual($setup.body.tipo, "interno")) ? " selected" : ""}>Interno</option><option value="externo"${ssrIncludeBooleanAttr(Array.isArray($setup.body.tipo) ? ssrLooseContain($setup.body.tipo, "externo") : ssrLooseEqual($setup.body.tipo, "externo")) ? " selected" : ""}>Externo</option></select></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Director</span></div><select class="${ssrRenderClass([{ "skeleton": $setup.miembrosIsPending }, "select select-bordered"])}" required>`);
  if ($setup.miembrosIsPending) {
    _push(`<option disabled selected value=""> Cargando miembros... </option>`);
  } else {
    _push(`<!--[--><option disabled selected value="">Selecciona un miembro</option><!--[-->`);
    ssrRenderList($setup.miembros.response, (miembro) => {
      _push(`<option${ssrRenderAttr("value", miembro.idmiembro)}>${ssrInterpolate(miembro.nombreCompleto)}</option>`);
    });
    _push(`<!--]--><!--]-->`);
  }
  _push(`</select></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Otros colaboradores</span><span class="label-text-alt">Separar con &quot;;&quot;</span></div><input type="text"${ssrRenderAttr("value", $setup.body.otrosColaboradores)} class="${ssrRenderClass([{ "input-error": $setup.validator.setErrorObject($setup.addProyecto.error.value).setField("otrosColaboradores").getValidator().isError() }, "input input-bordered w-full max-w-xs"])}"></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Fecha de inicio de entrega</span></div><input type="date"${ssrRenderAttr("value", $setup.body.fechaInicioEntrega)} class="input input-bordered w-full max-w-xs"></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Fecha de termino de entrega</span></div><input type="date"${ssrRenderAttr("min", $setup.body.fechaInicioEntrega)}${ssrRenderAttr("value", $setup.body.fechaTerminoEntrega)} class="input input-bordered w-full max-w-xs"></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Convocatoria</span></div><input${ssrRenderAttrs((_temp0 = mergeProps({
    type: "text",
    value: $setup.body.convocatoria,
    placeholder: "TECNM",
    class: ["input input-bordered w-full max-w-xs", { "input-error": $setup.validator.setErrorObject($setup.addProyecto.error.value).setField("convocatoria").getValidator().isError() }]
  }, ssrGetDirectiveProps(_ctx, _directive_uppercase)), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, $setup.body.convocatoria))))}></label><div class="w-full max-w-xs"><div class="label"><span class="label-text">Miembros colaboradores</span>`);
  if ($setup.noMiembrosColab) {
    _push(`<span class="label-text-alt text-error">**</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent($setup["MultiSelect"], {
    modelValue: $setup.body.miembrosColaboradores,
    "onUpdate:modelValue": ($event) => $setup.body.miembrosColaboradores = $event,
    display: "chip",
    options: $setup.miembros?.response,
    optionLabel: "nombreCompleto",
    "option-value": "idmiembro",
    filter: "",
    placeholder: "Selecciona uno o m\xE1s miembros",
    "max-selected-labels": 2,
    class: { "input-error": $setup.noMiembrosColab || $setup.validator.setErrorObject($setup.addProyecto.error.value).setField("miembrosColaboradores").getValidator().isError() }
  }, null, _parent));
  _push(`</div><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr($setup.addProyecto.isPending.value) ? " disabled" : ""}>A\xF1adir proyecto</button></form>`);
  _push(ssrRenderComponent($setup["ListaProyectos"], {
    data: $setup.proyectos,
    mutationUpdate: $setup.updateProyecto,
    "is-pending": $setup.isPending,
    miembros: $setup.miembros?.response ?? [],
    refetch: $setup.refetch
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddProyecto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddProyecto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.locals;
  const isInvalid = await validatePerm(user?.idRol, permType.r, "proyectos");
  if (isInvalid) {
    return Astro2.redirect("/404");
  }
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
