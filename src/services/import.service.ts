import ENDPOINTS from "../constants/endpoints";
import axios from 'axios';
import { AuthService } from "./auth.service";
import apolloClient from "../graphql/apollo-client";


axios.interceptors.response.use(response => response, error => {
  if (error?.response?.status === 401)
    console.log('TODO: log user out');

  return Promise.reject((error?.response?.data?.message) ? new Error(error.response.data.message) : error)
});


export interface DuoLingoImportResult {
  translationsCreated: number
  lessonsCreated: number
}
const duolingoImport = async (duoEmail: string, duoPassword: string): Promise<DuoLingoImportResult> => {
  try {
    const token = AuthService.getAccessToken()
    const options = { headers: { authorization: token ? `Bearer ${token}` : '' } }
    const response = await axios.post(ENDPOINTS.import.duolingo, { duoEmail, duoPassword }, options)
    apolloClient.resetStore()
    return response.data
  } catch (err) {
    const error = (err && err.message && err.error && typeof err.error === 'string') ? new Error(`${err.message} - ${err.error}`) : err;
    throw (error)
  }
}

export const ImportService = {
  duolingoImport
}