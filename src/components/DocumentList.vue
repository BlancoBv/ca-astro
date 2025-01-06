<script setup lang="ts">
import { formatDate } from '@assets/format';
import { computed, ref } from 'vue';

const props = defineProps<{ years: string[], minutas: { fileName: string, fechaCreacion: string, url: string, fechaCreacionFormated: string }[] }>()
const value = ref<string>("")

const minutasFiltered = computed(() => {
    if (value.value === "") {
        return props.minutas
    }
    return props.minutas.filter(el => formatDate(el.fechaCreacion, "YYYY") === value.value)
})
</script>
<template>
    <form class="flex gap-4 items-end mb-4 not-prose">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Año de consulta</span>
            </div>
            <select class="select select-bordered" id="selectFecha" v-model="value">
                <option selected value="">Todas</option>
                <option v-for="year in props.years.toReversed()" :value="year">{{ year }}</option>
            </select>
        </label>
    </form>
    <div class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a v-for="minuta in minutasFiltered" :href="minuta.url" target="_blank"
            class="card bg-base-100 image-full w-full h-96 shadow-xl group">
            <figure class="w-full">
                <i class="bi bi-file-earmark-pdf-fill text-9xl group-hover:scale-110 duration-200 ease-in"></i>
            </figure>
            <div class="card-body">
                <h2 class="card-title text-2xl">{{ `${minuta.fileName.split(";")[0]}
                    ${minuta.fechaCreacionFormated}` }}</h2>
                <!--   <p>{formatDate(fecha, "LL")}</p> -->
            </div>
        </a>
    </div>
</template>