<template>
  <div
    class="
      grid
      lg:grid-cols-5 lg:gap-[39px]
      md:grid-cols-5 md:gap-[21px]
      grid-cols-3
      gap-[12px]
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
        class="rounded w-[138px] h-[160px] lg:w-full lg:h-[265px] md:h-[190px]"
      />
      <h1>{{ trending.title.userPreferred }}</h1>
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