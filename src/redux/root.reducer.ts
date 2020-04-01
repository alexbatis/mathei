import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './auth/auth.reducer';
import reviewReducers from './reviewReducers';
import { AuthState } from './auth/auth.state';

export interface AppState {
    router: any,
    reviewReducers: any,
    auth: AuthState
}


const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    reviewReducers: reviewReducers,
    auth: authReducer
})
export default createRootReducer