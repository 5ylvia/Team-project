<template>
  <div>
    <button v-on:click="updateShowModal()" :style="{background: portfolio.color }">
      <p :style="portfolio">{{portfolio.name}}, Make Contact</p>
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

<style scoped>
p {
  transform: rotate(270deg);
  text-align: left;
  width: 300px;
  z-index: 5;
  position: absolute;
  right: -150px;
  top: -160px;
}

button {
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
  z-index: 5;
  position: absolute;
  right: 80px;
  top: 45%;
}

button:hover {
  box-shadow: 0px 4px rgba(0, 0, 0, 0.6);
}
</style>
