/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { HttpLink, ApolloLink, split } from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { setContext } from "apollo-link-context";
import { getMainDefinition } from "apollo-utilities";
/* --------------------------------- CUSTOM --------------------------------- */
import ENDPOINTS from "../constants/endpoints";
import { AuthService } from "../services/auth.service";

/* -------------------------------- HTTP LINK ------------------------------- */
const httpLink = new HttpLink({ uri: ENDPOINTS.graphql })

const authMiddleware = setContext(async (req, { headers }) => {
  const token = await AuthService.getAccessToken()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    },
  };
})

const httpLinks = ApolloLink.from([
  authMiddleware,
  httpLink,
])


/* ---------------------------- WEB SOCKET LINKS ---------------------------- */
const wsLink = new WebSocketLink({
  uri: ENDPOINTS.graphqlWs, options: {
    lazy: true,
    reconnect: true,
    connectionParams: () => ({
      accessToken: AuthService.getAccessToken()
    })
  }
})

const wsLinks = ApolloLink.from([wsLink])


/* ------------------------------ SUBSCRIPTIONS ----------------------------- */
const isSubscription = (operation: { query: any; }) => {
  const definition = getMainDefinition(operation.query)
  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
}


export const links = split(isSubscription, wsLinks, httpLinks)