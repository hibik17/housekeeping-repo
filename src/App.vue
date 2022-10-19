<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import axios from "axios";
import { onMounted } from "vue";

onMounted(() => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    console.log(res.data);
  });
});
</script>

<template>
  <RouterView />
</template>
