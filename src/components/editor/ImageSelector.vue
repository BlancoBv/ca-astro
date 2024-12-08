<script setup lang="ts">
import { useGetData } from '@assets/http';
import type { Editor } from '@tiptap/vue-3';

const props = defineProps<{ editorInstance: Editor | undefined }>()
const { data, isPending, isError } = useGetData("imagenes", "imagesGalleryData")


const handleClick = (src: string, fileName: string) => {
    props.editorInstance?.chain().focus().setImage({ src, alt: fileName }).run()
}


</script>
<template>

    <dialog id="modal-images" class="modal">
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
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>