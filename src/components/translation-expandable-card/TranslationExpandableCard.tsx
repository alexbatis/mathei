/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React, { useState } from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon
} from '@ionic/react';
import { arrowDropdown } from 'ionicons/icons';
import { Link } from 'react-router-dom';
/* --------------------------------- CUSTOM --------------------------------- */
import './TranslationExpandableCard.scss';
import { Translation } from '../../models/Translation';
import { speakWord } from '../../services/utils';


const
    cardStyle = {
        padding: "0",
        margin: "0 !important",
        boxShadow: "none !important",
        width: "100%"
    },
    cardHeaderStyle = {
        padding: "1.5rem 0px 1rem 1.5px"
    }

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
interface TranslationExpandableCardProps { translation: Translation }
const TranslationExpandableCard: React.FC<TranslationExpandableCardProps> = ({ translation }) => {
    const [isOpen, setIsOpen] = useState(false);

    /* ---------------------------- RENDER COMPONENT ---------------------------- */
    return (
        <IonCard className="no-margin no-shadow" style={cardStyle}>
            <div onClick={() => setIsOpen(!isOpen)}>
                <IonCardHeader style={cardHeaderStyle}>
                    <div className="card-title">
                        <div className="title-container">
                            <IonCardTitle className="translation-phrase-label">{translation.phrase}</IonCardTitle>
                            <Link to={`/lesson/${translation.lesson?.id}`}>
                                {translation.lesson?.name}
                            </Link>
                        </div>
                    </div>
                    <div className="you-pay">
                        <IonIcon icon={arrowDropdown} size="large" mode="md" />
                    </div>
                </IonCardHeader>
            </div>

            {isOpen &&
                <div className="translated-label" onClick={() => speakWord(translation.translated, 'el-GR')}>
                    <p> {translation.translated} </p>
                </div>
            }

        </IonCard>
    );

}

export default TranslationExpandableCard;