<template>
  <div class="container grid">
    this is featured view
    <Featured />
  </div>
</template>

<script>
import Featured from "../components/Featured/Featured.vue";
export default {
  name: "featuredview",
  components: {
    Featured,
  },
};
</script>

<style scoped></style>
