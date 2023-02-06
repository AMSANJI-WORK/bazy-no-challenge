import Vue from "vue";
import VueRouter from "vue-router";
import { ProductRoute } from "@/modules/product/router";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/product/list",
      component: () => import("@/modules/app/views/home.vue"),
      children: [{ ...ProductRoute }],
    },
  ],
});
