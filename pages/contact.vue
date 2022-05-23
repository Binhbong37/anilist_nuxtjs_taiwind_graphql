<template>
  <div class="px-[135px]">
    <div v-if="loading > 0">
      <h1>HELLO WORLD</h1>
    </div>
    <div v-else>
      <button class="bg-black p-2 rounded text-white" @click="changeLeft">
        click
      </button>
      <div class="mb-10">
        <h1>Trending</h1>
        <div class="grid grid-cols-6 gap-6">
          <PostListCheck
            v-for="mediaa in mediaTrends"
            :key="mediaa.id"
            :media="mediaa"
            :left="(mediaTrends.indexOf(mediaa) + 1) % 5 === 0"
          />
        </div>
      </div>
      <div class="mb-10">
        <h1>Popular</h1>
        <div class="grid grid-cols-6 gap-6">
          <PostListCheck
            v-for="mediaa in mediaPopulars"
            :key="mediaa.id"
            :media="mediaa"
          />
        </div>
      </div>
      <div class="mb-10">
        <h1>This season</h1>
        <div class="grid grid-cols-6 gap-6">
          <PostListCheck
            v-for="mediaa in popularSeason"
            :key="mediaa.id"
            :media="mediaa"
          />
        </div>
      </div>
      <div class="mb-10">
        <h1>Upcoming Season</h1>
        <div class="grid grid-cols-6 gap-6">
          <PostListCheck
            v-for="mediaa in upComingSeason"
            :key="mediaa.id"
            :media="mediaa"
          />
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mediaQuery } from "../graphql/query/getHometest";
export default {
  layout: "testPage",
  data() {
    return {
      loading: 0,
      mediaTrends: [],
      topAnime: [],
      mediaPopulars: [],
      popularSeason: [],
      upComingSeason: [],
      left: true,
    };
  },
  methods: {
    changeLeft() {
      this.left = !this.left;
    },
  },
  apollo: {
    media: {
      query: mediaQuery,
      loadingKey: "loading",
      manual: true,
      result({ data, loading }) {
        if (!loading) {
          this.mediaTrends = data.mediaTrends.data;
          this.mediaPopulars = data.mediaPopulars.data;
          this.topAnime = data.topAnime.data;
          this.popularSeason = data.popularSeason.data;
          this.upComingSeason = data.upComingSeason.data;
        }
      },
    },
  },
};
</script>

<style>
</style>