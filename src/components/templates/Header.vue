<script setup lang="ts">
import { ref, computed } from "vue";
import Icon from "../atoms/Icon.vue";

// detect scroll
const is_scroll = ref<string>("");
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    is_scroll.value = "";
  } else {
    is_scroll.value = "opacity-50";
  }
});

// detect active header item
type tabType = "home" | "about" | "contact";
const is_active = ref<tabType>("home");
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white shadow-lg" v-bind:class="is_scroll">
    <div class="items-center justify-between px-8 py-2 md:flex md:px-12">
      <Icon />
      <div class="flex flex-col hidden -mx-2 md:flex-row md:block">
        <a
          href="#"
          class="px-2 py-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
          v-bind:class="[is_active === 'home' ? 'bg-red-400' : '']"
          @click="
            () => {
              is_active = 'about';
            }
          "
          >Home</a
        >
        <a
          href="#"
          class="px-2 py-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
          >About</a
        >
        <a
          href="#"
          class="px-2 py-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>
