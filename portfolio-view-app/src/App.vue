<template>
  <div id="app">
    <my-header class="nav" v-if="this.$route.path !== '/'"></my-header>
    <router-view></router-view>
    <my-footer v-if="this.$route.path == '/'"></my-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    "my-header": Header,
    "my-footer": Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100%;
}
body {
  overflow-x: hidden;
}
a {
  text-decoration: none;
}
a:active {
  color: none;
}
a:visited {
  text-decoration: none;
}

li {
  list-style-type: none;
}
</style>
