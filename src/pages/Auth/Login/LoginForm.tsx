/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React, { useEffect, useState } from 'react';
import {
  IonCol,
  IonRow,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/react';
import { logoGoogle, logoApple } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Plugins } from "@capacitor/core";
const { Device } = Plugins


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface LoginFormProps { onSubmit: Function, googleLogin: Function, appleLogin: Function }
const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, googleLogin, appleLogin }) => {
  const { control, handleSubmit, formState } = useForm({ mode: "onChange" });
  const [showAppleLogin, setShowAppleLogin] = useState(false)

  const checkForAppleLogin = () => {
    Device.getInfo().then(device => {
      if (device.platform === 'ios' && !showAppleLogin)
        setShowAppleLogin(true)
    })
  }

  useEffect(checkForAppleLogin)


  /* ----------------------------- RENDER METHODS ----------------------------- */
  const loginFormInputs = () =>
    <IonRow>
      <IonCol>
        <IonItem>
          <IonLabel position="floating">Email Address</IonLabel>
          <Controller
            as={<IonInput name="email" />}
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => selected.detail.value}
            name="email"
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            }}
          />
        </IonItem>


        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <Controller
            as={<IonInput name="password" />}
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => selected.detail.value}
            name="password"
            type="password"
            rules={{
              required: true,
            }}
          />
        </IonItem>
        {/* <p className="input-help">Forgot password?</p> */}
      </IonCol>
    </IonRow>


  const loginFormButtons = () =>
    <IonRow>
      <IonCol>
        <IonButton
          type="submit"
          disabled={formState.isValid === false}
          // onClick={() => onSubmit(email, password)}
          className="center-button"
          expand="block">
          Sign In
        </IonButton>
        <IonButton onClick={() => googleLogin()} type="button" color="light" className="center-button m-top" expand="block">
          <IonIcon icon={logoGoogle} className="m-right" style={{ marginRight: "5px" }} /> Sign In With Google
          </IonButton>
        {showAppleLogin && <IonButton onClick={() => appleLogin()} type="button" color="light" className="center-button m-top" expand="block">
          <IonIcon icon={logoApple} className="m-right" style={{ marginRight: "5px" }} /> Sign In With Apple
          </IonButton>
        }
        <div className="m-top"><span>Don't have an account?<Link to="/register" style={{ marginLeft: '0.3rem' }}>Sign up</Link></span></div>
      </IonCol>
    </IonRow>

  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <>
      <form onSubmit={handleSubmit(data => onSubmit(data))}>
        {loginFormInputs()}
        {loginFormButtons()}
      </form>
    </>
  )
}

export default LoginForm;