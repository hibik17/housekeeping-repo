<script setup lang="ts">
// import component
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="w-full min-h-screen bg-slate-100">
    <Header />
    <div class="grid grid-cols-3">
      <div class="col-span-1">
        <div class="mx-[10px] my-[100px]">
          <Form />
        </div>
      </div>
      <div class="col-span-2"></div>
    </div>
    <div class="fixed bottom-0 left-[50%]">
      <Footer />
    </div>
  </div>
</template>
