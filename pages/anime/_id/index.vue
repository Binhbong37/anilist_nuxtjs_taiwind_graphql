<template>
  <div>
    <img :src="Media.bannerImage" alt="banner" />
    <div class="px-12 flex">
      <div class="w-2/6">
        <img
          :src="Media.coverImage.large"
          alt="imageLarge"
          class="rouder -mt-24 mb-5 w-3/4"
        />
        <div>
          <span class="sm:p-2 bg-[#12acfd] rounded text-white w-10 h-10">
            Add to List
          </span>

          <span
            class="bg-red-700 text-white rounded min-w-10 min-h-10 p-2 ml-10"
            ><i class="fas fa-heart"></i>
          </span>
        </div>
      </div>
      <div class="w-5/6 mt-5">
        <h1 class="text-2xl font-bold">{{ Media.title.english }}</h1>
        <div class="anime-detail__header__description">
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
      <ul class="flex justify-center text-xl">
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
    <div class="min-h-[100px] bg-[#e5ebf1] p-12 flex">
      <div class="w-2/6">
        <SideBarLeft />
      </div>
      <div class="min-h-[100px] w-4/6 ml-7">
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
import Character from "../../../components/DetailPage/Character.vue";

export default {
  layout: "detail",
  components: { SideBarLeft, Character },
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
</style>