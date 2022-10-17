import { createRouter, createWebHistory } from "vue-router";
import Index from "../components/pages/Index.vue";
import NotFound from "../components/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
    },
    {
      path: "/todos",
      name: "todos",
      component: Index,
    },
    {
      path: "/*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
