<template>
  <div>
    <h1>{{ test }}</h1>
  </div>
</template>

<script>
import gql from "graphql-tag";
const ABC = gql`
  query {
    Page(page: 1) {
      pageInfo {
        total
        currentPage
        hasNextPage
      }
      media {
        id
        season
        type
        status
        episodes
        description
        genres
      }
    }
  }
`;
export default {
  layout: "testPage",
  data() {
    return {
      test: ["abc"],
    };
  },
  apollo: {
    media: {
      query: ABC,
      manual: true,

      result({ data, loading }) {
        if (!loading) {
          console.log("a");
          this.test = data.Page.media;
        }
      },
    },
  },
};
</script>

<style>
</style>