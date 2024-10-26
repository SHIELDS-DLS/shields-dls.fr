<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <div id="background">
    <div
      id="content"
      class="mt-48 max-w-screen-xl mx-auto min-h-screen px-4 sm:px-6 md:px-8"
    >
      <RouterView />
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
