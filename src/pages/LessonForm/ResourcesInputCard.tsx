/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React, { useState } from 'react';
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
import { trash } from 'ionicons/icons';
/* --------------------------------- CUSTOM --------------------------------- */
import useDebounce from '../../hooks/debounce.hooks';
import { useEffect } from 'react';
import { isPlayableResource, lightThumbnail } from '../../services/utils';
import ReactPlayer from 'react-player';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface ResourcesInputCardProps { resource: any, remove: any, update: any }
const ResourcesInputCard: React.FC<ResourcesInputCardProps> = ({ resource, remove, update }) => {
  const [resourceValue, setResourceValue] = useState(resource);
  const debouncedResourceValue = useDebounce(resourceValue, 1000);

  useEffect(() => update(resourceValue), [resourceValue, update])

  const previewPlayer = () => (!isPlayableResource(debouncedResourceValue)) ? null :
    <div className='player-wrapper-sm'>
      <ReactPlayer
        className='react-player'
        light={lightThumbnail(debouncedResourceValue)}
        controls
        youtubeConfig={{ playerVars: { showinfo: 1 } }}
        url={debouncedResourceValue}
        width='100%'
        height='100%'
      />
    </div>


  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <IonCard className="bk-white">
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonItem className="bg-transparent">
                <IonLabel position="floating">Resource URL</IonLabel>
                <IonInput
                  value={resourceValue}
                  onIonChange={(e: any) => {
                    // update(e.detail.value)
                    setResourceValue(e.detail.value)
                  }}
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>


      {previewPlayer()}


      <IonCardHeader>
        <IonCardSubtitle style={{ fontSize: '1rem' }}> {null}</IonCardSubtitle>
        <IonCardTitle>
          <IonIcon icon={trash} className="icon-medium pointer" onClick={remove} />
        </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );

}

export default ResourcesInputCard;