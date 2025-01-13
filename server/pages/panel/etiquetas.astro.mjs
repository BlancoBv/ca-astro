/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_BYikK1dL.mjs';
import { v as validatePerm, p as permType, $ as $$LayoutPanel } from '../../chunks/LayoutPanel_6IDu9g3F.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, withCtx, openBlock, createBlock, Fragment, createTextVNode, toDisplayString, renderList, reactive } from 'vue';
import { I as Input } from '../../chunks/Input_BK15q0l7.mjs';
import { a as useGetData, u as useSendData } from '../../chunks/http_yWF3wTfY.mjs';
import { f as script, a as script$1, s as script$2 } from '../../chunks/index_DoPSSCG4.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_ChOUXVIM.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BnjbwtTW.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  props: {
    pending: { type: Boolean },
    error: { type: Boolean },
    data: {},
    columns: {},
    rows: {},
    editCells: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const handleEditCell = (event) => {
      const { data, newValue, field } = event;
      const element = props.editCells.find((el) => el.field == field);
      if (element && data[field] !== newValue) {
        element.action(data, newValue);
      }
    };
    const __returned__ = { props, handleEditCell, get InputText() {
      return script;
    }, get DataTable() {
      return script$1;
    }, get Column() {
      return script$2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if (!$setup.props.pending && !$setup.props.error) {
    _push(ssrRenderComponent($setup["DataTable"], {
      value: $setup.props.data ?? [],
      paginator: $props.rows ? true : false,
      rows: $props.rows,
      "edit-mode": "cell",
      onCellEditComplete: $setup.handleEditCell
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.columns, (col) => {
            _push2(ssrRenderComponent($setup["Column"], {
              field: col.field,
              header: col.header,
              key: col.field
            }, {
              editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if ($props.editCells.find((el) => el.field === field)) {
                    _push3(ssrRenderComponent($setup["InputText"], {
                      modelValue: data[field],
                      "onUpdate:modelValue": ($event) => data[field] = $event,
                      autofocus: "",
                      fluid: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!--[-->${ssrInterpolate(data[field])}<!--]-->`);
                  }
                } else {
                  return [
                    $props.editCells.find((el) => el.field === field) ? (openBlock(), createBlock($setup["InputText"], {
                      key: 0,
                      modelValue: data[field],
                      "onUpdate:modelValue": ($event) => data[field] = $event,
                      autofocus: "",
                      fluid: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(data[field]), 1)
                    ], 64))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.columns, (col) => {
              return openBlock(), createBlock($setup["Column"], {
                field: col.field,
                header: col.header,
                key: col.field
              }, {
                editor: withCtx(({ data, field }) => [
                  $props.editCells.find((el) => el.field === field) ? (openBlock(), createBlock($setup["InputText"], {
                    key: 0,
                    modelValue: data[field],
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    autofocus: "",
                    fluid: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(data[field]), 1)
                  ], 64))
                ]),
                _: 2
              }, 1032, ["field", "header"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.pending) {
    _push(`<div class="skeleton h-96 w-full"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

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
    const __returned__ = { props, body, data, isError, isPending, refetch, handleInput, send, edit, Input, Table };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><form class="flex justify-center gap-4 items-center">`);
  _push(ssrRenderComponent($setup["Input"], {
    value: $setup.body.nombre,
    onSetValue: $setup.handleInput,
    label: "Nombre de la etiqueta"
  }, null, _parent));
  _push(`<button type="submit" class="btn btn-primary">A\xF1adir</button></form>`);
  _push(ssrRenderComponent($setup["Table"], {
    data: $setup.data?.response,
    columns: [{ field: "nombre", header: "Nombre" }, { field: "createdAt", header: "Fecha de creaci\xF3n" }],
    pending: $setup.isPending,
    error: $setup.isError,
    rows: 5,
    "edit-cells": [{ field: "nombre", action: (dataRow, newValue) => $setup.edit.mutate({ nombre: newValue.toUpperCase(), idetiqueta: dataRow.idetiqueta }) }]
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
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Lista de etiquetas de la p\xE1gina" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddEtiqueta", AddEtiqueta, { "user": user?.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/forms/AddEtiqueta.vue", "client:component-export": "default" })} ` })}`;
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
