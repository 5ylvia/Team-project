<template>
  <div id="project-template">
    <ProjectSidebar :portfolio="portfolio" :project="project" />
    <!-- Contact Button -->
    <ContactButton :portfolio="portfolio" v-on:changeModal="showModal = true" />

    <!-- Fade in -->
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>

    <!-- Contact  -->
    <transition name="slide" appear v-if="showModal">
      <ContactTemplate :portfolio="portfolio" v-on:changeModal="showModal = false" />
    </transition>

    <div class="media">
      <h1>{{ project.title }}</h1>
      <ProjectContent class="media-content" i="0" :project="project" />
      <ProjectContent class="media-content media-content-left" i="1" :project="project" />
      <ProjectContent class="media-content media-content-right" i="2" :project="project" />
    </div>
  </div>
</template>

<script>
import ProjectSidebar from "./ProjectSidebar.vue";
import ProjectContent from "./ProjectContent.vue";
import ContactButton from "@/components/contact/ContactButton";
import ContactTemplate from "@/components/contact/ContactTemplate";

export default {
  name: "ProjectTemplate",

  components: {
    ProjectSidebar,
    ProjectContent,
    ContactButton,
    ContactTemplate,
  },
  data: function () {
    return {
      showModal: false,
      portfolio: {
        projects: Array,
        sources: Object,
      },
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
    currentPortfolio: function () {
      const id = this.$route.params.portfolioId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolios/${id}`)
        .then(function (data) {
          this.portfolio = data.body;
        });
      this.getProjects();
    },
    getProjects: function () {
      const id = this.$route.params.portfolioId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolios/${id}/projects`)
        .then(function (data) {
          this.portfolio.projects = data.body;
        });
    },
  },
  watch: {
    $route: "currentProject",
  },

  created: function () {
    this.currentProject();
    this.currentPortfolio();
  },
};
</script>

<style scoped>
#project-template {
  height: 100%;
}
h1 {
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.1);
  float: right;
  text-align: right;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  margin: 50px 80px;
  line-height: 0.8;
}
.media {
  position: absolute;
  left: 20%;
  float: left;
  width: 80%;
  padding: 10px;
}
.media-content {
  width: 100%;
}
.media-content-left {
  display: flex;
}
.media-content-right {
  display: flex;
  flex-direction: row-reverse;
}
</style>
