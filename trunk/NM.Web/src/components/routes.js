import React from "react"
import { Redirect } from "react-router"
import AboutUsContent from "./AboutUs/AboutUs"
import BlogList from "./Blog/blogList"
import Blogpost from "./Blog/blogpost"
import Career from "./Career/career"
import UploadCv from "./Career/uploadCv"
import Telemedician from "./caseStudies/Telemedician_case"
import ContactUsContent from "./ContactUs/ContactUs"
import HomeContent from "./Home/Home"
import PrivacyPolicy from "./privacy-terms/privacyPolicy"
import TermsCondition from "./privacy-terms/terms_Condition"
import AppDev from "./services/AppDevelopment"
import graphicsD from "./services/GraphicsDesign"
import seoTest from "./services/seo_testing"
import ServicesMain from "./services/ServicesMain"
import UIUX from "./services/ux_ui_design"
import WebDev from "./services/WebDevelopment"
import NotFound from './Not-Found/NotFound.js';

const route = (path, component, exact = true) => ({ path, component, exact })

const routes = [
    route("/", () => (<Redirect to="/home" />)),    
    route("/home", HomeContent),
    route("/about-us", AboutUsContent),
    route("/services", ServicesMain),
    route("/contact-us", ContactUsContent),
    route("/web-development", WebDev),
    route("/app-development", AppDev),
    route("/ui-ux-design", UIUX),
    route("/seo", seoTest),
    route("/graphic-design", graphicsD),
    route("/telemedician", Telemedician),
    route("/career", Career),
    route("/UploadCv", UploadCv),
    route("/privacy-Policy", PrivacyPolicy),
    route("/terms-and-condition", TermsCondition),
    route("/blogs", BlogList),
    route("/blog-post", Blogpost),
    route("/NotFound", NotFound)
]
export default routes