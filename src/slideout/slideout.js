window.vue2PanelDebug = true;

Vue.component("panel-1", {
  name: "panel-1",
  template: `
<div>
<button class="btn btn-primary" v-on:click.prevent="closePanel">
Close Panel
</button>
</div>
`,
  data() {
    return {};
  },
  methods: {
    closePanel() {
      this.$emit("closePanel", {});
    },
  },
});

new Vue({
  el: "#app",
  data() {
    return {
      panel1Form: {
        openOn: "right",
      },
    };
  },
  methods: {
    showPanel() {
      const panel = this.$showPanel({
        component: "panel-1",
        cssClass: "panel-1",
        props: {},
      });
    },
  },
});
