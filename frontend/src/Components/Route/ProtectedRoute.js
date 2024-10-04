import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const ProtectedRoute = ({ isAdmin, ...rest }) => { // Destructure isAdmin from props
  const { loading, isAuthenticated, user } = useSelector((state) => state.User || {});

  if (loading) return <Loader />;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && user && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
