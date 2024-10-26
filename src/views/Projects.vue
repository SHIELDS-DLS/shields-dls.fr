<template>
  <div id="events" class="mb-20 pb-20">
    <h1 class="text-4xl font-bold text-center mb-10">Projets Étudiants</h1>
    <p class="text-lg mb-10">
      Les étudiants de la filière sont amenés à conduire un projet tout au long
      de l'année. En voici quelques uns :
    </p>
    <StudentProjects />
  </div>
</template>

<script>
import StudentProjects from "../components/Projects/StudentProjects.vue";

export default {
  name: "Projects",
  components: {
    StudentProjects,
  },
};
</script>
