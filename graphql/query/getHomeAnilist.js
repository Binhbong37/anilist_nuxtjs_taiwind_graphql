import gql from "graphql-tag";

export const getPageAnime = gql`
  query ($page: Int, $sort: [MediaSort]) {
    getAllAnime: Page(page: $page) {
      data: media(type: ANIME, sort: $sort) {
        title {
          english
          native
          userPreferred
        }
        coverImage {
          large
        }
        id
      }
    }
    MediaTrend: Page(perPage: 5) {
      data: media(sort: TRENDING_DESC, type: ANIME) {
        ...comparisonFields
      }
    }
    mediaPopulation: Page(perPage: 5) {
      data: media(sort: POPULARITY_DESC, type: ANIME) {
        ...comparisonFields
      }
    }
    topMedia: Page(perPage: 5) {
      data: media(sort: SCORE_DESC, type: ANIME) {
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
export const getPageManga = gql`
  query ($page: Int, $sort: [MediaSort]) {
    getAllManga: Page(page: $page) {
      data: media(type: MANGA, sort: $sort) {
        title {
          english
          native
          userPreferred
        }
        coverImage {
          large
        }
        id
      }
    }
    MediaTrend: Page(page: $page, perPage: 5) {
      data: media(sort: TRENDING_DESC, type: MANGA) {
        ...comparisonFields
      }
    }
    mediaPopulation: Page(page: $page, perPage: 5) {
      data: media(sort: POPULARITY_DESC, type: MANGA) {
        ...comparisonFields
      }
    }
    topMedia: Page(page: $page, perPage: 5) {
      data: media(sort: SCORE_DESC, type: MANGA) {
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
