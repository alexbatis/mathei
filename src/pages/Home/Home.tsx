/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonIcon, IonGrid, IonRow, IonCol, IonAvatar, IonBadge } from '@ionic/react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
/* --------------------------------- CUSTOM --------------------------------- */
import './Home.scss';
import inbox from '../../assets/icons/inbox.svg';
import { AppState } from '../../redux/root.reducer';
import RecentLessons from '../../components/recent-lessons/recent-lessons';
import { getGreeting } from '../../services/utils';
import HomeActionButtons from './sections/action-buttons';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const Home: React.FC = () => {
	/* ---------------------------------- HOOKS --------------------------------- */
	const user = useSelector((state: AppState) => state.auth.user);
	const history = useHistory();

	/* -------------------------------- CONSTANTS ------------------------------- */
	const greeting = getGreeting()


	/* ----------------------------- RENDER METHODS ----------------------------- */
	const pageHeader = () =>
		<IonHeader mode="ios">
			<IonToolbar mode="ios">
				<IonGrid>
					<IonRow>
						<IonCol className="flex-container" >
							<div className="left-side">
								<span>{greeting}</span>
								<h5>{user?.firstName}</h5>
							</div>
							<div className="right-side">
								{/* <div className="inbox-icon" onClick={() => history.push("/myappointments")} >
									<IonIcon src={inbox}></IonIcon>
									<IonBadge >1</IonBadge>
								</div> */}
								<IonAvatar onClick={() => history.push("/settings")}>
									<img src={user?.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSueLmNAgZOiElR_Uf_YAwY_W59RyyCO9ae_kJ4YkRtZfNVft99"} alt="test" />
								</IonAvatar>
							</div>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonToolbar>
		</IonHeader >


	/* ---------------------------- RENDER COMPONENT ---------------------------- */
	return (
		<IonPage>
			{pageHeader()}
			<IonContent>
				<HomeActionButtons />
				<RecentLessons />
			</IonContent>
		</IonPage >
	);

};

export default Home;
