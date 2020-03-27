import { IonContent, IonHeader, IonPage, IonToolbar, IonIcon, IonGrid, IonRow, IonCol, IonSearchbar, IonButtons, IonBackButton, IonTitle, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import React from 'react';
import { apps, menu } from 'ionicons/icons';
import './Category.scss';
import CardCategories from '../components/card-categories';
import { useSelector } from 'react-redux';


const Category: React.FC = () => {

	const category = useSelector((state: any) => state.reviewReducers.data);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons>
					<IonTitle>Category</IonTitle>
				</IonToolbar>
			</IonHeader >
			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonSearchbar animated></IonSearchbar>


							<div className="filter-container">
								<IonSelect value="recent" interface="popover">
									<IonSelectOption value="recent">Most recent</IonSelectOption>
									<IonSelectOption value="az">A-Z</IonSelectOption>
									<IonSelectOption value="za">Z-A</IonSelectOption>
									<IonSelectOption value="featured">Featured</IonSelectOption>
								</IonSelect>
								<IonButtons class="icons">
									<IonButton>
										<IonIcon slot="icon-only" icon={apps} />
									</IonButton>
									<IonButton>
										<IonIcon slot="icon-only" icon={menu} />
									</IonButton>
								</IonButtons>
							</div>

							{
								category.map((item: any) => <CardCategories {...item} key={item.id} />)
							}
						</IonCol>
					</IonRow>
				</IonGrid>


			</IonContent>
		</IonPage >
	);


};

export default Category;
