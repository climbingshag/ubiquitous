import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useMe } from "../Api/Hooks/MeHooks";
import { Outlet, Link } from "react-router-dom";
export default function RootPage() {
  const { lists } = useMe();
  return (
    <div>
      <h1>Lists</h1>
      <List>
        {lists.map((list) => {
          return (
            <ListItem key={list.id}>
              <Link to={`lists/${list.id}`}>
                <h2>{list.name}</h2>
                <h2>({list.tasks.length})</h2>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
