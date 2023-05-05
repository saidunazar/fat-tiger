import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./src/App";
import Home from "./src/components/Home";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Error } from "./src/components/Error";
import Loader from "./src/components/shared/Loader";

const Offers = lazy(() => import("./src/components/Offers"));

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
            path: "offers",
            element: <Offers />,
          },
        ],
      },
      {
        path: "/restaurant-menu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<Loader />}>
            <Offers />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
