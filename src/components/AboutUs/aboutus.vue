<template>
  <section class="container">
    <div style="max-width: 635px">
      <h2>Explore How It's Made. The Ashley Way</h2>
      <br /><br />

      <p>
        {{ firstSentence }}
      </p>
      <img src="@/assets/funiture_1.jpeg" alt="" />
    </div>

    <div style="max-width: 635px">
      <h2>Explore How It's Made. The Ashley Way</h2>
      <br /><br />

      <p>
        {{ firstSentence }}
      </p>
      <img src="@/assets/funiture_1.jpeg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "aboutus",
  data() {
    return {
      firstSentence:
        "Ashley Furniture Industries is the #1 Furniture Manufacturer in the World. But our products aren't the only heroes. The people of Ashley Furniture Industries also help this company truly define itself. Our team lives and breathes a “dirty fingernail” approach that breeds success unlike any other. And it gets the job done. That's what we're made of and what it means to be Ashley made.",
    };
  },
};
</script>

<style scoped></style>
