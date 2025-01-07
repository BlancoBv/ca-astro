<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import moment from 'moment';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{ data: any[], mutationDelete: any }>()
const isMounted = ref<boolean>(false)


onMounted(() => {
    isMounted.value = true
})
onUnmounted(() => {
    isMounted.value = false
})

</script>
<template>
    <div v-if="!isMounted" class="skeleton h-96 w-full"> </div>
    <DataTable v-else :value="props.data" :paginator="true" :rows="5" edit-mode="cell">
        <Column field="descripcion" header="Descripción">
            <template #body="{ data, field }">
                {{ data[field] ?? "---" }}
            </template>
        </Column>
        <Column field="imagen" header="Imagen">
            <template #body="{ data, field }">
                <img class="object-cover size-12 " :src="data[field]" :alt="data[field]" width="50px" height="50px">
            </template>
        </Column>
        <Column field="mostrar" header="Mostrar">
            <template #editor="{ data, field }">
                <select :value="data[field]" class="select select-bordered w-full max-w-xs">
                    <option value="" disabled>Selecciona una valor</option>
                    <option value="true">Mostrar</option>
                    <option value="false">Dejar de mostrar</option>
                </select>
            </template>
        </Column>
        <Column field="createdAt" header="Fecha de creación">
            <template #body="{ data, field }">{{
                moment(data[field]).locale("es-MX").format("L")
                }}</template>
        </Column>
    </DataTable>


</template>