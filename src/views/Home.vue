<template>
  <div id="head-title" class="mb-14">
    <h1 class="text-4xl text-center text-shields-txt mb-4">
      Bienvenue sur le site de l'association SHIELDS
    </h1>
  </div>
  <Posts />
  <AdhesionPing />
</template>

<script>
import Posts from "../components/Home/Posts.vue";
import AdhesionPing from "../components/Home/AdhesionPing.vue";

export default {
  name: "Home",
  components: {
    Posts,
    AdhesionPing,
  },
};
</script>
