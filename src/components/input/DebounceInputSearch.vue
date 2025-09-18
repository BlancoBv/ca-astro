<script setup lang="ts">
import { ref } from "vue";

interface Props {
  disabled?: boolean;
  placeholder?: string;
  loading?: boolean;
  customClass?: string;
}
const value = defineModel("value", { type: String, required: true });
const props = defineProps<Props>();
const timer = ref<number | null>(null);

const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(
      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
      "$1"
    )
    .normalize();

const onInput = (ev: Event) => {
  const { value: busqueda } = ev.target as HTMLInputElement;

  if (timer.value !== null) {
    clearTimeout(timer.value);
  }
  timer.value = window.setTimeout(() => {
    value.value = busqueda;
  }, 800);
};
</script>

<template>
  <label class="input">
    <i class="bi bi-search"></i>
    <input
      type="search"
      required
      :value="value"
      :placeholder="placeholder ?? ''"
      :disabled="props.disabled || props.loading"
      @input="onInput"
    />
  </label>
  <!--   <label class="floating-label" :class="`${props.customClass ?? ''}`">
    <span>{{ placeholder ?? "Etiqueta por defecto" }}</span>
    
    <input type="text" class="input input-md" />
  </label> -->
  <!--   <input
    :value="value"
    type="text"
    class="input"
    :placeholder="placeholder ?? ''"
    :disabled="props.disabled || props.loading"
    @input="onInput"
  /> -->
</template>
