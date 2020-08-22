import Vue from "vue";
import App from "./App.vue";

import Home from "./components/home/Home.vue";
import PortfolioTemplate from "./components/portfolio/PortfolioTemplate.vue";
import ProjectTemplate from "./components/project/ProjectTemplate.vue";
import EditProject from "./components/edit-project/EditProject.vue";

import VueResource from "vue-resource";

Vue.use(VueResource);

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    name: "portfolio",
    path: "/portfolio/:userId",
    component: PortfolioTemplate,
  },
  {
    name: "project",
    path: "/portfolio/:userId/projects",
    component: ProjectTemplate,
  },
  {
    name: "edit",
    path: "/portfolio/:userId/projects/:projectTitle?/edit",
    component: EditProject,
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
