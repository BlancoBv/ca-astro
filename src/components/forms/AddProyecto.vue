<script setup lang="ts">
import { useGetData, useSendData } from '@assets/http';
import { validateBuilder } from '@assets/zodValidations';
import ListaProyectos from '@components/listas/ListaProyectos.vue';
import MultiSelect from 'primevue/multiselect';
import { computed, reactive, ref } from 'vue';
import { toast } from 'vue3-toastify';

interface proyectoBody {
    miembrosColaboradores: number[],
    titulo: string,
    clave: string,
    fechaInicio: string,
    fechaTermino: string,
    estatus: string,
    tipo: string,
    otrosColaboradores?: string,
    director: string,
    monto: string,
    fechaInicioEntrega: string,
    fechaTerminoEntrega: string,
    convocatoria: string,
    visible: boolean
}

const { data, isPending, refetch } = useGetData("proyectos", "proyectosData")
const noMiembrosColab = ref<boolean>(false)
const { data: miembros, isPending: miembrosIsPending } = useGetData("miembros", "miembrosData")
const addProyecto = useSendData("proyectos", "post", {
    onSuccess() {
        refetch()
        body.miembrosColaboradores = []
        body.titulo = ""
        body.clave = ""
        body.fechaInicio = ""
        body.fechaTermino = ""
        body.estatus = ""
        body.tipo = ""
        body.otrosColaboradores = ""
        body.director = ""
        body.monto = ""
        body.fechaInicioEntrega = ""
        body.fechaTerminoEntrega = ""
        body.convocatoria = ""
    },
})
const updateProyecto = useSendData("proyectos", "put", {
    onSuccess() {
        refetch()
    },
})
const body = reactive<proyectoBody>({
    miembrosColaboradores: [],
    titulo: "", clave: "",
    fechaInicio: "",
    fechaTermino: "",
    estatus: "",
    tipo: "",
    director: "",
    monto: "",
    fechaInicioEntrega: "",
    fechaTerminoEntrega: "",
    convocatoria: "",
    visible: true
})

const proyectos = computed(() => {
    return data.value?.response.map((el: any) => ({ ...el, director: el.director_proyecto.idmiembro, miembrosCol: el.miembros_proyecto.map((miembro: any) => miembro.idmiembro) })) ?? []
})

const validator = new validateBuilder()
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
        addProyecto.mutate(body)
        break handleSubmit
    }
}



</script>
<template>
    <form class="mb-4 grid grid-cols-4 grid-rows-3 gap-4 items-end" @submit.prevent="handleSubmit">
        <label class="form-control w-full max-w-xs h-full row-span-2">
            <div class="label">
                <span class="label-text">Titulo del proyecto</span>
            </div>
            <textarea v-model="body.titulo" class="textarea textarea-bordered h-full"
                :class="{ 'textarea-error': validator.setErrorObject(addProyecto.error.value).setField('titulo').getValidator().isError() }"
                required />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Clave</span>
            </div>
            <input type="text" v-model="body.clave" class="input input-bordered w-full max-w-xs" required
                :class="{ 'input-error': validator.setErrorObject(addProyecto.error.value).setField('clave').getValidator().isError() }" />

        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Fecha de inicio</span>
            </div>
            <input type="date" v-model="body.fechaInicio" class="input input-bordered w-full max-w-xs" required />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Fecha de termino</span>
            </div>
            <input type="date" :min="body.fechaInicio" v-model="body.fechaTermino"
                class="input input-bordered w-full max-w-xs" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Monto del proyecto</span>
            </div>
            <input type="number" placeholder="50.00" step="0.01" min="0.00" v-model="body.monto"
                class="input input-bordered w-full max-w-xs" required />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Estatus</span>
            </div>
            <select class="select select-bordered" v-model="body.estatus" required>
                <option disabled selected value="">Selecciona un estatus</option>
                <option value="en proceso">En proceso</option>
                <option value="finalizado">Finalizado</option>
                <option value="no finalizado">No finalizado</option>
            </select>
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Tipo de proyecto</span>
            </div>
            <select class="select select-bordered" v-model="body.tipo" required>
                <option disabled selected value="">Selecciona un tipo</option>
                <option value="interno">Interno</option>
                <option value="externo">Externo</option>
            </select>
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Director</span>
            </div>
            <select class="select select-bordered" :class="{ 'skeleton': miembrosIsPending }" v-model="body.director"
                required>
                <template v-if="miembrosIsPending">
                    <option disabled selected value="">
                        Cargando miembros...
                    </option>
                </template>

                <template v-else>
                    <option disabled selected value="">Selecciona un miembro</option>
                    <option :value="miembro.idmiembro" v-for="miembro in miembros.response">{{
                        miembro.nombreCompleto }}</option>
                </template>
            </select>
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Otros colaboradores</span>
                <span class="label-text-alt">Separar con ";"</span>
            </div>
            <input type="text" v-model="body.otrosColaboradores" class="input input-bordered w-full max-w-xs"
                :class="{ 'input-error': validator.setErrorObject(addProyecto.error.value).setField('otrosColaboradores').getValidator().isError() }" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Fecha de inicio de entrega</span>
            </div>
            <input type="date" v-model="body.fechaInicioEntrega" class="input input-bordered w-full max-w-xs" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Fecha de termino de entrega</span>
            </div>
            <input type="date" :min="body.fechaInicioEntrega" v-model="body.fechaTerminoEntrega"
                class="input input-bordered w-full max-w-xs" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Convocatoria</span>
            </div>
            <input type="text" v-model="body.convocatoria" placeholder="TECNM"
                class="input input-bordered w-full max-w-xs"
                :class="{ 'input-error': validator.setErrorObject(addProyecto.error.value).setField('convocatoria').getValidator().isError() }" />
        </label>
        <div class="w-full max-w-xs">
            <div class="label">
                <span class="label-text">Miembros colaboradores</span>
                <span class="label-text-alt text-error" v-if="noMiembrosColab">**</span>
            </div>
            <MultiSelect v-model="body.miembrosColaboradores" display="chip" :options="miembros?.response"
                optionLabel="nombreCompleto" option-value="idmiembro" filter placeholder="Selecciona uno o más miembros"
                :max-selected-labels="2"
                :class="{ 'input-error': noMiembrosColab || validator.setErrorObject(addProyecto.error.value).setField('miembrosColaboradores').getValidator().isError() }" />
        </div>
        <button type="submit" class="btn btn-primary" :disabled="addProyecto.isPending.value">Añadir proyecto</button>
    </form>
    <ListaProyectos :data="proyectos" :mutationUpdate="updateProyecto" :is-pending="isPending"
        :miembros="miembros?.response ?? []" :refetch="refetch" />
</template>