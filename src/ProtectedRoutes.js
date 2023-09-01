import React from 'react';
import { Navigate, Redirect, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth?.isLoggedIn);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default ProtectedRoutes;
