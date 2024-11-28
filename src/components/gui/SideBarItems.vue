<script setup lang="ts">
import { useGetData } from '@assets/http';
import MiembrosSide from './MiembrosSide.vue';
import ColaboradoresSide from './ColaboradoresSide.vue';

const { data, isPending, isError } = useGetData("menus", "menus-nav")
</script>
<template>

    <li v-if="!isPending && !isError" v-for="menu in data.response">
        <template v-if="menu.ruta === 'miembros'">
            <MiembrosSide />
        </template>
        <template v-else-if="menu.ruta === 'colaboradores'">
            <ColaboradoresSide />
        </template>

        <details v-else-if="menu.dropcollapse" open>
            <summary>{{ menu.nombre }}</summary>
            <ul>
                <li v-for="submenu in menu.submenus">
                    <a :href="'/' + menu.ruta + '/' + submenu.ruta">
                        {{ submenu.nombre }}
                    </a>
                </li>
            </ul>
        </details>
        <a :href="'/' + menu.ruta" v-else>{{ menu.nombre }}</a>
    </li>
    <li v-else><a>Cargando...</a></li>

    <li><a href="/login">Iniciar sesión</a></li>


</template>