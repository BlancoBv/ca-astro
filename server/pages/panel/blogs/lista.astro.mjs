import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_PXGLLX5r.mjs';
import { v as validatePerm, p as permType, $ as $$LayoutPanel } from '../../../chunks/LayoutPanel_2cEuQ9dt.mjs';
import 'vue3-toastify';
import { defineComponent, useSSRContext, useTemplateRef, ref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { a as useGetData, u as useSendData } from '../../../chunks/http_BVCTMF4U.mjs';
import { a as script$2, b as script$3 } from '../../../chunks/index_C__mFKYf.mjs';
import { s as script$1 } from '../../../chunks/index_D1Ts3fHg.mjs';
import { s as script } from '../../../chunks/index_D2LuqRg1.mjs';
import moment from 'moment';
import { e as editorInstance, I as ImageSelector, E as Editor } from '../../../chunks/EditorInstance_DodcFnLF.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../../chunks/_plugin-vue_export-helper_tWar_dvF.mjs';
export { renderers } from '../../../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaBlogs",
  props: {
    noEdit: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const modal = useTemplateRef("modal-edit-blog-content");
    const contenido = ref({ contenido: null });
    const { data, isError, isPending, refetch } = useGetData("blogs", "listaBlogsData");
    const cm = useTemplateRef("cm");
    const selectedItem = ref(null);
    const editor = editorInstance(contenido.value);
    const items = [
      {
        label: "Editar contenido",
        icon: "bi bi-pencil-square",
        command() {
          editor.value?.commands.setContent(selectedItem.value?.contenido ?? "<p>Sin contenido</p>");
          modal.value?.showModal();
        }
      }
    ];
    const updateBlog = useSendData("blogs", "put", {
      onSuccess() {
        modal.value?.close();
        refetch();
        if (contenido.value.contenido) {
          contenido.value = {};
        }
      }
    });
    const onRowContextMenu = (event) => {
      cm.value?.show(event.originalEvent);
    };
    const handleEdit = (event) => {
      const { data: data2, newValue, field } = event;
      if (data2[field] !== newValue) {
        updateBlog.mutate({ idblog: data2.idblog, [field]: newValue });
      }
    };
    const handleUpdateContent = () => {
      updateBlog.mutate({ idblog: selectedItem.value?.idblog, contenido: contenido.value.contenido });
    };
    const handleClose = () => {
      contenido.value.contenido = null;
    };
    const __returned__ = { props, modal, contenido, data, isError, isPending, refetch, cm, selectedItem, editor, items, updateBlog, onRowContextMenu, handleEdit, handleUpdateContent, handleClose, get DataTable() {
      return script$3;
    }, get Column() {
      return script$2;
    }, get ContextMenu() {
      return script$1;
    }, get Textarea() {
      return script;
    }, get moment() {
      return moment;
    }, Editor, ImageSelector };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent($setup["ImageSelector"], { "editor-instance": $setup.editor }, null, _parent));
  _push(`<dialog class="modal modal-bottom sm:modal-middle"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><i class="bi bi-x text-xl"></i></button></form><h3 class="text-lg font-bold">${ssrInterpolate($setup.selectedItem?.titulo)}</h3><form>`);
  _push(ssrRenderComponent($setup["Editor"], { editor: $setup.editor }, null, _parent));
  _push(`<div class="w-full flex justify-end"><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr($setup.contenido?.contenido === null || $setup.updateBlog.isPending.value) ? " disabled" : ""}>Actualizar</button></div></form></div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
  _push(ssrRenderComponent($setup["ContextMenu"], {
    ref: "cm",
    model: $setup.items
  }, null, _parent));
  if (!$setup.isError) {
    _push(ssrRenderComponent($setup["DataTable"], {
      loading: $setup.isPending,
      value: $setup.data?.response?.blogs ?? [],
      paginator: true,
      rows: 5,
      "edit-mode": $setup.props.noEdit ? null : "cell",
      onCellEditComplete: $setup.handleEdit,
      onRowContextmenu: $setup.onRowContextMenu,
      "context-menu": "",
      contextMenuSelection: $setup.selectedItem,
      "onUpdate:contextMenuSelection": ($event) => $setup.selectedItem = $event
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
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Lista de blogs" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ListaBlogs", ListaBlogs, { "client:idle": true, "noEdit": updateIsInvalid, "client:component-hydration": "idle", "client:component-path": "@components/listas/ListaBlogs.vue", "client:component-export": "default" })} ` })}`;
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
