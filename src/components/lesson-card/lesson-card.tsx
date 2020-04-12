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
    IonCardContent,
    IonBadge
} from '@ionic/react';
/* --------------------------------- CUSTOM --------------------------------- */
import './lesson-card.scss';
import { Lesson } from '../../models/Lesson';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface LessonCardProps { lesson: Lesson }
const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
    return (
        <IonCard className="bk-white m-0 flat-card pointer">
            <IonCardHeader>
                <div className="card-title">
                    <div>
                        <IonCardTitle>{lesson.name}</IonCardTitle>
                        <IonCardSubtitle style={{ justifyContent: 'left' }}>
                            {lesson.createdAt?.toLocaleDateString()}
                        </IonCardSubtitle>
                    </div>
                </div>
                <div className="badge-container">
                    <IonBadge className="ion-badge badge-lg" color="primary">{lesson.translations.length} phrases</IonBadge>
                </div>
            </IonCardHeader>

            {lesson.description &&
                <IonCardContent>
                    {lesson.description}
                </IonCardContent>
            }
        </IonCard>
    );
}

export default LessonCard;