<script setup lang="ts">
import { useSendData } from '@assets/http';
import { onMounted, reactive, ref } from 'vue';

const isHydrating = ref<boolean>(true)
const sendForm = useSendData("login", "post", {
    onToastClose() {
        window.location.href = "/panel"
    },
    toastMsg: "Sesión iniciada correctamente, redirigiendo..."
})
const body = reactive<{ password: string, user: string }>({ password: "", user: "" })
const send = () => {
    sendForm.mutate(body)
}

onMounted(() => {
    isHydrating.value = false
})


</script>
<template>
    <div class="hero min-h-96">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Inicio de sesión</h1>
                <p class="py-6">
                    Panel de administración de la página WEB del Cuerpo Académico.
                </p>
            </div>
            <div class="card bg-base-100 shrink-0 shadow-2xl items-center">
                <form class="card-body w-96 h-80" @submit.prevent="send" v-if="!isHydrating">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Usuario</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" required
                            v-model="body.user" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Contraseña</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" required
                            v-model="body.password" />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary" type="submit" :disabled="sendForm.isPending.value">
                            Iniciar sesión
                        </button>
                    </div>
                </form>
                <div class="w-96 h-80 p-8 flex flex-col items-center justify-center" v-else>
                    <div class="w-full flex flex-col gap-4 mb-4">
                        <div class="skeleton w-28 h-4 "></div>
                        <div class="skeleton w-full h-12"></div>
                    </div>
                    <div class="w-full flex flex-col gap-4">
                        <div class="skeleton w-28 h-4"></div>
                        <div class="skeleton w-full h-12"></div>
                    </div>
                    <div class="skeleton w-full h-12 mt-6 bg-primary rounded-btn"></div>
                </div>
            </div>
        </div>
    </div>
</template>