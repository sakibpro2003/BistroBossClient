import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Secret from "../Pages/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/AdminHome/AdminHome";
import UserHome from "../UserHome/UserHome";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <UserHome />,
      },
      {
        path: "/secret",
        element: <PrivateRoute><Secret/></PrivateRoute>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "additem",
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "manageitems",
        element: <ManageItem></ManageItem>
      },
      {
        path: "admin-home",
        element: <AdminHome/>
      },
      {
        path: "item/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path:"users",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ],
  },
]);

export default router;
