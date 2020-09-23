<template>
  <div class="header-main-container">
    <div
      class="header-main-button"
      v-bind:class="{ active: isActive('city') }"
      @click="setActive('city')"
    >
      City guide
    </div>
    <div
      class="header-main-button"
      v-bind:class="{ active: isActive('favorite') }"
      @click="setActive('favorite')"
    >
      Favorite
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMain",
  data() {
    return { activeItem: this.$store.state.menuItem };
  },
  methods: {
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem;
      this.toggle(menuItem);
    },
    toggle: function(menuItem) {
      this.$store.dispatch("changeMenuItem", menuItem);
    },
  },
};
</script>

<style scoped>
.header-main-container {
  box-sizing: border-box;
  /* width: 1048px; */
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  /* justify-content: space-between; */
  /* padding-left: 410px;
  padding-right: 410px; */

  align-items: center;
  margin-bottom: 25px;
}
.header-main-button:first-child {
  margin-right: 98px;
}

.header-main-button {
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  line-height: 46px;
  color: #999999;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}

.header-main-button:hover {
  color: #333333;
  border-bottom: 3px solid #f38181;

  padding: 0;
}
.active {
  color: #333333;
  border-bottom: 3px solid #f38181;
}
</style>
