import { IonContent, IonHeader, IonPage, IonToolbar, IonIcon, IonGrid, IonRow, IonCol, IonAvatar, IonButtons, IonBackButton, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonModal } from '@ionic/react';
import React, { useState } from 'react';
import { calendar, checkmarkCircle } from 'ionicons/icons';
import './Profile.scss';
import ModalForm from '../ModalForm';

import { useSelector, useDispatch } from 'react-redux';
import Review from '../../components/review';
import Info from '../../components/info';
import Gallery from '../../components/gallery';
import ConfirmModal from '../ConfirmModal';


const Profile: React.FC = (props: any) => {

	const showModal = useSelector((state: any) => state.reviewReducers.showModal);
	const showConfirmModal = useSelector((state: any) => state.reviewReducers.showConfirmModal);
	const dispatch = useDispatch();
	const [value] = useState(props.location.state);
	const [valueType, setValueType] = useState('info');


	function showInfoSegment() {
		switch (valueType) {
			case 'info':
				return <Info />;
			case 'gallery':
				return <Gallery />;
			case 'review':
				return <Review {...value} />;
			default:
				return null;
		}
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons>
				</IonToolbar>
			</IonHeader >
			<IonContent>
				<IonModal isOpen={showModal} cssClass="modal-transparency">
					<ModalForm />
				</IonModal>
				<IonModal isOpen={showConfirmModal} cssClass="modal-container">
					<ConfirmModal />
				</IonModal>

				

				<IonFab vertical="bottom" horizontal="end" slot="fixed">
					<IonFabButton onClick={() => dispatch({ type: 'ShowModalTrue' })}>
						<IonIcon icon={calendar} />
					</IonFabButton>
				</IonFab>

				<IonGrid>
					<IonRow>
						{
							value.item !== undefined &&
							<IonCol className="ion-profile ion-text-center">
								<IonAvatar>
									<img src={value.item.avatar} height="100" width="100%" alt="..."/>
								</IonAvatar>

								<h5>
									{value.item.name}
									<IonIcon className="icon-verified" icon={checkmarkCircle} />
								</h5>
								{value.item.verified &&
									<small className="verified">Verified professional</small>
								}

								<p>{value.item.info}</p>

							</IonCol>
						}

					</IonRow>

					<IonRow>
						<IonSegment value={valueType} onIonChange={(e: any) => setValueType(e.detail.value)}>
							<IonSegmentButton value="info">
								<IonLabel>Info</IonLabel>
							</IonSegmentButton>
							<IonSegmentButton value="gallery">
								<IonLabel>Gallery</IonLabel>
							</IonSegmentButton>
							<IonSegmentButton value="review">
								<IonLabel>Review</IonLabel>
							</IonSegmentButton>
						</IonSegment>
					</IonRow>


					<div>
						{
							showInfoSegment()
						}
					</div>




				</IonGrid>

			</IonContent>
		</IonPage >
	);

};

export default Profile;
