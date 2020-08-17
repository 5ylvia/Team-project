<template>
  <header>
    <h3></h3>
    <router-link v-bind:to="'/'"></router-link>
    <router-link v-bind:to="'/about'">About</router-link>
    <!-- <router-link v-bind:to="{ name:'details' }">About</router-link> -->
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
