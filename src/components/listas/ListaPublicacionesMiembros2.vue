<script setup lang="ts">
import { formatMoneda } from "@assets/format";
import {
  computed,
  onMounted,
  onUnmounted,
  onWatcherCleanup,
  ref,
  watch,
} from "vue";
import StatInfoPP from "@components/stat/StatInfoPublic.vue";
import DebounceInputSearch from "@components/input/DebounceInputSearch.vue";
import List from "@components/list/List.vue";
import PlaceholderListPP from "@components/placeholders/PlaceholderListPP.vue";

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
const filtroYear = ref<string>("");
const filtroTexto = ref<string>("");

const getCollabs = (element: {
  otrosAutores: string | null;
  miembros_publicacion: {
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

  element.miembros_publicacion.forEach((el) => {
    miembrosF.push(el.nombreCompleto);
  });

  if (element.otrosAutores) {
    const otherCollabsArr: string[] = element.otrosAutores.split(";");
    miembrosF.push(...otherCollabsArr);
  }

  if (miembrosF.length < 1) {
    return "---";
  }

  return formatter.format(miembrosF);
};

const recortarTexto = (titulo: string) => {
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
  [filtroEstatus.value, filtroYear.value, filtroTipo.value].reduce((a, b) => {
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
      const rowText = normalize(`${el.titulo} ${getCollabs(el)}`);

      return regExp.test(rowText);
    });
  }
  return newData;
});

