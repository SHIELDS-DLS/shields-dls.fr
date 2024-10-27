<template>
  <div id="actualites" class="mb-20">
    <h1 class="text-4xl font-bold text-center mb-8">Actualités</h1>
    <div class="mx-auto lg:p-8 p-4 border-shields-txt border-t-2">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="post in sortedPosts"
          :key="post.id"
          class="bg-white text-black rounded-lg shadow-md overflow-hidden"
        >
          <div class="p-4 flex items-center">
            <img
              :src="
                '/images/posts/accounts/' +
                postsData.accounts[post.account].icon
              "
              alt="icon"
              class="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <a
                :href="postsData.accounts[post.account].url"
                target="_blank"
                class="font-bold text-lg"
              >
                {{ postsData.accounts[post.account].name }}
              </a>
            </div>
          </div>
          <img
            v-if="post.image"
            :src="post.image"
            alt="post photo"
            class="w-full h-64 object-cover"
          />
          <div v-else class="w-full h-64 bg-shields-txt"></div>
          <div class="p-4 h-32">
            <p>
              {{ post.description }}
              <a
                class="cursor-pointer text-blue-500 hover:underline hover:text-blue-700"
                :href="post.url"
                target="_blank"
                >..voir plus</a
              >
            </p>
          </div>
          <div class="px-4 pt-4 pb-6">
            <p class="text-sm text-gray-500">
              <span
                v-if="
                  getElapsedTime(post.date).time === 0 &&
                  getElapsedTime(post.date).type === 'jour'
                "
              >
                Aujourd'hui
              </span>
              <span v-else>
                il y a {{ getElapsedTime(post.date).time }}
                {{ getElapsedTime(post.date).type }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postsData from "/src/assets/data/posts.json";
import { getElapsedTime } from "/src/utils/dateUtils";

export default {
  name: "Posts",
  data() {
    return {
      posts: postsData.posts,
      postsData: postsData,
    };
  },
  computed: {
    sortedPosts() {
      return this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
  methods: {
    getElapsedTime,
  },
};
</script>
