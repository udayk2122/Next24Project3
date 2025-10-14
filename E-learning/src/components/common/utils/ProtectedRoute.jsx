import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to redirect them back after login.
    return <Navigate to="/login" replace />;
  }

  return children;
};