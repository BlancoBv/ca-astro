<script setup lang="ts">
import { formatMoneda } from "@assets/format";
import { computed, onMounted, onUnmounted, ref } from "vue";
import StatInfoPP from "@components/stat/StatInfoPublic.vue";
import DebounceInputSearch from "@components/input/DebounceInputSearch.vue";

interface props {
  data: any[];
  rows?: number;
}

const props = defineProps<props>();

const isMounted = ref<boolean>(false);
const page = ref<number>(1);
const maxRows = ref<number>(5);
const rowData = ref<any>({});
const filtroEstatus = ref<string>("");
const filtroTipo = ref<string>("");
const filtroMonto = ref<string>("");
const filtroTexto = ref<string>("");

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

  if (Object.keys(element).length < 1) return "---";

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

const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(
      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
      "$1"
    )
    .normalize();

const totalFiltros = computed(() =>
  [filtroEstatus.value, filtroMonto.value, filtroTipo.value].reduce((a, b) => {
    if (b !== "") return a + 1;
    return a;
  }, 0)
);

const filteredData = computed(() => {
  const defaultData = props.data;
  var newData = defaultData;

  if (filtroEstatus.value !== "") {
    newData = newData.filter((el) => el.estatus === filtroEstatus.value);
  }
  if (filtroTipo.value !== "") {
    newData = newData.filter((el) => el.tipo === filtroTipo.value);
  }

  if (filtroTexto.value !== "") {
    const searchText = normalize(filtroTexto.value);
    newData = newData.filter((el) => {
      const regExp = new RegExp(searchText, "gi");
      const rowText = normalize(
        `${el.titulo} ${el.director_proyecto?.nombreCompleto} ${getCollabs(el)}`
      );

      return regExp.test(rowText);
    });
  }
  return newData;
});

const sortedData = computed(() => {
  if (filtroMonto.value === "ASC") {
    return filteredData.value.toSorted(
      (a, b) => Number(a.monto) - Number(b.monto)
    );
  }
  if (filtroMonto.value === "DESC") {
    return filteredData.value.toSorted(
      (a, b) => Number(b.monto) - Number(a.monto)
    );
  }
  return filteredData.value;
});

const paginatedData = computed(() => {
  const indexStart = (page.value - 1) * maxRows.value;
  const indexEnd = indexStart + maxRows.value;
  const defaultData = sortedData.value.slice(indexStart, indexEnd);

  return defaultData;
});

const totalPages = computed(() => {
  console.log(sortedData.value.length / maxRows.value);
  return Math.ceil(sortedData.value.length / maxRows.value);
});

const totalElements = computed(() =>
  String(sortedData.value.length).padStart(3, "0")
);

