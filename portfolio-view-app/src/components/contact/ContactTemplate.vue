<template>
  <div class="modal">
    <h1>hello</h1>
    <h2>{{user.name}}</h2>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showModal: false,
      user: {
        color: "",
        projects: [],
      },
    };
  },
  methods: {
    getPortfolio: function () {
      const id = this.$route.params.userId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolio/${id}`)
        .then(function (data) {
          this.user = data.body.user;
          this.projects = data.body.user.projects;
          this.color = data.body.user.color;
        });
    },
  },
  watch: {
    $route: "getPortfolio",
  },
  created: function () {
    this.getPortfolio();
  },
};
</script>

<style>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 700px;
  height: 300px;
  background-color: white;
  overflow: hidden;
  border: 1px solid black;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
