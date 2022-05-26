<template>
  <div>
    <div v-if="loading > 0">
      <h1>Hello world!!!</h1>
    </div>
    <div v-else>
      <!-- Media Trend -->
      <div class="grid grid-cols-6 gap-6">
        <div v-for="(media, index) in mediaTrends" :key="index">
          <img :src="media.coverImage.medium" alt="Image" />
          <h1>{{ media.title.userPreferred }}</h1>
        </div>
      </div>
      <!-- Media Population -->
      <div class="grid grid-cols-6 gap-6">
        <div v-for="(media, index) in mediaPopulars" :key="index">
          <img :src="media.coverImage.medium" alt="Image" />
          <h1>{{ media.title.userPreferred }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPageAnime } from "../graphql/query/getHomeAnilist";
export default {
  layout: "testPage",
  name: "PageTest",
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
      query: getPageAnime,
      loadingKey: "loading",
      manual: true,
      result({ data, loading }) {
        if (!loading) {
          this.mediaTrends = data.MediaTrend.data;
          this.mediaPopulars = data.mediaPopulation.data;
          this.topAnime = data.topMedia.data;
        }
      },
    },
  },
};
</script>