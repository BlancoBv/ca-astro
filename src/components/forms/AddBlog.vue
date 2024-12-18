<script setup lang="ts">
import { reactive } from 'vue';
import { editorInstance } from '@components/editor/EditorInstance';
import Editor from '@components/editor/Editor.vue';
import Input from './Input.vue';
import moment from 'moment';
import ImageSelector from '@components/editor/ImageSelector.vue';
import SelectEtiqueta from './SelectEtiqueta.vue';
import { useSendData } from '@assets/http';
import AddImage from "./AddImage.vue"

interface body {
    titulo: string,
    fecha: string,
    contenido: string,
    estatus: "aceptado" | "rechazado" | "pendiente",
    imagen: string,
    usuarios_id: string | undefined
    etiquetas: number[]
}

const props = defineProps<{ idUsuario: string | undefined }>()

const dateLocal = new Date(Date.now())
const m = moment(dateLocal)
const send = useSendData("blogs", "post", {
    onSuccess() {
        body.titulo = ""
        body.contenido = ""
        body.fecha = m.format("YYYY-MM-DD")
        body.imagen = ""
        body.etiquetas = []
    }
})

const body = reactive<
    body>({ titulo: "", contenido: "", fecha: m.format("YYYY-MM-DD"), estatus: "aceptado", imagen: "", usuarios_id: props.idUsuario, etiquetas: [] })

const openImageSelector = () => {
    const modal = document.getElementById("modal-image-main") as HTMLDialogElement
    modal.showModal()
}

const handleClick = (src: string) => {
    body.imagen = src
    const modal = document.getElementById("modal-image-main") as HTMLDialogElement
    modal.close()
}
const handleChangeTitulo = (value: string) => {
    body.titulo = value
}
const handleChangeFecha = (value: string) => {
    body.fecha = value
}
const handleEtiquetas = (value: number[]) => {
    body.etiquetas = value
}
const editor = editorInstance(body)
</script>
<template>
    <AddImage />
    <ImageSelector :editor-instance="editor" />
    <ImageSelector id="modal-image-main" @add-image-to-object="handleClick" />
    <form @submit.prevent="() => { send.mutate(body) }">
        <div class="flex gap-4 flex-wrap items-center pb-4">
            <Input :value="body.titulo" label="Titulo del blog" type="text" @set-value="handleChangeTitulo" />
            <Input :value="body.fecha" label="Fecha" type="date" @set-value="handleChangeFecha" />
            <div class="flex gap-4 items-center">
                <p v-if="body.imagen.length < 1" class="w-24 h-24 text-xs">Selecciona una imagen para ver la vista
                    previa</p>
                <img v-else :src="body.imagen" class="object-contain" width="96px" height="96px">
                <button @click="openImageSelector" class="btn btn-secondary" type="button">{{ body.imagen.length
                    < 1 ? 'Seleccionar' : 'Cambiar' }} imagen principal</button>
            </div>
            <SelectEtiqueta :value="body.etiquetas" @set-option="handleEtiquetas" />
        </div>


        <Editor :editor="editor" />
        <button class="btn btn-primary" type="submit">Guardar</button>
    </form>
</template>