<template>
  <div class="p-[70px]">
    <div>
      <SearchMedia />
    </div>
    <!-- Trending -->
    <PostListMedia :title="'Trending Anime'" :media="MediaTrend" />
    <!-- Popular -->
    <PostListMedia :title="'Popular Anime'" :media="mediaPopulation" />

    <!-- Top-100 -->
    <PostListMedia :title="'Top-100 Anime'" :media="topMedia" />
  </div>
</template>

<script>
import SearchMedia from "../../components/TestPostList/SearchMedia.vue";
import PostListMedia from "../../components/TestPostList/PostListMedia.vue";
import { getMedia } from "../../graphql/query/getHomeAnilist";
export default {
  layout: "testPage",
  components: { PostListMedia, SearchMedia },
  data() {
    return {
      loading: 0,
      MediaTrend: [],
      mediaPopulation: [],
      topMedia: [],
    };
  },
  apollo: {
    media: {
      query: getMedia,
      manual: true,
      loadingKey: "loading",
      variables: {
        page: 1,
        type: "ANIME",
        perPage: 5,
      },
      result({ data, loading }) {
        if (!loading) {
          this.MediaTrend = data.MediaTrend.data;
          this.mediaPopulation = data.mediaPopulation.data;
          this.topMedia = data.topMedia.data;
        }
      },
    },
  },
};
</script>

<style>
</style>