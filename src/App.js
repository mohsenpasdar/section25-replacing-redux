import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";
import RootLayout from "./containers/RootLayout ";

const App = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <ProductsPage /> },
        { path: "favorites", element: <FavoritesPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
