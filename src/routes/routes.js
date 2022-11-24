import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import ProductCategoriesId from "../HomePage/ProductCategoriesId/ProductCategoriesId";
import Main from "../Main/Main";

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
        path: "/categoriesid/:id",
        element: <ProductCategoriesId></ProductCategoriesId>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allbikes/${params.id}`),
      },
    ],
  },
]);
