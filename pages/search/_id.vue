<template>
  <div class="px-[50px] md:px-20 lg:px-[56px]">
    <!-- Form serach -->
    <div class="pt-12">
      <form @submit.prevent="search" class="flex items-center">
        <div class="mr-3" v-for="i in 4" :key="i">
          <label class="block">Search {{ i }}</label>
          <input
            type="text"
            name="Search"
            id="Search"
            class="border-2 rounded py-2 px-4 mr-2"
            placeholder="Search by name"
          />
        </div>
      </form>
    </div>
    <!-- Population -->
    <div class="pt-12">
      <nuxt-link to="/anime/trending" class="flex justify-between">
        <h1 class="hover:text-red-500 cursor-pointer text-[#404e5c]">
          TRENDING NOW
        </h1>
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </nuxt-link>
      <div
        class="
          grid grid-cols-2
          gap-4
          sm:grid-cols-3 sm:gap-x-3
          md:grid-cols-5 md:gap-x-5
        "
      >
        <nuxt-link
          v-for="trend in MediaTrend"
          :key="trend.id"
          :to="`/anime/${trend.id}`"
          class="hover:text-red-500 text-center"
        >
          <img
            :src="trend.coverImage.large"
            alt="Image"
            class="rounded my-0 mx-auto w-full h-[251px]"
          />
          <h1 class="h-">{{ trend.title.english }}</h1>
        </nuxt-link>
      </div>
    </div>
    <!-- Next-Season -->
    <div class="pt-12">
      <div class="flex justify-between">
        <nuxt-link
          to="/anime/next-season"
          class="hover:text-red-500 cursor-pointer"
          >NEXT SEASON</nuxt-link
        >
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </div>
      <div
        class="
          grid grid-cols-2
          gap-4
          sm:grid-cols-3 sm:gap-x-3
          md:grid-cols-5 md:gap-x-5
        "
      >
        <nuxt-link
          v-for="popu in mediaPopulation"
          :key="popu.id"
          :to="`/anime/${popu.id}`"
          class="hover:text-red-500 text-center"
        >
          <img
            :src="popu.coverImage.large"
            alt="Image"
            class="rounded my-0 mx-auto w-full"
          />
          <h1>{{ popu.title.english }}</h1>
        </nuxt-link>
      </div>
    </div>

    <!-- Top 100 -->
    <div class="mt-12 pb-12">
      <nuxt-link to="/anime/top-100" class="flex justify-between">
        <h1 class="hover:text-red-500">TOP-100</h1>
        <h1 class="hover:text-red-500">View All</h1>
      </nuxt-link>
      <div v-for="top in topMedia" :key="top.id" class="flex">
        <p class="p-3 font-bold text-2xl text-[#647380] leading-[3.5]">#1</p>
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
import gql from "graphql-tag";
const getPage = gql`
  query getTag($page: Int) {
    MediaTrend: Page(page: $page, perPage: 5) {
      data: media(sort: TRENDING_DESC) {
        title {
          english
          native
        }
        coverImage {
          large
        }
        id
      }
    }
    mediaPopulation: Page(page: $page, perPage: 5) {
      data: media(sort: POPULARITY_DESC) {
        id
        coverImage {
          large
        }
        title {
          english
          native
        }
      }
    }
    topMedia: Page(page: $page, perPage: 5) {
      data: media(sort: SCORE_DESC) {
        id
        genres
        coverImage {
          large
        }
        title {
          english
          native
        }
      }
    }
  }
`;
export default {
  data() {
    return {
      MediaTrend: [],
      mediaPopulation: [],
      topMedia: [],
    };
  },
  apollo: {
    Page: {
      query: getPage,
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