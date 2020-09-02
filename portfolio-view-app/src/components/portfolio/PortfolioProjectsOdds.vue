<template>
  <router-link
    :to="{
      name: 'project',
      params: {
        portfolioId: portfolio.id,
        projectId: project.id,
      },
    }"
    @click="getProject"
  >
    <div class="odds-container">
      <h1 class="odds-project-title">{{ project.title }}</h1>
      <div class="odds-image-container">
        <div
          v-for="(image, index) in project.images"
          v-bind:key="index"
          class="odds-image-box"
          v-prlx="{
            speed: 1.2,
            reverse: false,
            direction: 'x',
            fromBottom: true,
          }"
        >
          <img :src="image" alt />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: Object,
    portfolio: Object,
  },
};
</script>

<style scoped>
.odds-container {
  width: 100%;
  position: relative;
  margin-bottom: 200px;
}

.odds-project-title {
  z-index: 5;
  position: absolute;
  right: 10px;
  bottom: -30px;
  text-align: right;
  font-size: 10rem;
  font-family: "Sail", cursive;
  text-transform: lowercase;
  color: white;
}

.odds-image-container {
  display: flex;
  justify-content: flex-start;
  transform: translateX(-550px);
  cursor: pointer;
}

.odds-image-box {
  height: 400px;
  width: 75%;
  margin-right: 50px;
}
img {
  width: 600px;
  margin-right: 10px;
}
</style>
