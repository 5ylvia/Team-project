<template>
  <header>
    <router-link v-bind:to="'/'">
      <img src="@/assets/logo.svg/" alt="stv logo" class="logo" />
    </router-link>
    <li
      v-for="(user, index) in users"
      v-bind:key="index"
      class="links"
      v-on:click="activeColor(user)"
    >
      <router-link
        v-bind:to="{
          name: 'portfolio',
          params: { userId: user.id },
        }"
      >{{ user.id }}</router-link>
    </li>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function () {
    return {
      users: [],
      color: "",
    };
  },

  methods: {
    getPortfolios: function () {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolio`)
        .then(function (data) {
          this.users = data.body.users;
        });
    },
    activeColor: function (user) {
      this.color = user.color;
      // event.target.color = color;
      console.log(user.color);
      console.log(event.target);
    },
  },
  created: function () {
    this.getPortfolios();
  },
};
</script>

<style scoped>
.logo {
  width: 175px;
  height: 175px;
}
header {
  height: 58px;
  margin: 80px;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
}
ul {
  width: 500px;
  display: flex;
  justify-content: space-between;
}
li {
  font-size: 48px;
  font-weight: 300;
}
a {
  color: #c8bfba;
}
</style>
