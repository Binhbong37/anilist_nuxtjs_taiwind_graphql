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
    mediaPopulation: Page(perPage: 5) {
      data: media(sort: POPULARITY_DESC, type: ANIME) {
        id
        coverImage {
          large
        }
        title {
          english
          native
          userPreferred
        }
      }
    }
    topMedia: Page(perPage: 5) {
      data: media(sort: SCORE_DESC, type: ANIME) {
        id
        genres
        coverImage {
          large
        }
        title {
          english
          native
          userPreferred
        }
      }
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
    mediaPopulation: Page(page: $page, perPage: 5) {
      data: media(sort: POPULARITY_DESC, type: MANGA) {
        id
        coverImage {
          large
        }
        title {
          english
          native
          userPreferred
        }
      }
    }
    topMedia: Page(page: $page, perPage: 5) {
      data: media(sort: SCORE_DESC, type: MANGA) {
        id
        genres
        coverImage {
          large
        }
        title {
          english
          native
          userPreferred
        }
      }
    }
  }
`;
