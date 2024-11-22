<script setup lang="ts">
import { useGetData } from '@assets/http';
import { ref, useTemplateRef, watch } from 'vue';

const props = defineProps<{ value: string, required?: boolean }>()
const ruta = ref<string>(props.value)
const emit = defineEmits(["setOption"])
const haveRoutes = ref<boolean>(false)
const subRoutes = ref<{ subrutas: { ruta?: string, nombre?: string }[], rutaBase: string }>({ subrutas: [], rutaBase: "" })
const inputRuta = useTemplateRef("input-ruta")

const { data, isError, isPending } = useGetData("menus", "rutasData")

const handleChange = (value: string) => {
    ruta.value = value
    emit("setOption", value)
}

watch(ruta, (value, oldValue) => {
    console.log({ value, oldValue });


    if (!isError.value && !isPending.value) {

        const indexOfElement = (data.value.response as { ruta: string }[])?.findIndex(el => el.ruta === value)
        const subrutas = data.value.response[indexOfElement]

        if (subrutas && subrutas?.dropcollapse) {
            haveRoutes.value = true
            subRoutes.value = { rutaBase: value, subrutas: subrutas.submenus }
        } else {
            haveRoutes.value = false
            subRoutes.value = { rutaBase: "", subrutas: [] }
        }
    }

})
</script>
<template>
    <select class="select select-bordered w-full max-w-xs" :value="ruta"
        @input="(event) => handleChange((event.target as HTMLInputElement).value)" required ref="input-ruta">
        <option selected disabled value="">{{ isPending ? "Cargando..." : "Seleccione una ruta" }}</option>
        <option v-if="!isPending && !isError" v-for="ruta in data.response" :value="ruta.ruta">
            {{ ruta.nombre }}
        </option>
    </select>

    <select v-if="haveRoutes" class="select select-bordered w-full max-w-xs" :value="props.value"
        @input="(event) => emit('setOption', (event.target as HTMLInputElement).value)" required>
        <option selected disabled value="">Seleccione una ruta</option>
        <option v-if="!isPending && !isError" v-for="subruta in subRoutes.subrutas"
            :value="subRoutes.rutaBase + '/' + subruta.ruta">{{
                subruta.nombre }}</option>
    </select>
</template>