<template>
  <div class="container mx-auto pt-5">
    <h1 class="text-2xl font-bold">Anime Next Season - Airing Summer 2022</h1>
    <!-- form search -->
    <div>form search here</div>
    <!-- loading data -->
    <div class="grid grid-cols-5 gap-5">
      <nuxt-link
        :to="`/anime/${trending.id}`"
        v-for="trending in Page.media"
        :key="trending.id"
        class="text-center"
      >
        <img
          :src="trending.coverImage.large"
          alt="Trending"
          class="w-[185px] h-[265px] rounded"
        />
        <h1>{{ trending.title.english }}</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
const getTrending = gql`
  query getTag {
    Page {
      media(sort: POPULARITY_DESC) {
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
  }
`;
export default {
  apollo: {
    Page: {
      query: getTrending,
    },
  },
};
</script>

<style>
</style>