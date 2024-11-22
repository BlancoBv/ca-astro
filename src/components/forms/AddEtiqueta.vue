<script setup lang="ts">
import { reactive } from 'vue';
import Input from './Input.vue';
import { useGetData, useSendData } from '@assets/http';
import Table from '@components/Table.vue';
const props = defineProps<{ user: string | undefined, }>()

const body = reactive<{ nombre: string, idUsuario: string | undefined }>({ nombre: "", idUsuario: props.user })

const { data, isError, isPending, refetch } = useGetData("etiquetas", "etiquetasData")

const handleInput = (value: string) => {
    body.nombre = value.toUpperCase()
}

const send = useSendData("etiquetas", "post", {
    onSuccess: () => {
        body.nombre = ""
        refetch()
    }
})
const edit = useSendData("etiquetas", "put", {
    onSuccess: () => {
        refetch()
    }
})

</script>
<template>
    <form @submit.prevent="send.mutate(body)" class="flex justify-center gap-4 items-center">
        <Input :value="body.nombre" @set-value="handleInput" label="Nombre de la etiqueta" />
        <button type="submit" class="btn btn-primary">Añadir</button>
    </form>
    <Table :data="data?.response"
        :columns="[{ field: 'nombre', header: 'Nombre' }, { field: 'createdAt', header: 'Fecha de creación' }]"
        :pending="isPending" :error="isError" :rows="5"
        :edit-cells="[{ field: 'nombre', action: (dataRow, newValue) => edit.mutate({ nombre: newValue.toUpperCase(), idetiqueta: dataRow.idetiqueta }) }]" />
</template>