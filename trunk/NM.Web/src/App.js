import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import "./components/Home/Home.css";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import TawkMessengerReactUmd from "@tawk.to/tawk-messenger-react";

const App = () => {
  const tawkMessengerRef = React.useRef();
  return (
    <div>
      <TawkMessengerReactUmd
        propertyId="63045ad937898912e9649293"
        widgetId="1gb4g5p6m"
        ref={tawkMessengerRef}
      />
      <Layout />
    </div>
  );
};
export default App;
