<template>
  <div>
    <!-- <h2>side bar</h2>
    <div v-for="(project, index) in projects" :key="index">
      <router-link
        :to="{
          name: 'project',
          params: {
            portfolioId: portfolio._id,
            projectId: project._id,
          },
        }"
      >
        <img :src="project.images[0]" alt />
      </router-link>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "ProjectSidebar",
  // props: ["project", "portfolio"],
};
</script>

<style>
</style>