<script setup lang="ts">
import { useSendData } from '@assets/http';

const logout = useSendData("logout", "post", {
    onToastClose() {
        window.location.href = "/login"
    },
    toastMsg: "Sesión cerrada correctamente, redirigiendo..."
})

</script>
<template>
    <button class="btn btn-error" @click="logout.mutate({})" :disabled="logout.isPending.value">Cerrar sesión</button>
</template>