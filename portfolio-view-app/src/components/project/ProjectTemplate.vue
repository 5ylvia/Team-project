<template>
  <div id="project-template">
    <project-sidebar />

    <div class="media">
      <h1>{{ project.title }}</h1>

      <img class="media-img" :src="project.images[0]" />
      <p>{{project.description[0]}}</p>

      <div v-for="(detail, index) in project" v-bind:key="index"></div>
    </div>
  </div>
</template>

<script>
import ProjectSidebar from "./ProjectSidebar.vue";
// import ProjectContent from "./ProjectContent.vue";

export default {
  name: "ProjectTemplate",

  components: {
    "project-sidebar": ProjectSidebar,
    // "project-content": ProjectContent,
  },

  data: function () {
    return {
      project: {
        title: String,
        description: Object,
        images: Object,
      },
    };
  },
  methods: {
    currentProject: function () {
      window.scrollTo(0, 0);

      const projectId = this.$route.params.projectId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/projects/${projectId}`)
        .then(function (data) {
          this.project = data.body;
        });
    },
  },
  watch: {
    $route: "currentProject",
  },

  created: function () {
    this.currentProject();
  },
};
</script>

<style scoped>
.project-template {
  position: relative;
  width: 100vw;
  height: 100%;
}

.media {
  float: right;
  width: 80%;
  padding: 10px;
}
.media-img {
  width: 100%;
}
</style>
