<script setup lang="ts">
import { useGetData } from '@assets/http';
import type { Editor } from '@tiptap/vue-3';

const props = defineProps<{ editorInstance?: Editor, imageContainer?: { [key: string]: any }, id?: string }>()

const emits = defineEmits(["addImageToObject"])

const { data, isPending } = useGetData("imagenes", "imagesGalleryData")


const handleClick = (src: string, fileName: string) => {

    handleClick: {
        if (props.editorInstance === undefined) {
            //props.imageContainer = src
            emits("addImageToObject", src)

            break handleClick
        }
        props.editorInstance?.chain().focus().setImage({ src, alt: fileName }).run()
    }
}

const openAddImageModal = () => {
    const modal = document.getElementById("modal-add-image") as HTMLDialogElement
    modal.showModal()
}



</script>
<template>
    <dialog :id="props.id ?? 'modal-images'" class="modal">
        <div class="modal-box w-11/12 max-w-5xl h-5/6">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold">Galeria de imagenes</h3>
            {{ data?.response }}
            <div v-if="isPending"
                class="w-full h-[calc(100%-28px)] grid grid-cols-4 gap-4 place-content-center place-items-center overflow-y-auto">
                <div class="skeleton w-full h-40"></div>
                <div class="skeleton w-full h-40"></div>
                <div class="skeleton w-full h-40"></div>
                <div class="skeleton w-full h-40"></div>
                <div class="skeleton w-full h-40"></div>
                <div class="skeleton w-full h-40"></div>
                <div class="skeleton w-full h-40"></div>
                <div class="skeleton w-full h-40"></div>
            </div>
            <div v-else
                class="w-full h-[calc(100%-28px)] grid grid-cols-4 gap-4 place-content-center place-items-center overflow-y-auto">
                <div v-for="image in data?.files" class="w-full h-40 group overflow-clip rounded-btn"
                    @click="handleClick(image.url, image.fileName)">
                    <img :src="image.url" class="size-full object-cover group-hover:scale-105 ease-in duration-150">
                </div>
                <div class="w-full h-40 group overflow-clip rounded-btn btn btn-secondary" @click="openAddImageModal">
                    AÑadir imagen
                </div>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>