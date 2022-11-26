import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React from "react";
import Loader from "../../components/Loader/Loader";

const MyProducts = () => {
  const { data: addproductsData = [] } = useQuery({
    queryKey: ["addproduct", data],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/dashboard/addproduct");
      const data = await res.json();
      return data;
    },
  });

  console.log(addproductsData);
  //   fetch("http://localhost:5000/dashboard/addproduct")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  return (
    <div>
      {addproductsData.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default MyProducts;
