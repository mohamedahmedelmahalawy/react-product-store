import React from "react";
import { useUsers } from "../../context/userscontext/useUsers";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const { userAuthenticatedValue, userAuthenticated } = useUsers();
  const isAuthenticated =
    userAuthenticated &&
    userAuthenticatedValue &&
    Object.keys(userAuthenticatedValue).length > 0;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

export default RequireAuth;
