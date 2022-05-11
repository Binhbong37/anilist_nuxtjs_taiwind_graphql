<template >
  <div>
    <div v-if="loading > 0">Loading</div>
    <!-- Actual view -->
    <div v-else>
      <PostList :hoz="false" :MediaList="mediaTrends" title="Trending" />
      <PostList
        :hoz="false"
        :MediaList="mediaPopulars"
        title="Popular this season"
      />
      <PostList
        :hoz="false"
        :MediaList="mediaPopulars"
        title="UPCOMING NEXT SEASON"
      />
      <PostList :hoz="true" :MediaList="topAnime" title="Top anime" />
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
const mediaQuery = gql`
  query tags($page: Int) {
    mediaTrends: Page(page: $page, perPage: 6) {
      data: media(sort: TRENDING_DESC) {
        ...comparisonFields
      }
    }
    mediaPopulars: Page(page: $page, perPage: 6) {
      data: media(sort: POPULARITY_DESC) {
        ...comparisonFields
      }
    }

    topAnime: Page(page: $page, perPage: 10) {
      data: media(sort: SCORE_DESC, type: ANIME) {
        id
        season
        trending
        genres
        popularity
        seasonYear
        format
        averageScore
        episodes
        duration
        status
        coverImage {
          extraLarge
          large
          medium
          color
        }
        title {
          romaji
          english
          native
          userPreferred
        }
      }
    }
  }

  fragment comparisonFields on Media {
    id
    format
    averageScore
    episodes
    studios(isMain: true) {
      nodes {
        name
      }
    }
    status
    coverImage {
      extraLarge
      large
      medium
      color
    }
    nextAiringEpisode {
      episode
      airingAt
    }
    genres
    title {
      romaji
      english
      native
      userPreferred
    }
  }
`;

export default {
  apollo: {
    media: {
      query: mediaQuery,
      loadingKey: "loading",
      manual: true,
      result({ data, loading }) {
        if (!loading) {
          console.log(data.mediaTrends.data);
          this.mediaTrends = data.mediaTrends.data;
          this.mediaPopulars = data.mediaPopulars.data;
          this.topAnime = data.topAnime.data;
        }
      },
    },
  },

  data() {
    return {
      loading: 0,
      mediaTrends: [],
      topAnime: [],
      mediaPopulars: [],
    };
  },

  created() {
    //   console.log(mediaTrends);
  },
};
</script>
<style >
</style>
