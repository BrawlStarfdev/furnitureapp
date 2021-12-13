import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

const Home = () => import("./src/view/Home.vue");

const Products = () => import("./src/view/Products.vue");
const Contact = () => import("@/view/Contact.vue");
const Info = () => import("@/view/Info.vue");
const Aboutus = () => import("@/view/Aboutus.vue");
const Blog = () => import("@/view/Blog.vue");
const NewArrivals = () => import("@/view/NewArrivals.vue");
const Featured = () => import("@/view/Featured.vue");
export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Products",
      name: "Products",
      component: Products,
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/Info",
      name: "Info",
      component: Info,
    },
    {
      path: "/Aboutus",
      name: "Aboutus",
      component: Aboutus,
    },
    {
      path: "/Blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/newArrivals",
      name: "NewArrivals",
      component: NewArrivals,
    },
    {
      path: "/featured",
      name: "Featured",
      component: Featured,
    },
  ],
  mode: "history",
});
