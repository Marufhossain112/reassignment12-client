import React from "react";

const AddProduct = () => {
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-center font-semibold text-3xl mb-4">Add a Product</h2>
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
            placeholder="Product Name"
            disabled
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
            placeholder="Product Price"
            // defaultValue={user?.email}
            disabled
          />
        </div>

        <div className="form-group mb-6">
          <div class="flex justify-center ">
            <h2 className="font-bold ">Condition :</h2>
            <div class="form-check form-check-inline  mx-3">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio10"
              >
                Excellent
              </label>
            </div>
            <div class="form-check form-check-inline mx-3">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
              >
                Good
              </label>
            </div>
            <div class="form-check form-check-inline mx-3">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
              >
                Fair
              </label>
            </div>
          </div>
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
            placeholder="Product Category"
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
            placeholder="Year of purchase"
          />
        </div>

        <div className="form-group mb-6">
          {" "}
          <textarea
            class="
        form-control
        block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Product Description"
          ></textarea>
        </div>

        <div className="modal-action justify-center">
          <label
            htmlFor="booking-modal"
            className="btn"
            // onClick={() => toast.success("The item is booked")}
          >
            Submit
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
