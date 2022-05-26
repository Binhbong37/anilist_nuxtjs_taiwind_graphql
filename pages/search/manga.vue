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
      <div class="pt-12 mb-10">
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
          <div
            class="bg-white py-2 px-3 rounded hidden md:inline-block md:mr-5"
          >
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
              md:mt-5 md:inline-block md:mr-5
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
              md:mt-5
              rounded
              hidden
              md:inline-block md:mr-5
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
          <nuxt-link to="/manga/trending" class="flex justify-between mb-3">
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
            <PostListManga
              v-for="(media, index) in MediaTrend"
              :key="index"
              :media="media"
              :left="(MediaTrend.indexOf(media) + 1) % 5 === 0"
            />
          </div>
        </div>

        <div class="pt-12">
          <nuxt-link to="/manga/next-season" class="flex justify-between mb-3">
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
            <PostListManga
              v-for="(media, index) in mediaPopulation"
              :key="index"
              :media="media"
              :left="(mediaPopulation.indexOf(media) + 1) % 5 === 0"
            />
          </div>
        </div>

        <div class="mt-12 pb-12">
          <nuxt-link to="/manga/top-100" class="flex justify-between mb-3">
            <h1 class="hover:text-red-500">TOP-100</h1>
            <h1 class="hover:text-red-500">View All</h1>
          </nuxt-link>
          <div class="grid md:grid-cols-5 md:gap-[21px] grid-cols-3 gap-[12px]">
            <PostListManga
              class="md:hidden"
              v-for="(media, index) in topMedia"
              :key="index"
              :media="media"
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
              <nuxt-link :to="`/manga/${top.id}`">
                <img :src="top.coverImage.large" class="w-20 p-3 rounded-md" />
              </nuxt-link>
              <div class="pt-4">
                <nuxt-link
                  :to="`/manga/${top.id}`"
                  class="hover:text-red-500"
                  >{{ top.title.userPreferred }}</nuxt-link
                >

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
        <GetAllManga :allManga="filterAllManga" />
      </div>
    </div>
  </div>
</template>

<script>
import PostListSkeleton from "../../components/Skeleton/PostListSkeleton.vue";
import { getPageManga } from "../../graphql/query/getHomeAnilist";
export default {
  components: { PostListSkeleton },
  data() {
    return {
      filterAllManga: [],
      MediaTrend: [],
      allManga: [],
      mediaPopulation: [],
      topMedia: [],
      loading: 0,
      search: "",
      sort: this.$route.query.sort || "",
      page: 1,
      isQuery: true,
    };
  },
  apollo: {
    Page: {
      query: getPageManga,
      loadingKey: "loading",
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
          this.allManga = data.getAllManga.data;
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
        this.$router.push({ path: "/search/manga" });
        this.$router.go();
      } else {
        this.$router.push({
          path: "/search/manga",
          query: { search: this.search },
        });
        this.filterAllManga = this.allManga.filter((all) => {
          const titleCondi = all.title.english || all.title.native;
          return titleCondi.includes(this.search);
        });
      }
    },
  },
  mounted() {
    if (this.sort !== "") {
      this.isQuery = false;
      if (this.allManga.length <= 0) {
        window.location.reload();
      } else {
        this.filterAllManga = this.allManga;
      }
    }
  },
};
</script>