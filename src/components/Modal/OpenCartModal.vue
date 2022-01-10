<template>
  <div>
    <simple-modal v-model="isShow">
      <template slot="body">
        <h2>This is OpenCart</h2>
        <p>There is no any content</p>
        <virtual-list
          style="height: 360px; overflow-y: auto"
          scrollable
          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"
        />
        <button @click="isShow = !isShow">on off button</button>
      </template>
    </simple-modal>
    <!-- <button @click="isShow = !isShow">on off button</button> -->
  </div>
</template>

<script>
import SimpleModal from "simple-modal-vue";
import Item from "./Item.vue";
import { getData } from "./data";
export default {
  name: "OpenCartModal",
  components: {
    SimpleModal,
  },
  props: ["openCartisShowModal"],
  data() {
    return {
      itemComponent: Item,
      items: getData(1000),
      isShow: true,
    };
  },
  mounted() {
    console.log(this.openCartisShowModal);
  },
};
</script>

<style scoped>
.list {
  border: 2px solid steelblue;
  border-radius: 3px;
}
</style>
