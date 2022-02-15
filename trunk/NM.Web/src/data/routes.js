import React from "react"
import { Redirect } from "react-router"
import AboutUsContent from "../components/AboutUs/AboutUs"
import BlogList from "../components/Blog/blogList"
import Blogpost from "../components/Blog/blogpost"
import Career from "../components/Career/career"
import UploadCv from "../components/Career/uploadCv"
import Telemedician from "../components/caseStudies/Telemedician_case"
import ContactUsContent from "../components/ContactUs/ContactUs"
import Gallery from "../components/Gallery"
import HomeContent from "../components/Home/Home"
import NotFound from "../components/Not-Found/NotFound"
import PrivacyPolicy from "../components/privacy-terms/privacyPolicy"
import TermsCondition from "../components/privacy-terms/terms_Condition"
import AppDev from "../components/services/AppDevelopment"
import GraphicsD from "../components/services/GraphicsDesign"
import SeoTest from "../components/services/seo_testing"
import ServicesMain from "../components/services/ServicesMain"
import UIUX from "../components/services/ux_ui_design"
import WebDev from "../components/services/WebDevelopment"

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
    route("/seo", SeoTest),
    route("/graphic-design", GraphicsD),
    route("/telemedician", Telemedician),
    route("/career", Career),
    route("/UploadCv", UploadCv),
    route("/privacy-Policy", PrivacyPolicy),
    route("/terms-and-condition", TermsCondition),
    route("/blogs", BlogList),
    route("/blog-post", Blogpost),
    route("/under-mantainence", NotFound),
    route("/gallery", Gallery)
]
export default routes