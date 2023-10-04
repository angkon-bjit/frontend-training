import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const Authenticate = () => {
  const check = localStorage.getItem("token");
  console.log("Authenticating", check);

  return check ? <Outlet /> : <Navigate to="/about" />;
};

export default Authenticate;
