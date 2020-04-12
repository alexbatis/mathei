/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
/* --------------------------------- CUSTOM --------------------------------- */
import './Login.scss';
import { loginAction } from '../../../redux/auth/auth.actions';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/User';
import LoginForm from './LoginForm';
import logo from '../../../assets/brand/logo-text.png';
import { usePromise } from '../../../hooks/fetch.hook';
import { loadingIndicator, errorToast } from '../../../services/component-utils';

/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const Login: React.FC = () => {
    /* ---------------------------------- HOOKS --------------------------------- */
    const dispatch = useDispatch();
    const history = useHistory();
    const { result: user, error, loading, resolve } = usePromise<User>(null, User);

    /* -------------------------------- FUNCTIONS ------------------------------- */
    const login = ({ email, password }) => resolve(AuthService.login(email, password))
    const googleLogin = () => resolve(AuthService.loginWithGoogle())
    const appleLogin = async () => resolve(AuthService.loginWithApple())

    if(error) console.log(error)
    const loginUser = () => {
        if (!user) return
        dispatch(loginAction(user))
        history.replace('/home');
    }


    /* --------------------------------- EFFECTS -------------------------------- */
    useEffect(loginUser, [user])


    /* ----------------------------- RENDER METHODS ----------------------------- */
    const logoSection = () =>
        <IonRow>
            <IonCol>
                <IonImg src={logo} className="greeting-logo" />
            </IonCol>
        </IonRow>


    /* ---------------------------- RENDER COMPONENT ---------------------------- */
    return (
        <IonPage className="ion-page">
            <IonContent className="ion-padding ion-grid-background-image">
                {loadingIndicator(loading, 'Logging in...')}
                {errorToast(error)}
                <IonGrid className="column-evenly ion-grid ion-grid-background-image">
                    <div style={{ width: "100%" }}>
                        <div style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
                            {logoSection()}
                            <LoginForm onSubmit={login} googleLogin={googleLogin} appleLogin={appleLogin} />
                        </div>
                    </div>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Login;