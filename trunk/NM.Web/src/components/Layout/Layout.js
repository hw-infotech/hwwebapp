import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Chatbot from "../Chatbot/Chatbot";
import routes from "../../data/routes";
import NotFound from "../Not-Found/NotFound";

const Layout = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
        <Route path="*" component={NotFound} exact />
      </Switch>
    </Router>
  );
};

export default Layout;
