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
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>

    <!-- Contact  -->
    <transition name="slide" appear v-if="showModal">
      <ContactTemplate
        :portfolio="portfolio"
        v-on:changeModal="showModal = false"
      />
    </transition>

    <!-- Project container -->

    <div
      class="content"
      v-for="(project, index) in portfolio.projects"
      v-bind:key="index"
    >
      <PortfolioProjects
        v-if="index % 2 == 0"
        :project="project"
        :portfolio="portfolio"
      />

      <PortfolioProjectsOdds v-else :project="project" :portfolio="portfolio" />
    </div>
  </div>
</template>

<script>
import ContactButton from "@/components/contact/ContactButton";
import ContactTemplate from "@/components/contact/ContactTemplate";
import PortfolioProjects from "./PortfolioProjects";

import PortfolioProjectsOdds from "./PortfolioProjectsOdds";

export default {
  components: {
    ContactButton,
    ContactTemplate,
    PortfolioProjects,

    PortfolioProjectsOdds
  },
  name: "PortfolioTemplate",
  //test
  data: function() {
    return {
      showModal: false,
      portfolio: {
        projects: [],
      },

    };
  },
  methods: {
    currentPortfolio: function() {
      const id = this.$route.params.portfolioId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolios/${id}`)
        .then(function(data) {
          this.portfolio = data.body;
        });
      this.getProjects();

    },
    getProjects: function() {
      const id = this.$route.params.portfolioId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolios/${id}/projects`)
        .then(function(data) {
          this.portfolio.projects = data.body;
        });
    }
  },
  watch: {
    $route: "currentPortfolio"
  },
  created: function() {
    this.currentPortfolio();
  }
};
</script>

<style>
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
