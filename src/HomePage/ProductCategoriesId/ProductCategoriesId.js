import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductCategoriesId = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>This is category id.</h2>
    </div>
  );
};

export default ProductCategoriesId;
