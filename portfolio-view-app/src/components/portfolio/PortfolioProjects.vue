<template>
  <div class="container">
    <h1 class="project-title">{{project.title}}</h1>
    <div class="image-container">
      <div
        v-for="(image, index) in project.images"
        v-bind:key="index"
        class="image-box"
        v-prlx="{speed: 1.2,reverse: true,direction: 'x',fromBottom: true}"
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

<style scoped>
.container {
  width: 100%;
  position: relative;
  margin-bottom: 100px;
}

.project-title {
  z-index: 5;
  position: absolute;
  right: 10px;
  bottom: -27px;
  text-align: left;
  font-size: 100px;
  font-family: "Sail", cursive;
  text-transform: lowercase;
  color: white;
}

.image-container {
  display: flex;
  justify-content: flex-end;
  transform: translateX(550px);
  cursor: pointer;
}

.image-box {
  background: #bdbdbd;
  height: 400px;
  width: 750px;
  margin-right: 50px;
}
</style>

