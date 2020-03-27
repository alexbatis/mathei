import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IonGrid, IonRow, IonCol, IonItem, IonProgressBar } from '@ionic/react';
import CardReview from './card-review';


const Review: React.FC = (props: any) => {

    const reviews = useSelector( (state:any) => state.reviewReducers.review );
    const [value] = useState(props.item);

    return (
        <IonGrid >
            <IonRow>
                <IonCol>
                    <div className="review-container">
                        <p>{value.reviews} <small>reviews</small></p>
                        <IonItem lines="none">
                            <IonProgressBar
                                color="primary"
                                value={1}
                            />
                            <span slot="end"> 5 stars</span>
                        </IonItem>
                        <IonItem lines="none">
                            <IonProgressBar
                                color="primary"
                                value={0.8}
                            />
                            <span slot="end"> 4 stars</span>
                        </IonItem>
                        <IonItem lines="none">
                            <IonProgressBar
                                color="primary"
                                value={0.1}
                            />
                            <span slot="end"> 3 stars</span>
                        </IonItem>
                        <IonItem lines="none">
                            <IonProgressBar
                                color="primary"
                                value={0.4}
                            />
                            <span slot="end"> 2 stars</span>
                        </IonItem>
                        <IonItem lines="none">
                            <IonProgressBar
                                color="primary"
                                value={0.1}
                            />
                            <span slot="end"> 1 stars</span>
                        </IonItem>
                    </div>

                    {reviews.map((item: any) => {
                        return <CardReview {...item} key={item.id}/>
                    })}
                </IonCol>
            </IonRow>
        </IonGrid>
    );

}

export default Review;