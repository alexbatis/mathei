/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import { useQuery } from '@apollo/react-hooks';
/* --------------------------------- CUSTOM --------------------------------- */
import { translationsQueries } from '../queries/translations.queries';
import { Translation } from '../../models/Translation';
import { toClassArrayInstance } from '../utils';
import { PaginationOpts } from '../../models/PaginationOpts';

/* -------------------------------------------------------------------------- */
/*                            QUERY HOOK DEFINITION                           */
/* -------------------------------------------------------------------------- */
export const useTranslations = () => {
  const { data, error, loading } = useQuery(translationsQueries.translationsQuery);

  return {
    translations: toClassArrayInstance(Translation, data?.translations) || [],
    error,
    loading
  }
}

export const usePaginatedTranslations = (opts: PaginationOpts) => {
  const { data, error, loading } = useQuery(translationsQueries.paginatedTranslationsQuery, { variables: { opts } });

  return {
    translations: toClassArrayInstance(Translation, data?.translations) || [],
    error,
    loading
  }
}