import { PropsWithChildren } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

const ApiProvider =  ({ children  }:PropsWithChildren ) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApiProvider;