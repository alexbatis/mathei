/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonImg
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
/* --------------------------------- CUSTOM --------------------------------- */
import './Login.scss';
import { loginAction } from '../../../redux/auth/auth.actions';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/User';
import LoginForm from './LoginForm';
import logo from '../../../assets/logo.png';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const Login: React.FC = () => {
    /* ---------------------------------- HOOKS --------------------------------- */
    const dispatch = useDispatch();
    const history = useHistory();


    /* -------------------------------- FUNCTIONS ------------------------------- */
    const login = async ({email, password}) => {
        const user = await AuthService.login(email, password)
        if (!user) return
        console.log(user)
        loginUser(user)
    }

    const googleLogin = async () => {
        const user = await AuthService.loginWithGoogle()
        console.log(user)
        loginUser(user)
    }

    const loginUser = (user: User) => {
        dispatch(loginAction(user))
        history.replace('/home');
    }

    /* ----------------------------- RENDER METHODS ----------------------------- */
    const pageHeader = () =>
        <IonHeader className="ion-header">
            <IonToolbar className="ion-toolbar">
                <IonTitle className="ion-title" color="primary">Welcome</IonTitle>
            </IonToolbar>
        </IonHeader>

    const logoSection = () =>
        <IonRow>
            <IonCol>
                <IonImg src={logo} className="ion-img" />
            </IonCol>
        </IonRow>



    /* ---------------------------- RENDER COMPONENT ---------------------------- */
    return (
        <IonPage className="ion-page">
            <IonContent className="ion-padding ion-grid-background-image">
                <IonGrid className="column-evenly ion-grid ion-grid-background-image">
                    <div style={{width : "100%"}}>
                        <div style={{ maxWidth: "700px", marginLeft : "auto", marginRight: "auto" }}>
                            {logoSection()}
                            <LoginForm onSubmit={login} googleLogin={googleLogin} />
                        </div>
                    </div>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Login;
