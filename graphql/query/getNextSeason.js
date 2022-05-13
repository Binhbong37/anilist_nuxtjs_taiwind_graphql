import gql from "graphql-tag";

export const getNextSeasonManga = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(type: MANGA, sort: POPULARITY_DESC) {
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
  }
`;
export const getNextSeasonAnime = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(type: ANIME, sort: POPULARITY_DESC) {
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
  }
`;
