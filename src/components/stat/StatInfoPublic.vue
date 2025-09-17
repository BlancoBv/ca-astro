<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ colSpan?: number; rowSpan?: number }>();
</script>

<template>
  <div
    class="stats shadow"
    :class="`col-span-${props.colSpan ?? 1} row-span-${props.rowSpan ?? 1}`"
  >
    <div class="stat">
      <div v-if="$slots.icon" class="stat-figure text-2xl">
        <slot name="icon"></slot>
      </div>
      <div class="stat-title">
        <slot name="title"></slot>
      </div>
      <div class="stat-value text-sm sm:text-lg text-balance">
        <slot name="data"></slot>
      </div>
    </div>
  </div>
</template>
