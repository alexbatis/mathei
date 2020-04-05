/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonInput, IonItem } from '@ionic/react';





const CustomInput: React.FC<{
    id: string,
    placeholder: string,
    onChange: any
}> = (props) => {
    return (
        <IonItem>
            <IonInput
                placeholder={props.placeholder}
                onIonChange={(e) => props.onChange(e)}
            >

            </IonInput>
        </IonItem>
    )
}

export default CustomInput;