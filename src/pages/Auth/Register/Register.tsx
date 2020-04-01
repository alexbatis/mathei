/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
/* --------------------------------- CUSTOM --------------------------------- */
import { AuthService } from '../../../services/auth.service';
import { loginAction } from '../../../redux/auth/auth.actions';
import RegisterForm from './RegisterForm';


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

    /* ----------------------------- RENDER METHODS ----------------------------- */
    const pageHeader = () =>
        <IonHeader className="ion-header">
            <IonToolbar className="ion-toolbar" >
                <IonTitle className="ion-title" color="primary">Create an account</IonTitle>
            </IonToolbar>
        </IonHeader>

    /* ---------------------------- RENDER COMPONENT ---------------------------- */
    return (
        <IonPage className="ion-page">
            {pageHeader()}
            <IonContent>
                <RegisterForm registerUser={registerUser} />
            </IonContent>
        </IonPage>
    );
}

export default Register;