import React, { useContext } from "react";
import toast from "react-hot-toast";
import { MyContext } from "../../context/AuthProvider/AuthProvider";

const ProductModal = ({ bikeDetails }) => {
  const { name, resalePrice } = bikeDetails;
  const { user } = useContext(MyContext);
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                  defaultValue={user?.displayName}
                  disabled
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block
                  
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                  defaultValue={user?.email}
                  disabled
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Enter your number"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Enter location"
                />
              </div>

              <div className="form-group mb-6">
                <p>Item Name : {name}</p>
              </div>
              <div className="form-group mb-6">
                <p>Item Price : {resalePrice}/=</p>
              </div>

              <div className="modal-action justify-center">
                <label
                  htmlFor="booking-modal"
                  className="btn"
                  onClick={() => toast.success("The item is booked")}
                >
                  Submit
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
