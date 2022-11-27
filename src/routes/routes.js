import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import ProductCategoriesId from "../HomePage/ProductCategoriesId/ProductCategoriesId";
import Main from "../Main/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import DashboardLayout from "../Pages/DashboardLayout/DashboardLayout";
import Login from "../Pages/Login/Login";
import MyProducts from "../Pages/MyProducts/MyProducts";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import AllBuyers from "./AdminRoute/AllBuyers/AllBuyers";
import AllSellers from "./AdminRoute/AllSelles/AllSellers";
import ReportedItems from "./AdminRoute/ReportedItems/ReportedItems";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allbikes/:id",
        element: <ProductCategoriesId></ProductCategoriesId>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allbikes/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute>
      <DashboardLayout></DashboardLayout>
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addproduct",
        element: (
          // <SellerRoute>
          <AddProduct></AddProduct>
          // </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          // <SellerRoute>
          <MyProducts></MyProducts>
          // </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          // <BuyerRoute>
          <MyOrders></MyOrders>
          // </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/reporteditems",
        element: <ReportedItems></ReportedItems>,
      },
    ],
  },
]);
