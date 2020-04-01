const ENVIRONMENT = {
  LOCAL: {
    API_URL: 'http://localhost:9000',
    WS_API_URL: 'ws://localhost:9000/graphql'
  },
  TEST: {
    API_URL: 'http://localhost:9000',
    WS_API_URL: 'ws://localhost:9000/graphql'
  },
  PROD: {
    API_URL: 'http://localhost:9000',
    WS_API_URL: 'ws://localhost:9000/graphql'
  }
}

// TODO : configure at build time
export default ENVIRONMENT.LOCAL