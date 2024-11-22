<script setup lang="ts">
import Editor from '@components/editor/Editor.vue';
import { reactive } from 'vue';
import { useSendData } from '@assets/http';
import SelectRuta from './SelectRuta.vue';
import SelectEtiqueta from './SelectEtiqueta.vue';
import { toast } from 'vue3-toastify';

const props = defineProps<{ idUsuario: string | undefined }>()

const body = reactive<{ titulo: string, contenido?: string, ruta: string, idUsuario: string | undefined, fecha: string, etiquetas: number[] }>({ titulo: "", ruta: "", idUsuario: props.idUsuario, fecha: "", etiquetas: [] })

const handleEditor = (content: string) => {
    body.contenido = content
}
const handleRuta = (value: string) => {
    body.ruta = value
}
const handleEtiquetas = (value: number[]) => {
    body.etiquetas = value
}


const send = useSendData("articulos", "post")

const handleSubmit = () => {
    handleSubmit: {
        if (!body.contenido) {
            toast.warning("No has escrito nada en el editor.")
            break handleSubmit
        }
        if (body.etiquetas.length < 1) {
            toast.error("Añade al menos una etiqueta.")
            break handleSubmit
        }

        send.mutate(body)
    }
}

</script>
<template>
    <form @submit.prevent="handleSubmit">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Titulo del articulo</span>
            </div>
            <input type="text" class="input input-bordered w-full max-w-xs" required v-model="body.titulo">
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Fecha</span>
            </div>
            <input type="date" class="input input-bordered w-full max-w-xs" required v-model="body.fecha">
        </label>
        {{ body.ruta }}
        <SelectRuta :value="body.ruta" @set-option="handleRuta" />
        <SelectEtiqueta :value="body.etiquetas" @set-option="handleEtiquetas" />

        <Editor @update-content="handleEditor" />
        <button class="btn btn-primary" type="submit">Enviar</button>
    </form>
</template>