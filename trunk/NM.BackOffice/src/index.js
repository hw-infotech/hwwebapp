import React from "react";
import "./index.css";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./Services/redux/store/store";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorHandling from "./components/errorHandling/index";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={Store}>
    <Router>
      <ErrorHandling>
        <App />
      </ErrorHandling>
    </Router>
  </Provider>
);
