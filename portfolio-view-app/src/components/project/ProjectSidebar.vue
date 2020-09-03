<template>
  <div class="sidebar">
    <p :style="portfolio">{{ portfolio.firstName }} {{ portfolio.lastName }}, Project List</p>

    <div class="sidebar-imgbox" v-for="(project, index) in portfolio.projects" :key="index">
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
</template>

<script>
export default {
  name: "ProjectSidebar",

  data: function () {
    return {
      portfolio: {
        projects: Array,
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
  created: function () {
    this.currentPortfolio();
  },
};
</script>

<style scoped>
/* * {
  border: 1px solid red;
} */
.sidebar {
  height: 100%;
  position: fixed;
  top: 300px;
  left: 80px;
  float: left;
}
.sidebar-imgbox {
  margin: 0.5rem 0;
}
.sidebar-thumbnail {
  width: 150px;
}
p {
  transform: rotate(90deg);
  /* height: 200px; */
  width: 50%;
  position: fixed;
  top: 600px;
  text-align: left;
  left: -70px;
  border-bottom: 1px solid;
}
</style>