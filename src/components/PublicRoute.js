import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If the user is authenticated (token exists), redirect to the home page
  return token ? <Navigate to="/overview" replace /> : children;
};

export default PublicRoute;
