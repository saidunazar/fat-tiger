import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./src/App";
import Home from "./src/components/Home";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Error } from "./src/components/Error";
import Loader from "./src/components/shared/Loader";

const Faqs = lazy(() => import("./src/components/Faqs"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "faqs",
            element: <Faqs />,
          },
        ],
      },
      {
        path: "/restaurant-menu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/faqs",
        element: (
          <Suspense fallback={<Loader />}>
            <Faqs />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
