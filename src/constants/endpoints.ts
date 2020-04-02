import ENVIRONMENT from './environment';

const constructEndpoint = (path: string) => `${ENVIRONMENT.API_URL}${path}`
const constructWSEndpoint = (path: string) => `${ENVIRONMENT.WS_API_URL}${path}`

const ENDPOINTS = {
  base: constructEndpoint(""),
  graphql: constructEndpoint("/graphql"),
  graphqlWs: constructWSEndpoint("/graphql"),
  auth: {
    register: constructEndpoint("/auth/register"),
    login: constructEndpoint("/auth/login"),
    googleLogin: constructEndpoint("/auth/login/google")
  },
  import: {
    duolingo: constructEndpoint("/api/v1/import/duolingo")
  }
}

export default ENDPOINTS