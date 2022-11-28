import React from "react";
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct";
import HomeBanner from "../HomeBanner/HomeBanner";
import ProductCategories from "../ProductCategories/ProductCategories";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <ProductCategories></ProductCategories>
      <AdvertiseProduct></AdvertiseProduct>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
