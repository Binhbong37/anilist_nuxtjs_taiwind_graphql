<template>
  <div>
    <nuxt-link to="/" class="flex justify-between">
      <h3>{{ title }}</h3>
      <div>View all</div>
    </nuxt-link>
    <div class="grid grid-cols-5">
      <CardMedia v-for="(card, index) in media" :key="index" :media="card" />
    </div>
  </div>
</template>

<script>
import CardMedia from "./CardMedia.vue";
export default {
  components: { CardMedia },
  data() {
    return {
      test: "TEST",
    };
  },
  props: {
    title: {
      type: String,
    },
    media: {
      type: Array,
    },
  },
};
</script>

<style>
</style>