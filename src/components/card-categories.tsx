import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonBadge, IonCardContent } from '@ionic/react';
import './card-categories.scss';

const CardCategories: React.FC = (props: any) => {


    return (
        <IonCard className="bk-white">
            <IonCardHeader>
                <div className="card-title">
                    <IonAvatar>
                        <img src={props.avatar} alt={props.name}/>
                    </IonAvatar>
                    <div>
                        <IonCardTitle>{props.name}</IonCardTitle>
                        <IonCardSubtitle>
                            {props.reviews} reviews
				            </IonCardSubtitle>
                    </div>
                </div>
                <div>
                    <IonBadge className="ion-badge" color="primary">{props.distance}</IonBadge>
                </div>
            </IonCardHeader>

            <IonCardContent>
                {props.info}
            </IonCardContent>
        </IonCard>
    );

}

export default CardCategories;