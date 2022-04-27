<template>
  <div class="p-8">
    <h1 class="text-center font-bold">Hello word</h1>
    <div>
      <img :src="Media.bannerImage" alt="Anime" />
      <h2 class="p-35">{{ Media.title.english }}</h2>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const query = gql`
  query {
    Media(type: ANIME) {
      bannerImage
      id
      title {
        english
        native
        romaji
      }
    }
  }
`;

export default {
  apollo: {
    Media: {
      query: query,
    },
  },
  data() {
    return {
      test: "ABC",
    };
  },
};
</script>