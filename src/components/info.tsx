import React from 'react';
import { IonGrid, IonRow, IonCol, IonItem, IonList, IonLabel } from '@ionic/react';


const Info: React.FC = () => {

    return (
        <IonGrid>
			<IonRow>
				<IonCol>
					<div className="info-list">
						<p>Services</p>
						<IonList>
							<IonItem lines="none">
								<IonLabel>Painting</IonLabel>
								<div className="rate">
									<p> $18.00 </p>
									<span>per hour</span>
								</div>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Steel framer</IonLabel>
								<div className="rate">
									<p>$62.00</p>
									<span>per hour</span>
								</div>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Ironwork and Woodwork</IonLabel>
								<div className="rate">
									<p>$60.00</p>
									<span>per hour</span>
								</div>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Roof repairment</IonLabel>
								<div className="rate">
									<p>$45.00</p>
									<span>per hour</span>
								</div>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Moving</IonLabel>
								<div className="rate">
									<p>$20.00</p>
									<span>per hour</span>
								</div>
							</IonItem>
						</IonList>
					</div>

					<div className="info-list">
						<p>Services Hours</p>
						<IonList>
							<IonItem lines="none">
								<IonLabel>Mondays</IonLabel>
								<small slot="end">8:00 to 20:00</small>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Tuesdays</IonLabel>
								<small slot="end">11:00 to 14:00</small>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Wednesdays</IonLabel>
								<small slot="end">10:00 to 22:00</small>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Thursdays</IonLabel>
								<small slot="end">8:00 to 20:00</small>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Fridays</IonLabel>
								<small slot="end">8:00 to 20:00</small>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Saturdays</IonLabel>
								<small slot="end">8:00 to 16:00</small>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>Sundays</IonLabel>
								<small slot="end">Closed</small>
							</IonItem>
						</IonList>
					</div>
					<div className="info-list">
						<p>Contact Info</p>
						<IonList>
							<IonItem lines="none">
								<IonLabel>unclejohn@gmail.com</IonLabel>
							</IonItem>
							<IonItem lines="none">
								<IonLabel>(+1) 800 345 6870</IonLabel>
							</IonItem>
						</IonList>
					</div>
				</IonCol>
			</IonRow>
		</IonGrid>
    );

}

export default Info;