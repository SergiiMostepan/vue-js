import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import * as VueGoogleMaps from "vue2-google-maps";
import App from "./App.vue";
import "./assets/normalize.css";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_API_TOKEN,
    libraries: "places",
    region: "UA",
    language: "ua",
  },
});

Vue.use(Toast);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
