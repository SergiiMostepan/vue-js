<template>
  <div class="main-container">
    <div
      class="content-container-hl"
      :class="{
        'content-container-hl-open': this.$store.state.isMapOpen === true,
      }"
    >
      <HeaderMain />
      <div class="embedding-container"></div>
      <HotelsList />
    </div>
    <div
      class="map-h-container"
      :class="{ 'map-open': this.$store.state.isMapOpen === true }"
    >
      <Map />
    </div>
  </div>
</template>

<script>
import HeaderMain from "./HeaderMain.vue";
import HotelsList from "./HotelsList.vue";
import Map from "./Map.vue";
// import '../../../../../../zoid'
// import '../../../../../../The trip butique/Project/ttb.front/pages/share-quiz/index.js'

export default {
  name: "Main",
  components: {
    HeaderMain,
    HotelsList,
    Map,  
  },
  // created() {
  //   var scripts = [
  //     "../../../../vue/embedding.js",
  //   ];
  //   scripts.forEach(script => {
  //     let tag = document.createElement("script");
  //     tag.setAttribute("src", script);
  //     document.head.appendChild(tag);
  //   });
  // },
  mounted() {

  }
};
</script>

<style>
.main-container {
  margin-left: 147px;
  display: flex;
  justify-content: space-between;
}
.content-container-hl {
  /* width: 1048px; */
  width: 78%;
  transition: width 0.4s;
}
.content-container-hl-open {
  /* width: 754px;*/
  width: 57%;
  transition: width 0.4s;
}
.map-h-container {
  /* width: 215px; */
  width: 17%;
  height: 760px;
  transition: width 0.4s;
}
.map-open {
  /* width: 509px; */
  width: 40%;
  flex-shrink: 0;
  transition: width 0.4s;
}

@media (min-width: 320px) and (max-width: 767px) {
  .main-container {
    margin-left: 0;
    flex-direction: column;
  }
  .content-container-hl {
    width: 100%;
    transition: width 0.4s;
  }
  .map-h-container {
    /* width: 215px; */
    width: 100%;
    height: 100vh;
    transition: width 0.4s;
  }
}
</style>
