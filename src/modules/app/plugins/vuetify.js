// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const opts = {};

export default new Vuetify({
  theme: {
    themes: {
      light: {
        secondary: "#f5f5f5", // #FFCDD2
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
});
