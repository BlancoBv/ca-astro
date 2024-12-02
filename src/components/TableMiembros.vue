<script setup lang="ts">
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import { onMounted, onUnmounted, ref } from 'vue';
import get from "lodash/get"


interface props {
    cols: { field: string, header: string, sortable?: boolean, formatter?: "uppercase" | "colabs" }[], data: any[]
}



const props = defineProps<props>()
const isMounted = ref<boolean>(false)


const getCollabs = (element: {
    otrosColaboradores: string | null;
    miembros_proyecto: {
        nombreCompleto: string;
        nombre: string;
        apepat: string;
        apemat: string;
    }[];
}): string => {
    const formatter = new Intl.ListFormat("es", {
        type: "conjunction",
        style: "long",
    });
    const miembrosF: string[] = [];
    console.log(element);

    element.miembros_proyecto.forEach((el) => {
        miembrosF.push(el.nombreCompleto);
    });

    if (element.otrosColaboradores) {
        const otherCollabsArr: string[] = element.otrosColaboradores.split(",");
        miembrosF.push(...otherCollabsArr);
    }

    if (miembrosF.length < 1) {
        return "----";
    }

    return formatter.format(miembrosF);
};

const formatter = { uppercase: (value: string) => value.toUpperCase(), colabs: (value: any) => getCollabs(value) }


const handleClick = () => {

    console.log("Row")

}

onMounted(() => {
    isMounted.value = true
})

onUnmounted(() => {
    isMounted.value = false
})

console.log(props.cols);

</script>
<template>
    <DataTable :value="props.data" :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
        selectionMode="single" @row-click="handleClick">

        <Column v-for="col of props.cols" :key="col.field" :field="col.field" :header="col.header"
            :sortable="col.sortable">
            <template #body="row">
                {{ col.formatter ? formatter[col.formatter]?.(get(row.data, col.field, row.data)) : get(row.data,
                    col.field)
                }}
            </template>
        </Column>
        <template #empty>
            Sin datos.
        </template>


        <template
            #paginatorcontainer="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
            <div
                class="flex items-center gap-4 border border-primary bg-transparent rounded-full w-full py-1 px-2 justify-between">
                <Button icon="pi pi-chevron-left" rounded text @click="prevPageCallback" :disabled="page === 0" />
                <div class="text-color font-medium">
                    <span class="hidden sm:block">Showing {{ first }} to {{ last }} of {{ totalRecords }}</span>
                    <span class="block sm:hidden">Page {{ page + 1 }} of {{ pageCount }}</span>
                </div>
                <Button icon="pi pi-chevron-right" rounded text @click="nextPageCallback"
                    :disabled="page === pageCount - 1" />
            </div>
        </template>
    </DataTable>
    <!-- <div class="skeleton h-96 w-full" v-else>
    </div> -->
</template>