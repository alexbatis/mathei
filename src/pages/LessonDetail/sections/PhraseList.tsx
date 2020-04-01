/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
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
		<IonGrid>
			<IonRow>
				<IonCol>
					<div className="info-list">
          <p>{header}</p>
						<IonGrid>
							<IonRow>

								{translations.map(translation =>
									<IonCol sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="6" sizeXl="4">
										<TranslationExpandableCard key={translation.id} translation={translation} />
									</IonCol>
								)}
							</IonRow>
						</IonGrid>



						{/* <IonList>
							{translations.map(translation =>
								<IonItem lines="none" key={translation.id}>
									<IonLabel class="translation-phrase-label">{translation.phrase}</IonLabel>
									<div className="translated-label" onClick={() => speakWord(translation.translated, 'el-GR')}>
										<p> {translation.translated} </p>
									</div>
								</IonItem>
							)}
						</IonList> */}
					</div>
				</IonCol>
			</IonRow>
		</IonGrid >
	);

}

export default PhraseList;