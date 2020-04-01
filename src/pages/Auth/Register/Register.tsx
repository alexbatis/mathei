/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
/* --------------------------------- CUSTOM --------------------------------- */
import { AuthService } from '../../../services/auth.service';
import { loginAction } from '../../../redux/auth/auth.actions';
import RegisterForm from './RegisterForm';
import { User } from '../../../models/User';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const Register: React.FC = () => {
    /* ---------------------------------- HOOKS --------------------------------- */
    const history = useHistory()
    const dispatch = useDispatch()

    /* --------------------------------- METHODS -------------------------------- */
    const registerUser = async (userInfo) => {
        const user = await AuthService.register(userInfo)
        dispatch(loginAction(user))
        history.replace('/home');
    }

    const googleLogin = async () => {
        const user = await AuthService.loginWithGoogle()
        loginUser(user)
    }

    const loginUser = (user: User) => {
        dispatch(loginAction(user))
        history.replace('/home');
    }

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
            <IonContent>
                <RegisterForm registerUser={registerUser} googleLogin={googleLogin} />
            </IonContent>
        </IonPage>
    );
}

export default Register;