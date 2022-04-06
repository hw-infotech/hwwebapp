import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import './ServicesMain.css';
import Footer_new from '../Layout/Footer_new';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import Portfolio from '../Home/portfolio';
import { useEffect } from 'react';
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { WebuserRegister } from '../../Redux/Action/Actionfunction';
import Dashboard from '../../layout/dashboard';
import WebPortfolio from '../Home/webPortfolio';
import withNewsletterAddress from '../../Shared/HOC/newsletterAddress';

const WebDev = (props) => {
    const {newsLetter, setNewsLetter} = props;
    const dispatch = useDispatch()
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
    // this changes the scrolling behavior to "smooth"

    const initialValues = {
        services: {
            appdevelopment: false,
            webdevelopment: false,
            uiuxDesign: false,
            seo: false,
            graphic_design: false
        },
        name: "",
        phone: "",
        email: "",
        message: ""
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Required'),
        name: Yup.string().required("Required").min(3).max(25).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        phone: Yup.string().required("Required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "Minimum 10 number's reuired")
            .max(10, "Maximum 10 number's required"),
        message: Yup.string().required("Required").min(15)
    })

    const notify = () => toast.success("Successfully Submitted");//, { theme: "colored" }

    const handlFormSubmit = (values, { resetForm }) => {
        values.services = {
            appdevelopment: false,
            webdevelopment: true,
            uiuxDesign: false,
            seo: false,
            graphic_design: false
        }
        console.log("values,", values);
        dispatch(WebuserRegister(values))
        // notify()
        resetForm()
    }

    return (
      <div>
        <WebPortfolio />
        <section className="ServiceMainBanners webDevlopBox">
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            // closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="container">
            <div className="servicesImageHalfBox">
              <img src="assets/img/web-development.png" alt="" />
            </div>
            <div className="Service_contentPanel">
              <small>Web Development</small>
              <h1>
                Web Development where technological expertise coupled with
                excogitation
              </h1>
              <p>
                Expertise with strong R & D drives in-depth focus on the website
                concept. Our award -winning developer team delivers 100% custom
                web development service with user-friendly navigation that makes
                us different.
              </p>
            </div>
          </div>
        </section>

        <section className="technologyStack">
          <div className="container">
            <div className="stacks">
              <div className="stackTitle">
                <h2>
                  Technology <strong>Stack</strong> We Used.
                </h2>
              </div>
              <ul>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/angular-icon.svg" />
                    </div>
                    <div className="stackTitle">Angular</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/nodejs-icon.svg" />
                    </div>
                    <div className="stackTitle">Node.js</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/react.svg" />
                    </div>
                    <div className="stackTitle">React.js</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/firebase.svg" />
                    </div>
                    <div className="stackTitle">Firebase</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/vue-js-logo.svg" />
                    </div>
                    <div className="stackTitle">Vue.js</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="our-experts">
          <div className="container">
            <div className="left">
              <h2 className="light">
                Share your <br />
                <strong>Web Application idea </strong> with us, our developers
                will make that happen!
              </h2>
            </div>
            <div className="right">
              <Link to="/contact-us" className="btn-light btn-icon">
                Talk to Developers Now!
              </Link>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <div className="processBox">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                  <div className="ProcessContent">
                    <h3>Customer Centric Web Development Process.</h3>
                    <p>
                      Web development services from Nestormind are aiming to
                      provide seamless design, engineering, supporting, and
                      evolving different software types. Our products play
                      omnirole and are available with cross-browser along with
                      cross-device compatibility mostly driven by mobile
                      responsiveness. Everything is done by the dedicated team
                      under one roof. Our service criteria start from basic
                      website designs to CMS along with E-commerce websites.
                      This service is customizable to fit with the business
                      needs.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                  <div className="processSlider">
                    <div className="webIcon">
                      <img src="assets/img/web-development_services.svg" />
                    </div>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      autoplay={true}
                      items={1}
                      margin={10}
                      nav
                    >
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">01</div>
                          <div className="processTitle">
                            Custom Web Development
                          </div>
                          <p>
                            Having longer years of experience and equipped with
                            latest frameworks, our approach is dynamic and
                            proven. A team of skilled web developers capable to
                            conceptualize the requirement and the function that
                            client wants.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">02</div>
                          <div className="processTitle">
                            Software Consulting Services
                          </div>
                          <p>
                            Software consulting services help to assess and to
                            raise the efficiency of technology-enabled business
                            processes. Our consulting services include
                            technology consulting, software assessment, Software
                            development consulting and implementation.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">03</div>
                          <div className="processTitle">
                            Software Product Development
                          </div>
                          <p>
                            Software product development outsourcing can cover
                            all or some product lifecycle stages – from ideation
                            to evolution. We at Nestormind create SaaS, mobile
                            and desktop products elevated with trending
                            features.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">04</div>
                          <div className="processTitle">Managed IT Service</div>
                          <p>
                            Managed IT service is the best way to keep your IT
                            infrastructure and applications stable,
                            cost-effective, and relevant to the current business
                            needs.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">05</div>
                          <div className="processTitle">
                            Cloud App Development Services
                          </div>
                          <p>
                            Cloud app development implies building certain apps
                            that mainly run in the cloud and may leverage cloud
                            features and services offered by various cloud
                            vendors.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">06</div>
                          <div className="processTitle">
                            Application Modernization Services
                          </div>
                          <p>
                            Our application modernization service helps to keep
                            the conventional apps cost-efficient and relevant
                            according to the current business needs.
                          </p>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="formBox">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="form">
                  <div className="title">Need Help with Development?</div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={handlFormSubmit}
                    validationSchema={validationSchema}
                  >
                    {({
                      handleChange,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                    }) => (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSubmit();
                        }}
                      >
                        <div className="input-form">
                          <div className="label">Name</div>
                          <div className="input-filed">
                            <Field
                              name="name"
                              id={
                                touched && touched.name && errors && errors.name
                                  ? "invalid"
                                  : ""
                              }
                              type="text"
                              className="formControl"
                            />
                            {/*<ErrorMessage component="div" className="text-danger" name="name" />*/}
                          </div>
                        </div>
                        <div className="input-form">
                          <div className="label">Phone</div>
                          <div className="input-filed">
                            <Field
                              name="phone"
                              type="text"
                              id={
                                touched &&
                                touched.phone &&
                                errors &&
                                errors.phone
                                  ? "invalid"
                                  : ""
                              }
                              className="formControl"
                            />
                            {/*<ErrorMessage component="div" className="text-danger" name="phone" />*/}
                          </div>
                        </div>
                        <div className="input-form">
                          <div className="label">Email</div>
                          <div className="input-filed">
                            <Field
                              id={
                                touched &&
                                touched.email &&
                                errors &&
                                errors.email
                                  ? "invalid"
                                  : ""
                              }
                              name="email"
                              type="email"
                              className="formControl"
                            />
                            {/*<ErrorMessage component="div" className="text-danger" name="email" />*/}
                          </div>
                        </div>
                        <div className="input-form">
                          <div className="label">Message</div>
                          <div className="input-filed">
                            <Field
                              id={
                                touched &&
                                touched.message &&
                                errors &&
                                errors.message
                                  ? "invalid"
                                  : ""
                              }
                              as="textarea"
                              name="message"
                              type="text"
                              rows="3"
                              className="formControl"
                            />
                            {/*<ErrorMessage component="div" className="text-danger" name="message" />*/}
                          </div>
                        </div>
                        <div className="input-form">
                          <div className="input-filed">
                            <input
                              type="submit"
                              className="getintouch"
                              value="Get In Touch"
                            />
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="col-12 col-md-1"> </div>
              <div className="col-12 col-md-6">
                <div className="formContent">
                  <div className="bigText">
                    Have an awesome
                    <br />
                    Web Application idea and not sure
                    <br />
                    how to get started?
                  </div>
                  <div className="smallText">
                    Partner with us for affordable development supported by
                    advanced frameworks, processes, automation, and expertise.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
export default withNewsletterAddress(WebDev);