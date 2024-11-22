<script setup lang="ts">
const props = defineProps<{ totalPages: number, actualPage: number }>()
</script>
<template>
    <div class="join">
        <a class="join-item btn" :href="'?page=' + `${props.actualPage === 1 ? '1' : actualPage - 1}`"
            :class="{ ' btn-disabled': actualPage === 1 }">
            «
        </a>
        <button class="join-item btn">Página {{ props.actualPage }} de {{ props.totalPages }}</button>
        <a class="join-item btn"
            :href="'?page=' + `${props.actualPage === props.totalPages ? totalPages : actualPage + 1}`"
            :class="{ ' btn-disabled': props.actualPage === props.totalPages }">
            »
        </a>
    </div>
</template>