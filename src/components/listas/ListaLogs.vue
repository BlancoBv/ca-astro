<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { onMounted, onUnmounted, ref } from "vue";
import { formatDate } from "@assets/format";

interface listaDocs {
  method: string;
  idUsuario: number;
  ruta: string;
}

const props = defineProps<{ data: listaDocs[] }>();

const isMounted = ref<boolean>(false);

onMounted(() => {
  isMounted.value = true;
});
onUnmounted(() => {
  isMounted.value = false;
});
</script>
<template>
  <div v-if="!isMounted" class="skeleton h-96 w-full"></div>
  <DataTable v-else :value="props.data" :paginator="true" :rows="10">
    <Column field="method" header="Método" sortable />
    <Column field="ruta" header="Ruta" />
    <Column field="idUsuario" header="Usuario" sortable />
    <Column field="createdAt" header="Fecha de creación" sortable>
      <template #body="{ data, field }">
        {{ formatDate(data[field], "DD-MM-YYYY hh:mm:ss") }}
      </template>
    </Column>
  </DataTable>
</template>
