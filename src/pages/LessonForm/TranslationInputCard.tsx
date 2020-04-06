/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import  { trash, options } from 'ionicons/icons';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCardContent
} from '@ionic/react';
/* --------------------------------- CUSTOM --------------------------------- */
const cardHeaderStyle = {
  backgroundColor: "#FFF",
  borderBottom: "2px solid #f4f4f4"
}


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface TranslationInputCardProps { translation: any, remove: any, update: any }
const TranslationInputCard: React.FC<TranslationInputCardProps> = ({ translation, remove, update }) => {

  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <IonCard className="bk-white">

      <IonCardHeader style={cardHeaderStyle}>
        <IonCardSubtitle style={{ fontSize: '1rem' }}>
          <IonIcon icon={options} className="icon-medium pointer" />
        </IonCardSubtitle>
        <IonCardTitle>
          <IonIcon icon={trash} className="icon-medium pointer" onClick={remove} />
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size-xs="12" size-sm="12" size-md="12" size-lg="6">
              <IonItem class="bg-transparent">
                <IonLabel position="floating">Phrase</IonLabel>
                <IonInput
                  value={translation.phrase}
                  onIonChange={(e: any) => update({
                    name: 'phrase',
                    value: e.detail.value
                  })}
                />
              </IonItem>
            </IonCol>
            <IonCol size-xs="12" size-sm="12" size-md="12" size-lg="6">
              <IonItem class="bg-transparent">
                <IonLabel position="floating">Translation</IonLabel>
                <IonInput
                  value={translation.translated}
                  onIonChange={(e: any) => update({
                    name: 'translated',
                    value: e.detail.value
                  })}
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>

    </IonCard>
  );

}

export default TranslationInputCard;