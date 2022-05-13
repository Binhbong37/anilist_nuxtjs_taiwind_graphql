<template>
  <div class="px-[50px] md:px-20 lg:px-[56px]">
    <!-- Form serach -->
    <div class="pt-12">
      <h1>Form</h1>
      <input type="text" v-model="search" />
    </div>

    <!-- Trending -->
    <div class="pt-12">
      <nuxt-link to="/anime/trending" class="flex justify-between">
        <h1 class="hover:text-red-500 cursor-pointer text-[#404e5c]">
          TRENDING NOW
        </h1>
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </nuxt-link>
      <PostListAnime :MediaTrend="MediaTrend" />
    </div>
    <!-- Next-Season -->
    <div class="pt-12">
      <nuxt-link to="/anime/next-season" class="flex justify-between">
        <h1 class="hover:text-red-500 cursor-pointer text-[#404e5c]">
          NEXT-SEASON
        </h1>
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </nuxt-link>
      <PostListAnime :MediaTrend="mediaPopulation" />
    </div>

    <!-- Top 100 -->
    <div class="mt-12 pb-12">
      <nuxt-link to="/anime/top-100" class="flex justify-between">
        <h1 class="hover:text-red-500">TOP-100</h1>
        <h1 class="hover:text-red-500">View All</h1>
      </nuxt-link>
      <div v-for="(top, index) in topMedia" :key="top.id" class="flex">
        <p class="p-3 font-bold text-2xl text-[#647380] leading-[3.5]">
          #{{ index + 1 }}
        </p>
        <div class="bg-white rounded shadow-md mb-6 flex w-full">
          <nuxt-link :to="`/anime/${top.id}`">
            <img :src="top.coverImage.large" class="w-20 p-3 rounded-md" />
          </nuxt-link>
          <div class="pt-4">
            <nuxt-link :to="`/anime/${top.id}`" class="hover:text-red-500">{{
              top.title.english
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
import { getPageAnime } from "../../graphql/query/getHomeAnilist";
export default {
  data() {
    return {
      MediaTrend: [],
      mediaPopulation: [],
      topMedia: [],
      search: "",
    };
  },
  apollo: {
    Page: {
      query: getPageAnime,
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
  updated() {
    this.$router.push({
      path: "/search/anime",
      query: { search: this.search },
    });
  },
};
</script>