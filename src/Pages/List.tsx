import { useParams } from "react-router-dom";
import { useList } from "../Api/Hooks/ListHooks";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function ListPage() {
  const { listId } = useParams() as { listId: string };
  const list = useList(listId);
  return (
    <div>
      <List>
        <h2>{list.name}</h2>
        {list.tasks.map((task) => {
          return (
            <ListItem key={task.id}>
              <h2>{task.name}</h2>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
