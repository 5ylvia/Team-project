<template>
  <div class="modal">
    <div class="modal__profile padding-box">
      <div>
        <h1 class="modal__profile--title" :style="portfolio">{{portfolio.name}}</h1>
        <h4 class="modal__profile--personal-site">
          Personal site
          <i :style="portfolio" class="fas fa-external-link-alt"></i>
        </h4>
      </div>
      <p class="modal__profile--bio">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Sed accusamus eligendi nam praesentium ratione. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit.
      </p>
    </div>
    <div class="modal__skills padding-box">
      <h3 class="modal--title">SKILLS</h3>
      <ul class="modal__skills--ul">
        <li class="modal__skills--list" v-for="skill in portfolio.skills" :key="skill">{{skill}}</li>
      </ul>
    </div>
    <div class="modal__contact padding-box">
      <h3 class="modal--title">CONTACT</h3>
      <div class="modal__social-media">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin"></i>
      </div>
      <ul class="modal__list">
        <li
          class="modal__contact--list"
          v-for="contact in portfolio.contact"
          :key="contact"
        >{{contact}}</li>
      </ul>
    </div>
    <div class="modal_color" :style="{background: portfolio.color }">
      <button @click="$emit(`changeModal`)">
        <i class="far fa-arrow-alt-circle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["portfolio"],
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
  border-radius: 5px;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 40px;
}
.modal__social-media {
  margin: 20px 0px;
}

.modal__social-media i {
  font-size: 35px;
  margin-right: 40px;
}
.modal__social-media i:hover {
  cursor: pointer;
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
.modal__skills--ul {
  margin-top: 25px;
}
.modal--title {
  margin: 40px 0px 10px 0px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
button i {
  font-size: 25px;
  color: white;
}

button {
  margin-top: 10px;
  appearance: none;
  outline: none;
  border: none;
  background: none;

  width: 100%;
  cursor: pointer;
}
</style>
