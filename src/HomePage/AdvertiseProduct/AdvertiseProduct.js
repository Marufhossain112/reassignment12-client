import { useQuery } from "@tanstack/react-query";
import React from "react";

const AdvertiseProduct = () => {
  const { data: advertiseData = [], refetch } = useQuery({
    queryKey: ["advertiseproduct"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertiseproduct");
      const data = await res.json();
      return data;
    },
  });
  refetch();
  console.log(advertiseData);
  return (
    <div className="mb-5">
      <h2 className="text-center text-3xl font-medium">Advertisement</h2>
    </div>
  );
};

export default AdvertiseProduct;
