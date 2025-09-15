<script setup lang="ts">
import { FilterMatchMode } from "@primevue/core/api";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { onMounted, onUnmounted, ref } from "vue";

interface rowData {
  descripcion?: string | null;
  url?: string | null;
  titulo?: string;
}
interface props {
  data: any[];
  rows?: number;
}

const props = defineProps<props>();

const rowData = ref<rowData>({});
const isMounted = ref<boolean>(false);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
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

const handleClick = (ev: { originalEvent: Event; data: rowData }) => {
  rowData.value = ev.data;
  const modal = document.getElementById("modal-articulos") as HTMLDialogElement;
  modal.showModal();
};
onMounted(() => {
  isMounted.value = true;
});
onUnmounted(() => {
  isMounted.value = false;
});
</script>
<template>
  <dialog id="modal-articulos" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          <i class="bi bi-x text-xl"></i>
        </button>
      </form>
      <h3 class="text-lg font-bold">{{ rowData.titulo }}</h3>
      <p class="py-4">{{ rowData.descripcion ?? "Sin resumen." }}</p>
      <a
        v-if="rowData.url"
        class="btn btn-primary"
        :href="rowData.url ?? '#'"
        target="_blank"
      >
        Ver artículo <i class="bi bi-box-arrow-up-right"></i>
      </a>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
  <DataTable
    :value="props.data"
    :paginator="true"
    :rows="props.rows ?? 10"
    :rowsPerPageOptions="props.rows ? undefined : [5, 10, 20, 50]"
    v-model:filters="filters"
    :globalFilterFields="['ISSN', 'titulo', 'otrosAutores']"
    :loading="props.data.length < 1 ? false : !isMounted"
    @row-click="handleClick"
    :pt="{ bodyrow: { class: 'hover cursor-pointer' } }"
  >
    <template #loading>
      <div
        class="absolute top-0 left-0 h-full w-full z-30 select-none skeleton bg-base-300/60 backdrop-blur-[0.5px] rounded-btn"
      ></div>
    </template>
    <template #header>
      <div class="flex justify-end mb-4">
        <label
          class="input input-bordered flex items-center gap-2 w-full max-w-xs"
        >
          <i class="bi bi-search"></i>
          <input
            v-model="filters.global.value"
            type="text"
            class="grow"
            placeholder="Buscar publicación (ISSN, titulo, autores)"
          />
        </label>
      </div>
    </template>
    <Column field="ISSN" header="ISSN">
      <template #body="{ data, field }">
        <div class="w-20">{{ data[field] ?? "---" }}</div>
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
        <div class="w-32">
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
