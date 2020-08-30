<template>
  <div>
    <button v-on:click="updateShowModal()" :style="{background: portfolio.color }">
      <p>{{portfolio.name}}</p>
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
  writing-mode: vertical-rl;
  text-orientation: sideways-right;
}

button {
  /* REMOVE DEFAILT */
  appearance: none;
  outline: none;
  border: none;
  background: none;

  /* FEATURES */
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

  /* POSTIONING */
  z-index: 5;
  position: absolute;
  right: 10px;
  top: 47%;
}

button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
</style>
