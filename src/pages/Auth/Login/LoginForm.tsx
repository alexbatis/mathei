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
  IonButton,
  IonIcon
} from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

/* --------------------------------- CUSTOM --------------------------------- */


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface LoginFormProps { onSubmit: Function, googleLogin: Function }
const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, googleLogin }) => {

  const { control, handleSubmit, errors, formState } = useForm({ mode: "onChange" });

  const _onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2))
  };

  const showError = (_fieldName: string) => {
    console.log(_fieldName, 'touched - ' + formState.touched[_fieldName])
    console.log(formState)
    let error = (errors as any)[_fieldName];
    if (!formState.touched[_fieldName]) return null
    return error ? (
      <div style={{ color: "red", fontWeight: "bold" }}>
        {error.message || "Field Is Required"}
      </div>
    ) : null;
  };

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
        <IonButton
          type="button"
          color="light"
          onClick={() => googleLogin()}
          className="center-button m-top"
          expand="block">
          <IonIcon icon={logoGoogle} className="m-right" />
                 Sign In Via Google
             </IonButton>
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
