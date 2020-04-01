/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
/* ------------------------------- THIRD PARTY ------------------------------ */
import { useLessons } from '../../graphql/hooks/lessons.hooks';
import { useHistory } from 'react-router';
import LessonCard from '../lesson-card/lesson-card';
import NoLessons from '../no-lessons/no-lessons';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const RecentLessons: React.FC = () => {
  let { lessons } = useLessons() // error, loading
  const history = useHistory()

  if (!lessons || !lessons.length) return <NoLessons />

  /* --------------------------- RENDERING FUNCTIONS -------------------------- */
  const recentLessonCards = () => (
    lessons.reverse().slice(0, 4).map(lesson => (
      <IonCol sizeSm="12" sizeMd="12" sizeLg="4" sizeXl="4" key={lesson.id} onClick={() => history.push(`lesson/${lesson.id}`)}>
        <LessonCard lesson={lesson} />
      </IonCol>
    ))
  )


  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <IonGrid>
      <IonRow>
        <IonCol className="profile-title">
          <h5>Recent Lessons</h5>
        </IonCol>
      </IonRow>
      <IonRow>
        {recentLessonCards()}
      </IonRow>
    </IonGrid>
  )

};

export default RecentLessons;
