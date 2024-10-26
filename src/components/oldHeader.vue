<template>
  <div class="bg-gray-900 text-white">
    <nav class="container mx-auto flex items-center justify-between relative">
      <!-- Left Items -->
      <ul class="hidden md:flex space-x-4 justify-start flex-grow">
        <NavItem href="#" text="Boutique" direction="right" />
        <NavItem href="#" text="Team DLS" direction="right" />
        <NavItem href="#" text="Sponsoring" direction="right" />
      </ul>

      <!-- Centered SVG -->
      <div class="flex justify-center relative z-10">
        <a href="https://shields-dls.fr">
          <img
            src="../assets/images/shields.svg"
            class="h-32 w-auto relative top-6"
            alt="Shields Logo"
          />
        </a>
      </div>

      <!-- Right Items -->
      <ul class="hidden md:flex space-x-4 justify-end flex-grow">
        <NavItem href="#" text="Boutique" direction="left" />
        <NavItem href="#" text="Team DLS" direction="left" />
        <NavItem href="#" text="Sponsoring" direction="left" />
      </ul>

      <!-- Burger Menu -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu">
          <LucideMenu class="w-8 h-8" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-800 p-4 space-y-2">
      <a href="#" class="block text-white hover:text-orange-500">Item 1</a>
      <a href="#" class="block text-white hover:text-orange-500">Item 2</a>
      <a href="#" class="block text-white hover:text-orange-500">Item 3</a>
      <a href="#" class="block text-white hover:text-orange-500">Item 4</a>
      <a href="#" class="block text-white hover:text-orange-500">Item 5</a>
      <a href="#" class="block text-white hover:text-orange-500">Item 6</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu as LucideMenu } from "lucide-vue-next";
import NavItem from "./NavItem.vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
