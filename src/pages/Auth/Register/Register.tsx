/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
/* --------------------------------- CUSTOM --------------------------------- */
import { AuthService } from '../../../services/auth.service';
import { loginAction } from '../../../redux/auth/auth.actions';
import RegisterForm from './RegisterForm';
import { User } from '../../../models/User';
import { usePromise } from '../../../hooks/fetch.hook';
import { loadingIndicator, errorToast } from '../../../services/component-utils';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const Register: React.FC = () => {
    /* ---------------------------------- HOOKS --------------------------------- */
    const history = useHistory()
    const dispatch = useDispatch()
    const { result: user, error, loading, resolve } = usePromise<User>(null, User);

    /* --------------------------------- METHODS -------------------------------- */
    const registerUser = (userInfo) => resolve(AuthService.register(userInfo))
    const googleLogin = () => resolve(AuthService.loginWithGoogle())
    const loginUser = () => {
        if (!user) return
        dispatch(loginAction(user))
        history.replace('/home');
    }

    /* --------------------------------- EFFECTS -------------------------------- */
    useEffect(loginUser, [user])

    /* ----------------------------- RENDER METHODS ----------------------------- */
    const pageHeader = () =>
        <IonHeader no-border>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle color="secondary">Sign Up</IonTitle>
            </IonToolbar>
        </IonHeader>

    /* ---------------------------- RENDER COMPONENT ---------------------------- */
    return (
        <IonPage className="ion-page">
            {pageHeader()}
            {loadingIndicator(loading, 'Registering User..')}
            {errorToast(error)}
            <IonContent>
                <RegisterForm registerUser={registerUser} googleLogin={googleLogin} />
            </IonContent>
        </IonPage>
    );
}

export default Register;