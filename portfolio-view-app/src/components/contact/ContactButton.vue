<template>
  <div>
    <button
      id="contact-btn"
      v-on:click="updateShowModal()"
      :style="{ background: portfolio.color }"
    >
      <p
        id="contact-name"
        :style="portfolio"
      >{{ portfolio.firstName }} {{ portfolio.lastName }}, Make Contact</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "ContactButton",
  props: ["portfolio"],
  methods: {
    updateShowModal() {
      this.$emit("changeModal");
    },
  },
};
</script>

<style>
#contact-name {
  transform: rotate(270deg);
  text-align: left;
  width: 300px;
  z-index: 5;
  position: absolute;
  right: -150px;
  top: -160px;
}

#contact-btn {
  /* REMOVE DEFAILT */
  appearance: none;
  outline: none;
  border: none;
  background: none;

  /* FEATURES */
  width: 70px;
  height: 70px;
  border: 5px solid white;
  border-radius: 50px;
  box-shadow: 0px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

  /* POSTIONING */
  z-index: 10;
  position: fixed;
  right: 40px;
  top: 45%;
}

#contact-btn:hover {
  box-shadow: 0px 4px rgba(0, 0, 0, 0.6);
}

@media screen and (max-width: 1000px) {
  #contact-name {
    display: none;
  }
}
</style>
