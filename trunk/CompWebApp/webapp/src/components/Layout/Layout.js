import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom";
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
import Telemedician from '../caseStudies/Telemedician_case.js';
import NotFound from '../Not-Found/NotFound.js';
import Career from '../Career/career.js';
import UploadCv from '../Career/uploadCv.js';
import PrivacyPolicy from '../privacy-terms/privacyPolicy.js';
import TermsCondition from '../privacy-terms/terms_Condition.js';

const hist = createBrowserHistory();
export class Layout extends Component { 
    render() {
        return (
            <BrowserRouter>
                <Switch>
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
                <Route exact path="/Telemedician_case" component={Telemedician} />
                <Route exact path="/career" component={Career} />
                <Route exact path="/uploadCv" component={UploadCv} />
                <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
                <Route exact path="/terms_Condition" component={TermsCondition} />

                <Route component = {NotFound} />
            </Switch>
        </BrowserRouter>
        )
    }
}