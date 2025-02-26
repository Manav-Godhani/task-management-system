import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Check if admin is logged in
  const isAdminLoggedIn = localStorage.getItem('adminlogin');

  // If admin is logged in, render the protected route, otherwise redirect to login
  return isAdminLoggedIn === 'true' ? children : <Navigate to="/adminlogin" />;
}

export default PrivateRoute;
