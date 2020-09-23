import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";
import actions from "./actions";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    favoriteHotels: [],
    menuItem: "city",
    isMapOpen: false,
  },
  actions,
  mutations,
  plugins: [createPersistedState()],
});
