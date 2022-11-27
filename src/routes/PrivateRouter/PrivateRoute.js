import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  const location = useLocation();
  if (loading) {
    return <h1 className="text-5xl">Loading...</h1>;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
