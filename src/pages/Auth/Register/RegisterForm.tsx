/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React, { useState } from 'react';
import {
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/react';
import { Link } from 'react-router-dom';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface RegisterFormProps { registerUser: Function }
const RegisterForm: React.FC<RegisterFormProps> = ({ registerUser }) => {
  const [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState('');

  const _registerUser = () => {
    registerUser({ firstName, lastName, email, password })
  }

  /* ----------------------------- RENDER METHODS ----------------------------- */
  const loginFormInputs = () =>
    <IonRow>
      <IonCol>
        <IonItem className="ion-no-padding ion-item">
          <IonLabel position="stacked" className="ion-label">My first name is</IonLabel>
          <IonInput
            type="text"
            name="firstName"
            value={firstName}
            onIonChange={e => setFirstName(e.detail.value!)}>
          </IonInput>
        </IonItem>
        <IonItem className="ion-no-padding ion-item">
          <IonLabel position="stacked" className="ion-label">My last name is</IonLabel>
          <IonInput
            type="text"
            name="lastName"
            value={lastName}
            onIonChange={e => setLastName(e.detail.value!)}>
          </IonInput>
        </IonItem>
        <IonItem className="ion-no-padding ion-item">
          <IonLabel position="stacked" className="ion-label">My email address is</IonLabel>
          <IonInput
            type="email"
            name="email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <p className="input-help">Why do we need this?</p>
        <IonItem className="ion-no-padding ion-item">
          <IonLabel position="stacked" className="ion-label">Secure it with a password</IonLabel>
          <IonInput
            type="password"
            name="password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          ></IonInput>
        </IonItem>
        {/* <div className="agree-terms">
                        <IonCheckbox slot="start" checked={true}> </IonCheckbox>
                        <IonLabel>
                            <span style={{ marginLeft: '0.5rem' }}> I agree with the <Link to="/register">Terms and Conditions</Link></span>
                        </IonLabel>
                    </div> */}
      </IonCol>
    </IonRow>


  const registerFormButtons = () =>
    <IonRow>
      <IonCol>
        <IonButton onClick={_registerUser}
          className="button-size center-button"
          expand="block">
          Sign Up
        </IonButton>
        <div className="m-top">
          <span>
            Don't have an account?
            <Link to="/login" style={{ marginLeft: '0.3rem' }}>Sign in</Link>
          </span>
        </div>
      </IonCol>
    </IonRow >

  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <IonGrid className="column-evenly ion-grid">
      {loginFormInputs()}
      {registerFormButtons()}
    </IonGrid>

  )
}

export default RegisterForm;