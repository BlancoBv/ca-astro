<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useGetData } from '@assets/http';
import moment from 'moment';

const props = defineProps<{ data: any[] }>()


</script>
<template>
    <DataTable :value="props.data" :paginator="true" :rows="5">
        <Column field="descripcion" header="Descripción">
            <template #body="{ data, field }">
                {{ data[field] ?? "---" }}
            </template>
        </Column>
        <Column field="imagen" header="Imagen">
            <template #body="{ data, field }">
                <img class="object-contain" :src="data[field]" :alt="data[field]" width="100px" height="100px">
            </template>
        </Column>
        <Column field="createdAt" header="Fecha de creación">
            <template #body="{ data, field }">{{
                moment(data[field]).locale("es-MX").format("L")
            }}</template>
        </Column>
    </DataTable>
    <!--     <div v-if="isPending" class="skeleton h-96 w-full"> </div>
 -->
</template>