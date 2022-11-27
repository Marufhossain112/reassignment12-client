import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import ProductCategoriesId from "../HomePage/ProductCategoriesId/ProductCategoriesId";
import Main from "../Main/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import DashboardLayout from "../Pages/DashboardLayout/DashboardLayout";
import Login from "../Pages/Login/Login";
import MyProducts from "../Pages/MyProducts/MyProducts";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";

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
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/addproduct",
        element: (
          <AdminRoute>
            <AddProduct></AddProduct>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <AdminRoute>
            <MyProducts></MyProducts>
          </AdminRoute>
        ),
      },
    ],
  },
]);
