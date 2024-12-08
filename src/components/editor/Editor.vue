<script setup lang="ts">
import { EditorContent, type Editor } from "@tiptap/vue-3"


const props = defineProps<{ editor: Editor | undefined }>()
const emit = defineEmits(["updateContent", "addImage"])


const addImage = () => {
    const url = window.prompt('URL')

    if (url) {

        props.editor?.chain().focus().setImage({ src: url }).run()
    }
}

const openImageSel = () => {
    const modal = document.getElementById("modal-images") as HTMLDialogElement
    modal.showModal()
}

</script>
<template>
    <div class="grid gap-4 grid-flow-col auto-cols-max p-4 place-items-center">
        <button type="button" class="btn btn-ghost" @click="openImageSel"><i class="bi bi-image"></i></button>
        <button type="button" class="btn btn-ghost"
            @click="props.editor?.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'btn-active': props.editor?.isActive('heading', { level: 1 }) }">
            <i class="bi bi-type-h1"></i>
        </button>
        <button type="button" class="btn btn-ghost"
            @click="props.editor?.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'btn-active': props.editor?.isActive('heading', { level: 2 }) }">
            <i class="bi bi-type-h2"></i>
        </button>
        <button type="button" class="btn btn-ghost"
            @click="props.editor?.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'btn-active': props.editor?.isActive('heading', { level: 3 }) }">
            <i class="bi bi-type-h3"></i>
        </button>
        <button type="button" class="btn btn-ghost" @click="props.editor?.chain().focus().toggleBold().run()"
            :class="{ 'btn-active': props.editor?.isActive('bold') }">
            <i class="bi bi-type-bold"></i>
        </button>
        <!--         <button type="button" class="btn btn-ghost" @click="editor?.chain().focus().setBold().run()"
            :disabled="editor?.isActive('bold')">
            Set bold
        </button>
        <button type="button" class="btn btn-ghost" @click="editor?.chain().focus().unsetBold().run()"
            :disabled="!editor?.isActive('bold')">
            Unset bold
        </button> -->
        <button type="button" class="btn btn-ghost" @click="props.editor?.chain().focus().setTextAlign('left').run()"
            :class="{ 'btn-active': props.editor?.isActive({ textAlign: 'left' }) }">
            <i class="bi bi-text-left"></i>
        </button>
        <button type="button" class="btn btn-ghost" @click="props.editor?.chain().focus().setTextAlign('center').run()"
            :class="{ 'btn-active': props.editor?.isActive({ textAlign: 'center' }) }">
            <i class="bi bi-text-center"></i>
        </button>
        <button type="button" class="btn btn-ghost" @click="props.editor?.chain().focus().setTextAlign('right').run()"
            :class="{ 'btn-active': props.editor?.isActive({ textAlign: 'right' }) }">
            <i class="bi bi-text-right"></i>
        </button>
        <button type="button" class="btn btn-ghost" @click="props.editor?.chain().focus().setTextAlign('justify').run()"
            :class="{ 'btn-active': props.editor?.isActive({ textAlign: 'justify' }) }">
            <i class="bi bi-justify"></i>
        </button>
        <input type="color"
            @input="props.editor?.chain().focus().setColor(($event.target as HTMLInputElement).value).run()"
            :value="props.editor?.getAttributes('textStyle').color">
    </div>
    <editor-content :editor="props.editor" class="prose max-w-full w-full px-4" />
</template>