const sortedData = computed(() => {
  if (filtroYear.value === "ASC") {
    return filteredData.value.toSorted(
      (a, b) => Number(a.year) - Number(b.year)
    );
  }
  if (filtroYear.value === "DESC") {
    return filteredData.value.toSorted(
      (a, b) => Number(b.year) - Number(a.year)
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

const totalPages = computed(() =>
  Math.ceil(sortedData.value.length / maxRows.value)
);

const totalElements = computed(() =>
  String(sortedData.value.length).padStart(3, "0")
);

const modalData = computed(() => rowData.value);

const openModal = (data: any) => {
  const modal = document.getElementById(
    "modal_publicaciones"
  ) as HTMLDialogElement;
  rowData.value = data;
  modal.showModal();
};

watch(sortedData, () => {
  page.value = 1;

  onWatcherCleanup(() => {
    page.value = 1;
  });
});

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
    id="modal_publicaciones"
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
        <!--         <ul class="steps w-full pb-4">
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
        </ul> -->
        <div class="grid grid-cols-2 grid-rows-3 gap-2 mb-2">
          <StatInfoPP class="row-span-3">
            <template #icon><i class="bi bi-person-fill"></i></template>
            <template #title>Autores</template>
            <template #data>{{ getCollabs(modalData ?? {}) }}</template>
          </StatInfoPP>
          <StatInfoPP>
            <template #icon><i class="bi bi-book-fill"></i></template>
            <template #title>ISSN</template>
            <template #data>{{ modalData.ISSN ?? "---" }}</template>
          </StatInfoPP>
          <StatInfoPP>
            <template #icon><i class="bi bi-info-circle-fill"></i></template>
            <template #title>Tipo</template>
            <template #data>{{ modalData.tipo?.toUpperCase() }}</template>
          </StatInfoPP>
          <StatInfoPP>
            <template #icon><i class="bi bi-calendar-fill"></i></template>
            <template #title>Año de publicación</template>
            <template #data>{{ modalData.year }}</template>
          </StatInfoPP>
        </div>
        <StatInfoPP class="w-full min-h-50">
          <template #icon><i class="bi bi-body-text"></i></template>
          <template #title>Resumen</template>
          <template #data>{{ modalData.descripcion ?? "---" }}</template>
        </StatInfoPP>
        <div class="flex justify-end mt-2">
          <a
            v-if="modalData.url"
            class="btn btn-primary"
            :href="modalData.url ?? '#'"
            target="_blank"
          >
            Ver artículo <i class="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  </dialog>
  <template v-if="!isMounted">
    <PlaceholderListPP />
  </template>
  <div v-else class="sm:px-20 lg:px-40 not-prose">
    <!-- Fitros, buscador y cambiar páginas -->
    <div class="grid grid-cols-2 mb-2">
      <div class="dropdown col-span-2">
        <div tabindex="0" role="button" class="btn mb-2">
          <i class="bi bi-filter"></i> Filtros
          <div class="badge badge-xs badge-secondary">{{ totalFiltros }}</div>
        </div>

        <div
          tabindex="0"
          class="dropdown-content bg-base-100 shadow menu rounded-box w-80 sm:w-96"
        >
          <!--           <div
            class="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="filtros-proyectos" checked />
            <div class="collapse-title font-semibold">
              <div class="indicator">
                <span
                  v-if="filtroEstatus !== ''"
                  class="indicator-item status status-secondary"
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
          </div> -->
          <div
            class="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="filtros-proyectos" />
            <div class="collapse-title font-semibold">
              <div class="indicator">
                <span
                  v-if="filtroYear !== ''"
                  class="indicator-item status status-secondary"
                ></span>
                Año de publicación
              </div>
            </div>
            <div class="collapse-content text-sm">
              <form class="filter">
                <input
                  class="btn btn-square"
                  type="reset"
                  value="×"
                  @click="filtroYear = ''"
                />
                <input
                  v-model="filtroYear"
                  value="DESC"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="Del más reciente al más antigüo"
                />
                <input
                  v-model="filtroYear"
                  value="ASC"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="Del más antigüo al más reciente"
                />
              </form>
            </div>
          </div>
          <div
            class="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="filtros-proyectos" />
            <div class="collapse-title font-semibold">
              <div class="indicator">
                <span
                  v-if="filtroTipo !== ''"
                  class="indicator-item status status-secondary"
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
                  value="arbitrado"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="Arbitrado"
                />
                <input
                  v-model="filtroTipo"
                  value="memoria en extenso"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="Memoría en extenso"
                />
                <input
                  v-model="filtroTipo"
                  value="journal"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="Journal"
                />
                <input
                  v-model="filtroTipo"
                  value="indexado"
                  class="btn"
                  type="radio"
                  name="frameworks"
                  aria-label="Indexado"
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
    <List :data="paginatedData ?? []">
      <template #titulo>Todos las publicaciones</template>
      <template #row="{ data }">
        <li class="list-row" :key="`publicacion-${data.idpublicacion}`">
          <div>
            <i class="bi bi-journal text-4xl"></i>
          </div>
          <div>
            <div>{{ getCollabs(data) }}</div>
            <div class="text-xs uppercase font-semibold opacity-60">
              <span class="hidden sm:block">{{ data.titulo }}</span>
              <span class="sm:hidden">{{ recortarTexto(data.titulo) }}</span>
            </div>
          </div>
          <div class="list-col-wrap flex flex-wrap gap-2">
            <div class="badge badge-info badge-xs">
              <i class="bi bi-calendar-fill"></i>{{ data.year }}
            </div>
            <div class="badge badge-neutral badge-xs">
              <i class="bi bi-info-circle-fill"></i
              >{{ data.tipo?.toUpperCase() }}
            </div>
            <div class="badge badge-secondary badge-xs">
              <i class="bi bi-book-fill"></i>{{ data.ISSN ?? "---" }}
            </div>
          </div>
          <button class="btn btn-square btn-ghost" @click="openModal(data)">
            <i class="bi bi-arrows-fullscreen text-xl"></i>
          </button>
        </li>
      </template>
      <template #empty>
        <li class="list-row" key="proyecto-empty">
          <div>
            <i class="bi bi-emoji-frown-fill text-4xl"></i>
          </div>
          <div>
            <div>Sin publicaciones</div>
          </div>
          <p class="list-col-wrap text-xs">
            No existen registros que incluyan a este miembro del cuerpo
            academico como autor.
          </p>
        </li>
      </template>
    </List>
    <!--     <TransitionGroup
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
    </TransitionGroup> -->
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
