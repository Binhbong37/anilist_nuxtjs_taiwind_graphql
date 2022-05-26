<template>
  <AllSeasonAnime :season="pageData" :title="'TRENDING-ANIME'" />
</template>

<script>
import { getTrendingAnime } from "../../graphql/query/getTrending";
export default {
  data() {
    return {
      pageData: [],
      page: 1,
    };
  },

  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: getTrendingAnime,
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
  mounted() {
    this.pageData = this.Page.media;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const log1 = window.scrollY;
      const log2 = window.innerHeight;
      const log3 = document.body.scrollHeight - 200;
      if (log1 + log2 >= log3) {
        this.page++;
        console.log(this.page);
        const newPage = this.Page.media;
        this.pageData = [...this.pageData, ...newPage];
      }
    },
  },
};
</script>

<style>
</style>