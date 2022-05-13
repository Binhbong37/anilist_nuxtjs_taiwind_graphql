<template>
  <div class="px-[50px] md:px-20 lg:px-[56px]">
    <div class="pt-12">
      <Search />
    </div>
    <!-- Trending -->
    <div class="pt-12">
      <nuxt-link to="/manga/trending" class="flex justify-between">
        <h1 class="hover:text-red-500 cursor-pointer text-[#404e5c]">
          TRENDING NOW
        </h1>
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </nuxt-link>
      <PostListManga :MediaTrend="MediaTrend" />
    </div>
    <!-- Next-Season -->
    <div class="pt-12">
      <nuxt-link to="/manga/next-season" class="flex justify-between">
        <h1 class="hover:text-red-500 cursor-pointer text-[#404e5c]">
          NEXT-SEASON
        </h1>
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </nuxt-link>
      <PostListManga :MediaTrend="mediaPopulation" />
    </div>

    <!-- Top 100 -->
    <div class="mt-12 pb-12">
      <nuxt-link to="/manga/top-100" class="flex justify-between">
        <h1 class="hover:text-red-500">TOP-100</h1>
        <h1 class="hover:text-red-500">View All</h1>
      </nuxt-link>
      <PostListManga class="md:hidden" :MediaTrend="topMedia" />
      <div
        v-for="(top, index) in topMedia"
        :key="top.id"
        class="hidden md:flex md:overflow-auto"
      >
        <p class="p-3 font-bold text-2xl text-[#647380] leading-[3.5]">
          #{{ index + 1 }}
        </p>
        <div class="bg-white rounded shadow-md mb-6 flex w-full">
          <nuxt-link :to="`/manga/${top.id}`">
            <img :src="top.coverImage.large" class="w-20 p-3 rounded-md" />
          </nuxt-link>
          <div class="pt-4">
            <nuxt-link :to="`/manga/${top.id}`" class="hover:text-red-500">{{
              top.title.english || top.title.native
            }}</nuxt-link>

            <div>
              <nuxt-link
                class="p-2"
                v-for="(genres, index) in top.genres"
                :key="index"
                to="/"
              >
                <span
                  class="
                    bg-red-500
                    p-1
                    rounded-lg
                    text-xs text-white text-center
                    max-w-fit
                  "
                >
                  {{ genres }}
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../../components/Search.vue";
import { getPageManga } from "../../graphql/query/getHomeAnilist";

export default {
  components: { Search },
  data() {
    return {
      MediaTrend: [],
      mediaPopulation: [],
      topMedia: [],
    };
  },
  apollo: {
    Page: {
      query: getPageManga,
      manual: true,
      variables: {
        page: 1,
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