import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Admin_Login from "../../pages/authnication/admin_login";
import route from "./Routes";

const PrivateRoute = () => {
  console.log("propsadmin-login");
  return (
    <Routes>
      {route?.map((rout, index) => {
        const token = window.localStorage.getItem("nestor.user");
        console.log(token);

        if (token) {
          return (
            <Route
              {...rout}
              key={index}
              component={(props) => {
                return <rout.element {...props} />;
              }}
            />
          );
        } else {
          console.log("else");
          return (
            <Route path={`/`} exact element={<Admin_Login />} />
          );
        }
      })}
    </Routes>
  );
};

// return (
//   <Route
//     {...rout}
//     key={index}
//     component={(props) => {
//     }}
//   />
// );
export default PrivateRoute;
