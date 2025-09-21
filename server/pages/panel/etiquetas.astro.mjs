import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_PXGLLX5r.mjs';
import { v as validatePerm, p as permType, $ as $$LayoutPanel } from '../../chunks/LayoutPanel_2cEuQ9dt.mjs';
import 'vue3-toastify';
import { defineComponent, useSSRContext, ref, onMounted, onUnmounted, resolveDirective, mergeProps, withCtx, withDirectives, createVNode, vModelText, createTextVNode, toDisplayString, reactive } from 'vue';
import { I as Input } from '../../chunks/Input_CnxJ8EI2.mjs';
import { a as useGetData, u as useSendData } from '../../chunks/http_BVCTMF4U.mjs';
import { a as script, b as script$1 } from '../../chunks/index_C__mFKYf.mjs';
import { f as formatDate } from '../../chunks/format_CRU5uAFP.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_tWar_dvF.mjs';
export { renderers } from '../../renderers.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListaEtiquetas",
  props: {
    data: {},
    isPending: { type: Boolean },
    mutationUpdate: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isMounted = ref(false);
    const handleEdit = (event) => {
      handleEdit: {
        const { data, newValue, field } = event;
        if (newValue !== data[field]) {
          props.mutationUpdate.mutate({
            idetiqueta: data.idetiqueta,
            [field]: newValue
          });
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
    const __returned__ = { props, isMounted, handleEdit, get DataTable() {
      return script$1;
    }, get Column() {
      return script;
    }, get formatDate() {
      return formatDate;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_uppercase = resolveDirective("uppercase");
  let _temp0;
  if (!$setup.isMounted) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "skeleton h-96 w-full" }, _attrs))}></div>`);
  } else {
    _push(ssrRenderComponent($setup["DataTable"], mergeProps({
      class: {
        "skeleton select-none": $setup.props.isPending,
        "cursor-wait select-none": $setup.props.mutationUpdate.isPending.value
      },
      value: $setup.props.data,
      paginator: true,
      rows: 5,
      "edit-mode": "cell",
      onCellEditComplete: $setup.handleEdit
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["Column"], {
            field: "nombre",
            header: "Nombre"
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
                _push3(`<input${ssrRenderAttrs((_temp0 = mergeProps({
                  value: data[field],
                  type: "text",
                  class: "input input-bordered w-full max-w-xs"
                }, ssrGetDirectiveProps(_ctx, _directive_uppercase, data[field])), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, data[field]))))}${_scopeId2}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    type: "text",
                    class: "input input-bordered w-full max-w-xs"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, data[field]],
                    [_directive_uppercase, data[field]]
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
              field: "nombre",
              header: "Nombre"
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
                  [vModelText, data[field]],
                  [_directive_uppercase, data[field]]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaEtiquetas.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListaEtiquetas = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddEtiqueta",
  props: {
    user: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const body = reactive({ nombre: "", idUsuario: props.user });
    const { data, isError, isPending, refetch } = useGetData("etiquetas", "etiquetasData");
    const handleInput = (value) => {
      body.nombre = value.toUpperCase();
    };
    const send = useSendData("etiquetas", "post", {
      onSuccess: () => {
        body.nombre = "";
        refetch();
      }
    });
    const edit = useSendData("etiquetas", "put", {
      onSuccess: () => {
        refetch();
      }
    });
    const __returned__ = { props, body, data, isError, isPending, refetch, handleInput, send, edit, Input, ListaEtiquetas };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><form class="flex justify-center gap-4 items-end mb-4">`);
  _push(ssrRenderComponent($setup["Input"], {
    value: $setup.body.nombre,
    onSetValue: $setup.handleInput,
    label: "Nombre de la etiqueta"
  }, null, _parent));
  _push(`<button type="submit" class="btn btn-primary">A\xF1adir</button></form>`);
  _push(ssrRenderComponent($setup["ListaEtiquetas"], {
    data: $setup.data?.response ?? [],
    "is-pending": $setup.isPending,
    "mutation-update": $setup.edit
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddEtiqueta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddEtiqueta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.locals;
  const isInvalid = await validatePerm(user?.idRol, permType.r, "etiquetas");
  if (isInvalid) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Lista de etiquetas de la p\xE1gina" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AddEtiqueta", AddEtiqueta, { "user": user?.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/forms/AddEtiqueta.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/etiquetas/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/etiquetas/index.astro";
const $$url = "/panel/etiquetas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
