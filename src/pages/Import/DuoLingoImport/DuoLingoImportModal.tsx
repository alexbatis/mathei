/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonGrid, IonCol, IonRow, IonItem, IonLabel, IonButton, IonInput } from '@ionic/react';
import React, { useState } from 'react';
/* --------------------------------- CUSTOM --------------------------------- */
import success from '../../../assets/success-logo.png';
import { loadingIndicator } from '../../../services/component-utils';
import { usePromise } from '../../../hooks/fetch.hook';
import { DuoLingoImportResult, ImportService } from '../../../services/import.service';
const duoLingoSadLogo = "https://i.imgur.com/1h1qMBb.png"


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface DuoLingoImportModalProps { dismissModal: Function }
const DuoLingoImportModal: React.FC<DuoLingoImportModalProps> = ({ dismissModal }) => {
  /* ---------------------------------- HOOKS --------------------------------- */
  let { result, error, loading, resolve, reset } = usePromise<DuoLingoImportResult>();
  const [duoEmail, setDuoEmail] = useState('');
  const [duoPassword, setDuoPassword] = useState('');

  /* --------------------------------- METHODS -------------------------------- */
  const onSubmit = async () => resolve(ImportService.duolingoImport(duoEmail, duoPassword))

  /* ----------------------------- RENDER METHODS ----------------------------- */
  const formContent = () =>
    <IonGrid className="column-evenly centered-full" style={{ maxWidth: '500px', height: '100%' }}>
      <IonRow>
        <IonCol className="mx-1">
          <IonItem className="ion-no-padding">
            <IonLabel position="floating">DuoLingo Email</IonLabel>
            <IonInput
              value={duoEmail}
              onIonChange={e => setDuoEmail(e.detail.value!)}
              type="email" />
          </IonItem>
          <IonItem className="ion-no-padding">
            <IonLabel position="floating">DuoLingo Password</IonLabel>
            <IonInput
              value={duoPassword}
              onIonChange={e => setDuoPassword(e.detail.value!)}
              type="password" />
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow style={{ marginTop: "2rem" }}>
        <IonCol>
          <IonButton
            onClick={onSubmit}
            className="button-size center-button"
            expand="block">
            Import
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>


  const completed = () =>
    <IonGrid className="column-evenly centered-full" style={{ maxWidth: '500px', height: '100%' }}>
      <div className="ion-text-center vertical-align">
        <div>
          <img src={success} alt="confirm" />
          <p>Import from DuoLingo complete!</p>
          <span>
            {`Imported ${result?.translationsCreated} words/phrases from ${result?.lessonsCreated} lessons`}
          </span>
          <IonButton
            onClick={() => { dismissModal() }}
            style={{ marginTop: "1rem" }}
            className="button-size center-button"
            expand="block">
            Close
        </IonButton>
        </div>
      </div>
    </IonGrid>


  const errorSection = () =>
    <IonGrid className="column-evenly centered-full" style={{ maxWidth: '500px', height: '100%' }}>
      <div className="ion-text-center vertical-align">
        <div>
          <img src={duoLingoSadLogo} alt="error" style={{ maxHeight: "250px" }} />
          <p>Error importing your DuoLingo data</p>
          <span>{error?.message}</span>
          <IonRow style={{ marginTop: "1rem" }}>
            <IonCol>
              <IonButton
                onClick={reset}
                className="button-size center-button"
                expand="block">
                Try Again
              </IonButton>
              <IonButton
                onClick={() => { dismissModal() }}
                style={{ marginTop: "1rem" }}
                className="button-size center-button"
                expand="block">
                Close
              </IonButton>
            </IonCol>
          </IonRow>
        </div>
      </div>
    </IonGrid>

  if (error) return errorSection()

  return (
    <IonContent className="modal-cont centered-full">
      {loadingIndicator(loading, 'Importing from Duolingo...This may take some time, please hang tight :-)')}
      {result ? completed() : formContent()}
    </IonContent >
  );
}

export default DuoLingoImportModal;

