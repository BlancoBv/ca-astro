<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { onMounted, onUnmounted, ref } from 'vue';
import { formatDate } from '@assets/format';
import moment from 'moment';

interface listaDocs { method: string, idUsuario: number, ruta: string }

const props = defineProps<{ data: listaDocs[] }>()

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
    <DataTable v-else :value="props.data" :paginator="true" :rows="10">
        <Column field="method" header="Método" sortable />
        <Column field="ruta" header="Ruta" />
        <Column field="idUsuario" header="Usuario" sortable />
        <Column field="createdAt" header="Fecha de creación" sortable>
            <template #body="{ data, field }">
                {{ formatDate(data[field], "DD-MM-YYYY hh:mm:ss") }}
            </template>
        </Column>
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