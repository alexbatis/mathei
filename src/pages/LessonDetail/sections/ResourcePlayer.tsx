/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import ReactPlayer from 'react-player';
/* --------------------------------- CUSTOM --------------------------------- */
import './resource-player.scss';
/* -------------------------------- CONSTANTS ------------------------------- */
const soundCloudRegExp = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
// eslint-disable-next-line no-useless-escape
const youtubeRegExp = new RegExp(/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/, 'i');


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface ResourcePlayerProps { resources: Array<string> }
const ResourcePlayer: React.FC<ResourcePlayerProps> = ({ resources }) => {

  // Extract first playable resource
  let playableResource: string | null = null;
  resources.forEach(resource => {
    if (youtubeRegExp.test(resource) || soundCloudRegExp.test(resource))
      playableResource = resource
  })

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