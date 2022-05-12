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
        <p>
          {{ Media.description }}
        </p>
      </div>
    </div>
    <div class="">
      <ul class="flex justify-center text-xl">
        <button
          v-for="char in key"
          :key="char.url"
          class="px-2 hover:text-red-500"
        >
          {{ char.label }}
        </button>
      </ul>
    </div>
    <div class="min-h-[100px] bg-[#e5ebf1] p-12 flex">
      <div class="w-2/6">
        <SideBarLeft />
      </div>
      <div class="min-h-[100px] w-4/6 ml-7">
        <div class="character">
          <h1>Characters</h1>
          <div class="grid grid-cols-2 gap-5">
            <div
              v-for="(data, index) in Media.characters.edges"
              :key="index"
              class="
                bg-white
                max-w-[321px] max-h-[81px]
                shadow
                flex
                justify-between
              "
            >
              <div class="flex">
                <img
                  :src="data.node.image.medium"
                  alt="Image"
                  class="w-[60px] h-[80px]"
                />
                <div class="text-[12px] p-2 itme">
                  <h1>{{ data.node.name.userPreferred }}</h1>
                  <p>{{ data.role.toLowerCase() }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="watch">
          <h1>Watch</h1>
        </div>
      </div>
    </div>
    <p>{{ $route.params.id }}</p>
    <p>{{ $route.params.name }}</p>
  </div>
</template>

<script>
import SideBarLeft from "../../../components/DetailPage/SideBarLeft.vue";
import gql from "graphql-tag";
const getMedia = gql`
  query getMedia($id: Int) {
    Media(id: $id, type: MANGA) {
      id
      bannerImage
      coverImage {
        large
        medium
      }
      title {
        romaji
        english
        native
      }
      description
      characters(perPage: 6) {
        edges {
          node {
            id
            image {
              large
              medium
            }
            name {
              userPreferred
            }
          }
          role
        }
      }
    }
  }
`;

export default {
  layout: "detail",
  components: {
    SideBarLeft,
  },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { id } = params;
    const res = await client.query({
      query: getMedia,
      variables: {
        id,
      },
    });
    const { Media } = res.data;
    return {
      Media,
    };
  },

  data() {
    return {
      key: [
        { url: "/anime/2", label: "Overview" },
        { url: "/anime/2/character", label: "Character" },
        { url: "/anime/2/watch", label: "Watch" },
      ],
      inforCharacter: [],
    };
  },
  methods: {},
};
</script>

<style>
</style>