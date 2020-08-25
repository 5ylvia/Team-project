<template>
  <div class="modal">
    <div class="modal__profile padding-box">
      <div>
        <h1 class="modal__profile--title">{{user.name}}</h1>
        <h4 class="modal__profile--personal-site">Personal site</h4>
      </div>
      <p class="modal__profile--bio">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Sed accusamus eligendi nam praesentium ratione. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit.
      </p>
    </div>
    <div class="modal__skills padding-box">
      <h3 class="modal--title">SKILLS</h3>
      <ul>
        <li class="modal__skills--list" v-for="skill in user.skills" :key="skill">{{skill}}</li>
      </ul>
    </div>
    <div class="modal__contact padding-box">
      <h3 class="modal--title">CONTACT</h3>
      <ul class="modal__list">
        <li class="modal__skills--list" v-for="contact in user.contact" :key="contact">{{contact}}</li>
      </ul>
    </div>
    <div class="modal_color">
      <button @click="$emit(`changeModal`)">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showModal: false,
      user: {
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

<style >
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 1000px;
  height: 300px;
  background-color: white;
  overflow: hidden;

  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 40px;
}

.padding-box {
  padding: 40px;
}
.modal__profile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.modal__profile--title {
  text-transform: lowercase;
  font-family: "Sail", cursive;
  font-size: 36px;
}
.modal__profile--personal-site {
  font-weight: 400;
  cursor: pointer;
}
.modal__profile--bio {
  margin-top: 20px;
  font-family: "Playfair Display", serif;
}

.modal__skills--list {
  margin: 10px 0px;
}

.modal--title {
  margin: 40px 0px 10px 0px;
}
.modal_color {
  background: red;
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
