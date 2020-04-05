/* eslint-disable react/jsx-no-target-blank */
/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
/* --------------------------------- CUSTOM --------------------------------- */
import './Settings.scss';
const Help: React.FC = () => {

  return (
    <IonPage>
      <IonHeader no-border>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle color="secondary">Help</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          <IonCard className="bk-white">
            <IonCardContent>
              <p>
                For any help, issues, or support head over to the <a href="https://github.com/alexbatis/mathei" target="_blank">github repository </a>
                for this app and drop a line.
              </p>
              <p>
                PR's are welcomed!
              </p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Help;