import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './card-info.scss';
import MovieIcons from './movie-icons';

const CardInfo: React.FC = (props: any) => {

        return (
            
            <IonCard className="icon-card ion-text-center bk-white">
                <IonCardHeader>
                    <div className={`round-back ${props.color}`}>
                        <MovieIcons {...props}/>
                    </div>
                </IonCardHeader>
                <IonCardTitle>
                    <p>{props.name}</p>
                </IonCardTitle>
            </IonCard>
        );
}

export default CardInfo;