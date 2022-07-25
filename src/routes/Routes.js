import React, { Suspense } from "react";

const Home = React.lazy(() => import("../pages/Home"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const routes = [
  { path: "/notfound", exact: true, main: () => <NotFound /> },
  { path: "/signup", exact: true, main: () => <SignUp /> },
  { path: "/", exact: true, main: () => <Home /> },
];
export default routes;

