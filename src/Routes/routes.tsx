// Declare your routes here

import { lazy } from "react";
import DashboardLayouts from "../Layouts/Design/DashboardLayouts";

const Dashboard = lazy(() => import("../pages/dashboad"));
const Login = lazy(() => import("../pages/login"));
const Global = lazy(() => import("../pages/global"));
const GlobalTwo = lazy(() => import("../pages/globalTwo"));

export const protectedRoutes = [
  {
    path: "/",
    element: (
      <DashboardLayouts>
        <Dashboard />
      </DashboardLayouts>
    ),
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
  {
    path: "/global-two",
    element: <GlobalTwo />,
  },
];
