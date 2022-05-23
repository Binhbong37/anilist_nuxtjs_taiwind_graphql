import gql from "graphql-tag";

export const getTrendingManga = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(type: MANGA, sort: TRENDING_DESC) {
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
export const getTrendingAnime = gql`
  query ($page: Int) {
    Page(page: $page) {
      media(type: ANIME, sort: TRENDING_DESC) {
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
