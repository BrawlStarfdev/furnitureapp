<template>
  <carousel :per-page="1" :autoplay="true" :centerMode="true">
    <slide
      ><img src="@/assets/jum1.jpg" alt="First Slide" class="img-fluid" />
    </slide>
    <slide
      ><img src="@/assets/jum2.jpg" alt="Second Slide" class="img-fluid"
    /></slide>
    <slide
      ><img src="@/assets/jum3.jpg" alt="Third Slide" class="img-fluid"
    /></slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Carousel_npm",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped></style>
