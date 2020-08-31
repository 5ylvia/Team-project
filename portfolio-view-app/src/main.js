import Vue from "vue";
import App from "./App.vue";

import Home from "./components/home/Home.vue";
import PortfolioTemplate from "./components/portfolio/PortfolioTemplate.vue";
import ProjectTemplate from "./components/project/ProjectTemplate.vue";
import EditPortfolio from "./components/edit-portfolio/EditPortfolio.vue";

import VueResource from "vue-resource";
import VueRouter from "vue-router";

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
    component: PortfolioTemplate,
    props: true,
  },
  {
    name: "project",
    path: "/portfolio/:portfolioId/project/:projectId",
    component: ProjectTemplate,
    props: true,
  },
  {
    name: "edit",
    path: "/portfolio/:portfolioId?/edit",
    component: EditPortfolio,
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
