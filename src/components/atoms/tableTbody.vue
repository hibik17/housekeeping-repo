<script setup lang="ts">
import { useCheckStore } from "../../stores/useCheckStore";
// define data
const { AllCheck } = useCheckStore();
</script>

<template>
  <tr v-for="(check, index) in AllCheck" :key="index">
    <td class="p-2 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 w-10 h-10 mr-2 sm:mr-3">
          <img
            class="rounded-full"
            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
            width="40"
            height="40"
            alt="Alex Shatov"
          />
        </div>
        <div class="font-medium text-gray-800">Alex Shatov</div>
      </div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="text-left">{{ check.title }}</div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="font-medium text-left text-green-500">{{ check.price }}</div>
    </td>
  </tr>
</template>
