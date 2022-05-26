<template>
  <div>
    <div class="container mx-auto">
      <!-- form search -->
      <PostList @customSeason="customSeason" />

      <div class="grid grid-cols-5">
        <div v-for="media in Page.media" :key="media.id">
          <img :src="media.coverImage.medium" alt="IMAGE" />
          <h1>{{ media.title.userPreferred }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostList from "../components/test/PostList.vue";
import { searchQuery } from "../graphql/query/getHometest";

export default {
  components: { PostList },
  layout: "testPage",
  name: "PageTest",

  data() {
    return {
      query: "",
      seasonMedia: "WINTER",
    };
  },
  apollo: {
    Page: {
      query: searchQuery,
      variables() {
        return {
          type: "ANIME",
          season: this.seasonMedia,
        };
      },
    },
  },
  methods: {
    customSeason(data) {
      this.seasonMedia = data;
    },
  },
  watch: {
    seasonMedia(newValue, oldValue) {
      console.log("header");
      this.$router.push({
        path: "/test",
        query: { season: newValue },
      });
    },
  },
};
</script>