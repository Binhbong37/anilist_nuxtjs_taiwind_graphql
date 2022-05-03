<template>
  <div>
    <img :src="Media.bannerImage" alt="banner" />
    <div class="px-12 flex">
      <div>
        <img
          :src="Media.coverImage.large"
          alt="imageLarge"
          class="w-80 -mt-4 sm:-mt-20 md:-mt-36 mb-2"
        />
        <button class="sm:p-2 bg-[#12acfd] rounded text-white">
          Add to List
        </button>
      </div>
      <div class="p-6">
        <h1 class="text-2xl font-bold">{{ Media.title.english }}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur deserunt a! Tenetur consequuntur rem omnis, magni possimus
          facilis illo accusamus fugiat maiores? Debitis enim maxime aspernatur
          error accusantium reiciendis!
        </p>
      </div>
    </div>
    <div class="">
      <ul class="flex justify-center text-xl">
        <button
          v-for="char in key"
          :key="char.url"
          @click="handleRoute(char.url)"
          class="px-2 hover:text-red-500"
        >
          {{ char.label }}
        </button>
      </ul>
    </div>
    <div class="min-h-[100px] bg-[#e5ebf1] p-12">
      <div v-if="title === '/anime/2'">
        <Hero :title="title" />
      </div>
      <div v-else-if="title === '/anime/2/character'">
        <p>Khac biet</p>
        <Hero :title="title" />
      </div>
      <p>{{ $route.params.id }}</p>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
const getMedia = gql`
  query getMedia($id: Int) {
    Media(id: $id) {
      id
      bannerImage
      coverImage {
        large
      }
      title {
        romaji
        english
        native
      }
    }
  }
`;

export default {
  layout: "detail",
  apollo: {
    Media: {
      query: getMedia,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
  data() {
    return {
      title: "",
      key: [
        { url: "/anime/2", label: "Overview" },
        { url: "/anime/2/character", label: "Character" },
        { url: "/anime/2/watch", label: "Watch" },
      ],
    };
  },
  methods: {
    handleRoute(url) {
      return (this.title = url);
    },
  },
};
</script>

<style>
</style>