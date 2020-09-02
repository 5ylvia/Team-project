<template>
  <div id="project-template">
    <div class="sidebar">
      <div v-for="(project, index) in portfolio.projects" :key="index">
        <router-link
          :to="{
          name: 'project',
          params: {
            portfolioId: portfolio._id,
            projectId: project._id,
          },
        }"
        >
          <img class="sidebar-thumbnail" :src="project.images[0]" alt />
        </router-link>
      </div>
    </div>
    <div class="media">
      <h1>{{ project.title }}</h1>
      <p>{{project.author.name}}</p>

      <div v-for="(image, index) in project.images" v-bind:key="index">
        <img class="media-img" :src="image" />
      </div>
    </div>
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
      portfolio: {
        projects: Array,
      },
      project: {
        title: String,
        description: Object,
        images: Object,
        author: {
          name: String,
        },
      },
    };
  },
  methods: {
    currentPortfolio: function () {
      const id = this.$route.params.portfolioId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolios/${id}`)
        .then(function (data) {
          this.portfolio = data.body;
        });
      this.getProjects();
      this.currentProject();
    },
    getProjects: function () {
      const id = this.$route.params.portfolioId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolios/${id}/projects`)
        .then(function (data) {
          this.portfolio.projects = data.body;
        });
    },
    currentProject: function () {
      const projectId = this.$route.params.projectId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/projects/${projectId}`)
        .then(function (data) {
          this.project = data.body;
        });
    },
  },
  watch: {
    $route: "currentPortfolio",
  },
  created: function () {
    this.currentPortfolio();
  },
};
</script>

<style scoped>
.project-template {
  position: relative;
  width: 100vw;
  height: 100%;
}
.sidebar {
  float: left;
  width: 25%;
  height: 100%;
  position: fixed;
  top: 300px;
}
.sidebar-thumbnail {
  width: 200px;
}
.media {
  float: right;
  width: 75%;
}
.media-img {
  width: 100%;
}
</style>
