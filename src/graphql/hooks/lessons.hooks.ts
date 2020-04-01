/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { useQuery } from '@apollo/react-hooks';
/* --------------------------------- CUSTOM --------------------------------- */
import { lessonsQueries } from '../queries/lessons.queries';
import { Lesson } from '../../models/Lesson';
import { toClassArrayInstance } from '../utils';


/* -------------------------------------------------------------------------- */
/*                            QUERY HOOK DEFINITION                           */
/* -------------------------------------------------------------------------- */
export const useLessons = () => {
  const { data, error, loading } = useQuery(lessonsQueries.lessonsQuery);
  return {
    lessons: toClassArrayInstance(Lesson, data?.lessons) || [],
    error,
    loading
  }
}