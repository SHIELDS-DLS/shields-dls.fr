<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto lg:p-8 p-4">
    <div
      v-for="pack in sortedPacks"
      :key="pack.name"
      id="packItem"
      class="relative bg-shields-secondary shadow-lg w-full overflow-hidden transition-transform duration-300 ease-in-out border border-gray-600"
      :style="{ borderColor: pack.color ? pack.color : '' }"
      style="height: 32rem"
    >
      <!-- Bandeau supérieur -->
      <div
        class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-shields-content z-3 border-b border-gray-600"
      >
        <h2 class="text-xl font-bold text-shields-txt text-center w-full">
          {{ pack.name }}
        </h2>
      </div>

      <!-- Section Prix -->
      <div class="absolute top-16 left-0 right-0 p-4 text-center">
        <p class="text-3xl text-shields-txt font-mono">{{ pack.price }} €</p>
      </div>

      <!-- Section Items -->
      <div
        class="absolute top-28 left-0 right-0 py-10 text-shields-txt overflow-auto"
      >
        <div class="w-full h-full flex justify-center items-center">
          <table>
            <tbody>
              <tr v-for="item in sortedPackItems" :key="item.id" class="my-2">
                <td>
                  <div class="flex justify-center items-center">
                    <LucideCheck
                      v-if="pack.items.includes(item.id)"
                      class="text-green-500 w-7 h-7"
                    />
                    <LucideCheck
                      class="text-yellow-500 w-7 h-7"
                      v-else-if="pack.choice && pack.choice.includes(item.id)"
                    />
                    <LucideX v-else class="text-red-500 w-7 h-7" />
                  </div>
                </td>
                <td class="pl-2 py-3 flex justify-center items-center text-lg">
                  {{ item.name }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Légende Choix -->
      <div
        v-if="pack.choice"
        class="absolute bottom-20 left-0 right-0 text-center"
      >
        <div class="inline-flex items-center pb-5">
          <LucideCheck class="text-yellow-500 w-6 h-6" />
          <span class="ml-1 text-sm text-shields-txt"
            >*Choisir parmi les options</span
          >
        </div>
      </div>

      <!-- Bouton Acheter -->
      <div class="absolute bottom-8 left-0 right-0 text-center">
        <a
          :href="pack.url"
          target="_blank"
          class="inline-block px-6 py-2 bg-orange-500 border border-shields-txt text-shields-txt font-bold rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
        >
          Acheter
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import merchData from "@/assets/data/merchData.json";
import { X as LucideX, Check as LucideCheck } from "lucide-vue-next";

export default {
  name: "Activities",
  components: {
    LucideX,
    LucideCheck,
  },
  data() {
    return {
      packs: [],
      packItems: [],
    };
  },
  computed: {
    sortedPacks() {
      return this.packs.sort((a, b) => a.id - b.id);
    },
    sortedPackItems() {
      return this.packItems.sort((a, b) => a.id - b.id);
    },
  },
  created() {
    this.loadPacks();
    this.loadPackItems();
  },
  methods: {
    loadPacks() {
      this.packs = merchData.packs;
    },
    loadPackItems() {
      this.packItems = merchData.items;
    },
  },
};
</script>

<style lang="css">
#packItem:hover {
  transform: scale(1.03);
}
</style>
