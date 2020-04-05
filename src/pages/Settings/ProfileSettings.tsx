/* eslint-disable react/jsx-no-target-blank */
/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonItem, IonCard, IonCardContent, IonInput, IonModal } from '@ionic/react';
import React, { useState, useEffect } from 'react';
/* --------------------------------- CUSTOM --------------------------------- */
import './Settings.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/root.reducer';
import { usePromise } from '../../hooks/fetch.hook';
import { User } from '../../models/User';
import { loginAction } from '../../redux/auth/auth.actions';
import { AuthService } from '../../services/auth.service';
import { loadingIndicator, errorToast, genericToast } from '../../services/component-utils';

const ProfileSettings: React.FC = () => {
  /* ---------------------------------- HOOKS --------------------------------- */
  const user = useSelector((state: AppState) => state.auth.user);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setLastName] = useState(user?.lastName)
  const [email, setEmail] = useState(user?.email)
  const [showModal, setShowModal] = useState(false)
  const { result: updatedUser, error, loading, resolve } = usePromise<User>(null, User);

  /* --------------------------------- METHODS -------------------------------- */

  const submit = async () => {
    if (!firstName || !lastName || !email) return
    resolve(AuthService.updateProfile({ firstName, lastName, email }))
  }

  const loginUser = () => {
    if (!updatedUser) return
    dispatch(loginAction(updatedUser))
  }


  /* --------------------------------- EFFECTS -------------------------------- */
  useEffect(loginUser, [updatedUser])

  const changePasswordModal = () =>
    <IonModal
      isOpen={showModal}
      onDidDismiss={() => setShowModal(false)}
      cssClass="modal-container">
      <IonContent className="modal-cont">
        <div className="ion-text-center vertical-align">
          <div>
            <p>This feature has not yet been implemented, look out for it in a later release!</p>
            <span>
              To file an issue, head over to <a href="https://github.com/alexbatis/mathei" target="_blank">github</a>
            </span>
          </div>
        </div>
      </IonContent>
    </IonModal>

  return (
    <IonPage>
      {loadingIndicator(loading, 'Updating your information...')}
      {errorToast(error)}
      {genericToast(updatedUser !== undefined, 'Updated your information')}
      {changePasswordModal()}

      <IonHeader no-border>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" />
          </IonButtons>
          <IonTitle color="secondary">Profile Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          <IonCard className="bk-white">
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <IonItem className="bg-transparent">
                      <IonLabel position="floating">First Name</IonLabel>
                      <IonInput
                        value={firstName}
                        onIonChange={(e: any) => setFirstName(e.detail.value)}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonItem className="bg-transparent">
                      <IonLabel position="floating">Last Name</IonLabel>
                      <IonInput
                        value={lastName}
                        onIonChange={(e: any) => setLastName(e.detail.value)}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonItem className="bg-transparent">
                      <IonLabel position="floating">Email</IonLabel>
                      <IonInput
                        disabled={user?.authType === 'GOOGLE'}
                        value={email}
                        onIonChange={(e: any) => setEmail(e.detail.value)}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonButton color="light" expand="full" onClick={() => setShowModal(true)}>Change Password</IonButton>
              </IonGrid>
              <IonButton expand="full" onClick={submit}>Save</IonButton>
            </IonCardContent>

          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default ProfileSettings;