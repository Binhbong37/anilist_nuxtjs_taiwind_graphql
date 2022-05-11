<template>
  <div>
    <nuxt-link to="/anime/trending">
      <div class="flex justify-between">
        <h1 class="hover:text-red-500 cursor-pointer text-[#404e5c]">
          {{ title }}
        </h1>
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </div>
      <div class="grid grid-cols-6">
        <div v-for="data in MediaList" :key="data.id">
          <img :src="data.coverImage.medium" alt="coverImage" class="w-full" />
          <h1>{{ data.title.english }}</h1>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    MediaList: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style>
</style>