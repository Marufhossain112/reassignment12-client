import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const [bikesData, setBikesData] = useState([]);
  //   setBikesData("");
  useEffect(() => {
    fetch("http://localhost:5000/allbikes")
      .then((res) => res.json())
      .then((data) => {
        setBikesData(data);
        // console.log(data);
      });
  }, []);
  // console.log(bikesData.brandName);
  return (
    <div>
      {/* <div>{bikesData.map((brand) => console.log(brand.brandName))}</div> */}
      <div className="mt-32">
        <div className="px-4 sm:px-8 max-w-5xl m-auto">
          <h1 className="text-center font-semibold text-3xl">
            Choose your favorite brand
          </h1>
          <p className="mt-2 text-center  mb-4 text-gray-500 text-sm">
            Brand Names
          </p>
          <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
            {bikesData.map((brand, i) => (
              <li
                key={i}
                className="px-4 py-2 text-center bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
              >
                <Link to={`/categoriesid/${brand._id}`}>{brand.brandName}</Link>
              </li>
            ))}
          </ul>
          <a
            href="mailto:jefte_caro@yahoo.com"
            className="text-xs text-center block mt-4 hover:underline"
          >
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;