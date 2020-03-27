import { 
    IonButton, 
    IonCard,
    IonCardHeader,
    IonAvatar,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButtons} from '@ionic/react';
import './card-appointments.scss';
import React, { useState } from 'react';


const CardAppointments: React.FC = (props: any) => {

    const [isOpen, setIsOpen] = useState(false);
    const [value] = useState(props);

    return (
        <IonCard>
            <div  onClick={() => setIsOpen( !isOpen )}>
                    <IonCardHeader>
                    <div className="card-title">
                        <IonAvatar>
                            <img src={value.avatar} alt=""/>
                        </IonAvatar>
                        <div className="title-container">
                            <IonCardTitle>{value.name}</IonCardTitle>
                            <IonCardSubtitle>{value.date}</IonCardSubtitle>
                        </div>
                    </div>
                    <div className="you-pay">
                        <span>You pay</span>
                        <p>${value.amount}</p>
                    </div>
                    </IonCardHeader>

                    <IonCardContent>
                        {value.text}
                    </IonCardContent>
                </div>

                { isOpen &&
                    <IonButtons className="cta-buttons">
                        <IonButton className="btn-green" expand="block">Book Again</IonButton>
                        <IonButton className="btn-green-outline" expand="block">Review Job</IonButton>
                    </IonButtons>
                }
                
        </IonCard>
    );

}

export default CardAppointments;