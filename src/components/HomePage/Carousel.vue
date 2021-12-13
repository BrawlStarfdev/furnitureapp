<template>
  <section class="carousel">
    <div id="heroControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#heroControls" class="active" data-slide-to="0"></li>
        <li data-target="#heroControls" data-slide-to="1"></li>
        <li data-target="#heroControls" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active d-block justify-content-center">
          <img src="@/assets/jum1.jpg" alt="First Slide" class="img-fluid" />
        </div>
        <div class="carousel-item d-block justify-content-center">
          <img src="@/assets/jum2.jpg" alt="Second Slide" class="img-fluid" />
        </div>
        <div class="carousel-item d-block justify-content-center">
          <img src="@/assets/jum3.jpg" alt="Third Slide" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
.img-fluid {
  width: 800px;
  height: 400px;
}

ol.carousel-indicators li {
  background-color: wheat;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid black;
}

ol.carousel-indicators li.active {
  background: #dbf0fa;
}
</style>
