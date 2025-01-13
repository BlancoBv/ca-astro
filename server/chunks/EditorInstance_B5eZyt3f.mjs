import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import { ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_ChU72wyx.mjs';
import { a as useGetData } from './http_yWF3wTfY.mjs';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="grid gap-4 grid-flow-col auto-cols-max p-4 place-items-center"><button type="button" class="btn btn-ghost"><i class="bi bi-image"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("heading", { level: 1 }) }, "btn btn-ghost"])}"><i class="bi bi-type-h1"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("heading", { level: 2 }) }, "btn btn-ghost"])}"><i class="bi bi-type-h2"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("heading", { level: 3 }) }, "btn btn-ghost"])}"><i class="bi bi-type-h3"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("bold") }, "btn btn-ghost"])}"><i class="bi bi-type-bold"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "left" }) }, "btn btn-ghost"])}"><i class="bi bi-text-left"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "center" }) }, "btn btn-ghost"])}"><i class="bi bi-text-center"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "right" }) }, "btn btn-ghost"])}"><i class="bi bi-text-right"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "justify" }) }, "btn btn-ghost"])}"><i class="bi bi-justify"></i></button><input type="color"${ssrRenderAttr("value", $setup.props.editor?.getAttributes("textStyle").color)}></div>`);
  _push(ssrRenderComponent($setup["EditorContent"], {
    editor: $setup.props.editor,
    class: "prose max-w-full w-full px-4"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/editor/Editor.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Editor = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SelectEtiqueta",
  emits: ["setOption"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
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
    const __returned__ = { emit, values, data, isError, isPending, defaultLabels, handleClick, deleteEtiqueta };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><label>Etiquetas</label><div class="flex gap-4 items-center"><div class="border border-base-content/20 rounded-box h-20 flex-grow gap-4 p-2 flex flex-wrap overflow-y-auto">`);
  if ($setup.values.length < 1) {
    _push(`<span class="badge badge-primary">\xA1A\xF1ade algunas etiquetas!</span>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList($setup.values, (etiqueta, index) => {
      _push(`<div class="badge badge-primary cursor-pointer hover:badge-error">${ssrInterpolate(etiqueta.label)}</div>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</div><details class="dropdown"><summary class="btn btn-secondary m-1">A\xF1adir etiquetas</summary><ul class="menu dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow">`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/SelectEtiqueta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SelectEtiqueta = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImageSelector",
  props: {
    editorInstance: {},
    imageContainer: {},
    id: {}
  },
  emits: ["addImageToObject"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emits = __emit;
    const { data, isPending } = useGetData("imagenes", "imagesGalleryData");
    const handleClick = (src, fileName) => {
      handleClick: {
        if (props.editorInstance === void 0) {
          emits("addImageToObject", src);
          break handleClick;
        }
        props.editorInstance?.chain().focus().setImage({ src, alt: fileName }).run();
      }
    };
    const openAddImageModal = () => {
      const modal = document.getElementById("modal-add-image");
      modal.showModal();
    };
    const __returned__ = { props, emits, data, isPending, handleClick, openAddImageModal };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<dialog${ssrRenderAttrs(mergeProps({
    id: $setup.props.id ?? "modal-images",
    class: "modal"
  }, _attrs))}><div class="modal-box w-11/12 max-w-5xl h-5/6"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">\u2715</button></form><h3 class="text-lg font-bold">Galeria de imagenes</h3> ${ssrInterpolate($setup.data?.response)} `);
  if ($setup.isPending) {
    _push(`<div class="w-full h-[calc(100%-28px)] grid grid-cols-4 gap-4 place-content-center place-items-center overflow-y-auto"><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div><div class="skeleton w-full h-40"></div></div>`);
  } else {
    _push(`<div class="w-full h-[calc(100%-28px)] grid grid-cols-4 gap-4 place-content-center place-items-center overflow-y-auto"><!--[-->`);
    ssrRenderList($setup.data?.files, (image) => {
      _push(`<div class="w-full h-40 group overflow-clip rounded-btn"><img${ssrRenderAttr("src", image.url)} class="size-full object-cover group-hover:scale-105 ease-in duration-150"></div>`);
    });
    _push(`<!--]--><div class="w-full h-40 group overflow-clip rounded-btn btn btn-secondary"> A\xD1adir imagen </div></div>`);
  }
  _push(`</div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/editor/ImageSelector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

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

export { Editor as E, ImageSelector as I, SelectEtiqueta as S, editorInstance as e };
