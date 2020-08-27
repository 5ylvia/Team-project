<template>
  <div>
    <button v-on:click="updateShowModal()">contact</button>
  </div>
</template>

<script>
export default {
  name: "ContactButton",
  methods: {
    updateShowModal() {
      this.$emit("changeModal");
    },
  },
};
</script>

<style scoped>
/* button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: inline;
  padding: 25px;
  border-radius: 50px;
  background-color: red;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
} */
</style>
