<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import ContextMenu from 'primevue/contextmenu';
import { useSendData } from '@assets/http';

interface listaDocs { url: string, fileName: string, fechaCreacion: string }

const props = defineProps<{ data: any[], isPending: boolean, mutationDelete: any }>()

const cm = useTemplateRef("cm");
const selectedItem = ref<Partial<listaDocs> | null>(null);
const isMounted = ref<boolean>(false)



const items = ref([
    {
        label: 'Eliminar', icon: 'bi bi-trash-fill', command: () => {
            props.mutationDelete.mutate({ fileName: selectedItem.value?.fileName })
        }
    },
]);

const onRowContextMenu = (event: { originalEvent: Event }) => {
    cm.value?.show(event.originalEvent);
};

onMounted(() => {
    isMounted.value = true
})
onUnmounted(() => {
    isMounted.value = false
})
</script>
<template>
    {{ selectedItem }}
    <ContextMenu ref="cm" :model="items" @hide="selectedItem = null" />
    <div v-if="!isMounted" class="skeleton h-96 w-full"> </div>
    <DataTable :class="{ 'skeleton select-none': props.isPending }" v-else :value="props.data" :paginator="true"
        :rows="5" @row-contextmenu="onRowContextMenu" context-menu v-model:contextMenuSelection="selectedItem">
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