import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton, IonCheckbox } from '@ionic/react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Register: React.FC = () => {

    const history = useHistory();

    function registerUser() {
        history.replace('/home');
    }
    return (
        <IonPage className="ion-page">
            <IonHeader className="ion-header">
                <IonToolbar className="ion-toolbar" >
                    <IonTitle className="ion-title" color="primary">Create an acount</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className="column-evenly ion-grid">
                    <IonRow>
                        <IonCol>    
                            <IonItem className="ion-no-padding ion-item">
                                <IonLabel position="stacked" className="ion-label">My name is</IonLabel>
                                <IonInput ></IonInput>
                            </IonItem>    
                            <IonItem className="ion-no-padding ion-item">
                                <IonLabel position="stacked" className="ion-label">My email address is</IonLabel>
                                <IonInput ></IonInput>
                            </IonItem>
                            <p className="input-help">Why do we need this?</p>
                            <IonItem className="ion-no-padding ion-item">
                                <IonLabel position="stacked" className="ion-label">Secure it with a password</IonLabel>
                                <IonInput type="password" ></IonInput>
                            </IonItem>
                            <div className="agree-terms">
                                <IonCheckbox slot="start" checked={true}> </IonCheckbox>
                                <IonLabel>
                                    <span style={{marginLeft: '0.5rem'}}> I agree with the <Link to="/register">Terms and Conditions</Link></span>
                                </IonLabel>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton  onClick={registerUser} 
                                        className="button-size center-button" 
                                        expand="block">
                                Sign Up
                            </IonButton>
                            <div className="m-top">
                                <span>
                                    Don't have an account?
                                    <Link to="/login" style={{ marginLeft: '0.3rem'}}>Sign in</Link>
                                </span>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Register;