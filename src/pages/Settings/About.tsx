/* eslint-disable react/jsx-no-target-blank */
/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
/* --------------------------------- CUSTOM --------------------------------- */
import './Settings.scss';
const About: React.FC = () => {

  return (
    <IonPage>
      <IonHeader no-border>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" />
          </IonButtons>
          <IonTitle color="secondary">About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          <IonCard className="bk-white">
            <IonCardContent>
              <p style={{margin : "0.5rem"}}>
                Hi there! Looks like you've made it to the about page.
              </p>
              <p style={{margin : "0.5rem"}}>
                My name's Alex and I made this app primarily to broaden my knowledge on some software engineering skills such as :
              </p>
              <ul>
                <li>ReactJS</li>
                <li>TypeScript</li>
                <li>Mobile Development</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
              <p style={{margin : "0.5rem"}}>..and also, to help me learn Greek!</p>
              <p style={{margin : "0.5rem"}}>
                You can check out the code for it <a href="https://github.com/alexbatis/mathei" target="_blank"> here</a>, and connect with me on LinkedIn
                <a href="https://www.linkedin.com/in/alexander-batis-3a202b101" target="_blank"> here</a>. My website is a bit bare at the moment, but expect something soon at
                <a href="https://alexbat.is" target="_blank"> alexbat.is</a>
              </p>
              <p style={{marginTop : "1.5rem"}}>Thanks for checking out my app! :-)</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default About;