import gql from "graphql-tag";

export const searchQuery = gql`
  query searchAnime($query: String, $type: MediaType, $season: MediaSeason) {
    Page {
      media(search: $query, type: $type, season: $season) {
        id
        title {
          userPreferred
        }
        averageScore
        coverImage {
          extraLarge
          medium
        }
        episodes
        nextAiringEpisode {
          episode
        }
        studios(isMain: true) {
          nodes {
            name
            isAnimationStudio
          }
        }
        mediaListEntry {
          id
          status
          score
          progress
        }
      }
    }
  }
`;
