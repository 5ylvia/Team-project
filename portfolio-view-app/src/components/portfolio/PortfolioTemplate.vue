<template>
  <div>
    <h1>{{ user.id }}'s portfolio</h1>
    <h3></h3>
  </div>
</template>

<script>
export default {
  name: "PortfolioTemplate",
  data: function() {
    return {
      user: {},
    };
  },
  created: function() {
    const id = this.$route.params.userId;
    console.log(id);
    this.$http
      .get(`${process.env.VUE_APP_API_URL}/portfolio/${id}`)
      .then(function(data) {
        this.user = data.body.user;
      });
  },
};
</script>

<style></style>
