<script setup lang="ts">
import { useGetData } from '@assets/http';
import MiembrosNav from './MiembrosNav.vue';
import ColaboradoresNav from './ColaboradoresNav.vue';
import { ref } from 'vue';


const { data, isPending, isError } = useGetData("menus", "menus-nav")

const actualRoute = ref<string>("")

const setActualRoute = (ruta: string) => {
    actualRoute.value = ruta
}

</script>
<template>
    <template v-if="!isPending && !isError" v-for="menu in data.response">
        <MiembrosNav v-if="menu.ruta === 'miembros'" :base-url="menu.ruta" :actual-route="actualRoute"
            @click="setActualRoute" />
        <ColaboradoresNav v-else-if="menu.ruta === 'colaboradores'" base-url="miembros" @click="setActualRoute"
            :actual-route="actualRoute" />
        <div v-else-if="menu.dropcollapse" class="dropdown dropdown-hover group">
            <div tabindex="0" role="button"
                class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1 flex gap-1">
                {{ menu.nombre }}
                <div class="swap swap-rotate group-hover:swap-active">
                    <i class="bi bi-caret-down-fill swap-off"></i>
                    <i class="bi bi-caret-up-fill swap-on"></i>
                </div>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow">
                <li v-for="submenu in menu.submenus">
                    <a :href="'/' + menu.ruta + '/' + submenu.ruta"
                        @click="() => setActualRoute(`/${menu.ruta}/${submenu.ruta}`)"
                        :class="{ 'bg-base-content/10': actualRoute === `/${menu.ruta}/${submenu.ruta}` }">
                        {{ submenu.nombre }}
                    </a>
                </li>

            </ul>
        </div>
        <a v-else class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1" :href="'/' + menu.ruta">
            {{ menu.nombre }}
        </a>
    </template>
    <template v-else>
        <div v-for="_n in 5" class="skeleton h-8 w-32"></div>
    </template>
    <a href="/login" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1"
        @click="setActualRoute('/login')" :class="{ 'bg-base-content/10': actualRoute === '/login' }">
        Iniciar sesión
    </a>

    <!--  <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1">
            Hover <i class="bi bi-caret-down-fill"></i>
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
    </div> -->
    <!-- <ul class="menu menu-horizontal px-1 gap-4">
        <li v-if="!isPending && !isError" v-for="menu in data.response">
            <MiembrosNav v-if="menu.ruta === 'miembros'" :base-url="menu.ruta" />
            <ColaboradoresNav v-else-if="menu.ruta === 'colaboradores'" base-url="miembros" />
            <details v-else-if="menu.dropcollapse">
                <summary>{{ menu.nombre }}</summary>
                <ul class=" shadow">
                    <li v-for="submenu in menu.submenus">
                        <a :href="'/' + menu.ruta + '/' + submenu.ruta" @click="ev => console.log(ev)">
                            {{ submenu.nombre }}
                        </a>
                    </li>
                </ul>
            </details>
            <a v-else :href="'/' + menu.ruta">{{ menu.nombre }}</a>
        </li>
        <template v-else>
            <div v-for="_n in 5" class="skeleton h-8 w-32"></div>
        </template>

        <li><a href="/login">Iniciar sesión</a></li>

    </ul> -->

</template>