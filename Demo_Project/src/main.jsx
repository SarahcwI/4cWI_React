import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import PeopleContainer from "./components/pages/PeopleContainer";
import Components1 from "./components/pages/Components1";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PeopleContainer/>,
  },
  {
    path: "/comp",
    element: <Components1/>,
  }  
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
