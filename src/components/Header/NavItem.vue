<template>
  <li>
    <router-link
      :to="link"
      :class="[
        'block py-2 px-3 text-shields-txt rounded md:p-0',
        text === 'Team DLS'
          ? 'md:hover:text-purple-500'
          : 'md:hover:text-orange-400',
        directionClass,
      ]"
    >
      <component
        :is="iconComponent"
        v-if="iconComponent"
        class="icon"
      ></component>
      {{ text }}
    </router-link>
  </li>
</template>

<script>
import {
  HouseIcon,
  PersonStandingIcon,
  ShoppingCartIcon,
} from "lucide-vue-next";

export default {
  name: "NavItem",
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
    direction: {
      type: String,
      default: "left",
    },
  },
  computed: {
    directionClass() {
      return this.direction === "right" ? "hover-right" : "hover-left";
    },
    iconComponent() {
      switch (this.text) {
        case "Accueil":
          return HouseIcon;
        case "Adhérents":
          return PersonStandingIcon;
        case "Boutique":
          return ShoppingCartIcon;
        default:
          return null;
      }
    },
  },
};
</script>

<style scoped>
a {
  font-size: 1.2rem;
  position: relative;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.icon {
  margin-right: 0.5rem;
}

a::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transition: transform 0.15s ease-out;
}

.hover-left::after {
  transform-origin: bottom right;
}

.hover-left:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
  transition: transform 0.25s ease-out;
}

.hover-right::after {
  transform-origin: bottom left;
}

.hover-right:hover::after {
  transform: scaleX(1);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
</style>
