<template>
  <div>
    <h1>Fetch data</h1>
    <div class="grid grid-cols-5 gap-5">
      <nuxt-link
        v-for="trend in Page.media"
        :key="trend.id"
        :to="`anime/${trend.id}`"
      >
        <img :src="trend.coverImage.medium" alt="medium" class="my-0 mx-auto" />
        <h1 class="text-center">{{ trend.id }} {{ trend.title.english }}</h1>
      </nuxt-link>

      <div v-observe-visibility="handleScrollToBottom"></div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
const getPage = gql`
  query getTag {
    Page {
      media(type: ANIME) {
        title {
          english
          native
        }
        coverImage {
          large
          medium
        }
        id
        genres
      }
    }
  }
`;
export default {
  apollo: {
    Page: {
      query: getPage,
    },
  },
  data() {
    return {
      page: {},
    };
  },
  methods: {
    handleScrollToBottom() {
      console.log("tEST new Plugin");
    },
  },
  mounted() {
    this.page = this.apollo;
  },
};
</script>

<style>
</style>