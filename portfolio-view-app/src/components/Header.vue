<template>
  <header>
    <h3>header</h3>
    <router-link v-bind:to="'/'">SVT</router-link>
    <li v-for="(user, index) in users" v-bind:key="index">
      <router-link
        v-bind:to="{ name: 'portfolio', params: { userId: user.id } }"
        >{{ user.id }}</router-link
      >
    </li>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      users: [],
    };
  },
  methods: {
    getPortfolio: function() {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolio`)
        .then(function(data) {
          this.users = data.body.users;
        });
    },
  },
  created: function() {
    this.getPortfolio();
  },
};
</script>

<style scoped>
header {
  margin: 50px;
  list-style: none;
}
</style>
