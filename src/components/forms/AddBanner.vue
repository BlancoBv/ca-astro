<script setup lang="ts">
import { useGetData, useSendData } from '@assets/http';
import ListaBanners from '@components/listas/ListaBanners.vue';
import { reactive } from 'vue';

const props = defineProps<{ idUsuario: string | undefined }>()

const formData = new FormData()
const body = reactive<{ descripcion: string, url: string }>({ descripcion: "", url: "" })
const { refetch, data } = useGetData("banners", "bannersPanelData")

const sendBanner = useSendData("banners", "post", {
    sendAsFormData: true, onSuccess() {
        const input = document.getElementById("input-add-image") as HTMLInputElement
        input.value = ""
        refetch()
    }
})

const updateBanner = useSendData("banners", "put", {
    onSuccess() {
        refetch()
    }
})

const handle = (event: Event) => {
    const { name, files } = event.target as HTMLInputElement
    formData.append(name, files![0])
}

const send = () => {
    formData.append("url", body.url)
    formData.append("descripcion", body.url)
    formData.append("idUsuario", props.idUsuario ?? "")
    formData.append("mostrar", "1")
    sendBanner.mutate(formData)
}


</script>
<template>
    <form @submit.prevent="send" class="flex gap-4 items-center">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Selecciona una imagen</span>
            </div>
            <input name="imagen" type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/*"
                @input="handle" id="input-add-image" required>

        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Descripción</span>
            </div>
            <input type="text" class="input input-bordered w-full max-w-xs" v-model="body.descripcion">
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Enlace Adjunto</span>
            </div>
            <input type="text" v-model="body.url" class="input input-bordered w-full max-w-xs">
        </label>
        <button class="btn btn-primary" type="submit">Añadir banner</button>

    </form>
    <ListaBanners :data="data?.response" :mutation-delete="updateBanner" />
</template>