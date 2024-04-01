import { useParams } from "react-router-dom";
import { useList } from "../Api/Hooks/ListHooks";

export default function ListPage() {
  const { listId } = useParams() as { listId: string };
  const list = useList(listId);
  return <div>{list.name}</div>;
}
