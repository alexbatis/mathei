/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import gql from 'graphql-tag';
/* ------------------------------- THIRD PARTY ------------------------------ */
import { combineQueries } from '../utils';
import { TranslationFragment } from './fragments/translation.fragments';


/* -------------------------------------------------------------------------- */
/*                                   QUERIES                                  */
/* -------------------------------------------------------------------------- */
const lessonQuery = gql`
  query LessonQuery($id :ID!){
      lesson(id: $id) {
        id
        name
        resources
        translations {
          ...TranslationFragment
        }
    }
  }
`;

const createLessonQuery = gql`
  mutation CreateLesson($input : CreateLessonInput) {
    lesson : createLesson(lesson :$input) {
      id
      name
    }
  }
`

const deleteLessonQuery = gql`
  mutation DeleteLesson($id :ID!) {
    deleteLesson(id : $id) {
      id
    }
  }
`

const updateLessonQuery = gql`
  mutation UpdateLessonQuery($id: ID!, $lesson: UpdateLessonInput) {
    updateLesson(id: $id, lesson: $lesson) {
      id
      name
    }
  }
`


export const lessonQueries = {
  lessonQuery: combineQueries(lessonQuery, TranslationFragment),
  createLessonQuery,
  deleteLessonQuery,
  updateLessonQuery
}