<script setup lang="ts">
const props = defineProps<{ data: any[] }>();
</script>

<template>
  <TransitionGroup
    name="list"
    tag="ul"
    class="list bg-base-100 rounded-box shadow-sm mb-2"
  >
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide" key="proyecto-titulo">
      <slot name="titulo"></slot>
    </li>

    <template v-if="$slots.row">
      <slot v-for="row in props.data" name="row" :data="row"></slot>
    </template>
    <li v-else class="list-row">
      <div>
        <img
          class="size-10 rounded-box"
          src="https://img.daisyui.com/images/profile/demo/1@94.webp"
        />
      </div>
      <div>
        <div>Dio Lupa</div>
        <div class="text-xs uppercase font-semibold opacity-60">
          Remaining Reason
        </div>
      </div>
      <p class="list-col-wrap text-xs">
        "Remaining Reason" became an instant hit, praised for its haunting sound
        and emotional depth. A viral performance brought it widespread
        recognition, making it one of Dio Lupa’s most iconic tracks.
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
    <template v-if="props.data.length < 1">
      <template v-if="$slots.empty">
        <slot name="empty"></slot>
      </template>
      <li v-else class="list-row" key="proyecto-empty">
        <div>
          <i class="bi bi-emoji-frown-fill text-4xl"></i>
        </div>
        <div>
          <div>Sin elementos</div>
        </div>
        <p class="list-col-wrap text-xs">No existen elementos.</p>
      </li>
    </template>
  </TransitionGroup>
</template>
