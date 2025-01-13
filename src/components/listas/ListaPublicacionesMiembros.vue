<script setup lang="ts">
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

interface props {
    data: any[]
}

const props = defineProps<props>()

const getCollabs = (element: {
    otrosColaboradores: string | null;
    miembros_publicacion: {
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

    element.miembros_publicacion.forEach((el) => {
        miembrosF.push(el.nombreCompleto);
    });

    if (element.otrosColaboradores) {
        const otherCollabsArr: string[] = element.otrosColaboradores.split(";");
        miembrosF.push(...otherCollabsArr);
    }

    if (miembrosF.length < 1) {
        return "---";
    }

    return formatter.format(miembrosF);
};

</script>
<template>
    <DataTable :value="props.data" :paginator="true" :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
        selectionMode="single">
        <Column field="ISSN" header="ISSN">
            <template #body="{ data, field }">
                <div class="w-20 ">{{ data[field] }}</div>
            </template>
        </Column>
        <Column field="titulo" header="Titulo">
            <template #body="{ data, field }">
                <div class="min-w-32">{{ data[field] }}</div>
            </template>
        </Column>
        <Column field="year" header="Año" sortable />
        <Column field="miembros_proyecto" header="Colaboradores">
            <template #body="{ data }">
                <div class="w-32 ">
                    {{ getCollabs(data) }}
                </div>
            </template>
        </Column>
        <Column field="tipo" header="Tipo" sortable>
            <template #body="{ data, field }">
                {{ data[field].toUpperCase() }}
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