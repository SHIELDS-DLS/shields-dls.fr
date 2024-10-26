<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div
      v-for="competition in sortedCompetitions"
      :key="competition.name"
      id="competitionItem"
      @click="
        competition.teams && competition.teams.length > 0
          ? showCompetitionInfos(competition.teams)
          : null
      "
      :class="{
        'cursor-pointer': competition.teams && competition.teams.length > 0,
      }"
      class="relative bg-shields-secondary rounded-lg shadow-lg h-96 w-full overflow-hidden transition-transform duration-300 ease-in-out border border-gray-600"
    >
      <!-- Bandeau supérieur -->
      <div
        class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-shields-content z-2 border-b border-gray-600 rounded-t-lg"
      >
        <h2 class="text-lg font-bold text-white">{{ competition.name }}</h2>
        <div class="flex items-center space-x-2">
          <LucideCalendar class="w-5 h-5 text-shields-txt-secondary" />
          <p
            :class="{
              'text-violet-500': getDaysLeft(competition.date) === 0,
              'text-green-400': getDaysLeft(competition.date) !== 0,
            }"
          >
            {{
              getDaysLeft(competition.date) === 0
                ? new Date(competition.date).toLocaleDateString("fr-FR")
                : getDaysLeft(competition.date) === 1
                ? "dans 1 jour"
                : `dans ${getDaysLeft(competition.date)} jours`
            }}
          </p>
        </div>
      </div>

      <div class="absolute top-16 left-0 right-0 bottom-0 flex flex-col">
        <div class="flex-1 flex items-center justify-center py-5">
          <img
            v-if="competition.image"
            :src="'/src/assets/images/competitions/' + competition.image"
            alt="Preview Image"
            class="max-w-36 max-h-32"
          />
          <div v-else class="w-32 h-32 bg-shields-secondary"></div>
        </div>
        <div class="flex-1 flex py-5">
          <p class="text-white text-sm px-4">
            {{ competition.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="isCompetitionInfosOpen"
    class="fixed inset-0 z-4 bg-black bg-opacity-75 flex justify-center items-center p-4"
    @click.self="closeCompetitionInfos"
  >
    <div
      class="bg-shields-content p-10 shadow-2xl w-full max-w-4xl h-3/5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <div
        v-for="team in currentTeams"
        :key="team.name"
        class="bg-shields-secondary p-6 rounded-lg shadow-md border border-gray-600"
      >
        <h2
          class="text-xl font-bold text-white text-center mb-4 border-b border-violet-500 pb-2"
        >
          {{ team.name }}
        </h2>
        <div id="members">
          <p
            v-for="member in team.members"
            :key="member"
            class="text-md font-medium text-white py-2"
          >
            {{ member }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import competitions from "/src/assets/data/competitions.json";
import { getDaysLeft } from "/src/utils/dateUtils";
import { Calendar as LucideCalendar } from "lucide-vue-next";

export default {
  name: "Activities",
  components: {
    LucideCalendar,
  },
  data() {
    return {
      competitions: [],
      isCompetitionInfosOpen: false,
      currentTeams: [],
    };
  },
  computed: {
    sortedCompetitions() {
      return this.competitions.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
  },
  created() {
    this.loadCompetitions();
  },
  methods: {
    loadCompetitions() {
      this.competitions = competitions;
    },
    getDaysLeft,
    showCompetitionInfos(teams) {
      this.currentTeams = teams;
      this.isCompetitionInfosOpen = true;
    },
    closeCompetitionInfos() {
      this.isCompetitionInfosOpen = false;
    },
  },
};
</script>

<style lang="css">
#competitionItem:hover {
  transform: scale(1.03);

  border-color: grey;
}
</style>
