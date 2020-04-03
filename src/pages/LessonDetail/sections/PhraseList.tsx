/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonList, IonItem } from '@ionic/react';
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
				<IonItem lines="full" key={translation.id}>
					<TranslationExpandableCard translation={translation} />
				</IonItem>
			)}
		</IonList>
	);

}

export default PhraseList;