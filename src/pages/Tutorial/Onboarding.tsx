/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {
    IonContent,
    IonButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonSlides,
    IonSlide,
    IonIcon,
    IonCard,
    IonCardContent
} from '@ionic/react';
import { arrowForward, bookmarks } from 'ionicons/icons';
/* --------------------------------- CUSTOM --------------------------------- */
import './Onboarding.scss';
import logo from '../../assets/brand/logo-text.png';
import greekYt from '../../assets/screenshots/greek-yt.png';
import spanishSc from '../../assets/screenshots/spanish-sc.png';
import translations from '../../assets/screenshots/translations-2.png';
import { speakWord } from '../../services/utils';
const duolingoIcon = "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/cd/36/33/cd3633d8-27a9-5212-76c6-15a4b5d1bfee/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png";


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const Onboarding: React.FC = () => {

    /* ---------------------------------- HOOKS --------------------------------- */
    const [showSkip, setShowSkip] = useState(true);
    const slideRef = useRef<HTMLIonSlidesElement>(null);
    const history = useHistory();

    /* --------------------------------- METHODS -------------------------------- */
    const speak = () => speakWord('Hola!', 'es-ES', 1.0)
    const startApp = async () => {
        window.localStorage.hasSeenTutorial = true;
        history.push('/home');
    };
    const handleSlideChangeStart = () => slideRef.current!.isEnd().then(isEnd => setShowSkip(!isEnd));

    /* -------------------------- COMPONENT DEFINITION -------------------------- */
    return (
        <IonPage id="tutorial-page" className="ion-grid-background-image">
            <IonHeader no-border>
                <IonToolbar>
                    <IonButtons slot="end">
                        {showSkip && <IonButton color='primary' onClick={startApp}>Skip</IonButton>}
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-grid-background-image">

                <IonSlides ref={slideRef} onIonSlideWillChange={handleSlideChangeStart} pager={true} style={{ height: '100%' }}>
                    <IonSlide className="ion-grid-background-image" >
                        <img src={logo} alt="" className="slide-image" />
                        <h2 className="slide-title">
                            one place to keep track of the languages you've learned
                        </h2>
                    </IonSlide>

                    <IonSlide className="ion-grid-background-image">
                        <IonCard className="bk-white" style={{ maxWidth: '700px' }}>
                            <IonCardContent>
                                <h1 className="slide-title">what is <b>mathei</b>?</h1>
                                <IonIcon icon={bookmarks} className="slide-image" size="large" />
                                <p> learning a language is tough. you've probably tried <i>(and failed)</i> a few times to learn a language</p>
                                <hr />
                                <p>there are many different resources you can use to learn a language (duolingo, youtube, soundcloud, etc...) - each of which have their own pros and cons </p>
                                <hr />
                                <p>what's missing is a single source of truth where each of these resources can be combined to keep track of what you've learned, and where you've learned it</p>
                                <br />
                                <p>enter mathei</p>
                            </IonCardContent>
                        </IonCard>
                    </IonSlide>

                    <IonSlide className="ion-grid-background-image">
                        <IonCard className="bk-white" style={{ maxWidth: '700px' }}>
                            <IonCardContent>
                                <h1 className="slide-title">integrate your lessons with your notes</h1>
                                <img src={greekYt} alt="" className="slide-image-lg shadow" />
                                <hr />
                                <br />
                                <p>directly embed your online language lessons directly in your notes</p>
                            </IonCardContent>
                        </IonCard>
                    </IonSlide>


                    <IonSlide className="ion-grid-background-image">
                        <IonCard className="bk-white" style={{ maxWidth: '700px' }}>
                            <IonCardContent>
                                <h1 className="slide-title">text to speech</h1>
                                <img src={spanishSc} alt="" className="slide-image-lg shadow" />
                                <hr />
                                <br />
                                <p>clicking on a phrase will play the proper pronunciation</p>
                                <IonButton onClick={speak}>try it out</IonButton>
                            </IonCardContent>
                        </IonCard>
                    </IonSlide>

                    <IonSlide className="ion-grid-background-image">
                        <IonCard className="bk-white" style={{ maxWidth: '700px' }}>
                            <IonCardContent>
                                <h1 className="slide-title">find the word you're looking for</h1>
                                <img src={translations} alt="" className="slide-image-lg shadow" />
                                <hr />
                                <br />
                                <p>quickly find a word, phrase, or exercise via a simple search</p>
                            </IonCardContent>
                        </IonCard>
                    </IonSlide>


                    <IonSlide className="ion-grid-background-image">
                        <IonCard className="bk-white" style={{ maxWidth: '700px' }}>
                            <IonCardContent className="centered">
                                <h1 className="slide-title">sync your data with Duolingo</h1>
                                {/* <IonIcon icon={colorWand} className="slide-image" size="large" /> */}
                                <img src={duolingoIcon} alt="" className="slide-image-round" />
                                <p>duolingo is one of the most popular and most effective ways to learn a language</p>
                                <hr />
                                <p>in just one click, you can import the words and exercises you've learned on Duolingo to mathei</p>
                                <hr />



                            </IonCardContent>
                        </IonCard>
                    </IonSlide>


                    <IonSlide className="ion-grid-background-image">
                        <img src="assets/img/ica-slidebox-img-4.png" alt="" className="slide-image" />
                        <h2 className="slide-title">ready to go?</h2>
                        <IonButton fill="clear" onClick={startApp}>
                            Let's get started
                        <IonIcon slot="end" icon={arrowForward} />
                        </IonButton>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage >
    );
}


export default Onboarding;