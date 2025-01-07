<script setup lang="ts">
import { useGetData, useSendData } from '@assets/http';
import ListaMinutas from '@components/listas/ListaMinutas.vue';
import moment from 'moment';
import { computed, reactive } from 'vue';
const { data, isPending, refetch } = useGetData("minutas", "minutasData")

const date = new Date(Date.now())
const m = moment(date)

const body = reactive<{ file?: File, fecha: string }>({ fecha: m.format("YYYY-MM-DD") })

const send = useSendData("minutas", "post", {
    sendAsFormData: true, onSuccess() {
        const input = document.getElementById("input-add-file") as HTMLInputElement
        input.value = ""
        refetch()
    }
})
const deleteMinuta = useSendData("minutas", "delete", {
    onSuccess() {
        refetch()
    },
})
const handle = (ev: Event) => {
    const { files } = ev.target as HTMLInputElement
    body.file = files![0]
}

const fileName = computed(() => {
    return `MINUTA_CA;${body.fecha}.pdf`
})

const upload = () => {
    const formData = new FormData()
    formData.append("file", body?.file ?? "")
    formData.append("fileName", fileName.value)
    send.mutate(formData)
}


</script>
<template>
    <form class="grid grid-cols-2 lg:grid-cols-4 items-end gap-4 mb-4" @submit.prevent="upload">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Selecciona una archivo</span>
            </div>
            <input name="imagen" type="file" class="file-input file-input-bordered w-full max-w-xs"
                accept="application/pdf" @input="handle" id="input-add-file" required>
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Fecha</span>
            </div>
            <input type="date" class="input input-bordered w-full max-w-xs" v-model="body.fecha" required>
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Nombre del archivo**</span>
            </div>
            <input class="input input-bordered w-full max-w-xs" :value="fileName" required readonly disabled>
        </label>
        <button class="btn btn-primary" type="submit">Añadir minuta</button>
    </form>
    <ListaMinutas :data="data?.files ?? []" :is-pending="isPending" :mutationDelete="deleteMinuta" />

</template>