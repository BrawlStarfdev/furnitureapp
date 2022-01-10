<template>
  <div class="item">
    <div class="id">{{ source.id }} - {{ source.text }}</div>
    <div>this is clicked shops</div>
    <button @click="click">click</button>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    source: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    click: () => {
      console.log("it is clicked");
    },
  },
};
</script>
<style scoped>
.item {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgrey;
  padding: 1em;
}
</style>
