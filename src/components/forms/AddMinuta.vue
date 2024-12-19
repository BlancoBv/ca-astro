<script setup lang="ts">
import { useGetData } from '@assets/http';
import ListaMinutas from '@components/listas/ListaMinutas.vue';
import moment from 'moment';
const { data, isPending } = useGetData("minutas", "minutasData")

const formData = new FormData()

const handle = () => {

}

</script>
<template>
    <!-- <form class="flex gap-4 items-end flex-wrap">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Selecciona una archivo</span>
            </div>
            <input name="imagen" type="file" class="file-input file-input-bordered w-full max-w-xs"
                accept="application/pdf" @input="handle" id="input-add-image" required>
        </label>
        <button class="btn btn-primary" type="submit">Subir minuta</button>
    </form> -->
    <ListaMinutas :data="data?.files ?? []" :is-pending="isPending" />
</template>