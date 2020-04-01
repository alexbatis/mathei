import { User } from "../../models/User";

export interface AuthState {
  isLoggedIn: boolean
  user: User | null
}

export const INITIAL_AUTH_STATE: AuthState = {
  isLoggedIn: false,
  user: null
}
