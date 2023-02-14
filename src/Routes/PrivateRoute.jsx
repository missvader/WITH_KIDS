import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
  const { currentUser } = useContext(AuthContext);
  return currentUser !== null
    ? children
    : <Navigate to="/signup/" replace/>

}

export default PrivateRoute;
