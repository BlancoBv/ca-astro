<script setup lang="ts">
import { useGetData } from '@assets/http';
import ListaProyectos from '@components/listas/ListaProyectos.vue';
import MultiSelect from 'primevue/multiselect';
import { reactive, ref } from 'vue';

const { data, isPending } = useGetData("proyectos", "proyectosData")
const { data: miembros, isPending: miembrosIsPending } = useGetData("miembros", "miembrosData")
const miembrosSelect = ref()
const body = reactive<{ miembrosColaboradores: any[] }>({ miembrosColaboradores: [] })

</script>
<template>
    <!--  <form class="mb-4 grid grid-cols-4 grid-rows-3 gap-4">
        {{ body.miembrosColaboradores }}
        <label class="form-control w-full max-w-xs h-full row-span-2">
            <div class="label">
                <span class="label-text">Titulo del proyecto</span>
            </div>
            <textarea class="textarea textarea-bordered h-full" required />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Clave</span>
            </div>
            <input type="text" class="input input-bordered w-full max-w-xs" required />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Fecha de inicio</span>
            </div>
            <input type="date" class="input input-bordered w-full max-w-xs" required />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Fecha de termino</span>
            </div>
            <input type="date" class="input input-bordered w-full max-w-xs" />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Monto del proyecto</span>
            </div>
            <input type="number" placeholder="50.00" step="0.01" class="input input-bordered w-full max-w-xs"
                required />
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Estatus</span>
            </div>
            <select class="select select-bordered" required>
                <option disabled selected>Selecciona un estatus</option>
                <option value="en proceso">En proceso</option>
                <option value="finalizado">Finalizado</option>
                <option value="no finalizado">No finalizado</option>
            </select>
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Tipo de proyecto</span>
            </div>
            <select class="select select-bordered" required>
                <option disabled selected>Selecciona un tipo</option>
                <option value="interno">Interno</option>
                <option value="externo">Externo</option>
            </select>
        </label>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Director</span>
            </div>
            <select class="select select-bordered" :class="{ 'skeleton': miembrosIsPending }" required>
                <template v-if="miembrosIsPending">
                    <option disabled selected>
                        Cargando miembros...
                    </option>
                </template>

<template v-else>
                    <option disabled selected>Selecciona un miembro</option>
                    <option value="en proceso" v-for="miembro in miembros.response">{{
                        miembro.nombreCompleto }}</option>
                </template>
</select>
</label>
<label class="form-control w-full max-w-xs">
    <div class="label">
        <span class="label-text">Otros colaboradores</span>
        <span class="label-text-alt">Separar con ";"</span>
    </div>
    <input type="text" class="input input-bordered w-full max-w-xs" />
</label>
<label class="form-control w-full max-w-xs">
    <div class="label">
        <span class="label-text">Fecha de inicio de entrega</span>
    </div>
    <input type="date" class="input input-bordered w-full max-w-xs" />
</label>
<label class="form-control w-full max-w-xs">
    <div class="label">
        <span class="label-text">Fecha de termino de entrega</span>
    </div>
    <input type="date" class="input input-bordered w-full max-w-xs" />
</label>
<label class="form-control w-full max-w-xs">
    <div class="label">
        <span class="label-text">Convocatoria</span>
    </div>
    <input type="text" placeholder="TECNM" class="input input-bordered w-full max-w-xs" />
</label>
<MultiSelect v-model="body.miembrosColaboradores" display="chip" :options="miembros?.response"
    optionLabel="nombreCompleto" option-value="idmiembro" filter placeholder="Selecciona uno o más miembros" />
<button type="submit" class="btn btn-primary">Añadir proyecto</button>
</form> -->
    <ListaProyectos :data="data?.response ?? []" :mutation-delete="() => { }" :is-pending="isPending" />
</template>