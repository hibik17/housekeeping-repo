<script setup lang="ts"></script>

<template>
  <nav class="sticky top-0 z-50 bg-white shadow-lg">
    <div class="items-center justify-between px-8 py-2 md:flex md:px-12">
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold text-gray-800 md:text-3xl">
          <a href="#">Brand</a>
        </div>
        <div class="md:hidden">
          <button
            type="button"
            class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                class="hidden"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
              />
              <path
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col hidden -mx-2 md:flex-row md:block">
        <a
          href="#"
          class="px-2 py-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
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
