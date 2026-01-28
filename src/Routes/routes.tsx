// Declare your routes here

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/dashboad"));
const Login = lazy(() => import("../pages/login"));
const Global = lazy(() => import("../pages/global"));

export const protectedRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

export const authRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
];
export const publicRoutes = [
  {
    path: "/global",
    element: <Global />,
  },
];
