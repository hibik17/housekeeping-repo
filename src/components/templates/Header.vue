<script setup lang="ts">
import { ref } from "vue";
import Icon from "../atoms/Icon.vue";
import HeaderMenus from "../organizms/HeaderMenus.vue";

// detect scroll
const is_scroll = ref<boolean>(false);
window.addEventListener("scroll", () => {
  window.scrollY == 0 ? (is_scroll.value = false) : (is_scroll.value = true);
});
</script>

<template>
  <nav
    class="sticky top-0 z-50 bg-white shadow-lg"
    v-bind:class="{ 'bg-transparent': is_scroll }"
  >
    <div class="items-center justify-between px-8 py-2 md:flex md:px-12">
      <Icon />
      <HeaderMenus />
    </div>
  </nav>
</template>
