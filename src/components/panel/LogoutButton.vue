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
    <button class="btn btn-error col-span-2 btn-block" @click="logout.mutate({})"
        :disabled="logout.isPending.value">Cerrar
        sesión</button>
</template>