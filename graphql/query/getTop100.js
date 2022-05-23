import gql from "graphql-tag";

export const getTop100Manga = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(type: MANGA, sort: SCORE_DESC) {
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
  }
`;
export const getTop100Anime = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(type: ANIME, sort: SCORE_DESC) {
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
  }
`;
