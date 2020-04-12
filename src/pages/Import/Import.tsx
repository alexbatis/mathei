/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonGrid, IonCol, IonRow, IonModal, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonPage } from '@ionic/react';
import React, { useState } from 'react';
/* --------------------------------- CUSTOM --------------------------------- */
import './Import.scss';
import CardInfo from '../../components/card-info';
import DuoLingoImportModal from './DuoLingoImport/DuoLingoImportModal';
const duolingoIcon = "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/cd/36/33/cd3633d8-27a9-5212-76c6-15a4b5d1bfee/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png";


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const Import: React.FC = () => {
  /* ---------------------------------- HOOKS --------------------------------- */
  const [showModal, setShowModal] = useState(false);


  /* ----------------------------- RENDER METHODS ----------------------------- */
  const pageHeader = () =>
    <IonHeader no-border>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle color="secondary">Import</IonTitle>
      </IonToolbar>
    </IonHeader>

  return (
    <IonPage>
      {pageHeader()}
      <IonContent className="ion-text-center ion-content ion-padding">

        <IonModal
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          cssClass="modal-container">
          <DuoLingoImportModal dismissModal={() => { setShowModal(false) }} />
        </IonModal>

        <IonGrid className="column-evenly ion-grid-background-image" style={{maxWidth : '500px'}}>
          <IonRow>
            <IonCol onClick={() => setShowModal(true)}>
              <CardInfo
                img={duolingoIcon}
                color="green"
                name="Import from DuoLingo"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>

  );
}


export default Import;