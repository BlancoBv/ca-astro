import type { ObjectDirective } from "vue";

export const vUppercase: ObjectDirective = {
  mounted(el: HTMLInputElement) {
    el.value = el.value.toUpperCase();
    el.dispatchEvent(new Event("input"));
  },
  updated(el: HTMLInputElement) {
    el.value = el.value.toUpperCase();
    el.dispatchEvent(new Event("input"));
  },
};
