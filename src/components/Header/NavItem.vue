<template>
  <li
    @mouseover="showSubmenu = true"
    @mouseleave="showSubmenu = false"
    class="relative"
  >
    <component
      :is="isExternal(link) ? 'a' : 'router-link'"
      :to="!isExternal(link) ? link : null"
      :href="isExternal(link) ? link : null"
      :target="isExternal(link) ? '_blank' : null"
      :class="[
        'block py-2 px-3 text-shields-txt rounded md:p-0',
        text === 'Compétitions'
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
    </component>

    <!-- Sous-menu, visible au survol -->
    <transition name="fade">
      <ul
        v-if="subitems && subitems.length"
        v-show="showSubmenu"
        class="absolute left-0 w-48 mt-2 bg-shields-secondary shadow-lg border rounded z-10"
      >
        <li
          v-for="(subitem, index) in subitems"
          :key="index"
          class="block hover:bg-shields-content"
        >
          <component
            :is="isExternal(subitem.link) ? 'a' : 'router-link'"
            :to="!isExternal(subitem.link) ? subitem.link : null"
            :href="isExternal(subitem.link) ? subitem.link : null"
            :target="isExternal(subitem.link) ? '_blank' : null"
            class="block py-2 px-4 text-shields-txt"
            :class="
              text === 'Compétitions'
                ? 'md:hover:text-purple-500'
                : 'md:hover:text-orange-400'
            "
          >
            {{ subitem.text }}
          </component>
        </li>
      </ul>
    </transition>
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
  components: {
    HouseIcon,
    PersonStandingIcon,
    ShoppingCartIcon,
  },
  props: {
    link: {
      type: String,
      required: true,
      default: "",
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
    subitems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showSubmenu: false,
    };
  },
  methods: {
    isExternal(link) {
      return link.startsWith("http");
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
  font-size: 1.1rem;
  position: relative;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
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

/* Styles pour le sous-menu */
ul {
  transition: opacity 0.2s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
