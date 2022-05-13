<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">TOP 100 - MANGA</h1>
    <!-- form search -->
    <div>form search here</div>
    <!-- loading data -->
    <div class="grid grid-cols-5 gap-5">
      <nuxt-link
        v-for="(trending, index) in pageData"
        :key="index"
        :to="`/manga/${trending.id}`"
        class="text-center"
      >
        <img
          :src="trending.coverImage.large"
          alt="Trending"
          class="w-[185px] h-[265px] rounded"
        />
        <h1>{{ trending.title.english }}</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { getTop100Manga } from "../../graphql/query/getTop100";
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
        console.log(this.page);
        const newPage = this.Page.media;
        this.pageData = [...this.pageData, ...newPage];
      }
    },
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: getTop100Manga,
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
  // apollo: {
  //   Page: {
  //     query: getTrending,
  //   },
  // },
};
</script>

<style>
</style>