<template>
  <div>
    <h1>Fetch data</h1>
    <div class="grid grid-cols-5 gap-5">
      <nuxt-link
        v-for="trend in MediaTrend"
        :key="trend.id"
        :to="`users/${trend.id}`"
      >
        <img :src="trend.coverImage.medium" alt="medium" class="my-0 mx-auto" />
        <h1 class="text-center">{{ trend.id }} {{ trend.title.english }}</h1>
      </nuxt-link>
    </div>
    <!-- POPULATION -->
    <div class="grid grid-cols-5 gap-5">
      <nuxt-link
        v-for="trend in mediaPopulation"
        :key="trend.id"
        :to="`users/${trend.id}`"
        class="border-4 text-center"
      >
        <img :src="trend.coverImage.medium" alt="medium" class="my-0 mx-auto" />
        <h1>{{ trend.id }} {{ trend.title.english }}</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
const getPage = gql`
  query getTag($page: Int) {
    MediaTrend: Page(page: $page, perPage: 5) {
      data: media(sort: TRENDING_DESC) {
        title {
          english
          native
        }
        coverImage {
          medium
        }
        id
      }
    }
    mediaPopulation: Page(page: $page, perPage: 5) {
      data: media(sort: POPULARITY_DESC) {
        id
        coverImage {
          medium
        }
        title {
          english
          native
        }
      }
    }
  }
`;
export default {
  data() {
    return {
      MediaTrend: [],
      mediaPopulation: [],
    };
  },
  apollo: {
    Page: {
      query: getPage,
      variables: {
        page: 1,
      },
      result({ data, loading }) {
        if (!loading) {
          this.MediaTrend = data.MediaTrend.data;
          this.mediaPopulation = data.mediaPopulation.data;
        }
      },
    },
  },
};
</script>

<style>
</style>