import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCards from "../ProductCards/ProductCards";

const ProductCategoriesId = () => {
  const brands = useLoaderData();
  // console.log(brands);
  const { bikesData } = brands;
  // console.log(bikesData);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-5">
        Brand name : {bikesData[0].brandName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-xl md:max-w-4xl lg:max-w-7xl mx-auto">
        {bikesData.map((bikes) => (
          <ProductCards key={bikes.id} bike={bikes}></ProductCards>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoriesId;
