import React from "react";
import { getAccessJwt } from "../service/authService";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
  const user = getAccessJwt();
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
