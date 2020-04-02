/* eslint-disable no-restricted-globals */
const ENVIRONMENT = {
  LOCAL: {
    ENV_NAME: 'local',
    API_URL: 'http://localhost:9000',
    WS_API_URL: 'ws://localhost:9000/graphql'
  },
  TEST: {
    ENV_NAME: 'test',
    API_URL: 'https://api.test.mathei.io',
    WS_API_URL: 'ws://api.test.mathei.io/graphql'
  },
  PROD: {
    ENV_NAME: 'prod',
    API_URL: 'https://api.mathei.io',
    WS_API_URL: 'ws://api.mathei.io/graphql'
  }
}


let env = ENVIRONMENT.LOCAL;
if (location.hostname === 'test.mathei.io') env = ENVIRONMENT.TEST
if (location.hostname === 'mathei.io') env = ENVIRONMENT.PROD

export default env