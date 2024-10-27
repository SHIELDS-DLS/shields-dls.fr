<template>
  <div id="events" class="mb-20 pb-20">
    <h1 class="text-4xl font-bold text-center mb-10">Évenements</h1>
    <p class="text-lg lg:text-justify mb-10">
      L'association organise régulièrement des soirées de cohésion thématiques
      visant à créer des liens tout en s’amusant. Nous proposons aussi parfois
      diverses activités sportives pour changer de cadre, mais aussi pour
      entretenir l'esprit d’équipe. En parallèle, nos compétitions de Capture
      The Flag (CTF) permettent à chacun de se challenger et d'améliorer ses
      compétences en cybersécurité. Enfin, nos événements dédiés à la cyber,
      tels que des conférences et des ateliers, sont des occasions privilégiées
      permettant d'approfondir nos connaissances et d'échanger entre passionnés.
    </p>
    <EventsGrid />
  </div>
</template>

<script>
import EventsGrid from "../components/Events/EventsGrid.vue";

export default {
  name: "Events",
  components: {
    EventsGrid,
  },
};
</script>
