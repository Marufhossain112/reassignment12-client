import React from "react";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ul className="text-center mt-3">
        <li>Add Product</li>
        <li>My Products</li>
      </ul>
    </div>
  );
};

export default DashboardLayout;
