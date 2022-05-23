<template>
  <nuxt-link :to="`/anime/${id}`">
    <img
      :src="thumbnail"
      alt="Image"
      class="rounded w-[138px] h-[160px] lg:w-full lg:h-[265px] md:h-[190px]"
    />
    <h1 class="anime-title text-sm mt-2">{{ title }}</h1>
  </nuxt-link>
</template>

<script>
export default {
  data() {
    return {
      isShowDetailModal: true,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scope>
.anime-title {
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>