<template>
  <div>
    <!-- Skills -->
    <section>
      <div class="skil-container">
        <h1 class="skills" :style="portfolio">
          {{ portfolio.sources[0] }}
          <br />
          {{ portfolio.sources[1] }}
          <br />
          {{ portfolio.sources[2] }}
        </h1>
      </div>
    </section>

    <!-- Contact Button -->
    <ContactButton :portfolio="portfolio" v-on:changeModal="showModal = true" />

    <!-- Fade in -->
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>

    <!-- Contact  -->
    <transition name="slide" appear v-if="showModal">
      <ContactTemplate :portfolio="portfolio" v-on:changeModal="showModal = false" />
    </transition>

    <!-- Name -->
    <h1>{{ portfolio.name }}</h1>

    <!-- ******************************* -->
    <!-- ******************************* -->
    <!-- Project container -->
    <div class="content" v-for="(project, id) in portfolio.projects" v-bind:key="id">
      <PortfolioProjects :project="project" />
    </div>

    <!-- <div v-for="(image, index) in project.images" v-bind:key="index + 20">{{ image }}</div> -->
    <!-- Project Name and link -->
    <!-- <router-link
        v-bind:to="{
          name: 'project',
          params: { portfolioId: portfolio.id, projectId: project.id },
        }"
      >{{ project.title }}</router-link>
    </div>-->
    <!-- ******************************* -->
    <!-- ******************************* -->
  </div>
</template>

<script>
import ContactButton from "@/components/contact/ContactButton";
import ContactTemplate from "@/components/contact/ContactTemplate";
import PortfolioProjects from "./PortfolioProjects";

export default {
  components: {
    ContactButton,
    ContactTemplate,
    PortfolioProjects,
  },
  name: "PortfolioTemplate",
  //test
  data: function () {
    return {
      showModal: false,
      portfolio: {
        projects: [],
        sources: [],
      },
    };
  },
  methods: {
    currentPortfolio: function () {
      const id = this.$route.params.portfolioId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolio/${id}`)
        .then(function (data) {
          this.portfolio = data.body.portfolio;
          this.projects = data.body.portfolio.projects;
          this.sources = data.body.portfolio.sources;
        });
    },
  },
  watch: {
    $route: "currentPortfolio",
  },
  created: function () {
    this.currentPortfolio();
  },
};
</script>

<style >
.skil-container {
  width: 675px;
  margin: 200px 80px 80px 80px;
}
.skills {
  font-size: 3rem;
  text-align: left;
  font-family: "Playfair Display", serif;
  font-size: 75px;
  text-transform: uppercase;
  line-height: 0.7;
  padding-left: 20px;
  padding-bottom: 10px;
  border-left: 5px solid;
}
.content {
  height: 200px;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
