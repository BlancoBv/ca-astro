<script setup lang="ts">
import { FilterMatchMode } from '@primevue/core/api';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { onMounted, onUnmounted, ref } from 'vue';

interface props {
    data: any[]
}

const props = defineProps<props>()

const isMounted = ref<boolean>(false)
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

const getCollabs = (element: {
    otrosAutores: string | null;
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

    if (element.otrosAutores) {
        const otherAutoresArr: string[] = element.otrosAutores.split(";");
        miembrosF.push(...otherAutoresArr);
    }

    if (miembrosF.length < 1) {
        return "---";
    }

    return formatter.format(miembrosF);
};

onMounted(() => {
    isMounted.value = true
})
onUnmounted(() => {
    isMounted.value = false
})
</script>
<template>
    <DataTable :value="props.data" :paginator="true" :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
        v-model:filters="filters" :globalFilterFields="['ISSN', 'titulo', 'otrosAutores']"
        :loading="props.data.length < 1 ? false : !isMounted">
        <template #loading>
            <div
                class="absolute top-0 left-0 h-full w-full z-30 select-none skeleton bg-base-300/60 backdrop-blur-[0.5px] rounded-btn">
            </div>
        </template>
        <template #header>
            <div class="flex justify-end mb-4">
                <label class="input input-bordered flex items-center gap-2 w-full max-w-xs">
                    <i class="bi bi-search"></i>
                    <input v-model="filters.global.value" type="text" class="grow"
                        placeholder="Buscar publicación (ISSN, titulo, autores)" />
                </label>
            </div>
        </template>
        <Column field="ISSN" header="ISSN">
            <template #body="{ data, field }">
                <div class="w-20 ">{{ data[field] ?? "---" }}</div>
            </template>
        </Column>
        <Column field="titulo" header="Titulo">
            <template #body="{ data, field }">
                <div class="min-w-32">{{ data[field] }}</div>
            </template>
        </Column>
        <Column field="year" header="Año" sortable />
        <Column field="miembros_publicacion" header="Autores">
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
            <div class="text-center font-bold">Sin datos.</div>
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