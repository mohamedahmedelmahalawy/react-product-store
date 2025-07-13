import React, { useEffect } from "react";
import { useUsers } from "../../context/userscontext/useUsers";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { userAuthenticatedValue, userAuthenticated } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      userAuthenticatedValue === null &&
      Object.keys(userAuthenticatedValue).length === 0 &&
      !userAuthenticated
    ) {
      navigate("/login", { replace: true });
    }
  }, [userAuthenticatedValue, userAuthenticated, navigate]);

  return children;
}

export default ProtectedRoute;
