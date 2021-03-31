<template>
  <div class="main-container">
    <div
   
      class="content-container-hl"
      :class="{
        'content-container-hl-open': this.$store.state.isMapOpen === true,
      }"
    >
      <HeaderMain  v-if="!isWidget" />
      <div class="header">The Trip Boutique widget</div>
      <div class="embedding-container" data-src='http://localhost:3000/widget/quiz' style="width:100%; height:100vh"></div>
       <!-- <div class="embedding-container" data-src='https://dev.trip.boutique/widget/quiz' style="width:100%; height:100vh"></div> -->
      <div class="footer"></div>
      <HotelsList  v-if="!isWidget" />
    </div>
    <div
     v-if="!isWidget"
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

export default {
  name: "Main",
  data() {
  return {
    isWidget: true
  }
  },
  components: {
    HeaderMain,
    HotelsList,
    Map,  
  },
  mounted() {

  }
};
</script>

<style>
.main-container {
  /* margin-left: 147px; */
  display: flex;
  justify-content: space-between;
}
.content-container-hl {
  /* width: 78%; */
  width: 100%;
  transition: width 0.4s;
}
.content-container-hl-open {
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
.header {
   /* margin-bottom: 30px; */
   display: flex;
   justify-content: center;
   align-items: center;
  width: 100%;
  height: 70px;
  background-color: aqua;
}
.footer {
  /* margin-top: 30px; */
  width: 100%;
  height: 70px;
  background-color: aqua;
}
</style>
