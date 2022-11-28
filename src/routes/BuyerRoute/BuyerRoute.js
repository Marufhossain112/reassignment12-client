import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../../context/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer/useBuyer";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <Loader></Loader>;
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
