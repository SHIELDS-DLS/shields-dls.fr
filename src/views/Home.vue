<template>
  <div class="mx-auto lg:p-8 p-4">
    <div id="description" class="mb-28">
      <p class="text-xl text-center mb-6">
        <strong>SHIELDS</strong> est une association étudiante de la filière
        Cybersécurité au sein du <strong>Pôle Sup de La Salle</strong>.
      </p>
      <p class="text-xl mb-10">
        Notre mission est de dynamiser le parcours académique des étudiants en
        offrant des activités liées à la cybersécurité, tout en renforçant la
        cohésion au sein des différentes promotions.
      </p>
    </div>

    <div id="activities" class="mb-28">
      <h1 class="text-4xl font-bold text-center mb-10">Activités proposées</h1>
      <p class="text-lg mb-10">
        L'association propose des activités variées tout au long de l'année à
        ses adhérents. Vous trouverez ci-dessous les activités passées et à
        venir :
      </p>
      <Activities />
    </div>

    <div id="team" class="mb-28">
      <h1 class="text-4xl font-bold text-center mb-10">Bureau</h1>
      <p class="text-lg text-center mb-10">
        Pour cette année <strong>2024-2025</strong>, le bureau de l'association
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

    <div id="members" class="mb-28">
      <h1 class="text-4xl font-bold text-center mb-10">Adhérents</h1>
      <p class="text-lg text-center mb-10">
        Tableau des adhérents de l'association SHIELDS pour l'année 2024-2025 :
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div class="bg-shields-secondary p-6 rounded-lg shadow-lg h-32 w-full">
          <p class="text-center">Membre 1</p>
          <p class="text-center">SIO</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import team from "/src/assets/data/team.json";
import Activities from "/src/components/Home/Activities.vue";

export default {
  name: "Home",
  components: {
    Activities,
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
      this.teamMembers = team;
    },
  },
};
</script>
