<script setup lang="ts">
import DataTable, { type DataTableCellEditCompleteEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import MultiSelect from 'primevue/multiselect';
import { computed, onMounted, onUnmounted, ref, toRaw, } from 'vue';
import { formatDate } from '@assets/format';

interface listaProyectos { otrosColaboradores: string | null }

const props = defineProps<{ data: listaProyectos[], isPending: boolean, mutationUpdate: any, miembros: { nombreCompleto: string, idmiembro: number }[] }>()

const isMounted = ref<boolean>(false)

const miembros = computed(() => {
    return props?.miembros.map(el => ({ label: el.nombreCompleto, value: el.idmiembro })) ?? []
})

const colaboradores = ref<number[]>([])

const handleEdit = (event: DataTableCellEditCompleteEvent) => {
    handleEdit: {
        const { data, newValue, field } = event
        if (field === "miembrosCol") {
            if (data[field] !== toRaw(colaboradores.value)) {
                const prevValues = new Set(data[field])
                const newValues = new Set(toRaw(colaboradores.value))

                const idsToDelete = prevValues.difference(newValues)
                const idsToAdd = newValues.difference(prevValues)
                props.mutationUpdate.mutate({ idpublicacion: data.idpublicacion, miembrosColabAdd: Array.from(idsToAdd), miembrosColabDelete: Array.from(idsToDelete) })
            }
            break handleEdit
        }

        if (newValue !== data[field]) { props.mutationUpdate.mutate({ idpublicacion: data.idpublicacion, [field]: newValue }) }
        break handleEdit
    }
}

onMounted(() => {
    isMounted.value = true
})
onUnmounted(() => {
    isMounted.value = false
})
</script>
<template>
    <div v-if="!isMounted" class="skeleton h-96 w-full"> </div>
    <DataTable
        :class="{ 'skeleton select-none': props.isPending, 'cursor-wait select-none': props.mutationUpdate.isPending.value }"
        v-else :value="props.data" :paginator="true" :rows="5" :edit-mode="'cell'" @cell-edit-complete="handleEdit">
        <Column field="ISSN" header="ISSN">
            <template #body="{ data, field }">{{ data[field] ?? "---" }}</template>
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="text" class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="titulo" header="Titulo de la publicación">
            <template #body="{ data, field }">
                <div class="w-60"> {{ data[field] }}</div>
            </template>
            <template #editor="{ data, field }">
                <textarea v-model="data[field]" class="textarea textarea-bordered h-24" />
            </template>
        </Column>
        <Column field="year" header="Año">
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="text" class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="tipo" header="Tipo" sortable>
            <template #body="{ data, field }">
                <div class="badge badge-info h-max">
                    {{ data[field].toUpperCase() }}
                </div>
            </template>
            <template #editor="{ data, field }">
                <select v-model="data[field]" class="select select-bordered w-full max-w-xs">
                    <option disabled selected>Selecciona un tipo</option>
                    <option value="arbitrado">Arbitrado</option>
                    <option value="memoria en extenso">Memoria en extenso</option>
                    <option value="journa">Journal</option>
                    <option value="indexado">Indexado</option>
                </select>
            </template>
        </Column>
        <Column field="miembrosCol" header="Miembros autores">
            <template #body="{ data }">
                {{ data.miembros_publicacion.map((el: any) => el.nombreCompleto).join(",") }}
            </template>
            <template #editor="{ data, field, editorSaveCallback, editorCancelCallback }">
                <div class="flex gap-4 items-center mb-4">
                    <form @submit.prevent="editorCancelCallback">
                        <button type="submit" class="btn btn-error btn-xs">Cancelar</button>
                    </form>
                    <form @submit.prevent="editorSaveCallback">
                        <button type="submit" class="btn btn-primary btn-xs">Guardar</button>
                    </form>
                </div>
                <MultiSelect v-model="colaboradores" @vue:mounted="colaboradores = data[field]" :options="miembros"
                    option-label="label" option-value="value" display="chip" filter @keydown.enter.stop
                    @keydown.escape.stop />
            </template>
        </Column>
        <Column field="otrosAutores" header="Otros autores">
            <template #body="{ data, field }">{{
                data[field] ?? "---" }}</template>
            <template #editor="{ data, field }">
                <textarea v-model="data[field]" class="textarea textarea-bordered h-24" />
            </template>
        </Column>
        <Column field="descripcion" header="Descripción">
            <template #body="{ data, field }">
                {{ data[field] ?? "---" }}
            </template>
            <template #editor="{ data, field }">
                <textarea v-model="data[field]" class="textarea textarea-bordered h-24" />
            </template>
        </Column>
        <Column field="url" header="URL (DOI u otro)">
            <template #body="{ data, field }">
                {{ data[field] ?? "---" }}
            </template>
            <template #editor="{ data, field }">
                <textarea v-model="data[field]" class="textarea textarea-bordered h-24" />
            </template>
        </Column>
        <Column field="visible" header="Visibilidad de la publicación" sortable>
            <template #body="{ data, field }">
                <div class="badge h-max" :class="{
                    'badge-success': data[field],
                    'badge-error': !data[field]
                }"> {{ data[field] ? "Visible" : "No visible" }}</div>
            </template>
            <template #editor="{ data, field }">
                <select v-model="data[field]" class="select select-bordered w-full max-w-xs">
                    <option disabled selected value="">Selecciona una visibilidad</option>
                    <option :value="true">Visible</option>
                    <option :value="false">No visible</option>
                </select>
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