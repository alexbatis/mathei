/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonGrid, IonRow, IonCol } from "@ionic/react"
import { useHistory } from 'react-router';
/* --------------------------------- CUSTOM --------------------------------- */
import CardInfo from "../../../components/card-info"


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const HomeActionButtons: React.FC = () => {
  /* ---------------------------------- HOOKS --------------------------------- */
  const history = useHistory();

  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <IonGrid>
      <IonRow>

        <IonCol onClick={() => history.push("/lessons")}>
          <CardInfo
            color="green"
            icon="User"
            name="My Lessons"
          />
        </IonCol>
        <IonCol onClick={() => history.push("/lesson-form")}>
          <CardInfo
            color="blue"
            name="Create Lesson"
            icon="Add"
          />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol onClick={() => history.push("/translations")}>
          <CardInfo
            color="yellow"
            name="My Translations"
            icon="Book"
          />
        </IonCol>
        <IonCol onClick={() => history.push("/import")}>
          <CardInfo
            color="black"
            name="Import Lessons"
            icon="Import"
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default HomeActionButtons;
