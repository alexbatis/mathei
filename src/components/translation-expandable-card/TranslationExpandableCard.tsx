import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon
} from '@ionic/react';
import './TranslationExpandableCard.scss';
import React, { useState } from 'react';
import { Translation } from '../../models/Translation';
import { speakWord } from '../../services/utils';
import { arrowDropdown } from 'ionicons/icons';
import { Link } from 'react-router-dom';


interface TranslationExpandableCardProps { translation: Translation }
const TranslationExpandableCard: React.FC<TranslationExpandableCardProps> = ({ translation }) => {
    const cardStyle = {
        padding: "0",
        margin: "0 !important",
        boxShadow: "none !important",
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <IonCard className="no-margin" style={cardStyle}>
            <div onClick={() => setIsOpen(!isOpen)}>
                <IonCardHeader>
                    <div className="card-title">
                        {/* <IonAvatar>
                            <img src={value.avatar} alt="" />
                        </IonAvatar> */}
                        <div className="title-container">
                            <IonCardTitle className="translation-phrase-label">{translation.phrase}</IonCardTitle>
                            {/* <IonCardSubtitle> */}
                                <Link to={`/lesson/${translation.lesson?.id}`}>
                                    {translation.lesson?.name}
                                </Link>
                            {/* </IonCardSubtitle> */}
                        </div>
                    </div>
                    <div className="you-pay">
                        <IonIcon icon={arrowDropdown} size="large" />
                        {/* <span>You pay</span> */}
                        {/* <p>${translation.translated}</p> */}
                    </div>
                </IonCardHeader>

                {/* <IonCardContent>
                    {value.text}
                </IonCardContent> */}
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