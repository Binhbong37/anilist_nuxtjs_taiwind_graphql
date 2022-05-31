import gql from "graphql-tag";

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
