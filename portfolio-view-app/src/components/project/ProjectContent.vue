<template>
  <div>
    <div>
      <img class="media-img" :src="project.images[i]" />
    </div>
    <p class="media-text">{{project.description[i]}}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectContent",
  props: {
    project: {
      description: Object,
      images: Object,
    },
    i: String,
  },
};
</script>

<style>
.media-img {
  width: 100%;
  padding: 0 80px;
  display: flex;

  align-items: center;
}
.media-text {
  width: 80%;
  display: flex;
  align-items: center;
  line-height: 2rem;
  margin: 40px 80px 80px;
  text-align: left;
}
</style>