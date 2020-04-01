/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
/* --------------------------------- CUSTOM --------------------------------- */
import { Link } from 'react-router-dom';


/* -------------------------------------------------------------------------- */
/*                             COMPONENT DEFINTION                            */
/* -------------------------------------------------------------------------- */
interface NoLessonsProps { message?: string }
const NoLessons: React.FC<NoLessonsProps> = ({ message }) => (
  <IonGrid className="centered">
    <IonRow>
      <IonCol className="profile-title" style={{ textAlign: 'center' }}>
        <h5>{message || "Looks like you haven't made and lessons yet."}</h5>
        <div className="m-top">
          <span>
            <Link to="/lesson-form" style={{ marginLeft: '0.3rem' }}>Create a lesson </Link>
          </span>
        </div>
      </IonCol>
    </IonRow>
  </IonGrid>
)

export default NoLessons 