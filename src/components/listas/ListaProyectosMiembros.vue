<script setup lang="ts">
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { FilterMatchMode } from "@primevue/core/api";
import { formatMoneda } from "@assets/format";
import { onMounted, onUnmounted, ref } from "vue";

interface props {
  data: any[];
  rows?: number;
}

const props = defineProps<props>();

const isMounted = ref<boolean>(false);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

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

  element.miembros_proyecto.forEach((el) => {
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

onMounted(() => {
  isMounted.value = true;
});
onUnmounted(() => {
  isMounted.value = false;
});
</script>
<template>
  <DataTable
    :value="props.data"
    :paginator="true"
    :rows="props.rows ?? 10"
    :rowsPerPageOptions="props.rows ? undefined : [5, 10, 20, 50]"
    v-model:filters="filters"
    :globalFilterFields="[
      'clave',
      'titulo',
      'convocatoria',
      'director_proyecto.nombreCompleto',
      'otrosColaboradores',
    ]"
    :loading="props.data.length < 1 ? false : !isMounted"
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
            placeholder="Buscar proyecto (clave, titulo, convocatoria, director)"
          />
        </label>
      </div>
    </template>
    <Column field="clave" header="Clave">
      <template #body="{ data, field }">
        <div class="w-20">{{ data[field] }}</div>
      </template>
    </Column>
    <Column field="convocatoria" header="Convocatoria"></Column>
    <Column field="titulo" header="Titulo">
      <template #body="{ data, field }">
        <div class="min-w-32">{{ data[field] }}</div>
      </template>
    </Column>
    <Column
      field="director_proyecto.nombreCompleto"
      header="Director(a) responsable"
      sortable
    />
    <Column field="fechaInicio" header="Vigencia">
      <template #body="{ data }">
        <div class="w-24">{{ data.fechaInicio }} a {{ data.fechaTermino }}</div>
      </template>
    </Column>
    <Column field="miembros_proyecto" header="Colaboradores">
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
    <Column field="monto" header="Monto aprobado" sortable>
      <template #body="{ data, field }">
        {{ formatMoneda(data[field]) }}
      </template>
    </Column>
    <Column field="fechaInicioEntrega" header="Entrega final">
      <template #body="{ data }">
        <template v-if="!data.fechaInicioEntrega || !data.fechaTerminoEntrega">
          ---
        </template>
        <template v-else>
          <div class="w-24">
            {{ data.fechaInicioEntrega }} a {{ data.fechaTerminoEntrega }}
          </div>
        </template>
      </template>
    </Column>
    <Column field="estatus" header="Estatus" sortable>
      <template #body="{ data, field }">
        <div
          class="badge h-max"
          :class="{
            'badge-success': data[field] === 'finalizado',
            'badge-info': data[field] === 'en proceso',
          }"
        >
          {{ (data[field] as string).toUpperCase() }}
        </div>
      </template>
    </Column>
    <template #empty>
      <div class="text-center font-bold">Sin datos.</div>
    </template>
  </DataTable>
</template>
