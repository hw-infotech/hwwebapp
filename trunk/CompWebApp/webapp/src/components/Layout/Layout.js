import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomeContent from '../Home/Home';
import AboutUsContent from '../AboutUs/AboutUs';
import ContactUsContent from '../ContactUs/ContactUs';
import ServicesMain from '../services/ServicesMain.js';
import WebDev from '../services/WebDevelopment.js';

const hist = createBrowserHistory();
export class Layout extends Component { 
    render() {
        return (
            <Router history={hist}>
                <Route exact path = "/" component = {HomeContent} />
                <Route exact path = "/home" component = {HomeContent} />
                <Route exact path = "/about-us" component = {AboutUsContent} />
                <Route exact path = "/services_main" component = {ServicesMain} />
                <Route exact path = "/contact-us" component = {ContactUsContent} />
                <Route exact path = "/WebDevelopment" component = {WebDev} />
            </Router>
        )
    }
}