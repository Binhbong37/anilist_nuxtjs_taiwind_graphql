<template>
  <div class="px-[10px] md:px-5 lg:px-[135px]">
    <div v-if="loading > 0">
      <div
        class="
          grid
          lg:grid-cols-5 lg:gap-[39px]
          md:grid-cols-5 md:gap-[21px]
          grid-cols-3
          gap-[12px]
        "
      >
        <PostListSkeleton />
        <PostListSkeleton />
        <PostListSkeleton />
        <PostListSkeleton />
        <PostListSkeleton />
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
        <PostListSkeleton />
        <PostListSkeleton />
        <PostListSkeleton />
        <PostListSkeleton />
        <PostListSkeleton />
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
        <PostListSkeleton />
        <PostListSkeleton />
        <PostListSkeleton />
        <PostListSkeleton />
        <PostListSkeleton />
      </div>
    </div>
    <div v-else>
      <div class="pt-12">
        <nuxt-link to="/anime/trending" class="flex justify-between mb-4">
          <h1 class="hover:text-red-500 cursor-pointer text-[#404e5c]">
            TRENDING NOW
          </h1>
          <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
        </nuxt-link>
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
            v-for="(media, index) in MediaTrend"
            :key="index"
            :media="media"
            :left="(MediaTrend.indexOf(media) + 1) % 5 === 0"
          />
        </div>
      </div>
      <!-- Next-Season -->
      <div class="mt-[70px]">
        <nuxt-link to="/anime/next-season" class="flex justify-between mb-4">
          <h1 class="hover:text-red-500 cursor-pointer text-[#404e5c]">
            NEXT-SEASON
          </h1>
          <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
        </nuxt-link>
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
            v-for="(media, index) in mediaPopulation"
            :key="index"
            :media="media"
            :left="(mediaPopulation.indexOf(media) + 1) % 5 === 0"
          />
        </div>
      </div>

      <!-- Top 100 -->
      <div class="mt-[100px] pb-12">
        <nuxt-link to="/anime/top-100" class="flex justify-between mb-4">
          <h1 class="hover:text-red-500">TOP-100</h1>
          <h1 class="hover:text-red-500">View All</h1>
        </nuxt-link>
        <div class="grid md:grid-cols-5 md:gap-[21px] grid-cols-3 gap-[12px]">
          <PostListAnime
            class="md:hidden"
            v-for="(media, index) in topMedia"
            :key="index"
            :media="media"
          />
        </div>

        <div
          v-for="(top, i) in topMedia"
          :key="top.id"
          class="hidden md:flex md:overflow-auto"
        >
          <p class="p-3 font-bold text-2xl text-[#647380] leading-[3.5]">
            #{{ i + 1 }}
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
  </div>
</template>

<script>
import PostListSkeleton from "../components/Skeleton/PostListSkeleton.vue";
import { getMedia } from "../graphql/query/getHomeAnilist";
import PostListAnime from "../components/AnimeMedia/PostListAnime.vue";

export default {
  components: { PostListSkeleton, PostListAnime },
  data() {
    return {
      loading: 0,
      MediaTrend: [],
      mediaPopulation: [],
      topMedia: [],
    };
  },
  apollo: {
    media: {
      query: getMedia,
      manual: true,
      loadingKey: "loading",
      variables: {
        page: 1,
        type: "ANIME",
        perPage: 5,
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