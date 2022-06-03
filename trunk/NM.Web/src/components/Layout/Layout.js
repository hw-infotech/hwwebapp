import React, { Component } from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chatbot from '../Chatbot/Chatbot'
import routes from '../../data/routes';
import { createBrowserHistory } from 'history';

const Layout = () => {
    const history=createBrowserHistory()
    return (
        <Router history={history}>
            {/* <Chatbot /> */}
            <Switch>
                {routes.map((route, index) => (
                    <Route {...route} key={index} />
                )
                )}
            </Switch>
        </Router>
    )
}

export default Layout