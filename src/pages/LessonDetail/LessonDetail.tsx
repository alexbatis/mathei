/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonHeader, IonPage, IonToolbar, IonIcon, IonRow, IonButtons, IonBackButton, IonSegment, IonSegmentButton, IonLabel, IonModal, IonTitle } from '@ionic/react';
import React, { useState } from 'react';
// import { more } from 'ionicons/icons';
import { useParams, useHistory } from 'react-router';
/* --------------------------------- CUSTOM --------------------------------- */
import './LessonDetail.scss';
import { useLesson, useMutateLesson } from '../../graphql/hooks/lesson.hooks';
import { Lesson } from '../../models/Lesson';
import ResourcePlayer from './sections/ResourcePlayer';
import LessonOptionsModal from './options-modal/LessonOptionsModal';
import PhraseList from './sections/PhraseList';
import { loadingIndicator } from '../../services/component-utils';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import { options } from 'ionicons/icons';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const LessonDetail: React.FC = () => {
  /* ---------------------------------- HOOKS --------------------------------- */
  let { lessonId } = useParams()
  const history = useHistory()
  if (!lessonId) throw new Error("No Lesson ID")
  const [showModal, setShowModal] = useState(false);
  const [valueType, setValueType] = useState('words');
  const { lesson, loading: loadingLesson } = useLesson(lessonId) // error, loading 
  const { deleteLesson, deleteLessonResult } = useMutateLesson(lessonId)

  const _deleteLesson = async () => {
    const deleteResult = await deleteLesson(lesson.id)
    if (!deleteResult.errors)
      history.replace('/lessons')

  }
  const editLesson = () => history.replace(`/lesson-form/${lesson.id}`)



  /* ----------------------------- RENDER METHODS ----------------------------- */
  const showInfoSegment = (lesson: Lesson) => {
    switch (valueType) {
      case 'words':
        return <PhraseList
          header="Words"
          translations={lesson.translations.filter(t => !t.tags?.includes('exercise'))}
        />;
      case 'exercises':
        return <PhraseList
          header="Exercises"
          translations={lesson.translations.filter(t => t.tags?.includes('exercise'))}
        />;
      case 'resources':
        return <div style={{padding: '2rem'}}>
          {lesson.resources?.map(resource => <ResourceCard resource={resource} />)}
        </div>
      default:
        return null;
    }
  }

  const pageHeader = () =>
    <IonHeader mode="md">
      <IonToolbar mode="md">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" mode="md" />
        </IonButtons>
        <IonTitle className="offset-title">{lesson?.name}</IonTitle>
        <IonButtons slot="end">
          <IonIcon onClick={() => { setShowModal(!showModal) }} icon={options} size="large" className="options-icon" mode="md" />
        </IonButtons>
      </IonToolbar>
      <div style={{ display: valueType === 'practice' ? 'none' : 'block' }}>
        <ResourcePlayer resources={lesson?.resources || []} />
      </div>
      {tabSet()}
    </IonHeader>

  const tabSet = () =>
    <IonRow>
      <IonSegment value={valueType} onIonChange={(e: any) => setValueType(e.detail.value)} mode="md">
        <IonSegmentButton className="segment-button" value="words" mode="md">
          <IonLabel>Words</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton className="segment-button" value="exercises" mode="md">
          <IonLabel>Exercises</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton className="segment-button" value="resources" mode="md">
          <IonLabel>Resources</IonLabel>
        </IonSegmentButton>
        {/* <IonSegmentButton value="practice" mode="md">
          <IonLabel>practice</IonLabel>
        </IonSegmentButton> */}
      </IonSegment>
    </IonRow>


  const deleteLessonModal = () =>
    <IonModal isOpen={showModal} cssClass="modal-transparency-sm">
      <LessonOptionsModal editLesson={editLesson} deleteLesson={_deleteLesson} />
    </IonModal>

  const loadingIndicators = <>
    {loadingIndicator(deleteLessonResult.loading, 'Deleting lesson')}
    {loadingIndicator(loadingLesson, 'Loading lesson')}
  </>


  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <IonPage>
      {lesson && pageHeader()}
      <IonContent>
        {loadingIndicators}
        {lesson && deleteLessonModal()}
        {lesson && showInfoSegment(lesson)}
      </IonContent>
    </IonPage >
  );

};

export default LessonDetail;
