import type { App } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import Vue3Toastify, { toast, type ToastContainerOptions } from "vue3-toastify";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

export default (app: App) => {
  app.use(VueQueryPlugin);
  app.use(Vue3Toastify, {
    autoClose: 800,
    position: toast.POSITION.TOP_RIGHT,
  } as ToastContainerOptions);
  app.use(PrimeVue, {
    theme: { preset: Aura, options: { darkModeSelector: "system" } },
  });
};
