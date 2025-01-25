import { useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import BulletList from "@tiptap/extension-bullet-list";
import ItemList from "@tiptap/extension-list-item";
import Typography from "@tiptap/extension-typography";

export function editorInstance(contentStore: any, content?: string) {
  const editor = useEditor({
    content: content,
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image.configure({
        inline: true,
        HTMLAttributes: { class: "mx-auto object-contain revealing-image" },
      }),
      BulletList,
      ItemList,
      Typography,
    ],
    onUpdate: ({ editor }) => {
      contentStore.contenido = editor.getHTML();
    },
  });

  return editor;
}
