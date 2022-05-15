<template>
  <div
    class="
      grid grid-cols-2
      gap-4
      sm:grid-cols-3 sm:gap-x-3
      md:grid-cols-5 md:gap-x-5
    "
  >
    <nuxt-link
      v-for="trend in MediaTrend"
      :key="trend.id"
      :to="`/manga/${trend.id}`"
      class="
        hover:text-red-500
        text-center
        transform
        hover:scale-105
        transition
        ease-in-out
        duration-500
      "
    >
      <img
        :src="trend.coverImage.large"
        alt="Image"
        class="rounded lg:h-[363px] md:h-[207px] w-full"
      />
      <h1 class="text-left">{{ trend.title.english }}</h1>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    MediaTrend: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>