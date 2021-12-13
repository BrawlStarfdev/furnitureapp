<template>
  <div>
    <Breadc />
    <Grid />
  </div>
</template>

<script>
import Breadc from "../components/ProductsPage/Breadc.vue";
import Grid from "../components/ProductsPage/Grid.vue";

export default {
  name: "Products",
  components: {
    Breadc,
    Grid,
  },
};
</script>

<style scoped></style>
