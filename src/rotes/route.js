import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loadable from "./Loadable";
const Layout = Loadable(lazy(() => import("src/Layout/index")));
const HomePage = Loadable(lazy(() => import("src/component/home/index")));
const Menu = Loadable(lazy(() => import("src/component/menu/index")));

const Route = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="home" /> },
        { path: "home", element: <HomePage /> },
        { path: "list", element: <Menu title="List" /> },
        { path: "notification", element: <Menu title="Notification" /> },
        { path: "location", element: <Menu title="Location" /> },
        { path: "trip-status", element: <Menu title="Trip Status" /> },
        { path: "settings", element: <Menu title="Settings" /> },
        { path: "monthly-income", element: <Menu title="Monthly Income" /> },
        { path: "transaction", element: <Menu title="Transaction" /> },
        { path: "invoice", element: <Menu title="Invoice" /> },
        { path: "upgrade", element: <Menu title="Upgrade" /> },
      ],
    },
  ]);
  return route;
};

export default Route;
