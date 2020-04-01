/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonHeader, IonPage, IonToolbar, IonIcon, IonGrid, IonRow, IonCol, IonButtons, IonBackButton, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonModal, IonTitle } from '@ionic/react';
import React, { useState } from 'react';
import { calendar, more } from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router';
/* --------------------------------- CUSTOM --------------------------------- */
import './LessonDetail.scss';
// import Gallery from '../../components/exercises';
// import ModalForm from '../ModalForm';
// import Review from '../../components/review';
// import Info from '../../components/info';
// import ConfirmModal from '../ConfirmModal';
import { useLesson, useMutateLesson } from '../../graphql/hooks/lesson.hooks';
import { Lesson } from '../../models/Lesson';
import ResourcePlayer from './sections/ResourcePlayer';
import LessonOptionsModal from './options-modal/LessonOptionsModal';
import PhraseList from './sections/PhraseList';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const LessonDetail: React.FC = () => {
  /* ---------------------------------- HOOKS --------------------------------- */
  let { lessonId } = useParams()
  const history = useHistory()
  const dispatch = useDispatch();
  // const [showPopover, setShowPopover] = useState(false);
  // const [value] = useState(props.location.state);
  // const showModal = useSelector((state: any) => state.reviewReducers.showModal);
  // const showConfirmModal = useSelector((state: any) => state.reviewReducers.showConfirmModal);
  if (!lessonId) throw new Error("No Lesson ID")
  const [showModal, setShowModal] = useState(false);
  const [valueType, setValueType] = useState('words');
  const { lesson } = useLesson(lessonId) // error, loading 
  const { deleteLesson } = useMutateLesson(lessonId)

  if (!lesson) return <></>

  // console.log(lesson.translations.filter(t => !t.tags?.includes('exercise')).length)
  // const onCompleted = () => history.replace('/lessons')


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
      case 'review':
        return <h1>review</h1>
      // return <Review {...value} />;
      default:
        return null;
    }
  }

  const pageHeader = () =>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle className="offset-title">{lesson?.name}</IonTitle>
        <IonButtons slot="end">
          <IonIcon onClick={() => { setShowModal(!showModal) }} icon={more} size="large" className="options-icon" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>


  const fab = () =>
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton onClick={() => dispatch({ type: 'ShowModalTrue' })}>
        <IonIcon icon={calendar} />
      </IonFabButton>
    </IonFab>


  const lessonHeader = () => lesson ?
    <IonRow>
      <IonCol className="ion-profile ion-text-center">
        <ResourcePlayer resources={lesson.resources || []} />

      </IonCol>
    </IonRow> :
    <IonRow></IonRow>

  const tabSet = () =>
    <IonRow>
      <IonSegment value={valueType} onIonChange={(e: any) => setValueType(e.detail.value)}>
        <IonSegmentButton value="words">
          <IonLabel>Words</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="exercises">
          <IonLabel>Exercises</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="review">
          <IonLabel>Review</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonRow>

  const deleteLessonModal = () =>
    <IonModal isOpen={showModal} cssClass="modal-transparency-sm">
      <LessonOptionsModal deleteLesson={() => deleteLesson(lesson.id, { onCompleted: () => history.replace('/lessons') })} />
    </IonModal>


  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <IonPage>
      {pageHeader()}
      <IonContent>
        {deleteLessonModal()}
        {fab()}
        <IonGrid>
          {lessonHeader()}
          {tabSet()}
          {showInfoSegment(lesson)}
        </IonGrid>
      </IonContent>
    </IonPage >
  );

};

export default LessonDetail;
