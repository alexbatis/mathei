/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import gql from 'graphql-tag';


/* -------------------------------------------------------------------------- */
/*                                   QUERIES                                  */
/* -------------------------------------------------------------------------- */
const lessonsQuery = gql`
  query LessonsQuery {
    lessons {
      id
      user
      name
      createdAt
      translations {
        id
        phrase
        translated
        tags
      }
    }
  }
`;

export const lessonsQueries = {
  lessonsQuery
}