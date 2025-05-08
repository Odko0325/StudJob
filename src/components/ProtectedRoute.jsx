import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    alert('Уучлаарай, та эхлээд нэвтэрсэн байх шаардлагатай.');
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
