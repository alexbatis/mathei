/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { useQuery, useMutation, MutationHookOptions } from '@apollo/react-hooks';
import { PureQueryOptions } from 'apollo-boost';
/* --------------------------------- CUSTOM --------------------------------- */
import { lessonQueries } from '../queries/lesson.queries';
import { lessonsQueries } from '../queries/lessons.queries';
import { stripTypenames, toClassInstance } from '../utils';
import { Lesson } from '../../models/Lesson';
import { translationsQueries } from '../queries/translations.queries';


/* -------------------------------------------------------------------------- *Z
/*                            QUERY HOOK DEFINITION                           */
/* -------------------------------------------------------------------------- */
export const useLesson = (id: string) => {
  const { data, error, loading } = useQuery(lessonQueries.lessonQuery, { variables: { id } });

  return {
    lesson: toClassInstance(Lesson, data ? data.lesson : null) || null,
    error,
    loading
  }
}


/* -------------------------------------------------------------------------- */
/*                          MUTATION HOOK DEFINITION                          */
/* -------------------------------------------------------------------------- */
export const useMutateLesson = (id?: string) => {
  const refetchQueries: Array<string | PureQueryOptions> = [{ query: lessonsQueries.lessonsQuery }]
  if (id) {
    refetchQueries.push({ query: lessonQueries.lessonQuery, variables: { id } })
    refetchQueries.push({ query: translationsQueries.translationsQuery, variables: { id } })
  }
  const [addLesson, addLessonResult] = useMutation(lessonQueries.createLessonQuery, { refetchQueries })
  const [deleteLesson] = useMutation(lessonQueries.deleteLessonQuery, { refetchQueries })
  const [updateLesson] = useMutation(lessonQueries.updateLessonQuery, { refetchQueries })

  return {
    addLesson,
    addLessonResult,
    deleteLesson: (id: string, options: MutationHookOptions = {}) => deleteLesson(Object.assign({ variables: { id } }, options)),
    updateLesson: (id: string, lesson: object, options: MutationHookOptions = {}) => updateLesson(Object.assign({ variables: { id, lesson: stripTypenames(lesson) } }, options)),

  }
}