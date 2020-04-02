
import {
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle
} from '@ionic/react';
import './Import.scss';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage } from '@ionic/react';
import CardInfo from '../../components/card-info';
// import ModalForm from '../ModalForm';
// import ConfirmModal from '../ConfirmModal';
import DuoLingoImportModal from './DuoLingoImport/DuoLingoImportModal';
const duolingoIcon = "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/cd/36/33/cd3633d8-27a9-5212-76c6-15a4b5d1bfee/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png";

const Import: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  function goToRegister() {
    history.replace('/register');
  }

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
          cssClass="modal-transparency-md">
          <DuoLingoImportModal />
        </IonModal>


        <IonGrid className="column-evenly ion-grid-background-image">
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