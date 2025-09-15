<script setup lang="ts">
import { onMounted, ref } from "vue";

const active = ref<boolean>(false);

const changeTheme = (checked: boolean) => {
  const theme = checked ? "dark" : "winter";
  document.documentElement.setAttribute("data-theme", theme);
};
const handle = (ev: Event) => {
  const { checked } = ev.target as HTMLInputElement;
  active.value = checked;
  localStorage.setItem("isDark", JSON.stringify(checked));
  changeTheme(checked);
};
onMounted(() => {
  const isDark: boolean = JSON.parse(localStorage.getItem("isDark") ?? "false");
  active.value = isDark;
});
</script>
<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input
      type="checkbox"
      class="theme-controller"
      @input="handle"
      :checked="active"
    />

    <!-- sun icon -->
    <div class="swap-on fill-current flex justify-center items-center size-10">
      <i class="bi bi-sun-fill text-xl"></i>
    </div>
    <div class="swap-off fill-current flex justify-center items-center size-10">
      <i class="bi bi-moon-fill text-xl"></i>
    </div>
    <!-- moon icon -->
  </label>
</template>
