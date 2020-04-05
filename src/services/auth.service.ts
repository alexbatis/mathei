import ENDPOINTS from "../constants/endpoints";
import "@codetrix-studio/capacitor-google-auth";
import { Plugins } from '@capacitor/core';
import { store } from "../redux/store";
import { AppState } from '../redux/root.reducer';
import { User } from "../models/User";
import { plainToClass } from 'class-transformer';
import apolloClient from "../graphql/apollo-client";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import axios from 'axios';
import { toClass } from "./utils";


axios.interceptors.response.use(response => response, error => {
  if (error.response.status === 401)
    console.log('TODO: log user out');

  return Promise.reject((error?.response?.data?.message) ? new Error(error.response.data.message) : error)
});

export const getAccessToken = () => {
  const state: AppState = store.getState()
  return state.auth.user?.refreshToken || '';
}


interface RegisterOpts { firstName: string, lastName, email: string, password: string }
export const register = async (registerOpts: RegisterOpts): Promise<User> => {
  apolloClient.resetStore()
  const registerResponse = await axios.post(ENDPOINTS.auth.register, registerOpts)
  return toClass<User>(User, registerResponse.data)
}


export const login = async (email: string, password: string): Promise<User> => {
  apolloClient.resetStore()
  const loginResponse = await axios.post(ENDPOINTS.auth.login, { email, password })
  return toClass<User>(User, loginResponse.data)
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