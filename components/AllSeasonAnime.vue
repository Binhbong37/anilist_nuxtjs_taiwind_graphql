<template>
  <div>
    <div class="px-[50px] md:px-20 lg:px-[56px]">
      <h1 class="text-2xl font-bold pt-12">TRENDING - ANIME</h1>

      <div class="flex justify-between">
        <div class="bg-white py-3 px-3 rounded inline-block mr-5">
          <i class="fas fa-search text-slate-400"></i>
          <input
            type="text"
            name="search"
            class="rounded px-2 outline-0"
            placeholder="Search . . ."
            v-model="valueInputSearch"
          />
        </div>
        <div class="py-2 px-4 text-2xl hover:text-red-500 cursor-pointer">
          <i class="fas fa-sort"></i>
        </div>
      </div>

      <div
        class="
          grid grid-cols-2
          gap-2
          sm:grid-cols-3 sm:gap-x-3
          md:grid-cols-5 md:gap-x-5
        "
      >
        <nuxt-link
          v-for="(trending, index) in seasonFilter"
          :key="index"
          :to="`/anime/${trending.id}`"
          class="
            mt-5
            transform
            hover:scale-105
            transition
            ease-in-out
            duration-500
          "
        >
          <img
            :src="trending.coverImage.large"
            alt="Trending"
            class="lg:h-[363px] md:h-[207px] w-full rounded"
          />
          <h1>{{ trending.title.english || trending.title.romaji }}</h1>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    season: {
      type: Array,
    },
  },
  data() {
    return {
      valueInputSearch: "",
    };
  },
  computed: {
    seasonFilter() {
      return this.season.filter((trend) => {
        const lowerText = trend.title.english || trend.title.native;
        const upperText = trend.title.english || trend.title.native;
        lowerText.toLowerCase();
        upperText.toUpperCase();
        return (
          lowerText.includes(this.valueInputSearch) ||
          upperText.includes(this.valueInputSearch)
        );
      });
    },
  },
};
</script>

<style>
</style>