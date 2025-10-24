<template>
  <div id="members" class="mb-20">
    <h1 class="text-4xl font-bold text-center mb-10">Membres</h1>
    <p class="text-lg text-center mb-4">
      Tableau des membres de l'association SHIELDS pour l'année 2025-2026
    </p>

    <!-- Nombre d'adhérents -->
    <div v-if="!loading && !error" class="text-center mb-10">
      <h2 class="text-lg font-medium text-gray-500">
        Adhérents: <strong>{{ members.length }}</strong>
      </h2>
    </div>

    <!-- État de chargement -->
    <div v-if="loading" class="text-center py-10">
      <p class="text-lg">Chargement des membres...</p>
    </div>

    <!-- Gestion d'erreur -->
    <div v-else-if="error" class="text-center py-10">
      <p class="text-red-500 text-lg mb-4">
        Erreur lors du chargement des membres
      </p>
      <p class="text-sm text-gray-600 mb-4">{{ error }}</p>
      <button
        @click="fetchMembers"
        class="bg-shields-primary text-white px-4 py-2 rounded hover:bg-shields-primary/80"
      >
        Réessayer
      </button>
    </div>

    <!-- Liste des membres -->
    <div v-else>
      <div
        class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="member in members"
          :key="member.id"
          class="bg-shields-secondary p-6 rounded-lg shadow-lg h-28 w-full"
        >
          <p class="text-center text-xl font-bold">
            {{ member.name }}
          </p>
          <p class="text-center text-shields-txt-secondary mt-4">
            {{ member.membershipType }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Members",
  data() {
    return {
      members: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    await this.fetchMembers();
  },
  methods: {
    async fetchMembers() {
      this.loading = true;
      this.error = null;

      try {
        // Appel au microservice au lieu de l'API HelloAsso directement
        const apiUrl = import.meta.env.BACKEND_URL || "/api";
        const response = await fetch(`${apiUrl}/members`);

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();

        if (data.members) {
          this.members = data.members;
        } else {
          throw new Error("Aucune donnée de membres reçue");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des membres:", error);
        this.error = error.message;
        this.members = [];
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
