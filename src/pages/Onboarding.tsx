import {
    IonContent,
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonImg
} from '@ionic/react';
import './Onboarding.scss';
import logo from '../assets/logo.png';

import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Onboarding: React.FC = () => {

    const history = useHistory();

    function goToRegister() {
        history.replace('/register');
    }

    return (
        
        <IonContent className=" ion-text-center ion-content">
            <IonGrid className="column-evenly ion-grid-background-image">
                <IonRow>
                    <IonCol>
                        <IonImg src={logo} className="ion-img"/>
                        <h5>
                            Find services & professionals
                            without the hassle
                        </h5>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton  onClick={goToRegister}
                                    className="button-size center-button ion-button" 
                                    expand="block"   >
                            Let's started
                        </IonButton>
                        <div className="m-top">
                            <span>
                                Don't have an account?
                                <Link to="/register" style={{ marginLeft: '0.3rem'}}>Sign up</Link>
                            </span>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    
    );
}


export default Onboarding;