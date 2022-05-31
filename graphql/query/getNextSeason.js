import gql from "graphql-tag";

export const getPopularAnime = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(sort: POPULARITY_DESC, type: ANIME) {
        ...comparisonFields
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
export const getPopularManga = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(sort: POPULARITY_DESC, type: MANGA) {
        ...comparisonFields
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
