/* empty css                                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../../chunks/astro/server_BYikK1dL.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, mergeProps, reactive } from 'vue';
import { e as editorInstance, E as Editor, I as ImageSelector, S as SelectEtiqueta } from '../../../chunks/EditorInstance_DERmn0TS.mjs';
import { I as Input } from '../../../chunks/Input_CyypV9uk.mjs';
import moment from 'moment';
import { a as useGetData, u as useSendData } from '../../../chunks/http_yWF3wTfY.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../../chunks/_plugin-vue_export-helper_BRCTKcgz.mjs';
import { v as validatePerm, p as permType, $ as $$LayoutPanel } from '../../../chunks/LayoutPanel_DG5Ka4oX.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_5KdtQE-v.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddImage",
  setup(__props, { expose: __expose }) {
    __expose();
    const { refetch } = useGetData("imagenes", "imagesGalleryData");
    const send = useSendData("imagenes", "post", {
      sendAsFormData: true,
      onSuccess() {
        const input = document.getElementById("input-add-image");
        const modal = document.getElementById("modal-add-image");
        input.value = "";
        modal.close();
        refetch();
      }
    });
    const handleImage = (event) => {
      const formData = new FormData();
      const { files } = event.target;
      formData.append("imagen", files[0]);
      send.mutate(formData);
    };
    const __returned__ = { refetch, send, handleImage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<dialog${ssrRenderAttrs(mergeProps({
    id: "modal-add-image",
    class: "modal"
  }, _attrs))}><div class="modal-box w-6/12 max-w-5xl h-5/6"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">\u2715</button></form><h3 class="text-lg font-bold">A\xF1adir nueva imagen</h3><form><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Selecciona una imagen</span></div><input type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/*" id="input-add-image"></label></form></div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddImage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AddImage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddBlog",
  props: {
    idUsuario: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const dateLocal = new Date(Date.now());
    const m = moment(dateLocal);
    const send = useSendData("blogs", "post", {
      onSuccess() {
        body.titulo = "";
        body.contenido = "";
        body.fecha = m.format("YYYY-MM-DD");
        body.imagen = "";
        body.etiquetas = [];
      }
    });
    const body = reactive({ titulo: "", contenido: "", fecha: m.format("YYYY-MM-DD"), estatus: "aceptado", imagen: "", usuarios_id: props.idUsuario, etiquetas: [] });
    const openImageSelector = () => {
      const modal = document.getElementById("modal-image-main");
      modal.showModal();
    };
    const handleClick = (src) => {
      body.imagen = src;
      const modal = document.getElementById("modal-image-main");
      modal.close();
    };
    const handleChangeTitulo = (value) => {
      body.titulo = value;
    };
    const handleChangeFecha = (value) => {
      body.fecha = value;
    };
    const handleEtiquetas = (value) => {
      body.etiquetas = value;
    };
    const editor = editorInstance(body);
    const __returned__ = { props, dateLocal, m, send, body, openImageSelector, handleClick, handleChangeTitulo, handleChangeFecha, handleEtiquetas, editor, Editor, Input, ImageSelector, SelectEtiqueta, AddImage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent($setup["AddImage"], null, null, _parent));
  _push(ssrRenderComponent($setup["ImageSelector"], { "editor-instance": $setup.editor }, null, _parent));
  _push(ssrRenderComponent($setup["ImageSelector"], {
    id: "modal-image-main",
    onAddImageToObject: $setup.handleClick
  }, null, _parent));
  _push(`<form><div class="flex gap-4 flex-wrap items-center pb-4">`);
  _push(ssrRenderComponent($setup["Input"], {
    value: $setup.body.titulo,
    label: "Titulo del blog",
    type: "text",
    onSetValue: $setup.handleChangeTitulo
  }, null, _parent));
  _push(ssrRenderComponent($setup["Input"], {
    value: $setup.body.fecha,
    label: "Fecha",
    type: "date",
    onSetValue: $setup.handleChangeFecha
  }, null, _parent));
  _push(`<div class="flex gap-4 items-center">`);
  if ($setup.body.imagen.length < 1) {
    _push(`<p class="w-24 h-24 text-xs">Selecciona una imagen para ver la vista previa</p>`);
  } else {
    _push(`<img${ssrRenderAttr("src", $setup.body.imagen)} class="object-contain" width="96px" height="96px">`);
  }
  _push(`<button class="btn btn-secondary" type="button">${ssrInterpolate($setup.body.imagen.length < 1 ? "Seleccionar" : "Cambiar")} imagen principal</button></div>`);
  _push(ssrRenderComponent($setup["SelectEtiqueta"], {
    value: $setup.body.etiquetas,
    onSetOption: $setup.handleEtiquetas
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent($setup["Editor"], { editor: $setup.editor }, null, _parent));
  _push(`<button class="btn btn-primary" type="submit">Guardar</button></form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddBlog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddBlog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.locals;
  const isInvalid = await validatePerm(user?.idRol, permType.w, "blogs");
  if (isInvalid) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "A\xF1adir blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddBlog", AddBlog, { "idUsuario": user?.id, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/forms/AddBlog.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/blogs/add/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/blogs/add/index.astro";
const $$url = "/panel/blogs/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
