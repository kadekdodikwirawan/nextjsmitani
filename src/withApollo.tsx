import { NextPage } from "next";
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const withApollo = (Comp: NextPage) => (props: any) => {
  return (
      <ApolloProvider client={getApolloClient(null, props.apolloState)}>
        <Comp />
      </ApolloProvider>
  );
};
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('access_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
export const getApolloClient = (ctx?: any, initialState?: NormalizedCacheObject) => {
  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_URL,
    fetch,
  });
  const cache = new InMemoryCache().restore(initialState || {});
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache,
    });
};
