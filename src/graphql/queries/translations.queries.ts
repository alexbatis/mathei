/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import gql from 'graphql-tag';


/* -------------------------------------------------------------------------- */
/*                                   QUERIES                                  */
/* -------------------------------------------------------------------------- */
const translationsQuery = gql`
  query TranslationsQuery {
    translations {
      id
      phrase
      translated
      createdAt
      tags
      lesson {
        id
        name
      }
    }
  }
`;

const paginatedTranslationsQuery = gql`
  query PaginatedTranslations($opts: PaginationOpts) {
    translations: paginatedTranslations(opts : $opts) {
      id
      phrase
      translated
      createdAt
      tags
      lesson {
        id
        name
      }
    }
  }
`;

export const translationsQueries = {
  translationsQuery,
  paginatedTranslationsQuery
}