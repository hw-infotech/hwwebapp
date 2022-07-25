import React from "react"
import { Redirect } from "react-router-dom"
import AboutUsContent from "../components/AboutUs/AboutUs"
import BlogListComp from "../components/Blog"
import BlogList from "../components/Blog/blogList"
import Blogpost from "../components/Blog/blogpost"
import Blogpost1 from "../components/Blog/blogpost1"
import Blogpost2 from "../components/Blog/blogpost2"
import Career from "../components/Career/career"
import Job_Description from "../components/Career/jobdescription"
import UploadCv from "../components/Career/uploadCv"
import ourWorks from "../components/caseStudies/ourWorks"
import Telemedician from "../components/caseStudies/Telemedician_case"
import ContactUsContent from "../components/ContactUs/ContactUs"
import Gallery from "../components/Gallery"
import HomeContent from "../components/Home/Home"
import Education from "../components/industries/education"
import Entertainment from "../components/industries/entertainment"
import Finance from "../components/industries/finance"
import Grocery from "../components/industries/grocery"
import Healthcare from "../components/industries/healthcare"
import Insurance from "../components/industries/insurance"
import Realestate from "../components/industries/realestate"
import Restaurant from "../components/industries/restaurant"
import RetailEcommerce from "../components/industries/retail-ecommerce"
import Sports from "../components/industries/sports"
import TourTravel from "../components/industries/tourTravel"
import Transport from "../components/industries/transport"
import Meeting from "../components/Meeting/meeting"
import InternalServerError from "../components/Not-Found/internalServerError"

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
  route("/", () => <Redirect to="/home" />),
  route("/home", HomeContent),
  route("/about-us", AboutUsContent),
  route("/our-works", ourWorks),
  route("/services", ServicesMain),
  route("/contact-us", ContactUsContent),
  route("/web-development", WebDev),
  route("/app-development", AppDev),
  route("/ui-ux-design", UIUX),
  route("/seo", SeoTest),
  route("/graphic-design", GraphicsD),
  route("/telemedician", Telemedician),
  route("/Career", Career),
  route("/uploadCv", UploadCv),
  route("/privacy-Policy", PrivacyPolicy),
  route("/terms-and-condition", TermsCondition),
  route("/blogs", BlogList),
  route("/jobdescription", Job_Description),
  //route("/impact-digital-transformation", Blogpost),
  //// route("/blog-post1", Blogpost1),
  // route("/blog-post2", Blogpost2),
  route("/under-mantainence", NotFound),
  route("/gallery", Gallery),
  route("/blog/:name", BlogListComp),
  route("/meeting", Meeting),
  route("/healthcare", Healthcare),
  route("/restaurant", Restaurant),
  route("/real-estate", Realestate),
  route("/travel-and-hospitality", TourTravel),
  route("/education" , Education),
  route("/transport", Transport),
  route("/finance", Finance),
  route("/entertainment", Entertainment),
  route("/sports", Sports),
  route("/retail-ecommerce",RetailEcommerce),
  route("/insurance", Insurance),
  route("/grocery",Grocery),
  route("/500",InternalServerError)
];
export default routes
