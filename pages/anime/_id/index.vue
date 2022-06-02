<template>
  <div>
    <div class="bg-white">
      <img :src="Media.bannerImage" alt="banner" class="md:w-full" />
      <div class="px-5 md:px-8 lg:px-40 md:flex">
        <div class="flex items-start w-1/5 lg:w-1/5 md:w-1/4 md:block">
          <img
            :src="Media.coverImage.large"
            alt="imageLarge"
            class="rounded -mt-5 lg:-mt-24 md:-mt-16 mb-5 md:w-full"
          />
          <div class="flex justify-between ml-5 mt-5 w-full md:m-0">
            <div>
              <button
                class="
                  p-1
                  bg-[#12acfd]
                  rounded
                  text-white
                  min-w-[200px]
                  md:min-w-[120px]
                  lg:min-w-[150px] lg:p-2
                  md:m-0
                "
              >
                Add to List
              </button>
            </div>
            <div
              class="
                bg-[#ec294b]
                text-white
                rounded
                ml-5
                w-[33px]
                h-[33px]
                lg:w-[40px] lg:h-[40px]
                md:w-[35px] md:h-[33px]
              "
            >
              <p class="p-2 lg:p-3 md:p-2">
                <i class="fas fa-heart"></i>
              </p>
            </div>
          </div>
        </div>
        <div class="w-4/5 lg:w-4/5 md:w-3/4 md:mt-5 md:ml-8">
          <h1 class="md:text-2xl text-[#5c728a]">{{ Media.title.english }}</h1>
          <div class="hidden md:block md:anime-detail__header__description">
            <p v-html="getDescription(500)"></p>
            <span
              class="
                py-4
                -mb-4
                font-bold
                text-center
                hover:text-red-500
                cursor-pointer
              "
              :class="isHide ? 'block' : 'hidden'"
              @click="getFull"
            >
              Read more
            </span>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <ul class="flex justify-center">
          <li>
            <nuxt-link
              :to="`/anime/${$route.params.id}`"
              class="px-2 hover:text-red-500"
            >
              Overview
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="`/anime/${$route.params.id}/character`"
              class="px-2 hover:text-red-500"
            >
              Character
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="`/anime/${$route.params.id}/watch`"
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
      query: require("../../../graphql/query/detailAnime.gql"),
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
.body__left {
  border: 1px solid red;
}
</style>