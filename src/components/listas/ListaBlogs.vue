<script setup lang="ts">
import { useGetData } from '@assets/http';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ContextMenu from 'primevue/contextmenu';
import moment from 'moment';
import { ref, useTemplateRef } from 'vue';

interface blog {
    idblog: number;
    titulo: string;
    fecha: string;
}


const { data, isError, isPending } = useGetData("blogs", "listaBlogsData")
const cm = useTemplateRef("cm");
const selectedProduct = ref();
const items = ref([
    { label: 'Copy', icon: 'pi pi-copy' },
    { label: 'Rename', icon: 'pi pi-file-edit' }
]);
const onRowContextMenu = (event: { originalEvent: Event }) => {
    cm.value?.show(event.originalEvent);
};

const handleEditCell = () => {

}
const editCells = []

</script>
<template>
    <ContextMenu ref="cm" :model="items" @hide="selectedProduct = null" />
    <DataTable v-if="!isPending && !isError" :value="data?.response?.blogs" :paginator="true" :rows="5" edit-mode="cell"
        @cell-edit-complete="handleEditCell" @row-contextmenu="onRowContextMenu" context-menu
        v-model:contextMenuSelection="selectedProduct">

        <Column field="titulo" header="Titulo del blog" />
        <Column field="estatus" header="Estatus">
            <template #body="{ data, field }">{{
                (data[field] as string).toUpperCase()
            }}</template>
        </Column>
        <Column field="createdAt" header="Fecha de creación">
            <template #body="{ data, field }">{{
                moment(data[field]).locale("es-MX").format("L")
            }}</template>
        </Column>

    </DataTable>
    <div v-if="isPending" class="skeleton h-96 w-full"> </div>
</template>