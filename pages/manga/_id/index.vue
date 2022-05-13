<template>
  <div>
    <div class="bg-white">
      <img :src="Media.bannerImage" alt="banner" class="h-[210px] md:w-full" />
      <div class="px-12 md:flex">
        <div class="w-2/6 flex md:block">
          <img
            :src="Media.coverImage.large"
            alt="imageLarge"
            class="rounded -mt-14 md:-mt-24 mb-5 md:w-3/4"
          />
          <div class="flex mt-5">
            <div>
              <button
                class="
                  p-1
                  bg-[#12acfd]
                  rounded
                  text-white
                  min-w-[150px]
                  md:min-w-[200px] md:py-2
                  ml-5
                "
              >
                Add to List
              </button>
            </div>
            <div
              class="
                bg-red-700
                text-white
                rounded
                max-h-8
                md:max-h-10 md:p-4
                p-2
                ml-5
              "
            >
              <i class="fas fa-heart md:text-xl md:-mt-7"></i>
            </div>
          </div>
        </div>
        <div class="w-4/6 md:mt-5">
          <h1 class="md:text-2xl font-bold">{{ Media.title.english }}</h1>
          <div class="hidden md:block md:anime-detail__header__description">
            <p v-html="getDescription(500)"></p>
            <span
              class="py-4 -mb-4 font-bold text-xl hover:text-red-500"
              :class="isHide ? 'block' : 'hidden'"
              @click="getFull"
            >
              Read more
            </span>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <ul class="flex justify-center md:text-xl">
          <li>
            <nuxt-link
              :to="`/manga/${$route.params.id}`"
              class="px-2 hover:text-red-500"
            >
              Overview
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="`/manga/${$route.params.id}/character`"
              class="px-2 hover:text-red-500"
            >
              Character
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="`/manga/${$route.params.id}/watch`"
              class="px-2 hover:text-red-500"
            >
              Watch
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="min-h-[100px] bg-[#e5ebf1] p-12 flex">
      <div class="hidden md:w-2/6 md:block">
        <SideBarLeft />
      </div>
      <div class="min-h-[100px] md:w-4/6 md:ml-7">
        <!-- character -->
        <nuxt-child
          :character="Media.characters.edges"
          :realations="Media.relations.nodes"
          :watch="Media.streamingEpisodes"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SideBarLeft from "../../../components/DetailPage/SideBarLeft.vue";

export default {
  layout: "detail",
  components: { SideBarLeft },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { id } = params;
    const query = {
      query: require("../../../graphql/query/detailManga.gql"),
      variables: { id },
    };
    let Media;
    await client.query(query).then((data) => {
      Media = data.data.Media;
    });
    return {
      Media,
    };
  },

  data() {
    return {
      inforCharacter: [],
      isHide: true,
    };
  },
  methods: {
    getDescription(len) {
      if (this.isHide) {
        if (this.Media.description.length > len) {
          return this.Media.description.slice(0, len) + ". . .";
        }
      }
      return this.Media.description;
    },
    getFull() {
      this.isHide = false;
      return this.Media.description;
    },
  },
};
</script>

<style scope>
</style>