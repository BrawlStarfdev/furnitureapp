<template>
  <div>
    <transition-group name="fade" class="row" tag="div">
      <div
        v-for="item in CardArray"
        class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3"
        v-bind:key="item.id"
        :load="_CardArray(CardArray)"
      >
        <div class="card">
          <img
            class="card-img-top"
            :src="item.img"
            alt="Card image cap"
            :load="log(item)"
          />
          <div class="overlay">
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg"
              @click="addtoCart(item)"
            >
              Add +
            </button>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "cards",
  props: ["CardArray"],
  methods: {
    addtoCart(item) {
      console.log("hello");
      this.$store.commit("inCart", item);
    },
    sendinfo(item) {
      this.$store.commit("addtoInfo", item);
    },
    log(item) {
      console.log(item.img);
    },
    _CardArray(item) {
      console.log("cardarray: ", item);
    },
  },
};
</script>

<style></style>
