<script setup lang="ts">
type Props = {
  is_active: string;
};
defineProps<Props>();

const changeTab = (tabName: string) => {
  console.log(`changing the tab status to ${tabName}...`);
};
</script>

<template>
  <a
    href="#"
    class="relative px-2 py-2 text-gray-800 rounded hover:translate-y-12 md:mx-2"
    :class="{ 'border-b-2 border-indigo-500': is_active === 'home' }"
    @click="changeTab('home')"
    >Home</a
  >
</template>
