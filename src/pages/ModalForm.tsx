import {
    IonContent,
    IonGrid,
    IonCol,
    IonRow,
    IonItem,
    IonLabel,
    IonButton,
    IonTextarea,
    IonDatetime,
    IonCheckbox
} from '@ionic/react';
import './Login.scss';
import React from 'react';
import { useDispatch } from 'react-redux';


const ModalForm: React.FC = (props: any) => {

	const dispatch = useDispatch();

    function confirmModal() {
        dispatch({type: 'ShowModalFalse'});
        dispatch({type: 'ShowConfirmModalTrue'});
    }

    return (
            <IonContent >
                <IonGrid className="column-evenly">
                    <IonRow>
                        <IonCol className="mx-1">
                            <IonItem className="ion-no-padding">
                                <IonLabel position="stacked">Describe your problem</IonLabel>
                                <IonTextarea></IonTextarea>
                            </IonItem>
                            <IonItem className="ion-no-padding">
                                <IonLabel position="stacked">Date & Time</IonLabel>
                                <IonDatetime displayFormat="D MMM YYYY H:mm"></IonDatetime>
                            </IonItem>
                            <div className="agree-terms">
                                <IonCheckbox slot="start" checked={true}/>
                                <span style={{ marginLeft: '0.3rem'}}>I want to pay once the repair is finished</span>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton onClick={confirmModal}
                                className="button-size center-button"
                                expand="block">
                                Complete appointment
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
    );
}

export default ModalForm;

