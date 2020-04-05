import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonList, IonButton, IonIcon, IonLabel, IonItem } from '@ionic/react';
import React from 'react';
import './Settings.scss';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/auth/auth.actions';
import { useHistory } from 'react-router';


const Settings: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch(logoutAction())
        history.replace('/login');
    }

    return (
        <IonPage>
            <IonHeader no-border>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle color="secondary">Settings</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonList>
                                <IonItem onClick={() => history.push('/settings/profile')} className="pointer">
                                    <IonLabel>
                                        <h2>Personal information</h2>
                                        <p>Changes your personal information</p>
                                    </IonLabel>
                                    <IonIcon slot="end" name="arrow-forward"></IonIcon>
                                </IonItem>
                                <IonItem onClick={() => history.push('/settings/help')} className="pointer">
                                    <IonLabel>
                                        <h2>Help</h2>
                                        <p>For facing any issues or questions</p>
                                    </IonLabel>
                                    <IonIcon slot="end" name="arrow-forward"></IonIcon>
                                </IonItem>
                                <IonItem onClick={() => history.push('/settings/about')} className="pointer">
                                    <IonLabel>
                                        <h2>About</h2>
                                        <p>General information about the app</p>
                                    </IonLabel>
                                    <IonIcon slot="end" name="arrow-forward"></IonIcon>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton
                                onClick={logout}
                                fill="outline"
                                color="tertiary"
                                class="button-size center-button"
                                expand="block">
                                Log Out
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Settings;