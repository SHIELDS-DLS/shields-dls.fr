<template>
  <div class="mx-auto lg:p-8 p-4">
    <div id="description" class="mb-20">
      <img
        src="/src/assets/images/team_dls.png"
        alt="Team DLS Logo"
        class="h-44 mx-auto mb-8"
      />
      <p class="text-xl text-center">
        Au sein de <strong>SHIELDS</strong>, la <strong>Team DLS</strong> est
        composée d'étudiants passionnés de cybersécurité. Ils sont spécialisés
        dans les <strong>CTF</strong> (Capture The Flag), qui sont des
        compétitions où l'ingéniosité et la logique sont mises à l'épreuve. Ces
        étudiants sont les porteurs de l'étendard de la filière Cybersécurité.
      </p>
    </div>

    <div id="competitions" class="mb-28">
      <h1 class="text-4xl font-bold text-center mb-10">Compétitions</h1>
      <p class="text-lg text-center mb-10">
        Voici les compétitions auxquelles la Team DLS a participé ou participera
        :
      </p>
      <Competitions />
    </div>
  </div>
</template>

<script>
import Competitions from "/src/components/TeamDls/Competitions.vue";

export default {
  name: "TeamDls",
  components: {
    Competitions,
  },
};
</script>
