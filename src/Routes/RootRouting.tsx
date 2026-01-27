import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { authRoutes, protectedRoutes } from "./routes";
import { ReactNode, Suspense } from "react";
import PageNotFound from "../pages/pageNotFound";

const RootRouting = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {protectedRoutes?.map(
            (route: { path: string; element: ReactNode }, index: number) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            },
          )}
        </Route>
        {authRoutes?.map(
          (route: { path: string; element: ReactNode }, index: number) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          },
        )}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RootRouting;
