<template>
  <header>
    <router-link v-bind:to="'/'">
      <img src="@/assets/logo.svg/" alt="stv logo" class="logo" />
    </router-link>
    <li
      v-for="(portfolio, index) in portfolios"
      v-bind:key="index"
      class="links"
      :style="portfolio"
    >
      <router-link
        v-bind:to="{
          name: 'portfolio',
          params: { portfolioId: portfolio._id },
        }"
      >{{ portfolio.name }}</router-link>
    </li>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      portfolios: []
    };
  },

  methods: {
    getPortfolios: function() {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolios`)

        .then(function(data) {

          this.portfolios = data.body;
        });
    }
  },
  created: function() {
    this.getPortfolios();
  }

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
  text-transform: uppercase;

  font-size: 48px;
  font-weight: 300;
}
a {
  color: #c8bfba;
}
.router-link-exact-active {
  color: var(--color);
}
</style>
