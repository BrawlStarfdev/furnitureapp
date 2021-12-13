<template>
  <div>
    <h1 class="pt-3 text-center">New product Listing</h1>
    <nav class="row justify-content-center" aria-level="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active">Products</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadc",
};
</script>

<style scoped>
.breadcrumb {
  background: inherit !important;
  color: lightcoral !important;
  font-size: 20px;
}
.breadcrumb > li > a {
  text-decoration: none !important;
  color: #2c3539 !important;
}
.breadcrumb > li {
  text-decoration: none !important;
  color: lightseagreen;
}
</style>
