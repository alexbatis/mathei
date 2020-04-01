/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { ApolloClient, InMemoryCache } from 'apollo-boost';
/* --------------------------------- CUSTOM --------------------------------- */
import { links } from './apollo-client.links';


/* -------------------------------------------------------------------------- */
/*                          APOLLO CLIENT DEFINITION                          */
/* -------------------------------------------------------------------------- */
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: links,
  defaultOptions: { query: { fetchPolicy: 'no-cache' } },
  connectToDevTools: true
});

export default apolloClient;
