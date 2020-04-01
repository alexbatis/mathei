import {
    IonButton,
    IonCard,
    IonCardHeader,
    IonAvatar,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButtons,
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
    console.log(translation)
    const cardStyle = {
        padding: "0",
        margin: "0 !important",
        marginLeft: "unset",
        marginRight: "unset",
        WebkitMarginStart: "16px",
        marginInlineStart: "16px",
        WebkitMarginEnd: "16px",
        marginInlineEnd: "16px",
        boxShadow: "none !important",
    }
    // const subTitleStyle = {
    //     ion-card-subtitle 
    // }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <IonCard style={cardStyle}>
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