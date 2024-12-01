<script setup lang="ts">
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { onMounted, onUnmounted, ref } from 'vue';

interface props {
    cols: { field: string, header: string, sortable?: boolean, formatter?: (prop?: any) => any }[], data: any[]
}

const props = defineProps<props>()
const isMounted = ref<boolean>(false)

const getMiembro = async (id: number) => {
    if (id) {
        const response = await fetch(
            `http://localhost:4321/api/miembros?idmiembro=${id}`
        ).then((res) => res.json());

        return response.response.nombreCompleto;
    }
    return "";
};


onMounted(() => {
    isMounted.value = true
})

onUnmounted(() => {
    isMounted.value = false
})

console.log(props.cols);

</script>
<template>

    <DataTable :value="props.data" striped-rows>
        <Column v-for="col of props.cols" :key="col.field" :field="col.field" :header="col.header"
            :sortable="col.sortable">

        </Column>
    </DataTable>
    <!-- <div class="skeleton h-96 w-full" v-else>
    </div> -->
</template>