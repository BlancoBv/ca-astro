/* empty css                                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../../chunks/astro/server_DmhofpIV.mjs';
import { v as validatePerm, p as permType, $ as $$LayoutPanel } from '../../../chunks/LayoutPanel_CzJxooWo.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { a as useGetData, u as useSendData } from '../../../chunks/http_yWF3wTfY.mjs';
import { a as script, s as script$1 } from '../../../chunks/index_CBT2s1oX.mjs';
import { s as script$2 } from '../../../chunks/index_CGsuZwon.mjs';
import { s as script$3 } from '../../../chunks/index_Cca9Tx4m.mjs';
import moment from 'moment';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../../chunks/_plugin-vue_export-helper_CfDbN-aU.mjs';
export { renderers } from '../../../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaBlogs",
  props: {
    noEdit: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { data, isError, isPending, refetch } = useGetData("blogs", "listaBlogsData");
    const selectedItem = ref();
    const items = ref([
      { label: "Copy", icon: "pi pi-copy" },
      { label: "Rename", icon: "pi pi-file-edit" }
    ]);
    const updateBlog = useSendData("blogs", "put", {
      onSuccess() {
        refetch();
      }
    });
    const handleEdit = (event) => {
      const { data: data2, newValue, field } = event;
      if (data2[field] !== newValue) {
        updateBlog.mutate({ idblog: data2.idblog, [field]: newValue });
      }
    };
    const __returned__ = { props, data, isError, isPending, refetch, selectedItem, items, updateBlog, handleEdit, get DataTable() {
      return script;
    }, get Column() {
      return script$1;
    }, get ContextMenu() {
      return script$2;
    }, get Textarea() {
      return script$3;
    }, get moment() {
      return moment;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent($setup["ContextMenu"], {
    ref: "cm",
    model: $setup.items,
    onHide: ($event) => $setup.selectedItem = null
  }, null, _parent));
  if (!$setup.isPending && !$setup.isError) {
    _push(ssrRenderComponent($setup["DataTable"], {
      value: $setup.data?.response?.blogs,
      paginator: true,
      rows: 5,
      "edit-mode": $setup.props.noEdit ? null : "cell",
      onCellEditComplete: $setup.handleEdit
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["Column"], {
            field: "titulo",
            header: "Titulo del blog"
          }, {
            editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent($setup["Textarea"], {
                  modelValue: data[field],
                  "onUpdate:modelValue": ($event) => data[field] = $event
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode($setup["Textarea"], {
                    modelValue: data[field],
                    "onUpdate:modelValue": ($event) => data[field] = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "estatus",
            header: "Estatus"
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
            field: "createdAt",
            header: "Fecha de creaci\xF3n"
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate($setup.moment(data[field]).locale("es-MX").format("L"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString($setup.moment(data[field]).locale("es-MX").format("L")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode($setup["Column"], {
              field: "titulo",
              header: "Titulo del blog"
            }, {
              editor: withCtx(({ data, field }) => [
                createVNode($setup["Textarea"], {
                  modelValue: data[field],
                  "onUpdate:modelValue": ($event) => data[field] = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "estatus",
              header: "Estatus"
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString(data[field].toUpperCase()), 1)
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "createdAt",
              header: "Fecha de creaci\xF3n"
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString($setup.moment(data[field]).locale("es-MX").format("L")), 1)
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($setup.isPending) {
    _push(`<div class="skeleton h-96 w-full"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaBlogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListaBlogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.locals;
  const isInvalid = await validatePerm(user?.idRol, permType.r, "blogs");
  const updateIsInvalid = await validatePerm(user?.idRol, permType.u, "blogs");
  if (isInvalid) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Lista de blogs" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ListaBlogs", ListaBlogs, { "client:idle": true, "noEdit": updateIsInvalid, "client:component-hydration": "idle", "client:component-path": "@components/listas/ListaBlogs.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/blogs/lista/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/blogs/lista/index.astro";
const $$url = "/panel/blogs/lista";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
