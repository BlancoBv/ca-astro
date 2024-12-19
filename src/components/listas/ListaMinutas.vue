<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import moment from 'moment';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{ data: any[], isPending: boolean }>()
const isMounted = ref<boolean>(false)


onMounted(() => {
    isMounted.value = true
})
onUnmounted(() => {
    isMounted.value = false
})


</script>
<template>
    <div v-if="!isMounted" class="skeleton h-96 w-full"> </div>
    <DataTable :class="{ 'skeleton select-none': props.isPending }" v-else :value="props.data" :paginator="true"
        :rows="5">
        <Column field="fileName" header="Nombre del archivo" sortable />
        <Column field="fechaCreacion" header="Fecha de creación" sortable />
    </DataTable>
</template>
<style>
th[data-pc-section="headercell"] div {
    display: flex;
    gap: 1rem;
}

th[data-p-sortable-column="true"]:hover {

    @apply bg-base-content/10 text-base-content/60 duration-200 ease-in cursor-pointer
}

th[data-p-sorted="true"] {

    @apply bg-secondary text-secondary-content duration-200 ease-in cursor-pointer
}
</style>