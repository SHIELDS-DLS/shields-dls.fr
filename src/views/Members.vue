<template>
  <div id="members" class="mb-20">
    <h1 class="text-4xl font-bold text-center mb-10">Adhérents</h1>
    <p class="text-lg text-center mb-10">
      Tableau des adhérents de l'association SHIELDS pour l'année 2024-2025 :
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div
        v-for="member in members"
        :key="member.id"
        class="bg-shields-secondary p-6 rounded-lg shadow-lg h-28 w-full"
      >
        <p class="text-center text-xl font-bold">
          {{ member.items[0].customFields[0].answer }}
        </p>
        <p class="text-center text-shields-txt-secondary mt-4">
          {{ member.items[0].name.replace(/^Adhésion /, "") }}
        </p>
      </div>
    </div>
    <div class="text-center mt-10">
      <h2 class="text-xl font-semibold">
        Nombre d'adhérents: <strong>{{ members.length }}</strong>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Members",
  data() {
    return {
      members: [],
      accessToken: null,
    };
  },
  async created() {
    await this.fetchAccessToken();
    this.fetchMembers();
  },
  methods: {
    async fetchAccessToken() {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: import.meta.env.VITE_HELLOASSO_CLIENT_ID,
          client_secret: import.meta.env.VITE_HELLOASSO_CLIENT_SECRET,
        }),
      };

      try {
        const response = await fetch(
          "https://api.helloasso.com/oauth2/token",
          options
        );
        const data = await response.json();
        this.accessToken = data.access_token;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du token d'accès:",
          error
        );
      }
    },
    async fetchMembers() {
      if (!this.accessToken) {
        console.error("Token d'accès non disponible");
        return;
      }

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      };

      try {
        const response = await fetch(
          "https://api.helloasso.com/v5/organizations/shields/forms/Membership/adhesion-shields-2025/orders?pageIndex=1&pageSize=40&withDetails=true",
          options
        );
        const data = await response.json();

        this.members = data.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des membres:", error);
      }
    },
  },
};
</script>
