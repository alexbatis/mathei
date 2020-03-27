import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonSearchbar, IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react';
import './MyAppointments.scss';
import CardAppointments from '../components/card-appointments';
import { useSelector } from 'react-redux';




const MyAppointments: React.FC = () => {

    const appointments = useSelector( (state:any) => state.reviewReducers.appointments );

    return (
        <IonPage>
            <IonHeader no-border>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle color="secondary">My appointments</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonSearchbar animated/>
                            <div className="filter-container">
                                <IonSelect value="recent" interface="popover">
                                    <IonSelectOption value="recent">
                                        Most recent
                                    </IonSelectOption>
                                    <IonSelectOption value="az">A-Z</IonSelectOption>
                                    <IonSelectOption value="za">Z-A</IonSelectOption>
                                    <IonSelectOption value="featured">Featured</IonSelectOption>
                                </IonSelect>
                                <IonButtons class="icons">
                                    <IonButton>
                                        <IonIcon slot="icon-only" name="apps"></IonIcon>
                                    </IonButton>
                                    <IonButton>
                                        <IonIcon slot="icon-only" name="menu"></IonIcon>
                                    </IonButton>
                                </IonButtons>
                            </div>

                            {appointments.map((item: any, i:any) => {
                                return  <div key={i}>
                                            <CardAppointments {...item}/>
                                        </div>
                            })}
                            
                            
                        </IonCol>
                    </IonRow>
	            </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default MyAppointments;