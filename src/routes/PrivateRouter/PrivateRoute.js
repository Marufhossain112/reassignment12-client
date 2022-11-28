import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { MyContext } from "../../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
