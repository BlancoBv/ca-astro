<script setup lang="ts">
import DataTable, { type DataTableCellEditCompleteEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import { onMounted, onUnmounted, ref } from 'vue';
import { formatDate } from '@assets/format';

interface listaEtiquetas { nombre: string }

const props = defineProps<{ data: listaEtiquetas[], isPending: boolean, mutationUpdate: any }>()

const isMounted = ref<boolean>(false)


const handleEdit = (event: DataTableCellEditCompleteEvent) => {
    handleEdit: {
        const { data, newValue, field } = event
        if (newValue !== data[field]) { props.mutationUpdate.mutate({ idetiqueta: data.idetiqueta, [field]: newValue }) }
        break handleEdit
    }
}

onMounted(() => {
    isMounted.value = true
})
onUnmounted(() => {
    isMounted.value = false
})
</script>
<template>
    <div v-if="!isMounted" class="skeleton h-96 w-full"> </div>
    <DataTable
        :class="{ 'skeleton select-none': props.isPending, 'cursor-wait select-none': props.mutationUpdate.isPending.value }"
        v-else :value="props.data" :paginator="true" :rows="5" :edit-mode="'cell'" @cell-edit-complete="handleEdit">
        <Column field="nombre" header="Nombre">
            <template #body="{ data, field }">{{ data[field] ?? "---" }}</template>
            <template #editor="{ data, field }">
                <input v-model="data[field]" v-uppercase="data[field]" type="text"
                    class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="createdAt" header="Fecha de creación" sortable>
            <template #body="{ data, field }">
                {{ formatDate(data[field], "DD-MM-YYYY") }}
            </template>
        </Column>
        <Column field="updatedAt" header="Ultima actualización" sortable>
            <template #body="{ data, field }">
                {{ formatDate(data[field], "DD-MM-YYYY") }}
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