/* empty css                                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../../chunks/astro/server_DqkNLIlm.mjs';
import { $ as $$LayoutPanel } from '../../../chunks/LayoutPanel_DGu6GpPH.mjs';
import { toast } from 'vue3-toastify';
import { useSSRContext, defineComponent, ref, useTemplateRef, watch, mergeProps, reactive } from 'vue';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import { ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../../../chunks/_plugin-vue_export-helper_DDGM0DcE.mjs';
import { a as useGetData, u as useSendData } from '../../../chunks/http_DpUI1aoW.mjs';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
export { r as renderers } from '../../../chunks/_@astro-renderers_BuVY0NLu.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Editor",
  props: {
    editor: {}
  },
  emits: ["updateContent", "addImage"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const addImage = () => {
      const url = window.prompt("URL");
      if (url) {
        props.editor?.chain().focus().setImage({ src: url }).run();
      }
    };
    const openImageSel = () => {
      const modal = document.getElementById("modal-images");
      modal.showModal();
    };
    const __returned__ = { props, emit, addImage, openImageSel, get EditorContent() {
      return EditorContent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="grid gap-4 grid-flow-col auto-cols-max p-4 place-items-center"><button type="button" class="btn btn-ghost"><i class="bi bi-image"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("heading", { level: 1 }) }, "btn btn-ghost"])}"><i class="bi bi-type-h1"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("heading", { level: 2 }) }, "btn btn-ghost"])}"><i class="bi bi-type-h2"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("heading", { level: 3 }) }, "btn btn-ghost"])}"><i class="bi bi-type-h3"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("bold") }, "btn btn-ghost"])}"><i class="bi bi-type-bold"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "left" }) }, "btn btn-ghost"])}"><i class="bi bi-text-left"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "center" }) }, "btn btn-ghost"])}"><i class="bi bi-text-center"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "right" }) }, "btn btn-ghost"])}"><i class="bi bi-text-right"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "justify" }) }, "btn btn-ghost"])}"><i class="bi bi-justify"></i></button><input type="color"${ssrRenderAttr("value", $setup.props.editor?.getAttributes("textStyle").color)}></div>`);
  _push(ssrRenderComponent($setup["EditorContent"], {
    editor: $setup.props.editor,
    class: "prose max-w-full w-full px-4"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/editor/Editor.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Editor = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SelectRuta",
  props: {
    value: {},
    required: { type: Boolean }
  },
  emits: ["setOption"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const ruta = ref(props.value);
    const emit = __emit;
    const haveRoutes = ref(false);
    const subRoutes = ref({ subrutas: [], rutaBase: "" });
    const inputRuta = useTemplateRef("input-ruta");
    const { data, isError, isPending } = useGetData("menus", "rutasData");
    const handleChange = (value) => {
      ruta.value = value;
      emit("setOption", value);
    };
    watch(ruta, (value, oldValue) => {
      console.log({ value, oldValue });
      if (!isError.value && !isPending.value) {
        const indexOfElement = data.value.response?.findIndex((el) => el.ruta === value);
        const subrutas = data.value.response[indexOfElement];
        if (subrutas && subrutas?.dropcollapse) {
          haveRoutes.value = true;
          subRoutes.value = { rutaBase: value, subrutas: subrutas.submenus };
        } else {
          haveRoutes.value = false;
          subRoutes.value = { rutaBase: "", subrutas: [] };
        }
      }
    });
    const __returned__ = { props, ruta, emit, haveRoutes, subRoutes, inputRuta, data, isError, isPending, handleChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><select class="select select-bordered w-full max-w-xs"${ssrRenderAttr("value", $setup.ruta)} required><option selected disabled value="">${ssrInterpolate($setup.isPending ? "Cargando..." : "Seleccione una ruta")}</option>`);
  if (!$setup.isPending && !$setup.isError) {
    _push(`<!--[-->`);
    ssrRenderList($setup.data.response, (ruta) => {
      _push(`<option${ssrRenderAttr("value", ruta.ruta)}>${ssrInterpolate(ruta.nombre)}</option>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</select>`);
  if ($setup.haveRoutes) {
    _push(`<select class="select select-bordered w-full max-w-xs"${ssrRenderAttr("value", $setup.props.value)} required><option selected disabled value="">Seleccione una ruta</option>`);
    if (!$setup.isPending && !$setup.isError) {
      _push(`<!--[-->`);
      ssrRenderList($setup.subRoutes.subrutas, (subruta) => {
        _push(`<option${ssrRenderAttr("value", $setup.subRoutes.rutaBase + "/" + subruta.ruta)}>${ssrInterpolate(subruta.nombre)}</option>`);
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</select>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/SelectRuta.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SelectRuta = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SelectEtiqueta",
  props: {
    value: {},
    required: { type: Boolean }
  },
  emits: ["setOption"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const values = ref([]);
    const { data, isError, isPending } = useGetData("etiquetas", "etiquetasData");
    const defaultLabels = ref([]);
    const handleClick = (element) => {
      values.value = [...values.value, { id: element.idetiqueta, label: element.nombre }];
      emit("setOption", values.value);
      if (defaultLabels.value.length < 1) {
        const newValues = [...data.value.response];
        const indexOfElement = newValues.findIndex((el) => el.idetiqueta === element.idetiqueta);
        newValues.splice(indexOfElement, 1);
        defaultLabels.value = newValues;
      } else {
        const newValues = [...defaultLabels.value];
        const indexOfElement = newValues.findIndex((el) => el.idetiqueta === element.idetiqueta);
        newValues.splice(indexOfElement, 1);
        defaultLabels.value = newValues;
      }
    };
    const deleteEtiqueta = (index) => {
      const newValues = [...values.value];
      const indexOfElement = [...data.value.response].findIndex((el) => el.idetiqueta === newValues[index].id);
      defaultLabels.value = [...defaultLabels.value, data.value.response[indexOfElement]];
      newValues.splice(index, 1);
      values.value = newValues;
      emit("setOption", values.value);
    };
    const __returned__ = { props, emit, values, data, isError, isPending, defaultLabels, handleClick, deleteEtiqueta };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><label>Etiquetas</label><div class="flex gap-4 items-center"><div class="border border-base-content/20 rounded-box h-20 flex-grow gap-4 p-2 flex flex-wrap overflow-y-auto">`);
  if ($setup.values.length < 1) {
    _push(`<span class="badge badge-primary">\xA1A\xF1ade algunas etiquetas!</span>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList($setup.values, (etiqueta, index) => {
      _push(`<div class="badge badge-primary cursor-pointer hover:badge-error">${ssrInterpolate(etiqueta.label)}</div>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</div><details class="dropdown"><summary class="btn m-1">A\xF1adir etiquetas</summary><ul class="menu dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow">`);
  if (!$setup.isPending && !$setup.isError && $setup.values.length < 1) {
    _push(`<!--[-->`);
    ssrRenderList($setup.data.response, (etiqueta) => {
      _push(`<li><button type="button">${ssrInterpolate(etiqueta.nombre)}</button></li>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList($setup.defaultLabels, (etiqueta) => {
      _push(`<li><button type="button">${ssrInterpolate(etiqueta.nombre)}</button></li>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</ul></details></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/SelectEtiqueta.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SelectEtiqueta = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ImageSelector",
  props: {
    editorInstance: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { data, isPending, isError } = useGetData("imagenes", "imagesGalleryData");
    const handleClick = (src, fileName) => {
      props.editorInstance?.chain().focus().setImage({ src, alt: fileName }).run();
    };
    const __returned__ = { props, data, isPending, isError, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<dialog${ssrRenderAttrs(mergeProps({
    id: "modal-images",
    class: "modal"
  }, _attrs))}><div class="modal-box w-11/12 max-w-5xl h-5/6"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">\u2715</button></form><h3 class="text-lg font-bold">Galeria de imagenes</h3> ${ssrInterpolate($setup.data?.response)} `);
  if ($setup.isPending) {
    _push(`<div class="w-full h-[calc(100%-28px)] grid grid-cols-4 gap-4 place-content-center place-items-center overflow-y-auto"><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div></div>`);
  } else {
    _push(`<div class="w-full h-[calc(100%-28px)] grid grid-cols-4 gap-4 place-content-center place-items-center overflow-y-auto"><!--[-->`);
    ssrRenderList($setup.data?.files, (image) => {
      _push(`<div class="w-full h-40 group overflow-clip rounded-btn"><img${ssrRenderAttr("src", image.url)} class="size-full object-cover group-hover:scale-105 ease-in duration-150"></div>`);
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/editor/ImageSelector.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ImageSelector = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

function editorInstance(contentStore) {
  const editor = useEditor({
    content: "<p>Hola</p>",
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image.configure({
        inline: true,
        HTMLAttributes: { class: "mx-auto object-contain revealing-image" }
      })
    ],
    onUpdate: ({ editor: editor2 }) => {
      contentStore.contenido = editor2.getHTML();
    }
  });
  return editor;
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddArticulo",
  props: {
    idUsuario: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const body = reactive({ titulo: "", ruta: "", idUsuario: props.idUsuario, fecha: "", etiquetas: [] });
    const editor = editorInstance(body);
    const send = useSendData("articulos", "post");
    const image = reactive({ src: null });
    const handleEditor = (content) => {
      body.contenido = content;
    };
    const handleRuta = (value) => {
      body.ruta = value;
    };
    const handleEtiquetas = (value) => {
      body.etiquetas = value;
    };
    const handleSubmit = () => {
      handleSubmit: {
        if (!body.contenido) {
          toast.warning("No has escrito nada en el editor.");
          break handleSubmit;
        }
        if (body.etiquetas.length < 1) {
          toast.error("A\xF1ade al menos una etiqueta.");
          break handleSubmit;
        }
        send.mutate(body);
      }
    };
    const handleImg = (src) => {
      image.src = src;
    };
    const __returned__ = { props, body, editor, send, image, handleEditor, handleRuta, handleEtiquetas, handleSubmit, handleImg, Editor, SelectRuta, SelectEtiqueta, ImageSelector };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent($setup["ImageSelector"], {
    onClick: $setup.handleImg,
    "editor-instance": $setup.editor
  }, null, _parent));
  _push(`<form><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Titulo del articulo</span></div><input type="text" class="input input-bordered w-full max-w-xs" required${ssrRenderAttr("value", $setup.body.titulo)}></label><label class="form-control w-full max-w-xs"><div class="label"><span class="label-text">Fecha</span></div><input type="date" class="input input-bordered w-full max-w-xs" required${ssrRenderAttr("value", $setup.body.fecha)}></label> ${ssrInterpolate($setup.body.ruta)} `);
  _push(ssrRenderComponent($setup["SelectRuta"], {
    value: $setup.body.ruta,
    onSetOption: $setup.handleRuta
  }, null, _parent));
  _push(ssrRenderComponent($setup["SelectEtiqueta"], {
    value: $setup.body.etiquetas,
    onSetOption: $setup.handleEtiquetas
  }, null, _parent));
  _push(ssrRenderComponent($setup["Editor"], {
    onUpdateContent: $setup.handleEditor,
    onAddImage: () => {
    },
    editor: $setup.editor
  }, null, _parent));
  _push(`<button class="btn btn-primary" type="submit">Enviar</button></form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/AddArticulo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddArticulo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.locals;
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "title": "A\xF1adir contenido" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddArticulo", AddArticulo, { "idUsuario": user?.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/forms/AddArticulo.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/articulos/crear/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/articulos/crear/index.astro";
const $$url = "/panel/articulos/crear";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
