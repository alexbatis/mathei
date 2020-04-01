/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React, { useState } from 'react';
import { IonContent, IonGrid, IonCol, IonRow, IonButton, IonAlert } from '@ionic/react';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface LessonOptionsModalProps { deleteLesson: any }
const LessonOptionsModal: React.FC<LessonOptionsModalProps> = ({ deleteLesson }) => {
    /* ---------------------------------- HOOKS --------------------------------- */
    const [showConfirmationAlert, setShowConfirmationAlert] = useState(false);

    /* ----------------------------- RENDER METHODS ----------------------------- */
    const deleteLessonConfirmation = () => (
        <IonAlert
            isOpen={showConfirmationAlert}
            onDidDismiss={() => setShowConfirmationAlert(false)}
            header={`Delete this lesson?`}
            message={"This will also delete all of its translations"}
            buttons={[
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                },
                {
                    text: 'Delete',
                    handler: blah => deleteLesson()
                }
            ]}
        />
    )

    const optionsDrawer = () => (
        <IonGrid className="column-evenly">
            <IonRow>
                <IonCol>
                    <IonButton
                        className="button-size center-button"
                        expand="block">
                        Edit Lesson
                </IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton
                        onClick={() => setShowConfirmationAlert(true)}
                        className="button-size center-button"
                        expand="block"
                        color="dark">
                        Delete Lesson
                </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    )

    /* ---------------------------- RENDER COMPONENT ---------------------------- */
    return (
        <IonContent>
            {deleteLessonConfirmation()}
            {optionsDrawer()}
        </IonContent >
    );
}

export default LessonOptionsModal;