const modalData = computed(() => rowData.value);

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
  <!-- Modal de mas información -->
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
      <h3 class="text-lg text-balance font-bold">{{ modalData.titulo }}</h3>
      <div class="py-4">
        <ul class="steps w-full pb-4">
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
        <div class="grid grid-cols-2 grid-rows-6 gap-2">
          <StatInfoPP>
            <template #icon><i class="bi bi-key-fill"></i></template>
            <template #title>Clave</template>
            <template #data>{{ modalData.clave }}</template>
          </StatInfoPP>
          <StatInfoPP>
            <template #icon><i class="bi bi-info-circle-fill"></i></template>
            <template #title>Tipo</template>
            <template #data>{{ modalData.tipo?.toUpperCase() }}</template>
          </StatInfoPP>
          <StatInfoPP>
            <template #icon><i class="bi bi-file-earmark-fill"></i></template>
            <template #title>Convocatoria</template>
            <template #data>{{ modalData.convocatoria }}</template>
          </StatInfoPP>
          <StatInfoPP>
            <template #icon><i class="bi bi-currency-dollar"></i></template>
            <template #title>Monto</template>
            <template #data>{{ formatMoneda(modalData.monto) }}</template>
          </StatInfoPP>
          <StatInfoPP :row-span="2">
            <template #icon><i class="bi bi-calendar-range"></i></template>
            <template #title>Vigencia</template>
            <template #data
              >{{ modalData.fechaInicio }} -
              {{ modalData.fechaTermino }}</template
            >
          </StatInfoPP>
          <StatInfoPP :row-span="2">
            <template #icon><i class="bi bi-calendar-range-fill"></i></template>
            <template #title>Entrega final</template>
            <template #data
              >{{ modalData.fechaInicio }} -
              {{ modalData.fechaTermino }}</template
            >
          </StatInfoPP>
          <StatInfoPP :col-span="2">
            <template #icon><i class="bi bi-person-fill"></i></template>
            <template #title>Director de proyecto</template>
            <template #data>{{
              modalData.director_proyecto?.nombreCompleto
            }}</template>
          </StatInfoPP>
          <StatInfoPP :col-span="2">
            <template #title>Otros colaboradores</template>
            <template #data>{{ getCollabs(modalData ?? {}) }}</template>
          </StatInfoPP>
        </div>
      </div>
    </div>
  </dialog>

  <div class="sm:px-20 lg:px-40 not-prose">
    <!-- Fitros, buscador y cambiar páginas -->
    <div class="grid grid-cols-2 mb-2">
      <div class="dropdown col-span-2">
        <div tabindex="0" role="button" class="btn mb-2">
          <i class="bi bi-filter"></i> Filtros
          <div class="badge badge-sm badge-secondary">{{ totalFiltros }}</div>
        </div>

        <div
          tabindex="0"
          class="dropdown-content bg-base-100 shadow menu rounded-box w-80 sm:w-96"
        >
          <div
            class="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-2" checked />
            <div class="collapse-title font-semibold">
              <div class="indicator">
                <span
                  v-if="filtroEstatus !== ''"
                  class="indicator-item status status-success"
                ></span>
                Estatus
              </div>
            </div>
            <div class="collapse-content text-sm">
              <form class="filter">
                <input
                  class="btn btn-square"
                  type="reset"
                  value="×"
                  @click="filtroEstatus = ''"
                />
                <input
                  v-model="filtroEstatus"
                  value="en proceso"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="En proceso"
                />
                <input
                  v-model="filtroEstatus"
                  value="finalizado"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="Finalizado"
                />
              </form>
            </div>
          </div>
          <div
            class="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-2" />
            <div class="collapse-title font-semibold">
              <div class="indicator">
                <span
                  v-if="filtroMonto !== ''"
                  class="indicator-item status status-success"
                ></span>
                Monto
              </div>
            </div>
            <div class="collapse-content text-sm">
              <form class="filter">
                <input
                  class="btn btn-square"
                  type="reset"
                  value="×"
                  @click="filtroMonto = ''"
                />
                <input
                  v-model="filtroMonto"
                  value="DESC"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="De mayor a menor"
                />
                <input
                  v-model="filtroMonto"
                  value="ASC"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="De menor a mayor"
                />
              </form>
            </div>
          </div>
          <div
            class="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-2" />
            <div class="collapse-title font-semibold">
              <div class="indicator">
                <span
                  v-if="filtroTipo !== ''"
                  class="indicator-item status status-success"
                ></span>
                Tipo
              </div>
            </div>
            <div class="collapse-content text-sm">
              <form class="filter">
                <input
                  class="btn btn-square"
                  type="reset"
                  value="×"
                  @click="filtroTipo = ''"
                />
                <input
                  v-model="filtroTipo"
                  value="interno"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="Interno"
                />
                <input
                  v-model="filtroTipo"
                  value="externo"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="Externo"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DebounceInputSearch
          v-model:value="filtroTexto"
          placeholder="Nombre miembro/colaborador o título de proyecto"
        />
      </div>

      <div class="join place-self-end">
        <button
          class="join-item btn"
          :disabled="totalPages === 0 || page <= 1"
          @click="page--"
        >
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <button
          class="join-item btn"
          :disabled="totalPages === 0 || page >= totalPages"
          @click="page++"
        >
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </div>
    </div>
    <!-- Lista -->
    <TransitionGroup
      name="list"
      tag="ul"
      class="list bg-base-100 rounded-box shadow-sm mb-2"
    >
      <li
        class="p-4 pb-2 text-xs opacity-60 tracking-wide"
        key="proyecto-titulo"
      >
        Todos lo proyectos
      </li>
      <template v-if="paginatedData.length > 0">
        <li
          v-for="proyecto in paginatedData"
          class="list-row"
          :key="`proyecto-${proyecto.idproyecto}`"
        >
          <div>
            <i class="bi bi-puzzle-fill text-4xl"></i>
          </div>
          <div>
            <div>{{ proyecto.director_proyecto.nombreCompleto }}</div>
            <div class="text-xs uppercase font-semibold opacity-60">
              <span class="hidden sm:block">{{ proyecto.titulo }}</span>
              <span class="sm:hidden">{{
                recortarTitulo(proyecto.titulo)
              }}</span>
            </div>
          </div>
          <div class="list-col-wrap flex flex-wrap gap-2">
            <div class="badge badge-accent badge-xs">
              {{ formatMoneda(proyecto.monto) }}
            </div>
            <div class="badge badge-neutral badge-xs">
              <i class="bi bi-info-circle-fill"></i
              >{{ proyecto.tipo?.toUpperCase() }}
            </div>
            <div
              class="badge badge-xs"
              :class="{
                'badge-success': proyecto.estatus === 'finalizado',
                'badge-info': proyecto.estatus === 'en proceso',
              }"
            >
              <i class="bi bi-flag-fill"></i
              >{{ proyecto.estatus.toUpperCase() }}
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
      </template>

      <li v-else class="list-row" key="proyecto-empty">
        <div>
          <i class="bi bi-emoji-frown-fill text-4xl"></i>
        </div>
        <div>
          <div>Sin proyectos</div>
        </div>
        <p class="list-col-wrap text-xs">
          No existen registros que incluyan a este miembro del cuerpo academico
          como director o colaborador.
        </p>
      </li>
    </TransitionGroup>
    <!-- Total de elementos -->
    <p class="font-light text-sm opacity-60 text-end">
      {{ totalElements }} elementos
    </p>
  </div>
</template>
<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
