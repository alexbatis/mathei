import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './root.reducer'

const history = createBrowserHistory()


const persistedState = JSON.parse(window.localStorage['persistedState'] || '{}');


export const store = createStore(
  createRootReducer(history), // root reducer with router state
  persistedState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
    ),
  ),
);