<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"

const emit = defineEmits(["updateContent"])

const editor = useEditor({
    content: "<p>Hola</p>",
    extensions: [StarterKit, Image.configure({ inline: true, HTMLAttributes: { class: "mx-auto object-contain revealing-image" } })],
    onUpdate: ({ editor }) => {
        emit("updateContent", editor.getHTML())
    }
})

const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
        editor.value?.chain().focus().setImage({ src: url }).run()
    }
}

</script>
<template>
    <div>
        <button type="button" class="btn btn-ghost" @click="addImage">Cambiar imagen</button>
        <button type="button" class="btn btn-ghost" @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor?.isActive('heading', { level: 1 }) }">
            H1
        </button>
        <button type="button" class="btn btn-ghost" @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor?.isActive('heading', { level: 2 }) }">
            H2
        </button>
        <button type="button" class="btn btn-ghost" @click="editor?.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editor?.isActive('btn-active', { level: 3 }) }">
            H3
        </button>
        <button type="button" class="btn btn-ghost" @click="editor?.chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor?.isActive('bold') }">
            Toggle bold
        </button>
        <button type="button" class="btn btn-ghost" @click="editor?.chain().focus().setBold().run()"
            :disabled="editor?.isActive('bold')">
            Set bold
        </button>
        <button type="button" class="btn btn-ghost" @click="editor?.chain().focus().unsetBold().run()"
            :disabled="!editor?.isActive('bold')">
            Unset bold
        </button>
    </div>
    <editor-content :editor="editor" class="prose max-w-full" />

</template>