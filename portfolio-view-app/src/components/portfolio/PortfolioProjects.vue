<template>
  <div class="container">
    <h1 class="project-title">{{project.title}}</h1>
    <div class="image-container">
      <div
        v-for="(image, index) in project.images"
        v-bind:key="index"
        class="image-box"
        v-prlx="{speed: 1,reverse: true,direction: 'x',fromBottom: true}"
      >
        <router-link
          :to="{
            name: 'project',
          params: { portfolioId: portfolio.id, projectId: project.id },
          }"
        >
          <p>{{ image }}</p>
          <img src alt />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project", "portfolio"]
};
</script>

<style>
.container {
  position: relative;
  margin-bottom: 100px;
}

.project-title {
  z-index: 5;
  position: absolute;
  right: 10px;
  bottom: -27px;
  text-align: right;
  font-size: 100px;
  font-family: "Sail", cursive;
  text-transform: lowercase;
  color: white;
}

.image-container {
  display: flex;
  justify-content: flex-end;
  transform: translateX(250px);
  cursor: pointer;
}

.image-box {
  background: coral;
  height: 300px;
  width: 750px;
  margin-right: 50px;
}
</style>