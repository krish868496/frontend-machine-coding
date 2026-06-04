import { Navigate } from "react-router-dom";

const ProtechedRoute = ({ children }:any) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
   return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtechedRoute;
