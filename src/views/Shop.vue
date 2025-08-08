<template>
  <div>
    <div id="shop" class="mb-20">
      <h1 class="text-4xl font-bold text-center mb-16">Boutique</h1>
      <Merch class="mb-24" />
      <Products />
    </div>
  </div>
</template>

<script>
import Products from "@/components/Shop/Products.vue";
import Merch from "@/components/Shop/Merch.vue";

export default {
  name: "Shop",
  components: {
    Merch,
    Products,
  },
};
</script>
