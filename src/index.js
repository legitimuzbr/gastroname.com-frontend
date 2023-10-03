import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Menu from "./Pages/Menu";
import Edit from "./Pages/Edit";
import Categories from "./Components/Categories";
import NovoMenu from "./Pages/NovoMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Gastroname</div>,
  },
  {
    path: "/:userId",
    element: <Menu />,
  },
  {
    path: "/edit/:userId",
    element: <Edit />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/novomenu",
    element: <NovoMenu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
