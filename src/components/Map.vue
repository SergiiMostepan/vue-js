<template>
  <div class="map-container">
    <div class="map">
      <GmapMap
        :center="{ lat: 52.5, lng: 13.4 }"
        :zoom="10"
        map-type-id="terrain"
        style="width: 100%; height: 824px"
        class="g-map"
      >
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen = false"
        >
          <ul class="infoWindow">
            <li>
              <h3 class="infoWindow-name">{{ infoContent.name }}</h3>
            </li>
            <li>
              {{ infoContent.address }}
            </li>
            <li>
              {{ infoContent.phone }}
            </li>
          </ul>
        </GmapInfoWindow>
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="toggleInfoWindow(m, index)"
        />
      </GmapMap>
      <button
        class="map-button"
        :class="{
          'map-button-open': this.$store.state.isMapOpen === true,
        }"
        @click="toggleMap"
      >
        <div>
          {{ this.$store.state.isMapOpen === true ? "Hide" : "Show" }} the map
        </div>
        <div class="btn-arrow">
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 7L7 1L13 7" stroke="white" />
          </svg>
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 7L7 1L13 7" stroke="white" />
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import Data from "../data/data.json";
export default {
  name: "Map",
  data() {
    return {
      center: {
        lat: 10.0,
        lng: 10.0,
      },
      infoContent: "",
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  computed: {
    markers: function() {
      const data = Data.map((item) => {
        return {
          position: { lat: item.latitude, lng: item.longitude },
          infoText: {
            name: item.name,
            address: item.address,
            phone: item.phone,
          },
        };
      });
      return data;
    },
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    toggleMap: function() {
      this.$store.dispatch("toggleMapOpen");
    },
  },
};
</script>

<style>
.map-container {
  background-color: #eeeeee;
}
.map {
  position: relative;
}

.map-button {
  position: absolute;
  width: 199px;
  height: 44px;
  left: 25px;
  top: 105px;
  border: none;
  background: #c7c7c7;
  transform: rotate(-90deg);
  transition: 0.4s;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;

  font-family: Helvetica;
  font-size: 15px;
  line-height: 160%;
  text-transform: uppercase;
  color: #ffffff;
}
.map-button-open {
  left: 54px;
  top: 54px;
  transform: rotate(-0deg);
  transition: 0.4s;
}
.btn-arrow {
  transform: rotate(90deg);
  display: flex;
  flex-direction: column;
}
.infoWindow {
  list-style: none;
  padding: 0;
}
.infoWindow-name {
  margin: 0;
}

@media (min-width: 320px) and (max-width: 767px) {
  .map-button {
    display: none;
  }
}
</style>
