<template>
  <li class="hotel-item">
    <div class="img-flag">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.64645 1.20117H2.22656V0.439453C2.22656 0.196758 2.0298 0 1.78711 0C1.54441 0 1.34766 0.196758 1.34766 0.439453V14.5605C1.34766 14.8032 1.54441 15 1.78711 15C2.0298 15 2.22656 14.8032 2.22656 14.5605V7.93945H7.64645C7.88915 7.93945 8.08591 7.7427 8.08591 7.5V1.64062C8.08591 1.39793 7.88915 1.20117 7.64645 1.20117Z"
          fill="#C7C7C7"
        />
        <path
          d="M13.621 8.80166L12.5144 6.03516L13.621 3.26865C13.6752 3.1333 13.6585 2.97979 13.5767 2.85908C13.495 2.73838 13.3588 2.66602 13.2129 2.66602H8.96484V7.5C8.96484 8.22686 8.37334 8.81836 7.64648 8.81836C6.98751 8.81836 6.40137 8.81836 5.74219 8.81836V8.96484C5.74219 9.20798 5.93903 9.4043 6.18164 9.4043H13.2129C13.3588 9.4043 13.495 9.33193 13.5767 9.21123C13.6585 9.09053 13.6752 8.93701 13.621 8.80166Z"
          fill="#C7C7C7"
        />
      </svg>
    </div>
    <div class="img-container">
      <img class="hotel-img" :src="itemData.images[0].path" />
    </div>
    <div class="text-container">
      <div class="text-header">
        <h2 class="hotel-name">{{ itemData.name }}</h2>
        <div class="hotel-price-range">
          <p
            v-for="index in 5"
            :key="index"
            :class="{ bold: itemData.price_range >= index }"
          >
            $
          </p>
          <!-- Todo в отдельный компонент -->
        </div>
      </div>
      <div class="hotel-description" v-html="itemData.description">
        {{ itemData.description }}
      </div>
      <div class="btn-groupe">
        <button class="btn-readmore">Read more</button>
        <div class="like-img" @click="addToFavorite">
          <svg
            class="heart"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1695 0.929596C13.237 0.929596 12.3457 1.14337 11.5205 1.56502C10.9588 1.85199 10.4428 2.23327 10 2.68564C9.5572 2.23327 9.0412 1.85199 8.47946 1.56502C7.65423 1.14337 6.76297 0.929596 5.83043 0.929596C2.61555 0.929596 0 3.54514 0 6.76007C0 9.03714 1.2026 11.4556 3.57435 13.9483C5.55464 16.0296 7.97913 17.7645 9.66429 18.8534L10 19.0704L10.3357 18.8534C12.0209 17.7645 14.4454 16.0296 16.4257 13.9483C18.7974 11.4556 20 9.03714 20 6.76007C20 3.54514 17.3845 0.929596 14.1695 0.929596ZM15.5294 13.0955C13.7596 14.9555 11.6038 16.5368 10 17.5951C8.39616 16.5368 6.24037 14.9555 4.4706 13.0955C2.32499 10.8406 1.23711 8.70902 1.23711 6.76007C1.23711 4.22729 3.29769 2.16671 5.83047 2.16671C7.28866 2.16671 8.62817 2.83652 9.50544 4.00436L10 4.66271L10.4946 4.00436C11.3718 2.83652 12.7113 2.16671 14.1695 2.16671C16.7023 2.16671 18.7629 4.22729 18.7629 6.76007C18.7629 8.70902 17.675 10.8406 15.5294 13.0955Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "HotelItemOpenM",

  props: {
    itemData: Object,
  },

  data() {
    return {};
  },

  methods: {
    addToFavorite() {
      const item = this.itemData;
      const exist = this.$store.state.favoriteHotels.find((hotel) => {
        return item.id === hotel.id;
      });
      if (!exist) {
        console.log(exist);
        this.$store.dispatch("addHotel", item);
        this.showNotifySuccess();
      } else {
        this.showNotifyFail();
      }
    },
    showNotify() {
      this.$toast.success("Added to favorite", {
        timeout: 2000,
      });
    },
    showNotifyFail() {
      this.$toast.warning("Already added to favorite", {
        timeout: 2000,
      });
    },
  },
};
</script>

<style scoped>
.bold {
  font-weight: 700;
}
.hotel-item {
  box-sizing: border-box;
  width: 100%;
  height: 210px;
  list-style: none;
  padding: 30px 16px;
  margin-bottom: 16px;
  display: flex;
  position: relative;
  background: #eeeeee;
}
.img-flag {
  position: absolute;
  top: 18px;
  right: 29px;
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.img-container {
  height: 150px;
  margin-bottom: 11px;
  margin-right: 30px;
}
.hotel-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
.like-img {
  height: 20px;
  cursor: pointer;
}
.heart {
  fill: #333333;
}
.heart:hover {
  fill: red;
}
.text-container {
  width: 417px;
}
.text-header {
  display: flex;
  justify-content: space-between;
  width: 280px;
}
.hotel-price-range {
  margin-right: 15px;
  display: flex;
}
.hotel-name {
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #333333;
  margin: 0 0 4px 0;
  max-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hotel-price-range {
  margin: 0;
  margin-right: 15px;
}
.hotel-price-range p {
  margin: 0;
  font-family: Helvetica;
  font-style: normal;
  font-size: 16px;
  line-height: 160%;
  text-transform: uppercase;
  color: #333333;
}
.hotel-description {
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 160%;
  letter-spacing: -0.01em;
  color: #999999;
  margin: 0 0 27px 0;
  padding: 0;
  height: 48px;

  /* white-space: nowrap; */
  overflow: hidden;
}
.btn-groupe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 262px;
}
.btn-readmore {
  width: 216px;
  height: 39px;
  background: #333333;
  border: none;
  font-family: Helvetica;
  font-size: 15px;
  line-height: 160%;
  letter-spacing: -0.01em;
  color: #eeeeee;
  cursor: pointer;
}
</style>
