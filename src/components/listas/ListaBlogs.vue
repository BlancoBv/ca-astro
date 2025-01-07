<script setup lang="ts">
import { useGetData, useSendData } from '@assets/http';
import DataTable, { type DataTableCellEditCompleteEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import ContextMenu from 'primevue/contextmenu';
import Textarea from 'primevue/textarea';
import moment from 'moment';
import { ref, useTemplateRef } from 'vue';

interface blog {
    idblog: number;
    titulo: string;
    fecha: string;
}


const { data, isError, isPending, refetch } = useGetData("blogs", "listaBlogsData")
const cm = useTemplateRef("cm");
const selectedItem = ref();
const items = ref([
    { label: 'Copy', icon: 'pi pi-copy' },
    { label: 'Rename', icon: 'pi pi-file-edit' }
]);
const updateBlog = useSendData("blogs", "put", {
    onSuccess(data) {
        refetch()
    },
})

/* const onRowContextMenu = (event: { originalEvent: Event }) => {
    cm.value?.show(event.originalEvent);
}; */

const handleEdit = (event: DataTableCellEditCompleteEvent) => {
    const { data, newValue, field } = event
    if (data[field] !== newValue) { updateBlog.mutate({ idblog: data.idblog, [field]: newValue }) }
}

</script>
<template>
    <ContextMenu ref="cm" :model="items" @hide="selectedItem = null" />
    <DataTable v-if="!isPending && !isError" :value="data?.response?.blogs" :paginator="true" :rows="5" edit-mode="cell"
        @cell-edit-complete="handleEdit">

        <Column field="titulo" header="Titulo del blog">
            <template #editor="{ data, field }">
                <Textarea v-model="data[field]" />
            </template>
        </Column>
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