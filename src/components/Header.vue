<template>
  <header class="navbar">
    <nav
      class="bg-shields-primary fixed top-0 w-full z-20 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border-b border-gray-400"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 relative"
      >
        <!-- Left navigation -->

        <ul class="hidden md:flex space-x-14 justify-start flex-grow">
          <NavItem link="/" text="Accueil" direction="right" />
          <NavItem link="/#members" text="Adhérents" direction="right" />
          <NavItem link="/nos-actions" text="Nos actions" direction="right" />
        </ul>

        <!-- Logo -->
        <router-link
          to="/"
          class="absolute left-1/2 transform -translate-x-1/2 top-1"
        >
          <img
            src="../assets/images/shields.svg"
            class="h-24"
            alt="Shields Logo"
          />
        </router-link>

        <!-- Right navigation -->

        <ul class="hidden md:flex space-x-14 justify-end flex-grow">
          <NavItem
            link="/boutique"
            text="Boutique"
            direction="left"
            icon="ShoppingCartIcon"
          />
          <NavItem link="/team-dls" text="Team DLS" direction="left" />
          <NavItem link="/sponsoring" text="Sponsoring" direction="left" />
        </ul>
      </div>
      <!-- Mobile menu button -->
    </nav>
  </header>
</template>

<script>
import NavItem from "/src/components/Header/NavItem.vue";
import { Menu as LucideMenu, HouseIcon as LucideHouse } from "lucide-vue-next";

export default {
  name: "Header",
  components: {
    NavItem,
    LucideMenu,
    LucideHouse,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
