<template>
  <div id="competitions" class="mb-20 pb-20">
    <h1 class="text-4xl font-bold text-center mb-10">Compétitions</h1>
    <p class="text-lg text-center mb-10">
      Voici les différentes compétitions auxquelles la
      <strong>Team DLS</strong> a participé ou participera :
    </p>
    <Competitions />
  </div>
</template>

<script>
import Competitions from "/src/components/TeamDls/Competitions.vue";

export default {
  name: "Ctfs",
  components: {
    Competitions,
  },
};
</script>
