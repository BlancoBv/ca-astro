<script setup lang="ts">
import { useGetData } from '@assets/http';
import { ref } from 'vue';

interface etiqueta { id: number, label: string }
interface etiquetaDefault { idetiqueta: number, nombre: string }

const emit = defineEmits(["setOption"])
const values = ref<etiqueta[]>([])

const { data, isError, isPending } = useGetData("etiquetas", "etiquetasData")
const defaultLabels = ref<etiquetaDefault[]>([])


const handleClick = (element: { idetiqueta: number, nombre: string }) => {
    values.value = [...values.value, { id: element.idetiqueta, label: element.nombre }]
    emit("setOption", values.value)
    if (defaultLabels.value.length < 1) {
        const newValues = [...data.value.response]
        const indexOfElement = newValues.findIndex((el: { idetiqueta: number }) => el.idetiqueta === element.idetiqueta)

        newValues.splice(indexOfElement, 1)
        defaultLabels.value = newValues
    } else {
        const newValues = [...defaultLabels.value]
        const indexOfElement = newValues.findIndex((el: { idetiqueta: number }) => el.idetiqueta === element.idetiqueta)

        newValues.splice(indexOfElement, 1)
        defaultLabels.value = newValues
    }
}

const deleteEtiqueta = (index: number) => {
    const newValues = [...values.value]
    const indexOfElement = [...data.value.response].findIndex((el: etiquetaDefault) => el.idetiqueta === newValues[index].id)

    defaultLabels.value = [...defaultLabels.value, data.value.response[indexOfElement]]
    newValues.splice(index, 1)
    values.value = newValues
    emit("setOption", values.value)
}

</script>
<template>
    <div class="w-full">
        <label>Etiquetas</label>
        <div class="flex gap-4 items-center">
            <div
                class="border border-base-content/20 rounded-box h-20 flex-grow gap-4 p-2 flex flex-wrap overflow-y-auto">
                <span class="badge badge-primary" v-if="values.length < 1">¡Añade algunas etiquetas!</span>
                <div class="badge badge-primary cursor-pointer hover:badge-error" v-for="(etiqueta, index) in values"
                    @click="deleteEtiqueta(index)" v-else>
                    {{ etiqueta.label }}
                </div>
            </div>
            <details class="dropdown">
                <summary class="btn btn-secondary m-1">Añadir etiquetas</summary>
                <ul class="menu dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow">
                    <li v-if="!isPending && !isError && values.length < 1" v-for="etiqueta in data.response">
                        <button type="button" @click="handleClick(etiqueta)">{{ etiqueta.nombre }}</button>
                    </li>
                    <li v-else v-for="etiqueta in defaultLabels">
                        <button type="button" @click="handleClick(etiqueta)">{{ etiqueta.nombre }}</button>
                    </li>

                </ul>
            </details>
        </div>
    </div>
</template>