<template>
  <header class="navbar">
    <nav
      class="bg-shields-primary fixed top-0 w-full z-50 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border-b border-gray-400"
    >
      <TipAlert />
      <div
        class="max-w-screen-xl flex items-center mx-auto py-8 lg:py-4 relative px-4"
      >
        <!-- Left navigation -->
        <ul class="hidden lg:flex space-x-8 flex-1 mr-20 justify-end">
          <NavItem
            v-for="(item, index) in menuItems[0]"
            :key="index"
            :link="item.link"
            :text="item.text"
            :subitems="item.subitems"
            direction="right"
          />
        </ul>

        <!-- Logo -->
        <router-link
          to="/"
          class="absolute left-1/2 transform -translate-x-1/2 top-1 z-10"
        >
          <ShieldsLogo class="h-24" alt="Shields Logo" />
        </router-link>

        <!-- Right navigation -->
        <ul class="hidden lg:flex space-x-8 flex-1 ml-20 justify-start">
          <NavItem
            v-for="(item, index) in menuItems[1]"
            :key="index"
            :link="item.link"
            :text="item.text"
            :subitems="item.subitems"
            direction="left"
          />
        </ul>
      </div>

      <!-- Mobile menu button -->
      <button
        @click="toggleMenu"
        class="lg:hidden absolute right-6 inset-y-0 flex flex-col justify-center items-center space-y-1.5"
      >
        <div
          :class="{
            'transform rotate-45 translate-y-3': isMenuOpen,
            'transform rotate-0': !isMenuOpen,
          }"
          class="w-7 h-1 bg-shields-txt rounded-full transition-transform duration-300 ease-in-out"
        ></div>
        <div
          :class="{
            'opacity-0': isMenuOpen,
            'opacity-100': !isMenuOpen,
          }"
          class="w-7 h-1 bg-shields-txt rounded-full transition-opacity duration-300 ease-in-out"
        ></div>
        <div
          :class="{
            'transform -rotate-45 -translate-y-2': isMenuOpen,
            'transform rotate-0': !isMenuOpen,
          }"
          class="w-7 h-1 bg-shields-txt rounded-full transition-transform duration-300 ease-in-out"
        ></div>
      </button>
    </nav>
  </header>

  <!-- Mobile menu -->
  <transition name="fade">
    <div
      v-if="isMenuOpen"
      class="fixed left-0 w-full bg-shields-primary bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border-b border-gray-400 z-30 top-16"
    >
      <div class="flex flex-col items-center justify-start pt-8 pb-5">
        <ul class="space-y-4 py-4">
          <NavItemMobile
            v-for="(item, index) in menuItems.flat()"
            :key="index"
            :link="item.link"
            :text="item.text"
            :subitems="item.subitems"
            @emit-close-menu="toggleMenu"
          />
        </ul>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ShieldsLogo from "@/assets/icons/shields.svg";
import NavItem from "@/components/Header/NavItem.vue";
import NavItemMobile from "@/components/Header/NavItemMobile.vue";
import TipAlert from "@/components/Header/TipAlert.vue";
import menuItems from "@/assets/data/menuItems.json";

defineOptions({ name: "Header" });

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}
</style>
