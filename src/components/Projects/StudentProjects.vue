<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div
      v-for="project in projects"
      :key="project.name"
      id="projectItem"
      class="relative bg-shields-secondary rounded-lg shadow-lg h-[38rem] w-full overflow-hidden transition-transform duration-300 ease-in-out border border-gray-600"
    >
      <!-- Bandeau supérieur -->
      <div
        class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-shields-content z-2 border-b border-gray-600 rounded-t-lg"
      >
        <h2 class="text-xl font-bold text-white">{{ project.name }}</h2>
        <div class="flex items-center space-x-2">
          <LucideCalendar class="w-5 h-5 text-shields-txt-secondary" />
          <p class="text-orange-400">{{ project.year }}</p>
        </div>
      </div>

      <!-- Contenu principal -->
      <div class="absolute top-24 left-0 right-0 bottom-28 flex flex-col p-4">
        <div class="flex-1 flex items-center justify-center max-h-48">
          <img
            v-if="project.image"
            :src="'/src/assets/images/projects/' + project.image"
            alt="Preview Image"
            class="max-w-32 max-h-32"
          />
          <div v-else class="w-32 h-32 bg-shields-secondary"></div>
        </div>
        <div class="flex-1 flex flex-col justify-center mt-4">
          <ul class="text-white text-center">
            <li
              v-for="(member, index) in project.members"
              :key="index"
              class="text-white text-xl inline-block mx-3"
            >
              {{ member }}
            </li>
          </ul>
          <p class="text-white text-center text-lg mt-2">{{ project.promo }}</p>
        </div>
        <div class="flex-1 border-y border-gray-600 my-4">
          <div class="overflow-auto h-40 p-4">
            <p class="text-white">{{ project.description }}</p>
          </div>
        </div>
      </div>

      <!-- Bannière inférieure -->
      <div
        class="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-shields-content border-t border-gray-600 rounded-b-lg"
      >
        <div class="flex justify-center min-h-8">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:opacity-75"
          >
            <GithubIcon class="h-8 w-8 mx-4 fill-shields-txt" />
          </a>
          <a
            v-if="project.linkedin"
            :href="project.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:opacity-75"
          >
            <LinkedInIcon class="h-8 w-8 mx-4 fill-shields-txt" />
          </a>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:opacity-75 flex items-center justify-center"
          >
            <LucideExternalUrl class="h-6 w-8 mx-4 text-shields-txt" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectsData from "/src/assets/data/projects.json";
import {
  Calendar as LucideCalendar,
  SquareArrowOutUpRight as LucideExternalUrl,
} from "lucide-vue-next";
import LinkedInIcon from "/src/assets/images/icons/linkedin.svg";
import GithubIcon from "/src/assets/images/icons/github.svg";

export default {
  name: "StudentProjects",
  components: {
    LucideCalendar,
    LucideExternalUrl,
    LinkedInIcon,
    GithubIcon,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.loadprojects();
  },
  methods: {
    loadprojects() {
      this.projects = projectsData;
    },
  },
};
</script>

<style lang="css">
#projectItem:hover {
  transform: scale(1.03);
  border-color: grey;
}
</style>
