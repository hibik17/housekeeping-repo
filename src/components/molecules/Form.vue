<script setup lang="ts">
import { useCheckStore } from "../../stores/useCheckStore";
const { newCheck, addCheck, checkTitle, checkPrice } = useCheckStore();
</script>

<template>
  <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
        Title
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Title"
        v-model="newCheck.title"
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
        Price
      </label>
      <input
        class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none -red-500 focus:outline-none focus:shadow-outline"
        type="number"
        placeholder="price"
        v-model="newCheck.price"
      />
    </div>
    <div class="flex justify-center">
      <button
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
        @click="addCheck"
      >
        Add
      </button>
    </div>
  </form>
</template>
