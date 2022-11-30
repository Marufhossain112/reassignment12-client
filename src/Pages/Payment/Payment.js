import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
console.log(stripePromise);

const Payment = () => {
  const payment = useLoaderData();
  console.log(payment);

  return (
    <div>
      <h2>
        Do payment for <strong>{payment[0].name}</strong>
      </h2>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm payment={payment} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
