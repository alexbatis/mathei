/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import ReactPlayer from 'react-player';
/* --------------------------------- CUSTOM --------------------------------- */
import './resource-player.scss';
import { isPlayableResource } from '../../../services/utils';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface ResourcePlayerProps { resources: Array<string> }
const ResourcePlayer: React.FC<ResourcePlayerProps> = ({ resources }) => {

  // Extract first playable resource
  const playableResource = resources.find(isPlayableResource)

  if (!playableResource) return <></>

  /* ---------------------------- RENDER COMPONENT ---------------------------- */
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        controls
        youtubeConfig={{ playerVars: { showinfo: 1 } }}
        url={playableResource}
        width='100%'
        height='100%'
      />
    </div>
  )

}

export default ResourcePlayer;