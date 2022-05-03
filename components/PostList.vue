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
      :to="`/anime/${trend.id}`"
      class="hover:text-red-500 text-center"
    >
      <img
        :src="trend.coverImage.large"
        alt="Image"
        class="rounded my-0 mx-auto w-full h-[251px]"
      />
      <h1 class="h-">{{ trend.title.english }}</h1>
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