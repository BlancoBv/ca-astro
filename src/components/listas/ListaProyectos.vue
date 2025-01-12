<script setup lang="ts">
import DataTable, { type DataTableCellEditCompleteEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import MultiSelect from 'primevue/multiselect';
import { computed, onMounted, onUnmounted, ref, toRaw, useTemplateRef, } from 'vue';
import ContextMenu from 'primevue/contextmenu';
import { formatDate, formatMoneda } from '@assets/format';

interface listaProyectos { otrosColaboradores: string | null }

const props = defineProps<{ data: listaProyectos[], isPending: boolean, mutationUpdate: any, miembros: { nombreCompleto: string, idmiembro: number }[], refetch: any }>()

const selectedItem = ref<Partial<listaProyectos> | null>(null);
const isMounted = ref<boolean>(false)

const items = ref([
    {
        label: 'Eliminar', icon: 'bi bi-trash-fill', command: () => {
            //   props.mutationDelete.mutate({ fileName: selectedItem.value?.fileName })
        }
    },
]);
const btn = useTemplateRef("guardar-btn")
const miembros = computed(() => {
    return props?.miembros.map(el => ({ label: el.nombreCompleto, value: el.idmiembro })) ?? []
})

const colaboradores = ref<number[]>([])
/* const onRowContextMenu = (event: { originalEvent: Event }) => {
    cm.value?.show(event.originalEvent);
}; */


const handleEdit = (event: DataTableCellEditCompleteEvent) => {
    handleEdit: {
        const { data, newValue, field } = event

        console.log(data, field, newValue);



        if (field === "miembrosCol") {
            if (data[field] !== toRaw(colaboradores.value)) {
                const prevValues = new Set(data[field])
                const newValues = new Set(toRaw(colaboradores.value))

                const idsToDelete = prevValues.difference(newValues)
                const idsToAdd = newValues.difference(prevValues)
                props.mutationUpdate.mutate({ idproyecto: data.idproyecto, miembrosColabAdd: Array.from(idsToAdd) })


            }
            break handleEdit

        }

        if (newValue !== data[field]) { props.mutationUpdate.mutate({ idproyecto: data.idproyecto, [field]: newValue }) }
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
    {{ colaboradores }}
    <dialog id="miembros-colab" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>

    <ContextMenu ref="cm" :model="items" @hide="selectedItem = null" />
    <div v-if="!isMounted" class="skeleton h-96 w-full"> </div>
    <DataTable
        :class="{ 'skeleton select-none': props.isPending, 'cursor-wait select-none': props.mutationUpdate.isPending.value }"
        v-else :value="props.data" :paginator="true" :rows="5" :edit-mode="'cell'" @cell-edit-complete="handleEdit">
        <Column field="clave" header="Clave del proyecto" sortable>
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="text" class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="titulo" header="Titulo del proyecto">
            <template #body="{ data, field }">
                <div class="w-60"> {{ data[field] }}</div>
            </template>
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
        <Column field="miembrosCol" header="Miembros colaboradores">
            <template #body="{ data }">
                {{ data.miembros_proyecto.map((el: any) => el.nombreCompleto).join(",") }}
            </template>
            <template #editor="{ data, field, editorSaveCallback, editorCancelCallback }">
                <div>
                    <form @submit.prevent="editorCancelCallback">
                        <button type="submit">canclear</button>
                    </form>
                    <form @submit.prevent="editorSaveCallback()">
                        <button ref="guardar-btn" type="submit" class="btn btn-primary btn-xs mb-4">Guardar</button>

                    </form>
                    <MultiSelect v-model="colaboradores" @vue:mounted="colaboradores = data[field]" :options="miembros"
                        option-label="label" option-value="value" display="chip" filter @keydown.enter.stop />
                </div>
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
        <Column field="fechaInicio" header="Fecha de inicio del proyecto" sortable>
            <template #body="{ data, field }">
                {{ formatDate(data[field], "DD-MM-YYYY") }}
            </template>
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="date" class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="fechaTermino" header="Fecha de termino del proyecto" sortable>
            <template #body="{ data, field }">
                {{ formatDate(data[field], "DD-MM-YYYY") }}
            </template>
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="date" :min="data.fechaInicio"
                    class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="visible" header="Visibilidad del proyecto">
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
        <Column field="fechaInicioEntrega" header="Fecha de inicio de entrega final" sortable>
            <template #body="{ data, field }">
                {{ data[field] ? formatDate(data[field], "DD-MM-YYYY") : "---" }}
            </template>
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="date" class="input input-bordered w-full max-w-xs" />
            </template>
        </Column>
        <Column field="fechaTerminoEntrega" header="Fecha de termino de entrega final" sortable>
            <template #body="{ data, field }">
                {{ data[field] ? formatDate(data[field], "DD-MM-YYYY") : "---" }} </template>
            <template #editor="{ data, field }">
                <input v-model="data[field]" type="date" :min="data.fechaInicioEntrega"
                    class="input input-bordered w-full max-w-xs" />
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