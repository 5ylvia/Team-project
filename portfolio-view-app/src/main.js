import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Home from "./components/home/Home.vue";

Vue.use(VueResource);
Vue.use(VueRouter);

//Parallax Plugin
import VuePrlx from "vue-prlx";
Vue.use(VuePrlx);

// As a directive (local)
import { VuePrlxDirective } from "vue-prlx";
Vue.directive("prlx", VuePrlxDirective);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    name: "portfolio",
    path: "/portfolio/:portfolioId",
    component: () => import("./components/portfolio/PortfolioTemplate.vue"),
    props: true,
  },
  {
    name: "project",
    path: "/portfolio/:portfolioId/project/:projectId",
    component: () => import("./components/project/ProjectTemplate.vue"),
  },
  {
    name: "edit",
    path: "/portfolio/:portfolioId?/edit",
    component: () => import("./components/edit-portfolio/EditPortfolio.vue"),
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
