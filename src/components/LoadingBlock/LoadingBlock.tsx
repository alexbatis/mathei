/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonGrid, IonRow, IonCol, IonSpinner } from '@ionic/react';

/* -------------------------------------------------------------------------- */
/*                             COMPONENT DEFINTION                            */
/* -------------------------------------------------------------------------- */

const LoadingBlock: React.FC = () => (
  <IonGrid className="centered">
    <IonRow>
      <IonCol className="profile-title" style={{ textAlign: 'center' }}>
        <h5>Loading...</h5>
        <div className="m-top">
          <span>
          <IonSpinner name="dots"/>
          </span>
        </div>
      </IonCol>
    </IonRow>
  </IonGrid>
)

export default LoadingBlock 