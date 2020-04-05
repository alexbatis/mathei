/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
/* ------------------------------- THIRD PARTY ------------------------------ */
import { Translation } from '../../../models/Translation';
import TranslationExpandableCard from '../../../components/translation-expandable-card/TranslationExpandableCard';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
interface PhraseInfoProps { translations: Array<Translation>, header?: string }
const PhraseList: React.FC<PhraseInfoProps> = ({ translations, header }) => {

	/* ---------------------------- RENDER COMPONENT ---------------------------- */
	return (
		<IonList>
			{translations.map(translation =>
				<IonItemSliding key={translation.id}>
					<IonItem lines="full" >
						<TranslationExpandableCard translation={translation} />
					</IonItem>
					<IonItemOptions side="end">
						<IonItemOption color="danger" onClick={() => console.log(`delete translation ${translation.id}`)}>Delete</IonItemOption>
					</IonItemOptions>
				</IonItemSliding>
			)}
		</IonList>
	);

}

export default PhraseList;