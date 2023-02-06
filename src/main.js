import Vue from "vue";

import App from "./modules/app/App.vue";
import { router } from "./modules/app/router";
import { store } from "./modules/app/store";
import vuetify from "./modules/app/plugins/vuetify";
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
