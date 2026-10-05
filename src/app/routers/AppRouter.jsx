import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Layout } from "../layout/Layouts";
import { memo, useMemo } from "react";
import { Heroes } from "../../pages/Heroes/Heroes";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Register/Register";
import { Progress } from "../../pages/Progress/Progress";

export const AppRouter = memo(() => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Navigate to={"/home"} replace />,
            },
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/heroes",
              element: (
                <ProtectedRoute>
                  <Heroes />
                </ProtectedRoute>
              ),
            },
            {
              path: "/login",
              element: <Login />,
            },

            {
              path: "/register",
              element: <Register />,
            },
            {
              path: "/progress",
              element: <Progress />,
            },
          ],
        },
      ]),
    [],
  );

  return <RouterProvider router={router} />;
});
