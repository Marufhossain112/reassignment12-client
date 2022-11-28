import React, { useContext } from "react";
import Loader from "../../components/Loader/Loader";
import { MyContext } from "../../context/AuthProvider/AuthProvider";
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct";
import HomeBanner from "../HomeBanner/HomeBanner";
import ProductCategories from "../ProductCategories/ProductCategories";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  const { loading } = useContext(MyContext);
  if (loading) {
    return <Loader></Loader>;
  }
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
