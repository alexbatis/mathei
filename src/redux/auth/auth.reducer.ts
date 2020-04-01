import { INITIAL_AUTH_STATE, AuthState } from "./auth.state";
import { loginAction, logoutAction } from "./auth.actions";


export default function authReducer(state = INITIAL_AUTH_STATE, action: any): AuthState {
  switch (action.type) {
    case loginAction.type:
      return { ...state, isLoggedIn: true, user: action.payload }
    case logoutAction.type:
      return { ...state, isLoggedIn: false, user: null }
    default:
      return state;
  }
}