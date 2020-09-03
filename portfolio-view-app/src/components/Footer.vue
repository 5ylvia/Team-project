<template>
  <div>
    <p>Portfolio site</p>
    <p class="admin">Admin area</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
div {
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
}
.admin {
  color: #c8bfba;
  font-size: 0.8rem;
}
</style>
