<template>
  <div id="products" class="mb-20">
    <div class="mx-auto lg:p-8 p-4">
      <div class="grid grid-cols-1 gap-8">
        <div class="p-6 flex flex-col lg:flex-row items-center">
          <img
            src="/images/shop/mug.png"
            alt="Mug de l'association"
            class="w-32 transition-transform duration-200 transform hover:scale-110"
          />
          <div class="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
            <h2 class="text-2xl font-bold">Mug</h2>
            <p class="text-gray-600">
              Idéal pour tenir le coup lors des cours ou des sessions de CTF.
            </p>
          </div>
        </div>

        <div class="p-6 flex flex-col lg:flex-row-reverse items-center">
          <img
            src="/images/shop/t-shirt.png"
            alt="T-shirt de l'association"
            class="w-32 transition-transform duration-200 transform hover:scale-110"
          />
          <div class="mt-4 lg:mt-0 lg:mr-6 text-center lg:text-right">
            <h2 class="text-2xl font-bold">T-Shirt</h2>
            <p class="text-gray-600">
              Affiche fièrement ton appartenance à l'association.
            </p>
          </div>
        </div>

        <div class="p-6 flex flex-col lg:flex-row items-center">
          <img
            src="/images/shop/sticker.png"
            alt="Stickers de l'association"
            class="w-32 transition-transform duration-200 transform hover:scale-110"
          />
          <div class="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
            <h2 class="text-2xl font-bold">Stickers</h2>
            <p class="text-gray-600">
              Ajoute une touche unique à ton laptop à l'aide de nos stickers
              exclusifs.
            </p>
          </div>
        </div>

        <div class="p-6 flex flex-col lg:flex-row-reverse items-center">
          <img
            src="/images/shop/jet-tag.png"
            alt="Jet tag de l'association"
            class="w-32 transition-transform duration-200 transform hover:scale-110"
          />
          <div class="mt-4 lg:mt-0 lg:mr-6 text-center lg:text-right">
            <h2 class="text-2xl font-bold">Jet Tag</h2>
            <p class="text-gray-600">
              Un petit truc en plus qui apporte du style à ton sac à dos !
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
};
</script>
