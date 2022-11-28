import React from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import toast from "react-hot-toast";
const OrderCard = ({ order }) => {
  console.log(order);
  const {
    name,
    location,
    price,
    condition,
    phone,
    category,
    description,
    id,
    image,
  } = order;
  const handleReportedItems = (order) => {
    // console.log("I am clikcing", order);
    fetch("http://localhost:5000/dashboard/reporteditems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Report successful for this product.");
        console.log(data);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            style={{ height: "290px", width: "330px" }}
            className="rounded-t-lg"
            src={image}
            alt=""
          />
        </a>
        <div className="p-6">
          <div className=" flex items-center justify-between">
            {" "}
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <MdOutlineReportGmailerrorred
              className="text-2xl"
              onClick={() => handleReportedItems(order)}
            ></MdOutlineReportGmailerrorred>
          </div>
          <p className="text-gray-700 text-base mb-4">Location : {location}</p>
          <p className="text-gray-700 text-base mb-4">Price : {price}</p>
          <p className="text-gray-700 text-base mb-4">Phone : {phone}</p>
          <p className="text-gray-700 text-base mb-4">Brand : {category}</p>
          <label
            htmlFor="booking-modal"
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Pay Now
          </label>
        </div>
      </div>
      {/* <ProductModal key={id} bikeDetails={order}></ProductModal> */}
    </div>
  );
};

export default OrderCard;
