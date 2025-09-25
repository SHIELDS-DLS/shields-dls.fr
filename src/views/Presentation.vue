<template>
  <div id="description" class="mb-20">
    <h1 class="text-4xl font-bold text-center mb-10">Présentation</h1>
    <p class="text-xl mb-6">
      <strong>SHIELDS</strong> est une association étudiante dédiée à la filière
      Cybersécurité au sein du <strong>Pôle Sup de La Salle</strong>.
    </p>
    <p class="text-xl mb-10">
      Notre objectif principal est de dynamiser le parcours académique des
      étudiants tout en favorisant une forte cohésion entre les différentes
      promotions.
    </p>
  </div>
  <div id="goal" class="mb-20">
    <h1 class="text-3xl font-bold text-center mb-10">Notre objectif ?</h1>
    <p class="text-lg lg:text-justify mb-10">
      <u>Dynamiser l'expérience académique :</u> Nous proposons une variété
      d'activités enrichissantes, qu'elles soient directement liées à la
      cybersécurité ou non. Ces initiatives permettent à nos membres de
      développer leurs compétences, d’explorer de nouveaux domaines et de
      s’épanouir personnellement et professionnellement.
    </p>
    <p class="text-lg lg:text-justify mb-10">
      <u>Renforcer les liens inter-promotion :</u> Nous facilitons les
      interactions entre les différentes promotions de notre filière, notamment
      le Mastère en Sécurité Informatique (MSI), le Bachelor en Sécurité
      Informatique (BSI) et le BTS Services Informatiques aux Organisations
      (SIO). Cela favorise un esprit d'entraide et de partage d'expérience.
    </p>
  </div>
  <AdhesionPing />
  <div id="team" class="mb-28 pb-20">
    <h1 class="text-3xl font-bold text-center mb-10">Bureau</h1>
    <p class="text-lg text-center mb-10">
      Pour cette année <strong>2025-2026</strong>, le bureau de l'association
      SHIELDS est composé de :
    </p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mx-28 justify-items-center"
    >
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="bg-shields-secondary p-8 rounded-lg shadow-lg w-full flex flex-col items-center justify-center text-center"
      >
        <h2 class="text-3xl font-bold mb-4 text-white">{{ member.name }}</h2>
        <p class="text-xl text-white">{{ member.role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import AdhesionPing from "@/components/Home/AdhesionPing.vue";
import teamData from "@/assets/data/team.json";

export default {
  name: "Presentation",
  components: {
    AdhesionPing,
  },
  data() {
    return {
      teamMembers: [],
    };
  },
  created() {
    this.loadTeamMembers();
  },
  methods: {
    loadTeamMembers() {
      this.teamMembers = teamData;
    },
  },
};
</script>
