/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_DmhofpIV.mjs';
import { toast } from 'vue3-toastify';
import { useSSRContext, defineComponent, ref, computed, onMounted, onUnmounted, toRaw, mergeProps, withCtx, createTextVNode, toDisplayString, withDirectives, createVNode, vModelText, vModelSelect, withModifiers, withKeys, reactive } from 'vue';
import { a as useGetData, u as useSendData } from '../../chunks/http_yWF3wTfY.mjs';
import { s as script, a as script$1 } from '../../chunks/index_h5t5GPhD.mjs';
import { s as script$2 } from '../../chunks/index_CnhkfiX6.mjs';
import { f as formatDate } from '../../chunks/format_CRU5uAFP.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from 'vue/server-renderer';
/* empty css                                    */
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_3ktPLYsj.mjs';
import { v as validateBuilder } from '../../chunks/zodValidations_7RuNDgkL.mjs';
import { $ as $$LayoutPanel } from '../../chunks/LayoutPanel_BulQclBU.mjs';
export { renderers } from '../../renderers.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListaPublicaciones",
  props: {
    data: {},
    isPending: { type: Boolean },
    mutationUpdate: {},
    miembros: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isMounted = ref(false);
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
            props.mutationUpdate.mutate({ idpublicacion: data.idpublicacion, miembrosColabAdd: Array.from(idsToAdd), miembrosColabDelete: Array.from(idsToDelete) });
          }
          break handleEdit;
        }
        if (newValue !== data[field]) {
          props.mutationUpdate.mutate({ idpublicacion: data.idpublicacion, [field]: newValue });
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
    const __returned__ = { props, isMounted, miembros, colaboradores, handleEdit, get DataTable() {
      return script;
    }, get Column() {
      return script$1;
    }, get MultiSelect() {
      return script$2;
    }, get formatDate() {
      return formatDate;
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
      class: { "skeleton select-none": $setup.props.isPending, "cursor-wait select-none": $setup.props.mutationUpdate.isPending.value },
      value: $setup.props.data,
      paginator: true,
      rows: 5,
      "edit-mode": "cell",
      onCellEditComplete: $setup.handleEdit
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["Column"], {
            field: "ISSN",
            header: "ISSN"
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
            header: "Titulo de la publicaci\xF3n"
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
            field: "year",
            header: "A\xF1o"
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
            field: "tipo",
            header: "Tipo",
            sortable: ""
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="badge badge-info h-max"${_scopeId2}>${ssrInterpolate(data[field].toUpperCase())}</div>`);
              } else {
                return [
                  createVNode("div", { class: "badge badge-info h-max" }, toDisplayString(data[field].toUpperCase()), 1)
                ];
              }
            }),
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<select class="select select-bordered w-full max-w-xs"${_scopeId2}><option disabled selected${_scopeId2}>Selecciona un tipo</option><option value="arbitrado"${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], "arbitrado") : ssrLooseEqual(data[field], "arbitrado")) ? " selected" : ""}${_scopeId2}>Arbitrado</option><option value="memoria en extenso"${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], "memoria en extenso") : ssrLooseEqual(data[field], "memoria en extenso")) ? " selected" : ""}${_scopeId2}>Memoria en extenso</option><option value="journa"${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], "journa") : ssrLooseEqual(data[field], "journa")) ? " selected" : ""}${_scopeId2}>Journal</option><option value="indexado"${ssrIncludeBooleanAttr(Array.isArray(data[field]) ? ssrLooseContain(data[field], "indexado") : ssrLooseEqual(data[field], "indexado")) ? " selected" : ""}${_scopeId2}>Indexado</option></select>`);
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
                    createVNode("option", { value: "arbitrado" }, "Arbitrado"),
                    createVNode("option", { value: "memoria en extenso" }, "Memoria en extenso"),
                    createVNode("option", { value: "journa" }, "Journal"),
                    createVNode("option", { value: "indexado" }, "Indexado")
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
            header: "Miembros autores"
          }, {
            body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(data.miembros_publicacion.map((el) => el.nombreCompleto).join(","))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(data.miembros_publicacion.map((el) => el.nombreCompleto).join(",")), 1)
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
            field: "otrosAutores",
            header: "Otros autores"
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
            field: "descripcion",
            header: "Descripci\xF3n"
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
            field: "url",
            header: "URL (DOI u otro)"
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
            field: "visible",
            header: "Visibilidad de la publicaci\xF3n",
            sortable: ""
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
              field: "ISSN",
              header: "ISSN"
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString(data[field] ?? "---"), 1)
              ]),
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
              header: "Titulo de la publicaci\xF3n"
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
              field: "year",
              header: "A\xF1o"
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
              field: "tipo",
              header: "Tipo",
              sortable: ""
            }, {
              body: withCtx(({ data, field }) => [
                createVNode("div", { class: "badge badge-info h-max" }, toDisplayString(data[field].toUpperCase()), 1)
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
                  createVNode("option", { value: "arbitrado" }, "Arbitrado"),
                  createVNode("option", { value: "memoria en extenso" }, "Memoria en extenso"),
                  createVNode("option", { value: "journa" }, "Journal"),
                  createVNode("option", { value: "indexado" }, "Indexado")
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, data[field]]
                ])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "miembrosCol",
              header: "Miembros autores"
            }, {
              body: withCtx(({ data }) => [
                createTextVNode(toDisplayString(data.miembros_publicacion.map((el) => el.nombreCompleto).join(",")), 1)
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
              field: "otrosAutores",
              header: "Otros autores"
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
              field: "descripcion",
              header: "Descripci\xF3n"
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
              field: "url",
              header: "URL (DOI u otro)"
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
              field: "visible",
              header: "Visibilidad de la publicaci\xF3n",
              sortable: ""
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaPublicaciones.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListaPublicaciones = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddPublicaciones",
  setup(__props, { expose: __expose }) {
    __expose();
    const validator = new validateBuilder();
    const { data, isPending, refetch } = useGetData("publicaciones", "publicacionesData");
    const { data: miembros } = useGetData("miembros", "miembrosData");
    const noMiembrosColab = ref(false);
    const addPublicacion = useSendData("publicaciones", "post", {
      onSuccess() {
        body.titulo = "";
        body.ISSN = null;
        body.descripcion = null;
        body.year = "";
        body.url = null;
        body.miembrosColaboradores = [];
        body.tipo = "";
        body.otrosAutores = null;
        refetch();
      }
    });
    const updatePublicaciones = useSendData("publicaciones", "put", {
      onSuccess() {
        refetch();
      }
    });
    const body = reactive({ titulo: "", ISSN: null, descripcion: null, year: "", url: null, miembrosColaboradores: [], visible: true, tipo: "", otrosAutores: null });
    const proyectos = computed(() => {
      return data.value?.response.map((el) => ({ ...el, miembrosCol: el.miembros_publicacion.map((miembro) => miembro.idmiembro) })) ?? [];
    });
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
        addPublicacion.mutate(body);
        break handleSubmit;
      }
    };
    const __returned__ = { validator, data, isPending, refetch, miembros, noMiembrosColab, addPublicacion, updatePublicaciones, body, proyectos, handleSubmit, ListaPublicaciones, get MultiSelect() {
      return script$2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><form class="mb-4 grid grid-cols-4 grid-rows-3 gap-4 items-end"><label class="form-control w-full max-w-xs h-full row-span-2"><div class="label"><span class="label-text">Titulo</span></div><textarea class="${ssrRenderClass([{ "textarea-error": $setup.validator.setErrorObject($setup.addPublicacion.error.value).setField("titulo").getValidator().isError() }, "textarea textarea-bordered h-full"])}" required>${ssrInterpolate($setup.body.titulo)}</textarea></label><label class="form-control w-full max-w-xs h-full row-span-2"><div class="label"><span class="label-text">Descripci\xF3n</span></div><textarea class="${ssrRenderClass([{ "textarea-error": $setup.validator.setErrorObject($setup.addPublicacion.error.value).setField("titulo").getValidator().isError() }, "textarea textarea-bordered h-full"])}">${ssrInterpolate($setup.body.descripcion)}</textarea></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">ISSN</span></div><input type="text"${ssrRenderAttr("value", $setup.body.ISSN)} class="${ssrRenderClass([{ "input-error": $setup.validator.setErrorObject($setup.addPublicacion.error.value).setField("clave").getValidator().isError() }, "input input-bordered w-full max-w-xs"])}"></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Otros autores</span><span class="label-text-alt">Separar con &quot;;&quot;</span></div><input type="text"${ssrRenderAttr("value", $setup.body.otrosAutores)} class="${ssrRenderClass([{ "input-error": $setup.validator.setErrorObject($setup.addPublicacion.error.value).setField("clave").getValidator().isError() }, "input input-bordered w-full max-w-xs"])}"></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">A\xF1o de publicaci\xF3n</span></div><input type="text"${ssrRenderAttr("value", $setup.body.year)} required class="${ssrRenderClass([{ "input-error": $setup.validator.setErrorObject($setup.addPublicacion.error.value).setField("clave").getValidator().isError() }, "input input-bordered w-full max-w-xs"])}"></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">URL (doi, etc.)</span></div><input type="text"${ssrRenderAttr("value", $setup.body.url)} class="${ssrRenderClass([{ "input-error": $setup.validator.setErrorObject($setup.addPublicacion.error.value).setField("clave").getValidator().isError() }, "input input-bordered w-full max-w-xs"])}"></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Tipo</span></div><select class="select select-bordered" required><option disabled selected value="">Selecciona un tipo</option><option value="arbitrado"${ssrIncludeBooleanAttr(Array.isArray($setup.body.tipo) ? ssrLooseContain($setup.body.tipo, "arbitrado") : ssrLooseEqual($setup.body.tipo, "arbitrado")) ? " selected" : ""}>Arbitrado</option><option value="memoria en extenso"${ssrIncludeBooleanAttr(Array.isArray($setup.body.tipo) ? ssrLooseContain($setup.body.tipo, "memoria en extenso") : ssrLooseEqual($setup.body.tipo, "memoria en extenso")) ? " selected" : ""}>Memoria en extenso</option><option value="journal"${ssrIncludeBooleanAttr(Array.isArray($setup.body.tipo) ? ssrLooseContain($setup.body.tipo, "journal") : ssrLooseEqual($setup.body.tipo, "journal")) ? " selected" : ""}>Journal</option><option value="indexado"${ssrIncludeBooleanAttr(Array.isArray($setup.body.tipo) ? ssrLooseContain($setup.body.tipo, "indexado") : ssrLooseEqual($setup.body.tipo, "indexado")) ? " selected" : ""}>Indexado</option></select></label><div class="w-full max-w-xs"><div class="label"><span class="label-text">Miembros colaboradores</span>`);
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
    class: { "input-error": $setup.noMiembrosColab || $setup.validator.setErrorObject($setup.addPublicacion.error.value).setField("miembrosColaboradores").getValidator().isError() }
  }, null, _parent));
  _push(`</div><button class="btn btn-primary">A\xF1adir publicaci\xF3n</button></form>`);
  _push(ssrRenderComponent($setup["ListaPublicaciones"], {
    data: $setup.proyectos ?? [],
    "is-pending": $setup.isPending,
    miembros: $setup.miembros?.response ?? [],
    "mutation-update": $setup.updatePublicaciones
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddPublicaciones.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddPublicaciones = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Publicaciones" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddPublicaciones", AddPublicaciones, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/forms/AddPublicaciones.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/publicaciones/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/publicaciones/index.astro";
const $$url = "/panel/publicaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
