<script setup lang="ts">
import { ref } from "vue";

// detect active header item
type tabType = "home" | "about" | "contact";
const is_active = ref<tabType>("home");

const headerMenus: Array<tabType> = ["home", "about", "contact"];
</script>

<template>
  <div class="flex flex-col hidden -mx-2 md:flex-row md:block">
    <a
      v-for="(menu, index) in headerMenus"
      :key="index"
      href="#"
      class="px-2 py-2 text-gray-800 rounded hover:translate-y-12 md:mx-2"
      :class="{ 'border-b-2 border-indigo-500': is_active === menu }"
      @click="
        () => {
          is_active = menu;
        }
      "
      >{{ menu }}</a
    >
  </div>
</template>
