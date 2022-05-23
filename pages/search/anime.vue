<template>
  <div class="px-[10px] md:px-5 lg:px-[135px]">
    <div class="pt-12">
      <form>
        <div class="bg-white py-2 px-3 rounded inline-block mr-5">
          <i class="fas fa-search"></i>
          <input
            type="text"
            name="search"
            class="rounded px-2 outline-0"
            placeholder="Search . . ."
            v-model="search"
            @keypress="handleKey"
          />
        </div>
        <div class="bg-white py-2 px-3 rounded hidden md:inline-block md:mr-5">
          <input
            type="text"
            name="genres"
            class="rounded px-2 outline-0"
            placeholder="Genres"
            readonly
          />
          <i class="fas fa-caret-down"></i>
        </div>
        <div
          class="
            bg-white
            py-2
            px-3
            rounded
            hidden
            lg:mt-5
            md:inline-block md:mr-5
          "
        >
          <input
            type="text"
            name="year"
            class="rounded px-2 outline-0"
            placeholder="Year"
            readonly
          />
          <i class="fas fa-caret-down"></i>
        </div>
        <div
          class="
            bg-white
            py-2
            px-3
            rounded
            hidden
            md:inline-block md:mr-5 md:mt-5
          "
        >
          <input
            type="text"
            name="format"
            class="rounded px-2 outline-0"
            placeholder="Format"
            readonly
          />
          <i class="fas fa-caret-down"></i>
        </div>
      </form>
    </div>
    <div v-if="isQuery">
      <div class="pt-12">
        <nuxt-link to="/anime/trending" class="flex justify-between mb-3">
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
            :id="media.id"
            :key="index"
            :thumbnail="media.coverImage.large"
            :title="media.title.english"
          />
        </div>
      </div>

      <div class="pt-12">
        <nuxt-link to="/anime/next-season" class="flex justify-between mb-3">
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
            :id="media.id"
            :key="index"
            :thumbnail="media.coverImage.large"
            :title="media.title.english"
          />
        </div>
      </div>

      <div class="mt-12 pb-12">
        <nuxt-link to="/anime/top-100" class="flex justify-between mb-3">
          <h1 class="hover:text-red-500">TOP-100</h1>
          <h1 class="hover:text-red-500">View All</h1>
        </nuxt-link>
        <div class="grid md:grid-cols-5 md:gap-[21px] grid-cols-3 gap-[12px]">
          <PostListAnime
            class="md:hidden"
            v-for="(media, index) in topMedia"
            :id="media.id"
            :key="index"
            :thumbnail="media.coverImage.large"
            :title="media.title.english"
          />
        </div>
        <div
          v-for="(top, index) in topMedia"
          :key="top.id"
          class="hidden md:flex md:overflow-auto"
        >
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
    <div v-if="!isQuery">
      <GetAllAnime :allAnime="filterAllAnime" />
    </div>
  </div>
</template>

<script>
import { getPageAnime } from "../../graphql/query/getHomeAnilist";
export default {
  data() {
    return {
      filterAllAnime: [],
      MediaTrend: [],
      allAnime: [],
      mediaPopulation: [],
      topMedia: [],
      search: "",
      sort: this.$route.query.sort || "",
      page: 1,
      isQuery: true,
    };
  },
  apollo: {
    Page: {
      query: getPageAnime,
      manual: true,
      variables() {
        return {
          page: this.page,
          sort: this.sort || "TRENDING_DESC",
        };
      },
      result({ data, loading }) {
        if (!loading) {
          this.MediaTrend = data.MediaTrend.data;
          this.mediaPopulation = data.mediaPopulation.data;
          this.topMedia = data.topMedia.data;
          this.allAnime = data.getAllAnime.data;
        }
      },
    },
  },
  methods: {
    handleKey() {
      this.isQuery = false;
    },
  },
  watch: {
    search() {
      if (!this.search) {
        this.$router.push({ path: "/search/anime" });
        this.$router.go();
      } else {
        this.$router.push({
          path: "/search/anime",
          query: { search: this.search },
        });
        this.filterAllAnime = this.allAnime.filter((all) => {
          const titleCondi = all.title.english || all.title.native;
          return titleCondi.includes(this.search);
        });
      }
    },
  },

  mounted() {
    if (this.sort !== "") {
      this.isQuery = false;
      if (this.allAnime.length <= 0) {
        window.location.reload();
      } else {
        this.filterAllAnime = this.allAnime;
      }
    }
  },
};
</script>