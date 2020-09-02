<template>
  <div class="home">
    <div class="linkContainer">
      <div v-for="(portfolio, index) in portfolios" :key="index" class="nameBox">
        <router-link
          :to="{
            name: 'portfolio',
            params: { portfolioId: portfolio._id },
          }"
        >
          <h1 class="nameBox__name">{{ portfolio.firstName }}</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      portfolios: [],
    };
  },
  methods: {
    getPortfolios: function () {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolios`)
        .then(function (data) {
          this.portfolios = data.body;
        });
    },
  },
  created: function () {
    this.getPortfolios();
  },
};
</script>

<style scoped>
.linkContainer {
  width: 100%;
  height: 100vh;
  display: flex;
}

.nameBox {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  cursor: pointer;

  /* Flexing */
  display: flex;
  justify-content: center;

  /* Animation */
  transition-duration: 500ms;
}
.nameBox:hover {
  width: 120%;
}

.nameBox__name {
  font-size: 144px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: -95px;

  color: black;
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin-top: 30%;
}
</style>
