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
      class="block text-shields-txt font-bold text-xl text-center"
      @click="emitCloseMenu"
    >
      {{ text }}
    </component>
    <ul v-if="subitems && subitems.length" class="pl-4">
      <li v-for="(subitem, index) in subitems" :key="index">
        <component
          :is="isExternal(subitem.link) ? 'a' : 'router-link'"
          :to="!isExternal(subitem.link) ? subitem.link : null"
          :href="isExternal(subitem.link) ? subitem.link : null"
          :target="isExternal(subitem.link) ? '_blank' : null"
          class="block text-shields-txt-secondary hover:text-orange-400"
          @click="emitCloseMenu"
        >
          - {{ subitem.text }}
        </component>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "NavItemMobile",
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
    subitems: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    isExternal(link) {
      return link.startsWith("http");
    },
    emitCloseMenu() {
      this.$emit("emit-close-menu");
    },
  },
};
</script>
