import { forwardRef } from "react";
import {
  createBrowserRouter,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Root, List, Settings, Account } from "./Pages";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "lists/:listId",
    element: <List />,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
]);

export const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});
