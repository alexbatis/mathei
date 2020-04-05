import { Lesson } from "../../models/Lesson"
import { Translation } from "../../models/Translation";

const emptyWord = new Translation({ phrase: '', translated: '' })
const emptyExercise = new Translation({ phrase: '', translated: '', tags: ['exercise'] })

export const emptyTranslation = (type: 'words' | 'exercises' = 'words') => (type === 'words') ? emptyWord : emptyExercise

export const formatLesson = (lesson: Lesson) => {

  const formattedLesson = JSON.parse(JSON.stringify(lesson))
  delete formattedLesson.id


  for (let i = formattedLesson.translations.length - 1; i >= 0; i--) {
    if (!formattedLesson.translations[i].phrase || !formattedLesson.translations[i].translated)
      formattedLesson.translations.splice(i, 1)
  }

  for (let i = formattedLesson.resources.length - 1; i >= 0; i--)
    if (!formattedLesson.resources[i] || formattedLesson.resources[i] === '')
      formattedLesson.resources.splice(i, 1)

  return formattedLesson
}


export const emptyLesson = new Lesson({
  translations: [
    emptyWord,
    emptyExercise
  ],
  resources: ['']
})



export default emptyLesson