/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonSkeletonText, IonCard, IonCardHeader } from '@ionic/react';
import { IonCardContent } from '@ionic/react';
/* --------------------------------- CUSTOM --------------------------------- */
// const centeredStyle = {
//   height: '100%',
//   justifyContent: 'center',
//   alignItems: 'center',
//   display: 'flex'
// }

/* -------------------------------------------------------------------------- */
/*                             COMPONENT DEFINTION                            */
/* -------------------------------------------------------------------------- */
interface SkeletonLoadingProps { card?: boolean, length?: number }
const skeletonList = () =>
  <>
    <IonSkeletonText animated style={{ width: '60%' }} />
    <IonSkeletonText animated />
    <IonSkeletonText animated style={{ width: '88%' }} />
    <IonSkeletonText animated style={{ width: '70%' }} />
    <IonSkeletonText animated style={{ width: '60%' }} />
  </>


const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({ card = true, length = 5 }) => {

  let arr: Array<any> = []
  for (let i = 0; i < length; i++) arr[i] = i

  return (
    <>
      {arr.map((val, index) => (
        card ?
          <IonCard className="bk-white" key={`skeleton-${index}`}>
            <IonCardHeader>
              <IonSkeletonText animated style={{ width: '88%' }} />
            </IonCardHeader>
            <IonCardContent>
              {skeletonList()}
            </IonCardContent>
          </IonCard> :
          <div>
            <h1>asldkjfldksjf</h1>
        skeletonList()
        </div>
      ))}
    )


    </>
  )
}

export default SkeletonLoading 