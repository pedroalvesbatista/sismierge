import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

function PrivateRoute({ children }) {
  const storage = JSON.parse(localStorage.getItem("@sismiegee/auth"));
  // const storage= true

  if (!storage) {
    toast.error("Precisa estar logado");
    return <Navigate to="/auth/login" replace />;
  }

  return children ? children : <Outlet />;
}

export default PrivateRoute;
