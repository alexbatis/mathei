import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonAvatar } from '@ionic/react';
import './card-review.scss';


const CardReview: React.FC = (props: any) => {

        return (
            <IonCard className="bk-white">
                <IonCardHeader>
                    <div className="card-title">
                        <IonAvatar>
                            <img src={props.avatar} alt={props.name}/>
                        </IonAvatar>
                        <div className="text-container">
                            <IonCardTitle>{props.name}</IonCardTitle>
                            <IonCardSubtitle>
                            </IonCardSubtitle>
                        </div>
                    </div>
                </IonCardHeader>

                <IonCardContent>
                    {props.text}
                </IonCardContent>
            </IonCard>
        );
}

export default CardReview;