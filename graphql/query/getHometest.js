import gql from "graphql-tag";

export const mediaQuery = gql`
  query tags($page: Int) {
    mediaTrends: Page(page: $page, perPage: 6) {
      data: media(sort: TRENDING_DESC, type: MANGA) {
        ...comparisonFields
      }
    }
    upComingSeason: Page(page: $page, perPage: 6) {
      data: media(
        type: MANGA
        sort: POPULARITY_DESC
        season: SUMMER
        seasonYear: 2022
      ) {
        ...comparisonFields
      }
    }
    popularSeason: Page(page: $page, perPage: 6) {
      data: media(
        type: MANGA
        sort: POPULARITY_DESC
        season: SPRING
        seasonYear: 2022
      ) {
        ...comparisonFields
      }
    }
    mediaPopulars: Page(page: $page, perPage: 6) {
      data: media(sort: POPULARITY_DESC, type: MANGA) {
        ...comparisonFields
      }
    }

    topAnime: Page(page: $page, perPage: 10) {
      data: media(sort: SCORE_DESC, type: MANGA) {
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
        studios(isMain: true) {
          nodes {
            name
          }
        }
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

export const getMedia = gql`
  query (
    $page: Int
    $perPage: Int
    $season: MediaSeason
    $type: MediaType
    $searchString: String
    $genre: String
    $format: MediaFormat
  ) {
    getAllMedia: Page(page: $page) {
      data: media(
        type: $type
        season: $season
        search: $searchString
        genre: $genre
        format: $format
      ) {
        ...comparisonFields
      }
    }
    MediaTrend: Page(perPage: $perPage) {
      data: media(sort: TRENDING_DESC, type: $type) {
        ...comparisonFields
      }
    }
    mediaPopulation: Page(perPage: $perPage) {
      data: media(sort: POPULARITY_DESC, type: $type) {
        ...comparisonFields
      }
    }
    topMedia: Page(perPage: $perPage) {
      data: media(sort: SCORE_DESC, type: $type) {
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

export const getTrendMedia = gql`
  query ($page: Int, $sort: [MediaSort], $type: MediaType) {
    Page(page: $page) {
      pageInfo {
        hasNextPage
      }
      media(sort: $sort, type: $type) {
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
