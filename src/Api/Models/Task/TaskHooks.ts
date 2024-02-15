import { gql, TypedDocumentNode } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/react-hooks";
import type { Task, QueryTaskArgs } from "../types.generated.js";

const GET_TASK: TypedDocumentNode<{ task: Task }, QueryTaskArgs> = gql`
  query GetTask($id: ID!) {
    task(id: $id) {
      id
      createdAt
    }
  }
`;

export const useTask = (id: string): Task => {
  const { data } = useSuspenseQuery(GET_TASK, {
    variables: { id },
  });
  return data.task;
};
