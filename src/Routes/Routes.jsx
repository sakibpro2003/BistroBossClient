import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      

    ],
  },
]);

export default router;
