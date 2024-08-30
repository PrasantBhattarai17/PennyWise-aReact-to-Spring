import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); 

  // Redirect to login if no token is found
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
