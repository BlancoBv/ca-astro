<script setup lang="ts">
import DataTable, { type DataTableCellEditCompleteEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import ContextMenu from 'primevue/contextmenu';
import { formatDate, formatMoneda } from '@assets/format';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';

interface listaProyectos { otrosColaboradores: string | null }

const props = defineProps<{ data: listaProyectos[], isPending: boolean, mutationUpdate: any, miembros: { nombreCompleto: string, idmiembro: number }[] }>()


const cm = useTemplateRef("cm");
const selectedItem = ref<Partial<listaProyectos> | null>(null);
const isMounted = ref<boolean>(false)

const items = ref([
    {
        label: 'Eliminar', icon: 'bi bi-trash-fill', command: () => {
            //   props.mutationDelete.mutate({ fileName: selectedItem.value?.fileName })
        }
    },
]);

const miembros = computed(() => {
    return props.miembros.map(el => ({ label: el.nombreCompleto, value: el.idmiembro }))
})

const onRowContextMenu = (event: { originalEvent: Event }) => {
    cm.value?.show(event.originalEvent);
};


const handleEdit = (event: DataTableCellEditCompleteEvent) => {
    const { data, newValue, field } = event
    if (data[field] !== newValue) { props.mutationUpdate.mutate({ idproyecto: data.idproyecto, [field]: newValue }) }
}


onMounted(() => {
    isMounted.value = true
})
onUnmounted(() => {
    isMounted.value = false
})
</script>
<template>
    <ContextMenu ref="cm" :model="items" @hide="selectedItem = null" />
    <div v-if="!isMounted" class="skeleton h-96 w-full"> </div>
    <DataTable
        :class="{ 'skeleton select-none': props.isPending, 'cursor-wait select-none': props.mutationUpdate.isPending.value }"
        v-else :value="props.data" :paginator="true" :rows="5" @row-contextmenu="onRowContextMenu" :edit-mode="'cell'"
        @cell-edit-complete="handleEdit">
        <Column field="clave" header="Clave del proyecto" sortable>
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="text" class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="titulo" header="Titulo del proyecto">
            <template #editor="{ data, field }">
                <textarea v-model="data[field]" class="textarea textarea-bordered h-24" />
            </template>
        </Column>
        <Column field="tipo" header="Tipo de proyecto" sortable>
            <template #body="{ data, field }">
                <div class="badge h-max"
                    :class="{ 'badge-accent': data[field] === 'externo', 'badge-info': data[field] !== 'externo' }">
                    {{ data[field].toUpperCase() }}
                </div>

            </template>
            <template #editor="{ data, field }">
                <select v-model="data[field]" class="select select-bordered w-full max-w-xs">
                    <option disabled selected>Selecciona un tipo</option>
                    <option value="interno">Interno</option>
                    <option value="externo">Externo</option>
                </select>
            </template>
        </Column>
        <Column field="director" header="Director(a) responsable del proyecto">
            <template #body="{ data }">
                {{ data.director_proyecto.nombreCompleto }}
            </template>
            <template #editor="{ data, field }">
                <select v-model="data[field]" class="select select-bordered w-full max-w-xs">
                    <option disabled selected value="">Selecciona un miembro</option>
                    <option v-for="miembro in props.miembros" :value="miembro.idmiembro">{{ miembro.nombreCompleto }}
                    </option>
                </select>
            </template>
        </Column>
        <Column field="miembros_proyecto" header="Miembros del proyecto">
            <template #body="{ data, field }">
                {{ data[field].map((el: any) => el.nombreCompleto).join(",") }}
            </template>
        </Column>
        <Column field="otrosColaboradores" header="Otros colaboradores">
            <template #body="{ data, field }">{{
                data[field] ?? "---" }}</template>

            <template #editor="{ data, field }">
                <textarea v-model="data[field]" class="textarea textarea-bordered h-24" />
            </template>
        </Column>
        <Column field="estatus" header="Estatus del proyecto" sortable>
            <template #body="{ data, field }">
                <div class="badge h-max" :class="{
                    'badge-warning': data[field] === 'en proceso',
                    'badge-success': data[field] === 'finalizado',
                    'badge-error': data[field] === 'no finalizado'
                }">
                    {{ data[field].toUpperCase() }}
                </div>
            </template>
            <template #editor="{ data, field }">
                <select v-model="data[field]" class="select select-bordered w-full max-w-xs">
                    <option disabled selected value="">Selecciona un estatus</option>
                    <option value="en proceso">En proceso</option>
                    <option value="finalizado">Finalizado</option>
                    <option value="no finalizado">No finalizado</option>
                </select>
            </template>
        </Column>
        <Column field="monto" header="Monto del proyecto" sortable>
            <template #body="{ data, field }">
                {{ formatMoneda(data[field]) }}
            </template>
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="number" step="0.01" min="0"
                    class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="convocatoria" header="Convocatoria">
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="text" class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="createdAt" header="Fecha de creación" sortable>
            <template #body="{ data, field }">
                {{ formatDate(data[field], "DD-MM-YYYY") }}
            </template>
        </Column>
        <Column field="updatedAt" header="Ultima actualización" sortable>
            <template #body="{ data, field }">
                {{ formatDate(data[field], "DD-MM-YYYY") }}
            </template>
        </Column>
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