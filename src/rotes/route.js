import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loadable from "./Loadable";
const Layout = Loadable(lazy(() => import("src/Layout/index")));
const Route = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return route;
};

export default Route;
