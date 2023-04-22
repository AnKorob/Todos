import Vue from "vue";
import VueRouter from "vue-router";
import PageBlock from "@/views/PageBlock.vue";
import CardPage from "@/views/CardPage.vue";
import TestTest from "@/views/TestTest.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: PageBlock,
  },
  {
    path: "/test",
    name: "test",
    component: TestTest,
  },
  {
    path: "/bcard/:hash",
    name: "generator",
    component: CardPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
