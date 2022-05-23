<template>
  <div>
    <div v-if="loading > 0">
      <h1>HELLO WORLD</h1>
    </div>
    <div v-else>
      <PostListCheck :media="mediaTrends" :title="'Trending now'" />
      <PostListCheck :media="mediaPopulars" :title="'polpulatar'" />
      <PostListCheck :media="popularSeason" :title="'popular this season'" />
      <PostListCheck :media="upComingSeason" :title="'upcoming season'" />
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
    };
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