<template>
  <!-- Groupes par année scolaire -->
  <div v-for="group in groupedYears" :key="group.label" class="mb-8">
    <div class="flex items-center justify-between mb-4 px-2">
      <h2 class="text-xl font-bold text-white">Année {{ group.label }}</h2>
      <!-- Toggle uniquement pour les années passées -->
      <button
        v-if="!group.isCurrent"
        class="flex items-center gap-2 text-shields-txt-secondary hover:text-white transition-colors"
        @click="toggleYear(group.label)"
      >
        <component
          :is="
            expandedYears.has(group.label)
              ? LucideChevronDown
              : LucideChevronRight
          "
          class="w-5 h-5"
        />
        <span>{{
          expandedYears.has(group.label) ? "Réduire" : "Afficher"
        }}</span>
      </button>
    </div>

    <div
      v-if="group.isCurrent || expandedYears.has(group.label)"
      class="grid grid-cols-1 md:grid-cols-3 gap-5"
    >
      <div
        v-for="event in group.events"
        :key="event.name + event.date"
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
  </div>

  <!-- Carousel (shadcn/vue) -->
  <div
    v-if="isCarouselOpen"
    class="fixed inset-0 z-[100] bg-black/75 flex justify-center items-center h-screen w-screen"
    @click.self="closeCarousel"
  >
    <Carousel
      :opts="{ loop: true }"
      class="relative w-full max-w-[90vw]"
      @click="closeCarousel"
    >
      <CarouselContent class="max-h-[80vh]">
        <CarouselItem
          v-for="(photo, index) in currentPhotos"
          :key="index"
          class="flex items-center justify-center"
        >
          <img
            :src="'/images/events/' + photo"
            class="max-w-[90vw] max-h-[80vh] object-contain"
            @click.stop
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        v-if="currentPhotos.length > 1"
        class="text-white border-white/40 bg-black/30 hover:bg-black/50 hover:border-shields-accent hover:text-shields-accent left-4 top-1/2 -translate-y-1/2 z-20"
        @click.stop
      />
      <CarouselNext
        v-if="currentPhotos.length > 1"
        class="text-white border-white/40 bg-black/30 hover:bg-black/50 hover:border-shields-accent hover:text-shields-accent right-4 top-1/2 -translate-y-1/2 z-20"
        @click.stop
      />
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { getDaysLeft } from "@/utils/dateUtils";
import {
  Calendar as LucideCalendar,
  Clock as LucideClock,
  CameraOff as LucideCameraOff,
} from "lucide-vue-next";
import {
  ChevronDown as LucideChevronDown,
  ChevronRight as LucideChevronRight,
} from "lucide-vue-next";
import eventsData from "@/assets/data/events.json";
import { groupByAcademicYear } from "@/utils/academicYear";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// State
const events = ref(eventsData);
const expandedYears = ref(new Set<string>());
const isCarouselOpen = ref(false);
const currentPhotos = ref<string[]>([]);

// Carousel shadcn/vue n'a pas besoin de configuration locale ici

// Groupes d'événements par année scolaire via utilitaire partagé
const groupedYears = computed(() =>
  groupByAcademicYear(events.value, (e) => e.date).map((g) => ({
    label: g.label,
    startYear: g.startYear,
    isCurrent: g.isCurrent,
    events: g.items,
  })),
);

function toggleYear(label: string) {
  const next = new Set(expandedYears.value);
  if (next.has(label)) next.delete(label);
  else next.add(label);
  expandedYears.value = next;
}

// Methods
function openCarousel(photos: string[]) {
  currentPhotos.value = photos;
  isCarouselOpen.value = true;
}
function closeCarousel() {
  isCarouselOpen.value = false;
}
</script>

<style lang="css">
#eventItem:hover {
  transform: scale(1.03);

  border-color: grey;
}
</style>
