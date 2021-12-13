<template>
  <section class="about-us">
    <div class="row p-4">
      <div class="col-6">
        <img
          class="float-right"
          src="@/assets/new.jpg"
          style="width: '100%'; height: 500px"
        />
      </div>
      <div class="col-12 col-sm-6">
        <h1>New Furniturs</h1>
        <h6>
          All the furniture is the beauty in your mind, let's decorate it
          together for your beauty
        </h6>
      </div>
    </div>
    <div class="row p-4" style="margin-left: 30px">
      <div
        lass="col-12 col-sm-6 text-sm-right text-md-right ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-right order-sm-first order-12"
        style="margin-right: -1%; z-index: 1"
      >
        <h1>Save Space more freedom</h1>
        <br /><br />
        <h6>
          All the furniture is the beauty in your mind, <br />
          let's decorate it together for your beauty
        </h6>
      </div>
      <div class="col-6">
        <img
          src="@/assets/33.jpg"
          class="float-lg-right"
          style="width: '100%'; height: 500px"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-us img {
  width: 90%;
  min-width: 380px;
}
</style>
