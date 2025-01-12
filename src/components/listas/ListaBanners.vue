<script setup lang="ts">
import DataTable, { type DataTableCellEditCompleteEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import moment from 'moment';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{ data: any[], mutationDelete: any, noEdit: boolean }>()
const isMounted = ref<boolean>(false)
const selectMostrarItems = ref<{ value: boolean, label: string }[]>([
    { label: "Mostrar", value: true },
    { label: "Dejar de mostrar", value: false }
])


onMounted(() => {
    isMounted.value = true
})
onUnmounted(() => {
    isMounted.value = false
})

const handleEdit = (event: DataTableCellEditCompleteEvent) => {
    const { data, newValue, field } = event
    if (data[field] !== newValue) { props.mutationDelete.mutate({ idbanner: data.idbanner, [field]: newValue }) }
}


</script>
<template>
    <div v-if="!isMounted" class="skeleton h-96 w-full"> </div>
    <DataTable v-else :value="props.data" :paginator="true" :rows="5" :edit-mode="props.noEdit ? null : 'cell'"
        @cell-edit-complete="handleEdit">
        <Column field="descripcion" header="Descripción">
            <template #body="{ data, field }">
                {{ data[field] ?? "---" }}
            </template>
            <template #editor="{ data, field }">
                <Textarea v-model="data[field]" />
            </template>
        </Column>
        <Column field="imagen" header="Imagen">
            <template #body="{ data, field }">
                <img class="object-cover size-12 " :src="data[field]" :alt="data[field]" width="50px" height="50px">
            </template>
        </Column>
        <Column field="mostrar" header="Visibilidad">
            <template #body="{ data, field }">
                <div class="badge h-max" :class="{
                    'badge-success': data[field],
                    'badge-error': !data[field]
                }"> {{ data[field] ? "Visible" : "No visible" }}</div>
            </template>
            <template #editor="{ data, field }">
                <Select v-model="data[field]" :options="selectMostrarItems" optionLabel="label" optionValue="value" />
            </template>
        </Column>
        <Column field="createdAt" header="Fecha de creación">
            <template #body="{ data, field }">{{
                moment(data[field]).locale("es-MX").format("L")
                }}</template>
        </Column>
    </DataTable>


</template>