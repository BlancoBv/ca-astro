<script setup lang="ts">
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { onMounted, onUnmounted, ref } from 'vue';
import get from "lodash/get"

interface props {
    cols: { field: string, header: string, sortable?: boolean, formatter?: "uppercase" | "colabs" | "duracion" }[], data: any[]
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

const getDuracion = (element: { fechaInicio: string, fechaTermino: string }) => {
    return `${element.fechaInicio} a ${element.fechaTermino}`
}

const formatter = {
    uppercase: (value: string) => value.toUpperCase(),
    duracion: (value: any) => getDuracion(value),
    colabs: (value: any) => getCollabs(value)
}


const handleClick = () => {

    console.log("Row")

}

onMounted(() => {
    isMounted.value = true
})

onUnmounted(() => {
    isMounted.value = false
})
</script>
<template>
    <DataTable :value="props.data" :paginator="true" :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
        selectionMode="single" @row-click="handleClick">

        <Column v-for="col of props.cols" :key="col.field" :field="col.field" :header="col.header"
            :sortable="col.sortable">

            <template #body="row">
                {{ col.formatter ? formatter[col.formatter]?.(get(row.data, col.field, row.data)) : get(row.data,
                    col.field, row.data)
                }}
            </template>
        </Column>
        <template #empty>
            Sin datos.
        </template>
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