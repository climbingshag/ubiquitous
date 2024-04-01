import { gql, TypedDocumentNode } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/react-hooks";
import type { List, QueryListArgs } from '../types.generated.js'

const GET_LIST: TypedDocumentNode<{list: List}, QueryListArgs> = gql`
query GetList($id: ID!) {
    list(id: $id) {
      id
      createdAt
      name
    }
}`

export const useList = (id: string): List => {
 const {data} = useSuspenseQuery(GET_LIST, {
    variables: { id },
  });
  return data.list;
}