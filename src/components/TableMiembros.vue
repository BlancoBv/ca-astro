<script setup lang="ts">
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import { onMounted, onUnmounted, ref } from 'vue';
import get from "lodash/get"


interface props {
    cols: { field: string, header: string, sortable?: boolean, formatter?: "uppercase" }[], data: any[]
}



const props = defineProps<props>()
const isMounted = ref<boolean>(false)

const formatter = { uppercase: (value: string) => value.toUpperCase() }

onMounted(() => {
    isMounted.value = true
})

onUnmounted(() => {
    isMounted.value = false
})

console.log(props.cols);

</script>
<template>

    <DataTable :value="props.data" paginator unstyled :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
        pt:root="not-prose" pt:thead="bg-neutral text-neutral-content" pt:table="table table-zebra" pt:first="btn"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}">

        <Column v-for="col of props.cols" :key="col.field" :field="col.field" :header="col.header"
            :sortable="col.sortable">
            <template #body="row">
                {{ col.formatter ? formatter[col.formatter]?.(get(row.data, col.field)) : get(row.data, col.field) }}
            </template>
        </Column>

    </DataTable>
    <!-- <div class="skeleton h-96 w-full" v-else>
    </div> -->
</template>