<template>
  <div>
    <ul v-for="(source, index) in user.sources" v-bind:key="index + 10">
      <!-- Add number to make the key unique -->
      <li :style="{ color: color }" class="skills">{{ source }}</li>
    </ul>
    <h1>{{ user.name }}</h1>

    <div class="content" v-for="(project, id) in user.projects" v-bind:key="id">
      <div v-for="(image, index) in project.images" v-bind:key="index + 20">
        {{ image }}
        <!-- <img v-bind:src="image" alt="" /> -->
      </div>
      <router-link
        v-bind:to="{
          name: 'project',
          params: { userId: user.id, project: project },
        }"
        >{{ project.title }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioTemplate",
  data: function() {
    return {
      user: {
        color: "",
        projects: [],
      },
      //   sources: {},
    };
  },
  methods: {
    getPortfolio: function() {
      const id = this.$route.params.userId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolio/${id}`)
        .then(function(data) {
          this.user = data.body.user;
          //   this.sources = data.body.user.sources;
          this.projects = data.body.user.projects;
          this.color = data.body.user.color;
        });
    },
  },
  watch: {
    // call again the method if the route changes
    $route: "getPortfolio",
  },
  created: function() {
    this.getPortfolio();
  },
};
</script>

<style>
.skills {
  font-size: 3rem;
  text-align: left;
}
.content {
  height: 200px;
}
</style>
