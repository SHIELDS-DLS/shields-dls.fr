<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <div id="background">
    <div
      id="content"
      class="mt-32 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
    >
      <RouterView />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
html {
  @apply bg-shields-content text-shields-txt;
}
</style>
