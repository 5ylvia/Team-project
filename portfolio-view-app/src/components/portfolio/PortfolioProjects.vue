<template>
  <div class="container">
    <p>{{project.title}}</p>
    <div class="image-container">
      <div v-for="(image, index) in project.images" v-bind:key="index" class="image-box">
        <p>{{ image }}</p>
        <img src alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style socped>
.container {
  background: grey;
  margin-top: 150px;
}

.image-container {
  background: red;
  display: flex;
  justify-content: flex-end;
}

.image-box {
  background: coral;
  height: 250px;
  width: 50%;
  margin-right: 25px;
}
</style>