import { IonContent, IonImg } from '@ionic/react';
import React from 'react';
import success from '../assets/success-logo.png';
import './ConfirmModal.scss';


const ConfirmModal: React.FC = () => {
    return (
        
        <IonContent className="modal-cont">
            <div className="ion-text-center vertical-align">
                <div>
                    <IonImg src={success} alt="confirm"/>
                    <p>Appointment created successfully</p>
                    <span>
                        We have notified the professional that you have selected for the
                        job.
                    </span>
                </div>
            </div>
        </IonContent>
   
    );
}

export default ConfirmModal;