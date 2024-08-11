import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth'; // Assuming you have a custom hook for authentication

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ redirectPath = "/login" }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to={redirectPath} />;
  }

  // Render the child routes if authenticated
  return <Outlet />;
};

export default PrivateRoute;
