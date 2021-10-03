import { gql } from "@apollo/client";

export const GET_MOVIES_AND_PEOPLE = gql`
  query GetMoviesAndPeople {
    movies {
      popular(first: 100) {
        edges {
          node {
            id
            title
            poster(size: Original)
            credits {
              cast {
                value {
                  id
                  name
                  profilePicture(size: Original)
                }
              }
            }
          }
        }
      }
    }
    people {
      popular(first: 100) {
        edges {
          node {
            id
            name
            profilePicture(size: Original)
            credits {
              movies {
                cast {
                  value {
                    id
                    title
                    poster(size: Original)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
