<script setup lang="ts">
import type { DataTableCellEditCompleteEvent } from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


const props = defineProps<{ pending: boolean, error: boolean, data: any[] | undefined, columns: { field: string, header: string }[], rows?: number, editCells: { field: string, action: (dataRow: any, newValue: string) => void }[] }>()

const handleEditCell = (event: DataTableCellEditCompleteEvent) => {
    const { data, newValue, field } = event;
    const element = props.editCells.find(el => el.field == field)
    if (element && data[field] !== newValue) {
        element.action(data, newValue)
    }
}


</script>

<template>
    <DataTable v-if="!props.pending && !props.error" :value="props.data ?? []" :paginator="rows ? true : false"
        :rows="rows" edit-mode="cell" @cell-edit-complete="handleEditCell">
        <Column v-for="col in columns" :field="col.field" :header="col.header" :key="col.field">
            <template #editor="{ data, field }">
                <template v-if="editCells.find(el => el.field === field)">
                    <InputText v-model="data[field]" autofocus fluid />
                </template>
                <template v-else>
                    {{ data[field] }}
                </template>
            </template>
        </Column>
    </DataTable>
    <div v-if="pending" class="skeleton h-96 w-full"> </div>
</template>