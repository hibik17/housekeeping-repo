<script setup lang="ts">
import TableThead from "../atoms/tableThead.vue";
import TableTbody from "../atoms/tableTbody.vue";
</script>

<template>
  <table class="w-full bg-white rounded-md table-auto">
    <thead class="text-xs font-semibold text-gray-400 uppercase">
      <TableThead />
    </thead>
    <tbody class="text-sm divide-y divide-gray-100">
      <TableTbody />
    </tbody>
  </table>
</template>
