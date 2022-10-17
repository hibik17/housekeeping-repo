<script setup lang="ts">
// import component
import Header from "../templates/Header.vue";
import Footer from "../templates/Footer.vue";
import LeftPage from "../organizms/leftPage.vue";
import rightPage from "../organizms/rightPage.vue";
</script>

<template>
  <div class="w-full min-h-screen bg-slate-100">
    <Header />
    <div class="grid grid-cols-3">
      <div class="col-span-1">
        <div class="mx-10 my-[70px]"><LeftPage /></div>
      </div>
      <div class="col-span-2"><rightPage /></div>
    </div>
    <div class="fixed bottom-0">
      <Footer />
    </div>
  </div>
</template>
