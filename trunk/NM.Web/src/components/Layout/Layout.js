import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Chatbot from "../Chatbot/Chatbot";
import routes from "../../data/routes";

const Layout = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
    </Router>
  );
};

export default Layout;
