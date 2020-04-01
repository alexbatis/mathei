import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './card-info.scss';
import MovieIcons from './movie-icons';


interface CardInfoProps {
    color: string,
    name: string,
    icon?: string
    img?: string
}
const CardInfo: React.FC<CardInfoProps> = ({ color, name, icon, img }) => {

    return (

        <IonCard className="icon-card ion-text-center bk-white">
            <IonCardHeader>
                <div className={`round-back ${color}`}>
                    {icon && <MovieIcons iconName={icon} />}
                    {img && <img src={img} alt=""/>}
                </div>
            </IonCardHeader>

            <IonCardTitle>
                <p>{name}</p>
            </IonCardTitle>
        </IonCard>
    );
}

export default CardInfo;