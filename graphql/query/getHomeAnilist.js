import gql from "graphql-tag";

export const getPageAnime = gql`
  query ($page: Int) {
    getAllAnime: Page(page: $page) {
      data: media(type: ANIME) {
        title {
          english
          native
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
        }
      }
    }
  }
`;
export const getPageManga = gql`
  query ($page: Int) {
    getAllManga: Page(page: $page) {
      data: media(type: MANGA) {
        title {
          english
          native
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
        }
      }
    }
  }
`;
