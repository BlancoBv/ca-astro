<script setup lang="ts">
import { useGetData } from '@assets/http';
const props = defineProps<{ baseUrl: string, actualRoute: string }>()

const emit = defineEmits(["click"])

const { data, isPending } = useGetData("miembros?colaborador=true", "colaboradoresData")

const handleSetRoute = (ruta: string) => {
    emit("click", ruta)
}
</script>
<template>
    <div class="dropdown dropdown-hover group">
        <div tabindex="0" role="button" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1 flex gap-1">
            Colaboradores
            <div class="swap swap-rotate group-hover:swap-active">
                <i class="bi bi-caret-down-fill swap-off"></i>
                <i class="bi bi-caret-up-fill swap-on"></i>
            </div>
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow">
            <li v-if="!isPending" v-for="miembro in data.response">
                <a :href="'/' + props.baseUrl + '/' + miembro.idmiembro"
                    @click="handleSetRoute(`/${props.baseUrl}/${miembro.idmiembro}`)" class="text-balance"
                    :class="{ 'bg-base-content/10': props.actualRoute === `/${props.baseUrl}/${miembro.idmiembro}` }">
                    {{ miembro.nombreCompleto }}
                </a>
            </li>
            <li v-else>
                <span class="loading loading-spinner loading-xs"></span>
            </li>
        </ul>
    </div>
    <!--  <details class="w-40">
        <summary>Colaboradores</summary>
        <ul class="shadow">
            <li v-if="!isPending" v-for="miembro in data.response">
                <a :href="'/' + props.baseUrl + '/' + miembro.idmiembro">
                    {{ miembro.nombreCompleto }}
                </a>
            </li>
            <li v-else>
                <span class="loading loading-spinner loading-xs mx-auto"></span>
            </li>
        </ul>
    </details> -->
</template>