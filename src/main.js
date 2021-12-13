import Vue from "vue";
import App from "./App.vue";
import router from "../router";
import store from "../store";
import VueCarousel from "vue-carousel";
import axios from "axios";
Vue.use(VueCarousel);
Vue.config.productionTip = false;
Vue.prototype.log = console.log;
Vue.config.devtools = true;
Vue.prototype.$http = axios;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
