/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* --------------------------------- STYLES --------------------------------- */
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.scss';
import { ApolloProvider } from '@apollo/react-hooks';
/* --------------------------------- CUSTOM --------------------------------- */
/* ---------------------------------- PAGES --------------------------------- */
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Settings from './pages/Settings/Settings';
import ProfileSettings from './pages/Settings/ProfileSettings';
import Onboarding from './pages/Tutorial/Onboarding';
import Category from './pages/Category';
import Profile from './pages/Profile/Profile';
import MyAppointments from './pages/MyAppointments';
import Lessons from './pages/Lessons/Lessons';
import LessonDetail from './pages/LessonDetail/LessonDetail';
import LessonForm from './pages/LessonForm/LessonForm';
import Translations from './pages/Translations/Translations';
/* -------------------------------- SERVICES -------------------------------- */
import { userIsAuthenticated } from './services/auth.service';
/* --------------------------------- GRAPHQL -------------------------------- */
import apolloClient from './graphql/apollo-client';
import Import from './pages/Import/Import';
import env from './constants/environment';
import Help from './pages/Settings/Help';
import About from './pages/Settings/About';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
console.log(`Running in environment ${env.ENV_NAME}`)
const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" component={Login} exact={true} />
          <Route path="/register" component={Register} exact={true} />
          <Route path="/onboarding" component={Onboarding} exact={true} />
          <Route path="/home" component={userIsAuthenticated(Home)} exact={true} />
          <Route path="/settings" component={userIsAuthenticated(Settings)} exact={true} />
          <Route path="/settings/profile" component={userIsAuthenticated(ProfileSettings)} exact={true} />
          <Route path="/settings/help" component={userIsAuthenticated(Help)} exact={true} />
          <Route path="/settings/about" component={userIsAuthenticated(About)} exact={true} />
          <Route path="/import" component={userIsAuthenticated(Import)} exact={true} />
          <Route path="/category" component={userIsAuthenticated(Category)} exact={true} />
          <Route path="/profile" component={userIsAuthenticated(Profile)} exact={true} />
          <Route path="/lessons" component={userIsAuthenticated(Lessons)} exact={true} />
          <Route path="/translations" component={userIsAuthenticated(Translations)} exact={true} />
          <Route path="/lesson/:lessonId" component={userIsAuthenticated(LessonDetail)} />
          <Route path="/lesson-form" component={userIsAuthenticated(LessonForm)} exact={true} />
          <Route path="/lesson-form/:lessonId" component={userIsAuthenticated(LessonForm)} exact={true} />
          <Route path="/myappointments" component={userIsAuthenticated(MyAppointments)} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </ApolloProvider>
);

export default App;
