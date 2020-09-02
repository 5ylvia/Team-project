<template>
  <div>
    <h1>{{ project.title }}</h1>
    <project-sidebar></project-sidebar>
    <!-- <div v-for="(projects, index) in portfolio" :key="index">
      {{ portfolio.project.images[0] }}
    </div> -->

    <div v-for="(value, index) in project" v-bind:key="index">
      <p>{{ value[0] }}</p>
      <project-content></project-content>
    </div>
  </div>
</template>

<script>
import ProjectSidebar from "./ProjectSidebar.vue";
import ProjectContent from "./ProjectContent.vue";

export default {
  name: "ProjectTemplate",

  components: {
    "project-sidebar": ProjectSidebar,
    "project-content": ProjectContent,
  },

  data: function() {
    return {
      portfolio: {},
      project: {},
    };
  },
  created: function() {
    const portfolioId = this.$route.params.portfolioId;
    const projectId = this.$route.params.projectId;
    this.$http
      .get(
        `${process.env.VUE_APP_API_URL}/portfolio/${portfolioId}/projects/${projectId}`
      )
      .then(function() {
        this.project = this.$route.params.project;
      });
  },
};
</script>

<style></style>
