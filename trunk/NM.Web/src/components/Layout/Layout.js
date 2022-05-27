import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import HomeContent from '../Home/Home';
// import AboutUsContent from '../AboutUs/AboutUs';
// import ContactUsContent from '../ContactUs/ContactUs';
// import ServicesMain from '../services/ServicesMain.js';
// import WebDev from '../services/WebDevelopment.js';
// import AppDev from '../services/AppDevelopment.js';
// import UIUX from '../services/ux_ui_design.js';
// import seoTest from '../services/seo_testing.js';
// import graphicsD from '../services/GraphicsDesign.js';
// import Telemedician from '../caseStudies/Telemedician_case.js';
// import NotFound from '../Not-Found/NotFound.js';
// import Career from '../Career/career.js';
// import UploadCv from '../Career/uploadCv.js';
// import PrivacyPolicy from '../privacy-terms/privacyPolicy.js';
// import TermsCondition from '../privacy-terms/terms_Condition.js';
// import BlogList from '../Blog/blogList.js';
// import Blogpost from '../Blog/blogpost.js';
import Chatbot from '../Chatbot/Chatbot'
import routes from '../../data/routes';

const Layout = () => {
    return (
        <Router>
            <Chatbot/>
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