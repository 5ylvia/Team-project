<template>
  <div>
    <h1>{{ user.name }}'s portfolio</h1>
    <div v-for="(project, index) in user.projects" v-bind:key="index">
      <router-link
        v-bind:to="{ name: 'project', params: { projectId: project.id } }"
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
      user: {},
      projects: [],
    };
  },
  methods: {
    getPrpjects: function(id) {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolio/${id}/projects`)
        .then(function(data) {
          this.projects = data.body.user.projects;
          console.log(this.projects);
        });
    },
  },
  created: function() {
    this.getPrpjects(id);
    const id = this.$route.params.userId;
    this.$http
      .get(`${process.env.VUE_APP_API_URL}/portfolio/${id}`)
      .then(function(data) {
        this.user = data.body.user;
      });
  },
};
</script>

<style></style>
