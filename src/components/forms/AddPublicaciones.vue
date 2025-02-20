<script setup lang="ts">
import { useGetData, useSendData } from '@assets/http';
import ListaPublicaciones from '@components/listas/ListaPublicaciones.vue';
import { validateBuilder } from '@assets/zodValidations';
import { reactive, ref } from 'vue';
import MultiSelect from 'primevue/multiselect';
import { toast } from 'vue3-toastify';
import { computed } from 'vue';

const validator = new validateBuilder()

const { data, isPending, refetch } = useGetData("publicaciones", "publicacionesData")
const { data: miembros } = useGetData("miembros", "miembrosData")

const noMiembrosColab = ref<boolean>(false)
const addPublicacion = useSendData("publicaciones", "post", {
    onSuccess() {
        body.titulo = "";
        body.ISSN = null;
        body.descripcion = null;
        body.year = "";
        body.url = null;
        body.miembrosColaboradores = [];
        body.tipo = ""
        body.otrosAutores = null
        refetch()
    }
})
const updatePublicaciones = useSendData("publicaciones", "put", {
    onSuccess() {
        refetch()
    }
})
const body = reactive<{
    titulo: string,
    ISSN: string | null,
    descripcion: string | null,
    otrosAutores: string | null,
    year: string,
    url: string | null,
    miembrosColaboradores: number[]
    visible: boolean
    tipo: string
}>({ titulo: "", ISSN: null, descripcion: null, year: "", url: null, miembrosColaboradores: [], visible: true, tipo: "", otrosAutores: null })
const proyectos = computed(() => {
    return data.value?.response.map((el: any) => ({ ...el, miembrosCol: el.miembros_publicacion.map((miembro: any) => miembro.idmiembro) })) ?? []
})

const handleSubmit = () => {
    handleSubmit: {
        if (body.miembrosColaboradores.length > 0) {
            noMiembrosColab.value = false
        }

        if (body.miembrosColaboradores.length < 1) {
            noMiembrosColab.value = true
            toast.error("No seleccionaste ningun miembro colaborador.")
            break handleSubmit
        }
        addPublicacion.mutate(body)
        break handleSubmit
    }
}
</script>
<template>
    <form class="mb-4 grid grid-cols-4 grid-rows-3 gap-4 items-end" @submit.prevent="handleSubmit">
        <label class="form-control w-full max-w-xs h-full row-span-2">
            <div class="label">
                <span class="label-text">Titulo</span>
            </div>
            <textarea v-model="body.titulo" class="textarea textarea-bordered h-full"
                :class="{ 'textarea-error': validator.setErrorObject(addPublicacion.error.value).setField('titulo').getValidator().isError() }"
                required />
        </label>
        <label class="form-control w-full max-w-xs h-full row-span-2">
            <div class="label">
                <span class="label-text">Descripción</span>
            </div>
            <textarea v-model="body.descripcion" class="textarea textarea-bordered h-full"
                :class="{ 'textarea-error': validator.setErrorObject(addPublicacion.error.value).setField('titulo').getValidator().isError() }" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">ISSN</span>
            </div>
            <input type="text" v-model="body.ISSN" class="input input-bordered w-full max-w-xs"
                :class="{ 'input-error': validator.setErrorObject(addPublicacion.error.value).setField('clave').getValidator().isError() }" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Otros autores</span>
                <span class="label-text-alt">Separar con ";"</span>
            </div>
            <input type="text" v-model="body.otrosAutores" class="input input-bordered w-full max-w-xs"
                :class="{ 'input-error': validator.setErrorObject(addPublicacion.error.value).setField('clave').getValidator().isError() }" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Año de publicación</span>
            </div>
            <input type="text" v-model="body.year" class="input input-bordered w-full max-w-xs" required
                :class="{ 'input-error': validator.setErrorObject(addPublicacion.error.value).setField('clave').getValidator().isError() }" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">URL (doi, etc.)</span>
            </div>
            <input type="text" v-model="body.url" class="input input-bordered w-full max-w-xs"
                :class="{ 'input-error': validator.setErrorObject(addPublicacion.error.value).setField('clave').getValidator().isError() }" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Tipo</span>
            </div>
            <select class="select select-bordered" v-model="body.tipo" required>
                <option disabled selected value="">Selecciona un tipo</option>
                <option value="arbitrado">Arbitrado</option>
                <option value="memoria en extenso">Memoria en extenso</option>
                <option value="journal">Journal</option>
                <option value="indexado">Indexado</option>
            </select>
        </label>

        <div class="w-full max-w-xs">
            <div class="label">
                <span class="label-text">Miembros colaboradores</span>
                <span class="label-text-alt text-error" v-if="noMiembrosColab">**</span>
            </div>
            <MultiSelect v-model="body.miembrosColaboradores" display="chip" :options="miembros?.response"
                optionLabel="nombreCompleto" option-value="idmiembro" filter placeholder="Selecciona uno o más miembros"
                :max-selected-labels="2"
                :class="{ 'input-error': noMiembrosColab || validator.setErrorObject(addPublicacion.error.value).setField('miembrosColaboradores').getValidator().isError() }" />
        </div>
        <button class="btn btn-primary">Añadir publicación</button>
    </form>
    <ListaPublicaciones :data="proyectos ?? []" :is-pending="isPending" :miembros="miembros?.response ?? []"
        :mutation-update="updatePublicaciones" />

</template>