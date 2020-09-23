export default {
  addHotel({ commit }, item) {
    commit("addHotel", {
      ...item,
    });
  },

  changeMenuItem({ commit }, menuItem) {
    commit("changeMenuItem", menuItem);
  },
  toggleMapOpen({ commit }) {
    commit("toggleMapOpen");
  },
};
// Todo export names
