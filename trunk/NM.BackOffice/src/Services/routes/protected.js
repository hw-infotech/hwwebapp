import { Navigate } from "react-router-dom";
import ErrorHandling from "../../components/errorHandling";
const Protected = ({ isLoggedIn, children }) => {
  const token = JSON.parse(localStorage.getItem("nestor.user"));
  console.log("reached", token);
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return <ErrorHandling>{children}</ErrorHandling>;
};
export default Protected;
