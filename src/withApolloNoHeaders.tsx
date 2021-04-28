import { NextPage } from "next";
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

export const withApolloNoHeaders = (Comp: NextPage) => (props: any) => {
  return (
      <ApolloProvider client={getApolloClient(null, props.apolloState)}>
        <Comp {...props}/>
      </ApolloProvider>
  );
};
export const getApolloClient = (ctx?: any, initialState?: NormalizedCacheObject) => {
  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_URL,
    fetch,
  });
  const cache = new InMemoryCache().restore(initialState || {});
    return new ApolloClient({
      link: httpLink,
      cache,
    });
};
