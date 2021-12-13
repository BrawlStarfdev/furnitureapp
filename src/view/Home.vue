<template>
  <div>
    <!-- <Carousel /> -->
    <Carousel_npm />
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from "../components/HomePage/AboutUs.vue";
// import Carousel from "../components/HomePage/Carousel.vue";
import Carousel_npm from "../components/HomePage/Carousel_npm.vue";
export default {
  name: "Home",
  components: { AboutUs, Carousel_npm },
};
</script>

<style scoped></style>
