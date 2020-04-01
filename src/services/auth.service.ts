import ENDPOINTS from "../constants/endpoints";
import "@codetrix-studio/capacitor-google-auth";
import { Plugins } from '@capacitor/core';
import { store } from "../redux/store";
import { AppState } from '../redux/root.reducer';
import { User } from "../models/User";
import { plainToClass } from 'class-transformer';
import apolloClient from "../graphql/apollo-client";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

export const getAccessToken = async () => {
  const state: AppState = store.getState()
  return state.auth.user?.refreshToken || '';
}


interface RegisterOpts { firstName: string, lastName, email: string, password: string }
export const register = async (registerOpts: RegisterOpts): Promise<User> => {
  apolloClient.resetStore()
  const registerResponse = await fetch(ENDPOINTS.auth.register, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(registerOpts)
  });
  console.log(registerResponse)
  if (!registerResponse.ok) {
    throw new Error('Unable to register user')
  }
  const resp: object = await registerResponse.json()
  return plainToClass(User, resp)
}


export const login = async (email: string, password: string): Promise<User> => {
  apolloClient.resetStore()
  const loginResponse = await fetch(ENDPOINTS.auth.login, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  console.log(loginResponse)
  if (!loginResponse.ok) {
    throw new Error('Unable to login')
  }
  const resp: object = await loginResponse.json()
  return plainToClass(User, resp)
}

export const loginWithGoogle = async (): Promise<User> => {
  apolloClient.resetStore()
  const googleResponse = await Plugins.GoogleAuth.signIn();
  const tokenBlob = new Blob([JSON.stringify({ access_token: googleResponse.authentication.accessToken }, null, 2)], { type: 'application/json' });
  const options: any = {
    method: 'POST',
    body: tokenBlob,
    mode: 'cors',
    cache: 'default'
  };
  const loginResponse = await fetch(ENDPOINTS.auth.googleLogin, options)
  const resp: object = await loginResponse.json()
  console.log(resp)
  return plainToClass(User, resp)
}

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: (state: AppState) => state.auth.isLoggedIn,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export const AuthService = {
  getAccessToken,
  register,
  login,
  loginWithGoogle,
  userIsAuthenticated
}