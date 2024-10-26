<template>
  <transition name="slide-up">
    <div
      v-if="isTipAlertVisibleOnScroll"
      :style="alertStyle"
      class="bg-orange-500 text-white text-center text-lg py-1 hidden lg:block relative"
    >
      <span>Vous souhaitez nous soutenir? &rarr; </span>
      <a
        href="https://www.helloasso.com/associations/shields/formulaires/1"
        class="underline hover:text-shields-txt"
        target="_blank"
        rel="noopener noreferrer"
      >
        Faites un don
      </a>
      <button
        @click="closeTipAlert"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-shields-txt text-2xl"
      >
        &times;
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TipAlert",
  data() {
    return {
      isTipAlertVisibleOnScroll: true,
      isClosingManually: false, // Nouveau flag
      scrollOffset: 0,
      maxScrollDistance: 100,
    };
  },
  computed: {
    alertStyle() {
      const translateY = Math.min(this.scrollOffset, this.maxScrollDistance);
      const opacity = 1 - translateY / this.maxScrollDistance;
      const height = 50 - (translateY / this.maxScrollDistance) * 50;
      const padding = 10 - (translateY / this.maxScrollDistance) * 10;
      return {
        transform: `translateY(-${translateY}px)`,
        opacity: opacity,
        height: `${height}px`,
        padding: `${padding}px 0`,
      };
    },
    transitionName() {
      return this.isClosingManually ? "" : "slide-up";
    },
  },
  methods: {
    closeTipAlert() {
      this.isClosingManually = true;
      this.isTipAlertVisibleOnScroll = false;
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition < this.maxScrollDistance) {
        this.scrollOffset = scrollPosition;
      } else {
        this.scrollOffset = this.maxScrollDistance;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
