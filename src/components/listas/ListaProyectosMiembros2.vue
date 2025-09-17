<script setup lang="ts">
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { FilterMatchMode } from "@primevue/core/api";
import { formatMoneda } from "@assets/format";
import { computed, onMounted, onUnmounted, ref } from "vue";

interface props {
  data: any[];
  rows?: number;
}

const props = defineProps<props>();

const isMounted = ref<boolean>(false);
const rowData = ref<any>({});
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const getCollabs = (element: {
  otrosColaboradores: string | null;
  miembros_proyecto: {
    nombreCompleto: string;
    nombre: string;
    apepat: string;
    apemat: string;
  }[];
}): string => {
  const formatter = new Intl.ListFormat("es", {
    type: "conjunction",
    style: "long",
  });
  const miembrosF: string[] = [];

  element.miembros_proyecto.forEach((el) => {
    miembrosF.push(el.nombreCompleto);
  });

  if (element.otrosColaboradores) {
    const otherCollabsArr: string[] = element.otrosColaboradores.split(";");
    miembrosF.push(...otherCollabsArr);
  }

  if (miembrosF.length < 1) {
    return "---";
  }

  return formatter.format(miembrosF);
};

const recortarTitulo = (titulo: string) => {
  return titulo.slice(0, 30) + "...";
};

const rowDataMemo = computed(() => rowData.value);

const openModal = (data: any) => {
  const modal = document.getElementById("modal_proyectos") as HTMLDialogElement;
  rowData.value = data;
  modal.showModal();
};

onMounted(() => {
  isMounted.value = true;
});
onUnmounted(() => {
  isMounted.value = false;
});
</script>
<template>
  <!-- You can open the modal using ID.showModal() method -->
  <button class="btn" onclick="modal_proyectos.showModal()">open modal</button>
  <dialog
    id="modal_proyectos"
    class="modal modal-bottom sm:modal-middle not-prose"
  >
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          <i class="bi bi-x text-2xl"></i>
        </button>
      </form>
      <h3 class="text-lg text-balance font-bold">{{ rowDataMemo.titulo }}</h3>
      <div class="py-4">
        <ul class="steps w-full">
          <li
            class="step step-info"
            :class="{
              'step-info': !(rowData.estatus === 'finalizado'),
              'step-success': rowData.estatus === 'finalizado',
            }"
          >
            <span class="step-icon"><i class="bi bi-flag"></i></span>En proceso
          </li>
          <li
            class="step"
            :class="{
              'step-success': rowData.estatus === 'finalizado',
            }"
          >
            <span class="step-icon"><i class="bi bi-flag-fill"></i></span
            >Finalizado
          </li>
        </ul>
        Press ESC key or click on ✕ button to close
      </div>
    </div>
  </dialog>

  <div class="sm:px-20 lg:px-40">
    <ul class="list bg-base-100 rounded-box shadow-md not-prose">
      <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Todos los proyectos
      </li>

      <li v-for="proyecto in data" class="list-row">
        <div>
          <i class="bi bi-puzzle-fill text-4xl"></i>
        </div>
        <div>
          <div>{{ proyecto.director_proyecto.nombreCompleto }}</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            <span class="hidden sm:block">{{ proyecto.titulo }}</span>
            <span class="sm:hidden">{{ recortarTitulo(proyecto.titulo) }}</span>
          </div>
        </div>
        <div class="list-col-wrap text-xs">
          <div
            class="badge badge-xs"
            :class="{
              'badge-success': proyecto.estatus === 'finalizado',
              'badge-info': proyecto.estatus === 'en proceso',
            }"
          >
            {{ proyecto.estatus.toUpperCase() }}
          </div>
        </div>
        <button class="btn btn-square btn-ghost" @click="openModal(proyecto)">
          <i class="bi bi-arrows-fullscreen text-xl"></i>
        </button>
        <!--     <button class="btn btn-square btn-ghost">
          <svg
            class="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </g>
          </svg>
        </button> -->
      </li>

      <li class="list-row">
        <div>
          <img
            class="size-10 rounded-box"
            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
          />
        </div>
        <div>
          <div>Ellie Beilish</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            Bears of a fever
          </div>
        </div>
        <p class="list-col-wrap text-xs">
          "Bears of a Fever" captivated audiences with its intense energy and
          mysterious lyrics. Its popularity skyrocketed after fans shared it
          widely online, earning Ellie critical acclaim.
        </p>
        <button class="btn btn-square btn-ghost">
          <svg
            class="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
        <button class="btn btn-square btn-ghost">
          <svg
            class="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </g>
          </svg>
        </button>
      </li>

      <li class="list-row">
        <div>
          <img
            class="size-10 rounded-box"
            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
          />
        </div>
        <div>
          <div>Sabrino Gardener</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            Cappuccino
          </div>
        </div>
        <p class="list-col-wrap text-xs">
          "Cappuccino" quickly gained attention for its smooth melody and
          relatable themes. The song’s success propelled Sabrino into the
          spotlight, solidifying their status as a rising star.
        </p>
        <button class="btn btn-square btn-ghost">
          <svg
            class="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
        <button class="btn btn-square btn-ghost">
          <svg
            class="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </g>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>
