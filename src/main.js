import Vue from "vue";
import App from "./App.vue";
import router from "../router";
import store from "../store";
import VueCarousel from "vue-carousel";
import axios from "axios";
import VirtualList from "vue-virtual-scroll-list";
import VueSlideoutPanel from "vue2-slideout-panel";

Vue.component("virtual-list", VirtualList);
Vue.config.productionTip = false;
Vue.use(VueCarousel);
Vue.config.productionTip = false;
Vue.prototype.log = console.log;
Vue.config.devtools = true;
Vue.prototype.$http = axios;
Vue.use(VueSlideoutPanel);
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
