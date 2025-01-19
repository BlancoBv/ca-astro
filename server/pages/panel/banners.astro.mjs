/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_DmhofpIV.mjs';
import { v as validatePerm, p as permType, $ as $$LayoutPanel } from '../../chunks/LayoutPanel_DFkgkw4R.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, onMounted, onUnmounted, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, reactive } from 'vue';
import { a as useGetData, u as useSendData } from '../../chunks/http_yWF3wTfY.mjs';
import { a as script, s as script$1, b as script$2 } from '../../chunks/index_CBT2s1oX.mjs';
import { s as script$3 } from '../../chunks/index_Cca9Tx4m.mjs';
import moment from 'moment';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_Bxo6ggSM.mjs';
export { renderers } from '../../renderers.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListaBanners",
  props: {
    data: {},
    mutationDelete: {},
    noEdit: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isMounted = ref(false);
    const selectMostrarItems = ref([
      { label: "Mostrar", value: true },
      { label: "Dejar de mostrar", value: false }
    ]);
    onMounted(() => {
      isMounted.value = true;
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    const handleEdit = (event) => {
      const { data, newValue, field } = event;
      if (data[field] !== newValue) {
        props.mutationDelete.mutate({ idbanner: data.idbanner, [field]: newValue });
      }
    };
    const __returned__ = { props, isMounted, selectMostrarItems, handleEdit, get DataTable() {
      return script;
    }, get Column() {
      return script$1;
    }, get Select() {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (!$setup.isMounted) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "skeleton h-96 w-full" }, _attrs))}></div>`);
  } else {
    _push(ssrRenderComponent($setup["DataTable"], mergeProps({
      value: $setup.props.data,
      paginator: true,
      rows: 5,
      "edit-mode": $setup.props.noEdit ? null : "cell",
      onCellEditComplete: $setup.handleEdit
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
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
            field: "imagen",
            header: "Imagen"
          }, {
            body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img class="object-cover size-12"${ssrRenderAttr("src", data[field])}${ssrRenderAttr("alt", data[field])} width="50px" height="50px"${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "object-cover size-12",
                    src: data[field],
                    alt: data[field],
                    width: "50px",
                    height: "50px"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "mostrar",
            header: "Visibilidad"
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
                _push3(ssrRenderComponent($setup["Select"], {
                  modelValue: data[field],
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  options: $setup.selectMostrarItems,
                  optionLabel: "label",
                  optionValue: "value"
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode($setup["Select"], {
                    modelValue: data[field],
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    options: $setup.selectMostrarItems,
                    optionLabel: "label",
                    optionValue: "value"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
              field: "descripcion",
              header: "Descripci\xF3n"
            }, {
              body: withCtx(({ data, field }) => [
                createTextVNode(toDisplayString(data[field] ?? "---"), 1)
              ]),
              editor: withCtx(({ data, field }) => [
                createVNode($setup["Textarea"], {
                  modelValue: data[field],
                  "onUpdate:modelValue": ($event) => data[field] = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "imagen",
              header: "Imagen"
            }, {
              body: withCtx(({ data, field }) => [
                createVNode("img", {
                  class: "object-cover size-12",
                  src: data[field],
                  alt: data[field],
                  width: "50px",
                  height: "50px"
                }, null, 8, ["src", "alt"])
              ]),
              _: 1
            }),
            createVNode($setup["Column"], {
              field: "mostrar",
              header: "Visibilidad"
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
                createVNode($setup["Select"], {
                  modelValue: data[field],
                  "onUpdate:modelValue": ($event) => data[field] = $event,
                  options: $setup.selectMostrarItems,
                  optionLabel: "label",
                  optionValue: "value"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaBanners.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListaBanners = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddBanner",
  props: {
    idUsuario: {},
    noEdit: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const formData = new FormData();
    const body = reactive({ descripcion: "", url: "" });
    const { refetch, data } = useGetData("banners", "bannersPanelData");
    const sendBanner = useSendData("banners", "post", {
      sendAsFormData: true,
      onSuccess() {
        const input = document.getElementById("input-add-image");
        input.value = "";
        refetch();
      }
    });
    const updateBanner = useSendData("banners", "put", {
      onSuccess() {
        refetch();
      }
    });
    const handle = (event) => {
      const { name, files } = event.target;
      formData.append(name, files[0]);
    };
    const send = () => {
      formData.append("url", body.url);
      formData.append("descripcion", body.url);
      formData.append("idUsuario", props.idUsuario ?? "");
      formData.append("mostrar", "1");
      sendBanner.mutate(formData);
    };
    const __returned__ = { props, formData, body, refetch, data, sendBanner, updateBanner, handle, send, ListaBanners };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><form class="flex gap-4 items-center"><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Selecciona una imagen</span></div><input name="imagen" type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/*" id="input-add-image" required></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Descripci\xF3n</span></div><input type="text" class="input input-bordered w-full max-w-xs"${ssrRenderAttr("value", $setup.body.descripcion)}></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Enlace Adjunto</span></div><input type="text"${ssrRenderAttr("value", $setup.body.url)} class="input input-bordered w-full max-w-xs"></label><button class="btn btn-primary" type="submit">A\xF1adir banner</button></form>`);
  _push(ssrRenderComponent($setup["ListaBanners"], {
    data: $setup.data?.response,
    "no-edit": $setup.props.noEdit,
    "mutation-delete": $setup.updateBanner
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.locals;
  const isInvalid = await validatePerm(user?.idRol, permType.r, "banners");
  const updateIsInvalid = await validatePerm(user?.idRol, permType.u, "banners");
  if (isInvalid) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Lista de banners" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddBanner", AddBanner, { "idUsuario": user?.id, "client:idle": true, "noEdit": updateIsInvalid, "client:component-hydration": "idle", "client:component-path": "@components/forms/AddBanner.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/banners/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/banners/index.astro";
const $$url = "/panel/banners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
