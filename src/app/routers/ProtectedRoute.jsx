import { Navigate, useLocation } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/register" state={{ from: location }} replace />;
  }

  return children;
}