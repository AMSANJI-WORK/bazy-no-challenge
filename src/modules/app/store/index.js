import Vue from "vue";
import Vuex from "vuex";
import { ProductModule as product } from "@/modules/product/store";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    product,
  },
});
