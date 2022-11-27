import React from "react";

const AdvertiseCards = ({ advertise }) => {
  const {
    name,
    price,
    condition,
    description,
    location,
    phone,
    purchaseYear,
    category,
  } = advertise;
  return (
    <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center mt-5">
      <div class="py-3 px-6 text-xl font-bold border-b border-gray-300 text-gray-700">
        {name}
      </div>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl mb-2">Price : ${price}</h5>
        <p class="text-gray-700 text-base mb-4">
          {description.length > 100 ? description.slice(0, 100) : description}
        </p>
        <p class="text-gray-700 text-base mb-4">Category : {category}</p>
        <p class="text-gray-700 text-base mb-4">Condition : {condition}</p>

        <p class="text-gray-700 text-base mb-4">
          Year of purchase : {purchaseYear}
        </p>
        <p class="text-gray-700 text-base mb-4">Call to : {phone}</p>
        <p class="text-gray-700 text-base mb-4">Location : {location}</p>
        <button
          type="button"
          class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Book Now
        </button>
      </div>
    </div>

    // <div class="flex justify-center">
  );
};

export default AdvertiseCards;
