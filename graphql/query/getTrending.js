import gql from "graphql-tag";

export const getTrendAnime = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(sort: TRENDING_DESC, type: ANIME) {
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
export const getTrendManga = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(sort: TRENDING_DESC, type: MANGA) {
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
