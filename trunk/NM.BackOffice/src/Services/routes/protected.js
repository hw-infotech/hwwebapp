import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
  const token = JSON.parse(localStorage.getItem("nestor.user"));
  console.log("reached", token);
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};
export default Protected;
