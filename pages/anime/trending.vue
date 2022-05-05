<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">TRENDING - ANIME</h1>
    <!-- form search -->
    <div>form search here</div>
    <!-- loading data -->
    <div class="grid grid-cols-5 gap-5">
      <nuxt-link
        v-for="(trending, index) in pageData"
        :key="index"
        :to="`/anime/${trending.id}`"
        class="text-center"
      >
        <img
          :src="trending.coverImage.large"
          alt="Trending"
          class="w-[185px] h-[265px] rounded"
        />
        <h1>{{ trending.title.english || trending.title.romaji }}</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
const getTrending = gql`
  query getTag($page: Int) {
    Page(page: $page) {
      media(type: ANIME, sort: TRENDING) {
        title {
          english
          native
          romaji
        }
        coverImage {
          large
        }
        id
      }
    }
  }
`;
export default {
  data() {
    return {
      page: 1,
      pageData: [],
    };
  },
  mounted() {
    this.pageData = this.Page.media;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const log1 = window.scrollY;
      const log2 = window.innerHeight;
      const log3 = document.body.scrollHeight - 50;
      if (log1 + log2 >= log3) {
        this.page++;
        const newPage = this.Page.media;
        this.pageData = [...this.pageData, ...newPage];
      }
    },
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: getTrending,
      variables() {
        return {
          page: this.page,
        };
      },
    });
    const { Page } = res.data;
    return {
      Page,
    };
  },
};
</script>

<style>
</style>