<template>
  <div>
    <h1>{{ project.title }}</h1>
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
    const id = this.$route.params.userId.projectId;
    this.$http
      .get(`${process.env.VUE_APP_API_URL}/portfolio/${id}`)
      .then(function(data) {
        this.project = data.body.user.project;
      });
  },
};
</script>

<style></style>
