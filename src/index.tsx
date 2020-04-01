/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import "reflect-metadata";
import React from 'react';
import ReactDOM from 'react-dom';
import "@codetrix-studio/capacitor-google-auth";
import { Provider } from 'react-redux';
/* --------------------------------- CUSTOM --------------------------------- */
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import { AppState } from './redux/root.reducer';

store.subscribe(() => {
  const state: AppState = store.getState();
  window.localStorage['persistedState'] = JSON.stringify({ auth: state.auth });
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
