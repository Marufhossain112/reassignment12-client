import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { MyContext } from "../../context/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loader></Loader>;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
