import { PropsWithChildren } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
console.log(process.env.REACT_APP_API_URL);
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const ApiProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApiProvider;
