import React from "react";
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct";
import ProductCategories from "../ProductCategories/ProductCategories";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <ProductCategories></ProductCategories>
      <AdvertiseProduct></AdvertiseProduct>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
