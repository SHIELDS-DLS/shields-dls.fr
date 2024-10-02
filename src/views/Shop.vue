<template>
  <div class="mx-auto lg:p-8 p-4">
    <div id="shop" class="mb-28">
      <h1 class="text-4xl font-bold text-center mb-16">Boutique</h1>
      <Merch />
    </div>
  </div>
</template>

<script>
import Merch from "/src/components/Shop/Merch.vue";

export default {
  name: "Shop",
  components: {
    Merch,
  },
};
</script>
