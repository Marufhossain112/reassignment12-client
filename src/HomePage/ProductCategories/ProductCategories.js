import React, { useEffect, useState } from "react";

const ProductCategories = () => {
  const [bikesData, setBikesData] = useState("");
  //   setBikesData("");
  useEffect(() => {
    fetch("http://localhost:5000/allbikes")
      .then((res) => res.json())
      .then((data) => {
        setBikesData(data);
        // console.log(data);
      });
  }, []);
  console.log(bikesData);

  return (
    <div>
      <h2>Choose Your Brand</h2>
      <div></div>
    </div>
  );
};

export default ProductCategories;
