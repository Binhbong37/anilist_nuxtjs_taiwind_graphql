<template>
  <div>
    <img :src="Media.bannerImage" alt="Banner" />
    <h1 class="font-bold text-2xl text-center">{{ Media.title.romaji }}</h1>
  </div>
</template>

<script>
import gql from "graphql-tag";
const getMedia = gql`
  query getMedia($id: Int) {
    Media(id: $id) {
      id
      bannerImage
      title {
        romaji
        english
        native
      }
    }
  }
`;
export default {
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
};
</script>

<style>
</style>