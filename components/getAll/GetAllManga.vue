<template>
  <div
    class="
      grid grid-cols-2
      gap-2
      sm:grid-cols-3 sm:gap-x-3
      md:grid-cols-5 md:gap-x-5
    "
  >
    <nuxt-link
      v-for="(trending, index) in allManga"
      :key="index"
      :to="`/anime/${trending.id}`"
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
</template>

<script>
export default {
  props: {
    allManga: {
      type: Array,
    },
  },
};
</script>

<style>
</style>