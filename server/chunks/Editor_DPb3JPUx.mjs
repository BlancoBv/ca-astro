import 'vue3-toastify';
import '@primevue/themes/aura';
import { useSSRContext, defineComponent } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_DfEfmCyr.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Editor",
  emits: ["updateContent"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const editor = useEditor({
      content: "<p>Hola</p>",
      extensions: [StarterKit, Image.configure({ inline: true, HTMLAttributes: { class: "mx-auto object-contain revealing-image" } })],
      onUpdate: ({ editor: editor2 }) => {
        emit("updateContent", editor2.getHTML());
      }
    });
    const addImage = () => {
      const url = window.prompt("URL");
      if (url) {
        editor.value?.chain().focus().setImage({ src: url }).run();
      }
    };
    const __returned__ = { emit, editor, addImage, get EditorContent() {
      return EditorContent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div><button type="button" class="btn btn-ghost">Cambiar imagen</button><button type="button" class="${ssrRenderClass([{ "is-active": $setup.editor?.isActive("heading", { level: 1 }) }, "btn btn-ghost"])}"> H1 </button><button type="button" class="${ssrRenderClass([{ "is-active": $setup.editor?.isActive("heading", { level: 2 }) }, "btn btn-ghost"])}"> H2 </button><button type="button" class="${ssrRenderClass([{ "is-active": $setup.editor?.isActive("btn-active", { level: 3 }) }, "btn btn-ghost"])}"> H3 </button><button type="button" class="${ssrRenderClass([{ "is-active": $setup.editor?.isActive("bold") }, "btn btn-ghost"])}"> Toggle bold </button><button type="button" class="btn btn-ghost"${ssrIncludeBooleanAttr($setup.editor?.isActive("bold")) ? " disabled" : ""}> Set bold </button><button type="button" class="btn btn-ghost"${ssrIncludeBooleanAttr(!$setup.editor?.isActive("bold")) ? " disabled" : ""}> Unset bold </button></div>`);
  _push(ssrRenderComponent($setup["EditorContent"], {
    editor: $setup.editor,
    class: "prose max-w-full"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/editor/Editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Editor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Editor as E };
