import { render, screen } from "@testing-library/react";
import ApiProvider from "./ApiProvider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

jest.mock("@apollo/client");

describe("ApiProvider", () => {

  test("Renders self", () => {
    const testChildren = <div />;
    render(<ApiProvider>
        {testChildren}
      </ApiProvider>)
      expect(ApolloProvider.mock.lastCall[0].client).toBeInstanceOf(ApolloClient)
      expect(ApolloProvider.mock.lastCall[0].children).toEqual(testChildren)
  });
});
