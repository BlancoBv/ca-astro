<script setup lang="ts">
import { useGetData } from '@assets/http';

const { data, isPending, isError } = useGetData("menus", "menus-nav")
</script>
<template>

    <li v-if="!isPending && !isError" v-for="menu in data.response">
        <details v-if="menu.dropcollapse" open>
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