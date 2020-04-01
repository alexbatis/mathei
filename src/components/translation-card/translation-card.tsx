/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonBadge,
    IonIcon
} from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
/* --------------------------------- CUSTOM --------------------------------- */
import './translation-card.scss';
import { Translation } from '../../models/Translation';


/* -------------------------------------------------------------------------- */
/*                             COMPONENT DEFNITION                            */
/* -------------------------------------------------------------------------- */
interface TranslationCardProps { translation: Translation }
const TranslationCard: React.FC<TranslationCardProps> = ({ translation }) => {

    /* ---------------------------- RENDER COMPONENT ---------------------------- */
    return (
        <IonCard className="bk-white">
            <IonCardHeader>
                <div className="card-title">
                    <div>
                        <IonCardTitle>{translation.phrase}</IonCardTitle>
                        <IonCardSubtitle>
                            {translation.createdAt?.toLocaleDateString()}
                        </IonCardSubtitle>
                    </div>
                </div>
                <div className="card-secondary-title">
                    <IonBadge className="ion-badge" color="primary">{translation.translated}</IonBadge>
                    <IonCardSubtitle>
                        {translation.lesson?.name}
                        <IonIcon icon={arrowForward} />
                    </IonCardSubtitle>
                </div>
            </IonCardHeader>
        </IonCard>
    );

}

export default TranslationCard;