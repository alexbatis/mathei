const ENVIRONMENT = {
  LOCAL: {
    API_URL: 'http://localhost:9000',
    WS_API_URL: 'ws://localhost:9000/graphql'
  },
  TEST: {
    API_URL: 'https://api.test.mathei.io',
    WS_API_URL: 'ws://api.test.mathei.io/graphql'
  },
  PROD: {
    API_URL: 'http://localhost:9000',
    WS_API_URL: 'ws://localhost:9000/graphql'
  }
}


// eslint-disable-next-line no-restricted-globals
const env = (location.hostname) === 'localhost' ? ENVIRONMENT.LOCAL : ENVIRONMENT.TEST
export default env