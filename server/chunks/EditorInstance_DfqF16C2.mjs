import 'vue3-toastify';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import { ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_3ktPLYsj.mjs';
import { a as useGetData } from './http_yWF3wTfY.mjs';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import BulletList from '@tiptap/extension-bullet-list';
import ItemList from '@tiptap/extension-list-item';
import Typography from '@tiptap/extension-typography';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Editor",
  props: {
    editor: {}
  },
  emits: ["updateContent", "addImage"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const openImageSel = () => {
      const modal = document.getElementById("modal-images");
      modal.showModal();
    };
    const __returned__ = { props, emit, openImageSel, get EditorContent() {
      return EditorContent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="flex gap-4 flex-wrap items-center"><button type="button" class="btn btn-ghost"><i class="bi bi-image"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("heading", { level: 1 }) }, "btn btn-ghost"])}"><i class="bi bi-type-h1"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("heading", { level: 2 }) }, "btn btn-ghost"])}"><i class="bi bi-type-h2"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("heading", { level: 3 }) }, "btn btn-ghost"])}"><i class="bi bi-type-h3"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("bold") }, "btn btn-ghost"])}"><i class="bi bi-type-bold"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "left" }) }, "btn btn-ghost"])}"><i class="bi bi-text-left"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "center" }) }, "btn btn-ghost"])}"><i class="bi bi-text-center"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "right" }) }, "btn btn-ghost"])}"><i class="bi bi-text-right"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive({ textAlign: "justify" }) }, "btn btn-ghost"])}"><i class="bi bi-justify"></i></button><button type="button" class="${ssrRenderClass([{ "btn-active": $setup.props.editor?.isActive("bulletList") }, "btn btn-ghost"])}"><i class="bi bi-list-ul"></i></button><button type="button" class="btn btn-ghost"${ssrIncludeBooleanAttr(!$setup.props.editor?.can().sinkListItem("listItem")) ? " disabled" : ""}><i class="bi bi-list-nested"></i></button><button type="button" class="btn btn-ghost"${ssrIncludeBooleanAttr(!$setup.props.editor?.can().liftListItem("listItem")) ? " disabled" : ""}><i class="bi bi-list"></i></button><input type="color"${ssrRenderAttr("value", $setup.props.editor?.getAttributes("textStyle").color)}></div>`);
  _push(ssrRenderComponent($setup["EditorContent"], {
    editor: $setup.props.editor,
    class: "prose max-w-full w-full px-4 h-96 overflow-y-auto mt-4"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/editor/Editor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Editor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

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

function editorInstance(contentStore, content) {
  const editor = useEditor({
    content,
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image.configure({
        HTMLAttributes: {
          class: "object-cover revealing-image rounded-box mx-auto"
        }
      }),
      BulletList,
      ItemList,
      Typography
    ],
    onUpdate: ({ editor: editor2 }) => {
      contentStore.contenido = editor2.getHTML();
    }
  });
  return editor;
}

export { Editor as E, ImageSelector as I, editorInstance as e };
