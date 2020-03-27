import {    IonContent, 
            IonHeader, 
            IonPage, 
            IonTitle, 
            IonToolbar, 
            IonGrid, 
            IonCol, 
            IonRow, 
            IonItem,
            IonLabel,
            IonInput,
            IonButton } from '@ionic/react';
import './Login.scss';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Login: React.FC = () => {

    const history = useHistory();

    function loginUser() {
        history.replace('/home');
    }

    return (
        <IonPage className="ion-page">
            <IonHeader className="ion-header">
                <IonToolbar className="ion-toolbar" >
                    <IonTitle className="ion-title" color="primary">Welcome back</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid className="column-evenly ion-grid">
                    <IonRow>
                        <IonCol>         
                            <IonItem className="ion-no-padding ion-item">
                                <IonLabel position="stacked" className="ion-label">Email address</IonLabel>
                                <IonInput ></IonInput>
                            </IonItem>
                            <IonItem className="ion-no-padding ion-item">
                                <IonLabel position="stacked" className="ion-label">Password</IonLabel>
                                <IonInput 
                                    type="password"
                                ></IonInput>
                            </IonItem>
                            <p className="input-help">Forgot password?</p>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton onClick={loginUser}
                                    className="button-size center-button" 
                                    expand="block">
                                Sign In
                            </IonButton>
                                <div className="m-top"><span>Don't have an account?<Link to="/register" style={{ marginLeft: '0.3rem'}}>Sign up</Link></span></div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Login;

