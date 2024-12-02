import type { App } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import Vue3Toastify, { toast, type ToastContainerOptions } from "vue3-toastify";
import PrimeVue from "primevue/config";
export default (app: App) => {
  app.use(VueQueryPlugin);
  app.use(Vue3Toastify, {
    autoClose: 800,
    position: toast.POSITION.TOP_RIGHT,
  } as ToastContainerOptions);
  app.use(PrimeVue, {
    unstyled: true,
    pt: {
      datatable: {
        root: "not-prose",
        table: "table table-zebra",
      },
      paginator: {
        root: "py-4",
        content: "flex justify-center items-center gap-4 flex-wrap",
        pages: "flex gap-4",
        first: "btn btn-sm",
        prev: "btn btn-sm",
        next: "btn btn-sm",
        last: "btn btn-sm",
        page: "btn btn-sm data-[p-active=true]:btn-secondary",
      },
      select: {
        root: "input input-bordered flex gap-2 items-center justify-center",
        list: "menu bg-base-100 rounded-btn",
        label: "outline-none",
      },
    },
    theme: {
      /*       preset: Aura, */
      options: {
        darkModeSelector: false,
      },
    },
  });
};
