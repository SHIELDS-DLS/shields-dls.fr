<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div
      v-for="event in sortedevents"
      :key="event.name"
      id="eventItem"
      class="relative bg-shields-secondary rounded-lg shadow-lg h-64 w-full overflow-hidden transition-transform duration-300 ease-in-out border border-gray-600"
    >
      <!-- Bandeau supérieur -->
      <div
        class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-shields-content z-10 border-b border-gray-600 rounded-t-lg"
      >
        <h2 class="text-lg font-bold text-white">{{ event.name }}</h2>
        <div class="flex items-center space-x-2">
          <LucideCalendar class="w-5 h-5 text-shields-txt-secondary" />
          <p
            :class="{
              'text-orange-400': getDaysLeft(event.date) === 0,
              'text-green-400': getDaysLeft(event.date) !== 0,
            }"
          >
            {{
              getDaysLeft(event.date) === 0
                ? new Date(event.date).toLocaleDateString("fr-FR")
                : getDaysLeft(event.date) === 1
                ? "dans 1 jour"
                : `dans ${getDaysLeft(event.date)} jours`
            }}
          </p>
        </div>
      </div>

      <div class="absolute top-16 left-0 right-0 bottom-0">
        <img
          v-if="event.photos[0]"
          :src="'/images/events/' + event.photos[0]"
          alt="Preview Image"
          class="w-full h-full object-cover cursor-pointer"
          @click="openCarousel(event.photos)"
        />
        <div
          v-else
          class="w-full h-full bg-shields-secondary flex items-center justify-center"
        >
          <LucideCameraOff
            v-if="getDaysLeft(event.date) === 0"
            class="w-12 h-12 text-shields-txt-secondary"
          />
          <LucideClock v-else class="w-12 h-12 text-shields-txt-secondary" />
        </div>
      </div>
    </div>
  </div>

  <!-- Swiper Carousel -->
  <div
    v-if="isCarouselOpen"
    class="fixed inset-0 z-20 bg-black bg-opacity-75 flex justify-center items-center"
    @click.self="closeCarousel"
  >
    <Swiper
      :navigation="true"
      :autoHeight="true"
      :modules="modules"
      :loop="true"
      :effect="'fade'"
      :grabCursor="true"
      :pagination="pagination"
    >
      <SwiperSlide v-for="(photo, index) in currentPhotos" :key="index">
        <img
          :src="'/images/events/' + photo"
          class="w-full h-4/5 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { getDaysLeft } from "/src/utils/dateUtils";
import {
  Calendar as LucideCalendar,
  Clock as LucideClock,
  CameraOff as LucideCameraOff,
} from "lucide-vue-next";
import { Swiper, SwiperSlide } from "swiper/vue";
import events from "/src/assets/data/events.json";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "EventsGrid",
  components: {
    LucideCalendar,
    LucideClock,
    LucideCameraOff,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      events: [],
      isCarouselOpen: false,
      currentPhotos: [],
    };
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (_index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
      modules: [Navigation, Pagination],
    };
  },
  computed: {
    sortedevents() {
      return this.events.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
  created() {
    this.loadevents();
  },
  methods: {
    loadevents() {
      this.events = events;
    },
    getDaysLeft,
    openCarousel(photos) {
      this.currentPhotos = photos;
      this.isCarouselOpen = true;
    },
    closeCarousel() {
      this.isCarouselOpen = false;
    },
  },
};
</script>

<style lang="css">
#eventItem:hover {
  transform: scale(1.03);

  border-color: grey;
}

.swiper {
  max-width: 900px;
  max-height: 80%;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  background-color: #fff;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.swiper-pagination-bullet-active {
  background-color: orange;
  opacity: 0.8;
  transform: scale(1.5);
}

.swiper-button-next,
.swiper-button-prev {
  color: #ff8c00;
  opacity: 0.8;
  transition: transform 0.1s ease, opacity 0.1s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: white;
  transform: scale(1.1);
}
</style>
