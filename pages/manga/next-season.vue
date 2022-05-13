<template>
  <div class="px-[50px] md:px-20 lg:px-[56px]">
    <h1 class="text-2xl font-bold pt-12">NEXT SEASON - MANGA</h1>

    <div>
      <FilterManga />
    </div>

    <div
      class="
        grid grid-cols-2
        gap-2
        sm:grid-cols-3 sm:gap-x-3
        md:grid-cols-5 md:gap-x-5
      "
    >
      <nuxt-link
        v-for="(trending, index) in pageData"
        :key="index"
        :to="`/manga/${trending.id}`"
        class="mt-5"
      >
        <img
          :src="trending.coverImage.large"
          alt="Trending"
          class="lg:h-[363px] md:h-[207px] w-full rounded"
        />
        <h1>{{ trending.title.english }}</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import FilterManga from "../../components/Search/FilterManga.vue";
import { getNextSeasonManga } from "../../graphql/query/getNextSeason";
export default {
  components: { FilterManga },
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
      query: getNextSeasonManga,
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