/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- CUSTOM --------------------------------- */
import React, { useState } from "react";
import { IonButton, IonLabel, IonItem, IonInput, IonRow, IonCol, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonGrid, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonIcon, IonFooter } from "@ionic/react";
import { useHistory, useParams } from 'react-router';
import { add } from "ionicons/icons";
import { Formik, Form, FieldArray } from 'formik';
/* --------------------------------- CUSTOM --------------------------------- */
import './LessonForm.scss'
import { useMutateLesson, useLesson } from "../../graphql";
import TranslationInputCard from "./TranslationInputCard";
import ResourcesInputCard from './ResourcesInputCard';
import emptyLesson, { emptyTranslation, formatLesson } from "./LessonForm.utils";
import { loadingIndicator, errorToast } from '../../services/component-utils';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const LessonForm: React.FC = () => {

  /* ---------------------------------- HOOKS --------------------------------- */
  const { lessonId } = useParams()
  const history = useHistory();
  const { lesson: initialLesson, loading: initialLessonLoading } = useLesson(lessonId);
  const { addLesson, updateLesson, addLessonResult, updateLessonResult } = useMutateLesson(lessonId)
  const [activeTab, setActiveTab] = useState('words')


  /* --------------------------------- METHODS -------------------------------- */
  const submit = async (lesson) => {
    const formattedLesson = formatLesson(lesson)
    const mutationResult = lessonId ?
      await updateLesson(lessonId, formattedLesson) :
      await addLesson({ variables: { input: formattedLesson } })

    if (mutationResult?.data?.lesson?.id)
      history.replace(`/lesson/${mutationResult.data.lesson?.id}`)
  }


  /* ----------------------------- RENDER METHODS ----------------------------- */
  const lessonNameInput = ({ values: { values } }) =>
    <IonRow>
      <IonCol size-sm>
        <IonItem class="bg-transparent">
          <IonLabel position="floating">Lesson Name</IonLabel>
          <IonInput
            name="name"
            value={values.name}
            onIonChange={(e: any) => { values.name = e.detail.value }}
          />
        </IonItem>
      </IonCol>
    </IonRow>


  const tabSet = () =>
    <IonRow>
      <IonSegment value={activeTab} onIonChange={(e: any) => setActiveTab(e.detail.value)} mode="md">
        <IonSegmentButton value="words" mode="md">
          <IonLabel>Words</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="exercises" mode="md">
          <IonLabel>Exercises</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="resources" mode="md">
          <IonLabel>Resources</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonRow>



  const tabContent = ({ values }) => {
    switch (activeTab) {
      case 'words':
        return translationsForm({ values, type: 'words' })
      case 'exercises':
        return translationsForm({ values, type: 'exercises' })
      case 'resources':
        return resourcesForm(values)
      default:
        return null;
    }
  }

  const filterTranslations = (type, translation) =>
    (type === 'exercises' && !translation.tags?.includes('exercise')) ||
    (type === 'words' && translation.tags?.includes('exercise'))


  const translationsForm = ({ values, type }) => <>
    <FieldArray
      name="translations"
      render={arrayHelpers => <> {
        values.translations.map((translation, index) => filterTranslations(type, translation) ? null : (
          <div key={index}>
            <TranslationInputCard
              translation={translation}
              remove={() => arrayHelpers.remove(index)}
              update={(e) => {
                values.translations[index][e.name] = e.value
              }}
            />
          </div>
        ))}

        <IonCard className="bk-white" onClick={() => arrayHelpers.insert(values.translations.length, emptyTranslation(type))}>
          <IonCardContent className="add-card-content">
            <IonIcon icon={add} /> Add {type === 'words' ? 'Word' : 'Exercise'}
          </IonCardContent>
        </IonCard>
      </>
      }
    />
  </>

  const resourcesForm = (values) => <>
    <FieldArray
      name="resources"
      render={arrayHelpers => <> {
        values.resources.map((resource, index) =>
          <div key={index}>
            <ResourcesInputCard
              resource={values.resources[index]}
              remove={() => arrayHelpers.remove(index)}
              update={(e) => { values.resources[index] = e }}
            />
          </div>
        )}

        <IonCard className="bk-white" onClick={() => arrayHelpers.insert(values.resources.length, '')}>
          <IonCardContent className="add-card-content">
            <IonIcon icon={add} /> Add Resource
          </IonCardContent>
        </IonCard>
      </>
      }
    />
  </>

  const loadingIndicators =
    <>
      {loadingIndicator(addLessonResult.loading, 'Creating lesson...')}
      {loadingIndicator(updateLessonResult.loading, 'Updating lesson...')}
      {loadingIndicator(initialLessonLoading, 'Loading lesson...')}
    </>

  const errorToasts =
    <>
      {errorToast(addLessonResult.error)}
      {errorToast(updateLessonResult.error)}
    </>


  const page = (values) => (
    <Form>
      <IonPage>
        <IonHeader className="bg-white">
          <IonToolbar className="bg-white">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle color="secondary">{lessonId ? 'Edit Lesson' : 'New Lesson'}</IonTitle>
          </IonToolbar>
          {lessonNameInput({ values })}
          {tabSet()}
        </IonHeader>
        <IonContent>
          {loadingIndicators}
          {errorToasts}
          <IonGrid className="column-evenly" fixed={true}>
            {tabContent(values)}
          </IonGrid >
        </IonContent>
        <IonFooter>
          <IonToolbar>
            {/* <IonTitle> */}
              <IonButton expand="block" type="submit" style={{margin: "0.5rem"}}>{lessonId ? 'Update' : 'Create'} Lesson</IonButton>
            {/* </IonTitle> */}
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </Form>
  )


  return lessonId && initialLesson ?
    <Formik
      initialValues={initialLesson}
      onSubmit={submit}
      render={page}
    /> :
    <Formik
      initialValues={emptyLesson}
      onSubmit={submit}
      render={page}
    />
}

export default LessonForm