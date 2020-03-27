import { IonContent, IonHeader, IonPage, IonToolbar, IonIcon, IonGrid, IonRow, IonCol, IonAvatar, IonBadge, IonSearchbar } from '@ionic/react';
import React from 'react';
import './Home.scss';
import inbox from '../assets/icons/inbox.svg';


import CardInfo from '../components/card-info';
import CardCategories from '../components/card-categories';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';


const Home: React.FC = () => {

	const data = useSelector((state: any) => state.reviewReducers.data);
	const cardInf = useSelector((state: any) => state.reviewReducers.cardInf);
	const history = useHistory();

	

		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonGrid>
							<IonRow>
								<IonCol  className="flex-container" >
									<div className="left-side">
										<span>Good Morning</span>
										<h5>Jane Smith</h5>
									</div>
									<div className="right-side">
										<div className="inbox-icon" onClick={() =>history.push("/myappointments")} >
											<IonIcon src={inbox}></IonIcon>
											<IonBadge >1</IonBadge>
										</div>
										<IonAvatar onClick={ () => history.push("/settings") }>
											<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="test"/>
										</IonAvatar>
									</div>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonToolbar>
				</IonHeader >
				<IonContent>
					<IonGrid>
						<IonRow>
							<IonCol>
								<h5>What you do want to be done?</h5>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<IonSearchbar animated></IonSearchbar>
							</IonCol>
						</IonRow>
						<IonRow>
							

								{ 
		
									cardInf.map((item: any) => {
										return	<IonCol size="4"  key={item.id} onClick={ () => history.push("/category") }>
													<CardInfo {...item} />
												</IonCol>
													
												
									})
								}

						</IonRow>    
					</IonGrid>

					<IonGrid>
						<IonRow>
							<IonCol className="profile-title">
								<h5>Most viewed</h5>   
							</IonCol>
						</IonRow>
						<IonRow>

							{
								data.map((item: any) => {
									return	<IonCol  key={item.id} onClick={() => history.push("/profile" , {item})}>
												<CardCategories {...item}/>
											</IonCol>	
								})
							}

						</IonRow>
					</IonGrid>
				</IonContent>
			</IonPage >
		);
	
};

export default Home;
