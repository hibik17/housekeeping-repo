<script setup lang="ts">
// import component
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
</script>

<template>
  <div class="w-full min-h-screen bg-slate-100">
    <Header />
    <div class="grid grid-cols-3">
      <div class="col-span-1"><Form /></div>
      <div class="col-span-2"></div>
    </div>
  </div>
</template>
