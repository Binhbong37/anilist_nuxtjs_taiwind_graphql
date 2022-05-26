<template>
  <div class="px-[135px]">
    <div v-if="loading">
      <h1 class="text-4xl font-bold">HELLO WORLD</h1>
    </div>
    <div v-else>
      <PostListForm @customE="customE" :search="search" />
      <div class="mb-10">
        <h1>Trending</h1>
        <div class="grid grid-cols-6 gap-6">
          <PostListCheck
            :search="search"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostListCheck from "../components/test/PostListCheck.vue";
import PostListForm from "../components/test/PostList.vue";
import { mediaQuery } from "../graphql/query/getHometest";
export default {
  layout: "testPage",
  components: { PostListCheck, PostListForm },

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
  data() {
    return {
      loading: true,
      mediaTrends: [],
      topAnime: [],
      mediaPopulars: [],
      popularSeason: [],
      upComingSeason: [],
      left: true,
      search: "acc",
    };
  },
  methods: {
    customE(data) {
      this.search = data;
    },
  },
};
</script>

<style>
</style>