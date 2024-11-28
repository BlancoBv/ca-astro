<script setup lang="ts">
import { useGetData } from '@assets/http';
//const props = defineProps<{ baseUrl: string, actualRoute: string }>()

const emit = defineEmits(["click"])

const { data, isPending } = useGetData("miembros?colaborador=true", "colaboradoresData")

</script>
<template>
    <details open>
        <summary>Miembros</summary>
        <ul>
            <li v-if="!isPending" v-for="miembro in data.response">
                <a :href="'/' + 'miembros' + '/' + miembro.idmiembro">
                    {{ `${miembro.nombre} ${miembro.apepat} ${miembro.apemat}` }}
                </a>
            </li>
            <li v-else>
                <span class="loading loading-spinner loading-xs"></span>
            </li>
        </ul>
    </details>
</template>