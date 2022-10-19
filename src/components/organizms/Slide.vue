<template>
  <div class="w-full mx-auto mt-2">
    <carousel>
      <slide v-for="slide in 10" :key="slide">{{ slide }}</slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";
</script>

<style>
.carousel__slide {
  padding: 10px;
  min-height: 200px;
  width: 100%;
  background-color: white;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
