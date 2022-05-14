<template>
  <div>
    <div class="px-[50px] md:px-20 lg:px-[56px]">
      <h1 class="text-2xl font-bold pt-12">TRENDING - ANIME</h1>

      <div class="flex justify-between">
        <input
          type="text"
          name="search"
          class="border-2 rounded py-2 px-4"
          placeholder="Search . . ."
          v-model="valueInputSearch"
        />
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
          :to="`/manga/${trending.id}`"
          class="mt-5"
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