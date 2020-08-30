<template>
  <div>
    <h1>{{ project }}</h1>
    <!-- <project-sidebar></project-sidebar> -->
    <div v-for="(detail, index) in project" v-bind:key="index">
      <!-- <project-content></project-content> -->
    </div>
    <!-- <h3>{{project.id}}</h3> -->
  </div>
</template>

<script>
// import ProjectSidebar from "./ProjectSidebar.vue";
// import ProjectContent from "./ProjectContent.vue";

export default {
  name: "ProjectTemplate",
  // components: {
  //   "project-sidebar": ProjectSidebar,
  //   "project-content": ProjectContent,
  // },

  data: function () {
    return {
      project: {},
    };
  },
  created: function () {
    const portfolioId = this.$route.params.portfolioId;
    const id = this.$route.params.project.id;
    this.$http
      .get(
        `${process.env.VUE_APP_API_URL}/portfolio/${portfolioId}/projects/${id}`
      )
      .then(function (data) {
        // this.project = data.body.projects;
        console.log(data.body);
      });
  },
  // computed: {
  //   displayDetails: function () {
  //     return this.project.title;
  //   },
  // },
};
</script>

<style></style>
