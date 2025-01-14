/* empty css                                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../../chunks/astro/server_BYikK1dL.mjs';
import { v as validatePerm, p as permType, $ as $$LayoutPanel } from '../../../chunks/LayoutPanel_BpdfV8CA.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, useTemplateRef, ref, onMounted, onUnmounted, withCtx, createVNode, reactive, computed } from 'vue';
import { a as useGetData, u as useSendData } from '../../../chunks/http_yWF3wTfY.mjs';
import { a as script, s as script$1 } from '../../../chunks/index_DoPSSCG4.mjs';
import { s as script$2 } from '../../../chunks/index_8Q2yTLye.mjs';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
/* empty css                                       */
import { _ as _export_sfc } from '../../../chunks/_plugin-vue_export-helper_NQzEJyeK.mjs';
import moment from 'moment';
export { r as renderers } from '../../../chunks/_@astro-renderers_BnjbwtTW.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListaMinutas",
  props: {
    data: {},
    isPending: { type: Boolean },
    mutationDelete: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const cm = useTemplateRef("cm");
    const selectedItem = ref(null);
    const isMounted = ref(false);
    const items = ref([
      {
        label: "Eliminar",
        icon: "bi bi-trash-fill",
        command: () => {
          props.mutationDelete.mutate({ fileName: selectedItem.value?.fileName });
        }
      }
    ]);
    const onRowContextMenu = (event) => {
      cm.value?.show(event.originalEvent);
    };
    onMounted(() => {
      isMounted.value = true;
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    const __returned__ = { props, cm, selectedItem, isMounted, items, onRowContextMenu, get DataTable() {
      return script;
    }, get Column() {
      return script$1;
    }, get ContextMenu() {
      return script$2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
      class: { "skeleton select-none": $setup.props.isPending },
      value: $setup.props.data,
      paginator: true,
      rows: 5,
      onRowContextmenu: $setup.onRowContextMenu,
      "context-menu": "",
      contextMenuSelection: $setup.selectedItem,
      "onUpdate:contextMenuSelection": ($event) => $setup.selectedItem = $event
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["Column"], {
            field: "fileName",
            header: "Nombre del archivo",
            sortable: ""
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["Column"], {
            field: "fechaCreacion",
            header: "Fecha de creaci\xF3n",
            sortable: ""
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode($setup["Column"], {
              field: "fileName",
              header: "Nombre del archivo",
              sortable: ""
            }),
            createVNode($setup["Column"], {
              field: "fechaCreacion",
              header: "Fecha de creaci\xF3n",
              sortable: ""
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaMinutas.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListaMinutas = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddMinuta",
  setup(__props, { expose: __expose }) {
    __expose();
    const { data, isPending, refetch } = useGetData("minutas", "minutasData");
    const date = new Date(Date.now());
    const m = moment(date);
    const body = reactive({ fecha: m.format("YYYY-MM-DD") });
    const send = useSendData("minutas", "post", {
      sendAsFormData: true,
      onSuccess() {
        const input = document.getElementById("input-add-file");
        input.value = "";
        refetch();
      }
    });
    const deleteMinuta = useSendData("minutas", "delete", {
      onSuccess() {
        refetch();
      }
    });
    const handle = (ev) => {
      const { files } = ev.target;
      body.file = files[0];
    };
    const fileName = computed(() => {
      return `MINUTA_CA;${body.fecha}.pdf`;
    });
    const upload = () => {
      const formData = new FormData();
      formData.append("file", body?.file ?? "");
      formData.append("fileName", fileName.value);
      send.mutate(formData);
    };
    const __returned__ = { data, isPending, refetch, date, m, body, send, deleteMinuta, handle, fileName, upload, ListaMinutas };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><form class="grid grid-cols-2 lg:grid-cols-4 items-end gap-4 mb-4"><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Selecciona una archivo</span></div><input name="imagen" type="file" class="file-input file-input-bordered w-full max-w-xs" accept="application/pdf" id="input-add-file" required></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Fecha</span></div><input type="date" class="input input-bordered w-full max-w-xs"${ssrRenderAttr("value", $setup.body.fecha)} required></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Nombre del archivo**</span></div><input class="input input-bordered w-full max-w-xs"${ssrRenderAttr("value", $setup.fileName)} required readonly disabled></label><button class="btn btn-primary" type="submit">A\xF1adir minuta</button></form>`);
  _push(ssrRenderComponent($setup["ListaMinutas"], {
    data: $setup.data?.files ?? [],
    "is-pending": $setup.isPending,
    mutationDelete: $setup.deleteMinuta
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddMinuta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddMinuta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.locals;
  const isInvalid = await validatePerm(user?.idRol, permType.r, "minutas");
  if (isInvalid) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Lista de minutas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddMinuta", AddMinuta, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/forms/AddMinuta.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/documentos/minutas/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/documentos/minutas/index.astro";
const $$url = "/panel/documentos/minutas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
