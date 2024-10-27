<template>
  <footer
    class="flex flex-col items-center text-center text-surface bg-shields-primary border-t border-gray-400"
  >
    <div class="container pt-9">
      <!-- Social media icons container -->
      <div class="mb-2 flex justify-center space-x-2">
        <a
          href="https://www.instagram.com/dls_shields/"
          target="_blank"
          type="button"
          class="rounded-full bg-transparent p-3 px-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-shields-secondary focus:outline-none focus:ring-0"
        >
          <span class="[&>svg]:h-5 [&>svg]:w-5">
            <InstagramIcon class="w-6 h-6 fill-orange-300" />
          </span>
        </a>
        <a
          href="https://twitter.com/shields_dls"
          target="_blank"
          type="button"
          class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-shields-secondary focus:outline-none focus:ring-0"
        >
          <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
            <XIcon class="w-6 h-6 fill-orange-300" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/shields-dls/"
          target="_blank"
          type="button"
          class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-shields-secondary focus:outline-none focus:ring-0"
        >
          <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
            <LinkedInIcon class="w-6 h-6 fill-orange-300" />
          </span>
        </a>
        <a
          href="https://twitter.com/TeamDLS_"
          target="_blank"
          type="button"
          class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-shields-secondary focus:outline-none focus:ring-0"
        >
          <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
            <XIcon class="w-6 h-6 fill-violet-400" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/team-dls/"
          target="_blank"
          type="button"
          class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-shields-secondary focus:outline-none focus:ring-0"
        >
          <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
            <LinkedInIcon class="w-6 h-6 fill-violet-400" />
          </span>
        </a>
      </div>
    </div>

    <!--Copyright section-->
    <div class="w-full pt-1 pb-8 text-lg text-center">
      {{ currentYear }} SHIELDS -
      <router-link
        to="/legal"
        class="hover:text-shields-accent-hover text-shields-txt-secondary"
        >Mentions Légales</router-link
      >
    </div>
  </footer>
</template>

<script>
import InstagramIcon from "/src/assets/icons/instagram.svg";
import XIcon from "/src/assets/icons/x.svg";
import LinkedInIcon from "/src/assets/icons/linkedin.svg";

export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  components: {
    InstagramIcon,
    XIcon,
    LinkedInIcon,
  },
};
</script>
