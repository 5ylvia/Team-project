<template>
  <div>
    <!-- Skills -->
    <section>
      <div class="skil-container">
        <h1 :style="{ color: color }" class="skills">
          {{ user.sources[0] }}
          <br />
          {{ user.sources[1] }}
          <br />
          {{ user.sources[2] }}
        </h1>
      </div>
    </section>

    <!-- Contact Button -->
    <ContactButton v-on:changeModal="showModal = true" />

    <!-- Fade in -->
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>

    <!-- Contact  -->
    <transition name="slide" appear v-if="showModal">
      <ContactTemplate />
    </transition>

    <!-- Name -->
    <h1>{{ user.name }}</h1>

    <!-- ******************************* -->
    <!-- ******************************* -->
    <!-- Project container -->
    <div class="content" v-for="(project, id) in user.projects" v-bind:key="id">
      <!-- generating all the images -->
      <div v-for="(image, index) in project.images" v-bind:key="index + 20">{{ image }}</div>
      <!-- Project Name and link -->
      <router-link
        v-bind:to="{
          name: 'project',
          params: { userId: user.id, project: project },
        }"
      >{{ project.title }}</router-link>
    </div>
    <!-- ******************************* -->
    <!-- ******************************* -->
  </div>
</template>

<script>
import ContactButton from "@/components/contact/ContactButton";
import ContactTemplate from "@/components/contact/ContactTemplate";
export default {
  components: {
    ContactButton,
    ContactTemplate,
  },
  name: "PortfolioTemplate",
  data: function () {
    return {
      showModal: false,
      user: {
        color: "",
        projects: [],
      },
      //   sources: {},
    };
  },
  methods: {
    getPortfolio: function () {
      const id = this.$route.params.userId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}/portfolio/${id}`)
        .then(function (data) {
          this.user = data.body.user;
          //   this.sources = data.body.user.sources;
          this.projects = data.body.user.projects;
          this.color = data.body.user.color;
        });
    },
  },
  watch: {
    // call again the method if the route changes
    $route: "getPortfolio",
  },
  created: function () {
    this.getPortfolio();
  },
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
