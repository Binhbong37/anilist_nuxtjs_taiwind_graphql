<template>
  <div class="px-[50px] md:px-20 lg:px-[56px]">
    <h1 class="text-2xl font-bold pt-12">TOP 100 - ANIME</h1>

    <div>
      <FilterAnime />
    </div>
    <!-- loading data -->
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
        :to="`/anime/${trending.id}`"
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
import FilterAnime from "../../components/Search/FilterAnime.vue";
import { getTop100Anime } from "../../graphql/query/getTop100";
export default {
  components: { FilterAnime },
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
      query: getTop100Anime,
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