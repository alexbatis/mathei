import {
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonLabel,
  IonButton,
  IonTextarea,
  IonDatetime,
  IonCheckbox,
  IonModal,
  IonImg,
  IonInput
} from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DuoLingoConfirmModal from './DuoLingoImportConfirm';
import success from '../../../assets/success-logo.png';
import logo from '../../../assets/logo.png';
import { AuthService } from '../../../services/auth.service';
import apolloClient from '../../../graphql/apollo-client';
const duoLingoSadLogo = "https://i.imgur.com/1h1qMBb.png"

const DuoLingoImportModal: React.FC = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [complete, setComplete] = useState<any | null>(false);
  const [duoEmail, setDuoEmail] = useState('');
  const [duoPassword, setDuoPassword] = useState('');

  const dispatch = useDispatch();

  function confirmModal() {
    dispatch({ type: 'ShowModalFalse' });
    dispatch({ type: 'ShowConfirmModalTrue' });
  }

  const onSubmit = async () => {
    setLoading(true)
    try {
      const token = await AuthService.getAccessToken()
      const _response = await fetch('http://localhost:9000/api/v1/import/duolingo', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify({ duoEmail, duoPassword })
      })
      const response = await _response.json()
      console.log(response)
      if (!_response.ok)
        throw response

      apolloClient.resetStore()
      setComplete(response)
    } catch (err) {
      const error = (err && err.message && err.error && typeof err.error === 'string') ? new Error(`${err.message} - ${err.error}`) : err;
      setError(error)
    } finally {
      setLoading(false)
    }
  }


  const formContent = () =>
    <IonGrid className="column-evenly">
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
          {/* <div className="agree-terms">
            <IonCheckbox slot="start" checked={true} />
            <span style={{ marginLeft: '0.3rem' }}>I want to pay once the repair is finished</span>
          </div> */}
        </IonCol>
      </IonRow>
      <IonRow style={{ marginTop: "2rem" }}>
        <IonCol>
          <IonButton onClick={onSubmit}
            className="button-size center-button"
            expand="block">
            Import your DuoLingo vocabulary
                    </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>


  const completed = () =>
    <div className="ion-text-center vertical-align">
      <div>
        <IonImg src={success} alt="confirm" />
        <p>Import from DuoLingo complete!</p>
        <span>
          {`Imported ${complete?.translationsCreated} words/phrases from ${complete?.lessonsCreated} lessons`}
        </span>
      </div>
    </div>

  const loadingSection = () =>
    <IonContent className="modal-cont">
      <div className="ion-text-center vertical-align">
        <div>
          <IonImg src={logo} alt="confirm" />
          <p>Importing your lessons from DuoLingo...</p>
          <span>
            This may take some time, please hang tight
      </span>
        </div>
      </div>
    </IonContent>

  const errorSection = () =>
    <IonContent className="modal-cont">
      <div className="ion-text-center vertical-align">
        <div>
          <IonImg src={duoLingoSadLogo} alt="error" />
          <p>Error importing your DuoLingo data</p>
          <span>
            {error?.message}
          </span>
        </div>
      </div>
    </IonContent>

  if (error) return errorSection()
  if (loading) return loadingSection()

  return (
    <IonContent className="modal-cont">
      {complete ? completed() : formContent()}
    </IonContent >
  );
}

export default DuoLingoImportModal;

