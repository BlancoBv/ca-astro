<script setup lang="ts">
import { useGetData } from '@assets/http';
import ListaProyectos from '@components/listas/ListaProyectos.vue';

const { data, isPending } = useGetData("proyectos", "proyectosData")
</script>
<template>
    <ListaProyectos :data="data?.response ?? []" :mutation-delete="() => { }" :is-pending="isPending" />
</template>