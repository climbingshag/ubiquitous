import { useSuspenseQuery, gql, TypedDocumentNode } from "@apollo/client";
import type { User } from "../types.generated.ts";

const GET_ME: TypedDocumentNode<{ me: User }> = gql`
  query GetMe{
    me {
        firstName
        lastName
      id
      createdAt
      lists {
        id
        name
        tasks {
            id
            name
            completed
        }
      }
    }
  }
`;

export const useMe = (): User => {
  const { data } = useSuspenseQuery(GET_ME);
  return data.me;
};
