import Vue from "vue";
import VueRouter from "vue-router";

import todosView from "@/views/todosView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/todos",
    name: "todosView",
    component: todosView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
