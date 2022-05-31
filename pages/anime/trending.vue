<template>
  <div class="px-[10px] md:px-5 lg:px-[135px]">
    <div class="py-12">
      <h1 class="text-2xl">Trending Anime</h1>
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
      <PostListAnime
        v-for="(media, index) in mediaTrend"
        :key="index"
        :media="media"
        :left="(mediaTrend.indexOf(media) + 1) % 5 === 0"
      />
    </div>
  </div>
</template>

<script>
import PostListAnime from "../../components/PostListAnime.vue";
import { getTrendAnime } from "../../graphql/query/getTrending";
export default {
  components: { PostListAnime },
  data() {
    return {
      mediaTrend: [],
      page: 1,
    };
  },

  mounted() {
    this.mediaTrend = this.Page.media;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const log1 = window.scrollY;
      const log2 = window.innerHeight;
      const log3 = document.body.scrollHeight - 200;
      if (log1 + log2 >= log3) {
        this.page++;
        const newPage = this.Page.media;
        this.mediaTrend = [...this.mediaTrend, ...newPage];
      }
    },
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: getTrendAnime,
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