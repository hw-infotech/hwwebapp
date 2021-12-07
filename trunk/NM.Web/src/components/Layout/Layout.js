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
import BlogList from '../Blog/blogList.js';
import Blogpost from '../Blog/blogpost.js';

const hist = createBrowserHistory();
export class Layout extends Component { 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {HomeContent} />
                    <Route exact path = "/home" component = {HomeContent} />
                    <Route exact path = "/about-us" component = {AboutUsContent} />
                    <Route exact path = "/services" component = {ServicesMain} />
                    <Route exact path = "/contact-us" component = {ContactUsContent} />
                    <Route exact path = "/web-development" component = {WebDev} />
                    <Route exact path = "/app-development" component = {AppDev} />
                    <Route exact path = "/ui-ux-design" component = {UIUX} />
                    <Route exact path = "/seo" component = {seoTest} />
                    <Route exact path = "/graphic-design" component = {graphicsD} />
                    <Route exact path="/telemedician" component={Telemedician} />
                    <Route exact path="/career" component={Career} />
                    <Route exact path="/UploadCv" component={UploadCv} />
                    <Route exact path="/privacy-Policy" component={PrivacyPolicy} />
                    <Route exact path="/terms-and-condition" component={TermsCondition} />
                    <Route exact path="/blogs" component={BlogList} />
                    <Route exact path="/blog-post" component={Blogpost} />
                    <Route exact path="/NotFound" component = {NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}