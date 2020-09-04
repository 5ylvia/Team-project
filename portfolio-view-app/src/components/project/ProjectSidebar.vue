<template>
  <div class="sidebar">
    <div>
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
    <div :style="portfolio" class="sidebar-name">
        <p :style="portfolio">{{ portfolio.firstName }} {{ portfolio.lastName }}, Project List</p>
        <div class="sidebar-name-line" :style="portfolio"></div>
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

.sidebar {
  height: 100%;
  position: fixed;
  top: 300px;
  left: 80px;
  float: left;
  display: flex;
}
.sidebar-imgbox {
  margin: 0.5rem 0;
}
.sidebar-thumbnail {
  width: 150px;
}
.sidebar-name {
  margin-left: 10px;
  position: relative;
  

}
p {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  top: 600px;
  text-align: left;
  left: -70px;
}
.sidebar-name-line {
height: 100%;
margin: 10px;
border-left: 1px solid;
}

</style>