/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
/* --------------------------------- CUSTOM --------------------------------- */
import useDebounce from '../../hooks/debounce.hooks';
import { isPlayableResource, lightThumbnail } from '../../services/utils';
import ReactPlayer from 'react-player';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface ResourceCardProps { resource: string }
const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const debouncedResource = useDebounce(resource, 1000);


  const previewPlayer = () => (!isPlayableResource(debouncedResource)) ? null :
    <div className='player-wrapper-sm'>
      <ReactPlayer
        className='react-player'
        light={lightThumbnail(debouncedResource)}
        controls
        youtubeConfig={{ playerVars: { showinfo: 1 } }}
        url={debouncedResource}
        width='100%'
        height='100%'
      />
    </div>


  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <IonCard className="bk-white">
      <IonCardHeader>
        
        <IonCardTitle>
          <a href={resource} target="blank">{resource}</a>
          {/* <IonIcon icon={trash} className="icon-medium pointer" onClick={remove} /> */}
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        {previewPlayer()}
      </IonCardContent>






    </IonCard>
  );

}

export default ResourceCard;