// export const STORAGE_KEY = "hotels-vuejs";

export const mutations = {
  addHotel(state, hotel) {
    state.favoriteHotels.push(hotel);
  },

  changeMenuItem: (state, menuItem) => (state.menuItem = menuItem),
  toggleMapOpen: (state) => (state.isMapOpen = !state.isMapOpen),
};
