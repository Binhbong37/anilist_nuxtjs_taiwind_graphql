<template>
  <div class="px-[10px] md:px-5 lg:px-[135px]">
    <div class="py-12">
      <h1 class="text-2xl">Next-season Manga</h1>
    </div>
    <div
      class="
        grid
        lg:grid-cols-5 lg:gap-[39px]
        md:grid-cols-5 md:gap-[21px]
        grid-cols-3
        gap-[12px]
      "
    >
      <PostListManga
        v-for="(media, index) in pageData"
        :key="index"
        :media="media"
        :left="(pageData.indexOf(media) + 1) % 5 === 0"
      />
    </div>
  </div>
</template>

<script>
import { getPopularManga } from "../../graphql/query/getNextSeason";
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
      query: getPopularManga,
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