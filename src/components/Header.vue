<template>
  <div class="header-container"></div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-container {
  width: 100%;
  height: 88px;
  background-color: #eeeeee;
  margin-bottom: 53px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .header-container {
    height: 50px;
    margin-bottom: 25px;
  }
}
</style>
