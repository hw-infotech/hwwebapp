import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomeContent from '../Home/Home';
import AboutUsContent from '../AboutUs/AboutUs';
import ContactUsContent from '../ContactUs/ContactUs';
import ServicesMain from '../services/ServicesMain.js';
import WebDev from '../services/WebDevelopment.js';
import AppDev from '../services/AppDevelopment.js';
import UIUX from '../services/ux_ui_design.js';
import seoTest from '../services/seo_testing.js';
import graphicsD from '../services/GraphicsDesign.js';

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
                <Route exact path = "/AppDevelopment" component = {AppDev} />
                <Route exact path = "/ux_ui_design" component = {UIUX} />
                <Route exact path = "/seo_testing" component = {seoTest} />
                <Route exact path = "/GraphicsDesign" component = {graphicsD} />
            </Router>
        )
    }
}