<template>
  <div>
    <h1>{{ project.title }}</h1>
    <h4>{{ project.description }}</h4>
  </div>
</template>

<script>
export default {
  name: "ProjectTemplate",
  data: function() {
    return {
      project: {},
    };
  },
  created: function() {
    const userId = this.$route.params.userId;
    const id = this.$route.params.projectId;
    this.$http
      .get(`${process.env.VUE_APP_API_URL}/portfolio/${userId}/projects/${id}`)
      .then(function() {
        this.project = this.$route.params.project;
      });
  },
};
</script>

<style></style>
