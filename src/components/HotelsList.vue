<template>
  <div class="content-container-list">
    <div class="filter-container">
      <div class="filter-items">
        <button
          class="filter-item"
          v-for="(item, i) in priseData"
          :key="i"
          :value="i + 1"
          :class="{ active: activeClass == item.length }"
          @click="selectFilter"
        >
          {{ item }}
        </button>
      </div>
    </div>
    <div class="hotels-list-container">
      <h2 class="hotels-list-header">Day 1</h2>
      <ul
        v-if="this.$store.state.isMapOpen"
        class="holels-list"
        :class="{
          'holels-list-map-open': this.$store.state.isMapOpen === true,
        }"
      >
        <HotelItemOpenM
          v-for="HotelItem in hoteslData"
          :key="HotelItem.id"
          :itemData="HotelItem"
        />
      </ul>
      <ul
        v-else
        class="holels-list"
        :class="{
          'holels-list-map-open': this.$store.state.isMapOpen === true,
        }"
      >
        <HotelItem
          v-for="HotelItem in hoteslData"
          :key="HotelItem.id"
          :itemData="HotelItem"
        />
      </ul>

      <div class="hotels-list"></div>
    </div>
  </div>
</template>

<script>
import Data from "../data/data.json";
import HotelItem from "./HotelItem";
import HotelItemOpenM from "./HotelItemOpenM";

export default {
  name: "HotelsList",
  components: {
    HotelItem,
    HotelItemOpenM,
  },
  data() {
    return {
      priseData: ["$", "$$", "$$$", "$$$$", "$$$$$", " All  "],
      filterValue: null,
      activeClass: null,
    };
  },
  computed: {
    newFilterValue: {
      get: function() {
        return this.filterValue;
      },
      set: function(newValue) {
        return (this.filterValue = newValue);
      },
    },
    hoteslData: function() {
      let items;
      const renderData =
        this.$store.state.menuItem === "city"
          ? Data
          : this.$store.state.favoriteHotels;
      if (this.newFilterValue) {
        items = renderData.filter(
          (item) => item.price_range == this.newFilterValue
        );
      } else {
        items = renderData;
      }
      return items;
    },
  },
  methods: {
    setActiveClass(className) {
      this.activeClass = className;
    },
    selectFilter(e) {
      this.setActiveClass(e.target.value);
      if (e.target.value == 6) {
        this.newFilterValue = null;
      } else {
        this.newFilterValue = e.target.value;
      }
    },
  },
};
</script>

<style scoped>
.content-container-list {
  width: 100%;
}
.filter-items {
  display: flex;
}
.filter-item {
  box-sizing: border-box;
  margin-right: 24px;
  width: 156px;
  height: 34px;
  background: #eeeeee;
  border-radius: 14px;
  text-align: center;
  padding-top: 6px;
  cursor: pointer;
  font-size: 16px;
  line-height: 160%;
  font-family: Helvetica;
  color: #5a5a5a;
  margin-bottom: 8px;
  border: none;
}
.filter-item:hover {
  font-weight: 700;
  background: #d8d8d8;
}
.active {
  font-weight: 700;
  background: #d8d8d8;
}

.hotels-list-header {
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 160%;
  margin: 0;
  text-align: left;
  margin-bottom: 13px;
}
.holels-list {
  display: grid;
  /* grid-template-columns: 333px 333px 333px;
  grid-gap: 25px; */
  grid-template-columns: 31% 31% 31%;
  grid-gap: 3.5%;
  padding: 0;
}
.holels-list-map-open {
  display: flex;
  grid-template-columns: none;
  grid-gap: 0;
  flex-direction: column;
  /* width: 754px; */
  width: 100%;
}

@media (min-width: 320px) and (max-width: 767px) {
  .hotels-list-header {
    padding: 0 5px;
  }
  .filter-items {
    justify-content: space-around;
  }
  .filter-item {
    font-size: 14px;
    padding-top: 3px;
    width: 15%;
    margin-right: 0;
  }
  .holels-list {
    box-sizing: border-box;
    display: flex;
    grid-template-columns: none;
    grid-gap: 0;
    flex-direction: column;
    width: 100%;
  }
}
</style>
