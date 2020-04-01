import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { IonButton, IonLabel, IonItem, IonInput, IonRow, IonCol, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonGrid, IonLoading, IonToast, IonSegment, IonSegmentButton, IonCheckbox } from "@ionic/react";
import { useMutateLesson } from "../../graphql";
import { useHistory } from 'react-router';
import { ExecutionResult } from "graphql";
import { MutationResult } from '@apollo/react-common';

/*
  fix :
    - removing a dynamic control will remove all controls
    - add validation
  
*/


const LessonForm: React.FC = () => {
  const history = useHistory();
  const { addLesson, updateLesson, addLessonResult } = useMutateLesson() // lesson?.id
  const { control, handleSubmit, formState, triggerValidation } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields: resources, append: appendResource, remove: removeResource, } = useFieldArray({ control, name: "resources" });
  const { fields: translations, append: appendTranslation, remove: removeTranslation } = useFieldArray({ control, name: "translations" });


  const submit = async (lesson) => {
    console.log(lesson)
    console.log('add lesson', lesson)
    const addLessonResult = await addLesson({ variables: { input: lesson } })
    if (addLessonResult?.data?.lesson?.id)
      history.replace(`/lesson/${addLessonResult.data.lesson?.id}`)
  }


  const loadingIndicator = () => <IonLoading isOpen={true} message={'Creating your lesson'} />

  const errorToast = () => <IonToast
    isOpen={true}
    message={addLessonResult.error?.message}
    duration={2000}
  />


  console.log(addLessonResult)
  const lessonForm = () =>
    <IonGrid className="column-evenly" fixed={true}>
      <form onSubmit={handleSubmit(submit)}>

        <IonRow>
          <IonCol size-sm>
            <IonItem>
              <IonLabel position="floating">Lesson Name</IonLabel>
              <Controller
                as={IonInput}
                control={control}
                onChangeName="onIonChange"
                name="name"
                rules={{ required: true }}
              />
            </IonItem>
          </IonCol>
        </IonRow>


        {resources.map((item, index) => (
          <div key={item.id}>
            <IonCol size="12" >
              <IonItem>
                <IonLabel position="floating">Resource</IonLabel>
                <Controller
                  as={<IonInput name={`resources[${index}]`} />}
                  control={control}
                  onChangeName="onIonChange"
                  defaultValue=""
                  onChange={([selected]) => selected.detail.value}
                  name={`resources[${index}]`}
                  rules={{ required: true }}
                />
              </IonItem>
            </IonCol>
            <IonCol size="2">
              <IonButton type="button" onClick={() => removeResource(index)} >
                Remove Resource {index}
              </IonButton>
            </IonCol>
          </div>
        ))}

        <IonButton expand="full" color="secondary" type="button" onClick={() => appendResource({})} >
          Add Resource
        </IonButton>

        {translations.map((item, index) => (
          <div key={`translation-${index}`}>
            <IonCol size-md="12" size-lg="6">
              <IonItem>
                <IonLabel position="floating">Phrase</IonLabel>
                <Controller
                  as={IonInput}
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => selected.detail.value}
                  name={`translations[${index}].phrase`}
                  rules={{ required: true }}
                />
              </IonItem>
            </IonCol>
            <IonCol size-md="12" size-lg="6">
              <IonItem>
                <IonLabel position="floating">Translation</IonLabel>
                <Controller
                  as={IonInput}
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => selected.detail.value}
                  name={`translations[${index}].translated`}
                  rules={{ required: true }}
                />
              </IonItem>
            </IonCol>
            <IonRow>
              <IonCol size="3">
                <Controller
                  as={IonCheckbox}
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log(selected)
                    return (selected.detail.value === 'on') ? ['exercise'] : []
                  }}
                  name={`translations[${index}].tags`}
                />
                <IonLabel>Exercise</IonLabel>
              </IonCol>
              <IonCol size="6">
                <IonButton type="button" onClick={() => removeTranslation(index)} >
                  Remove Translation
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        ))}

        <IonButton expand="full" color="secondary" type="button" onClick={() => appendTranslation({ phrase: '', translated: '', tags: [] })} >
          Add Translation
    </IonButton>

        <IonButton expand="full" type="submit" >Submit</IonButton>
      </form>
    </IonGrid>

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle color="secondary">New Lesson</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        {addLessonResult.error && errorToast()}
        {addLessonResult?.loading ? loadingIndicator() : lessonForm()}



      </IonContent>
    </IonPage>

  )
}

export default LessonForm