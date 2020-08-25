import Vue from "vue";
import App from "./App.vue";

import Home from "./components/home/Home.vue";
import PortfolioTemplate from "./components/portfolio/PortfolioTemplate.vue";
import ProjectTemplate from "./components/project/ProjectTemplate.vue";
import EditUser from "./components/edit-user/EditUser.vue";

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
    props: true,
  },
  {
    name: "project",
    path: "/portfolio/:userId/projects",
    component: ProjectTemplate,
  },
  {
    name: "edit",
    path: "/portfolio/:userId?/edit",
    component: EditUser,
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
