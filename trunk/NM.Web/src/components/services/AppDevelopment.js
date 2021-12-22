import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import './ServicesMain.css';
import Footer_new from '../Layout/Footer_new';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import Portfolio from '../Home/portfolio';
import Dashboard from '../dashboard';
import { useEffect } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AppuserRegister } from '../../Redux/Action/Actionfunction';

const AppDev = () => {
    const dispatch = useDispatch()
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
    // this changes the scrolling behavior to "smooth"

    const handleFormSubmit = (values, { resetForm }) => {
        values.services = {
            appdevelopment: true,
            webdevelopment: false,
            uiuxDesign: false,
            seo: false,
            graphic_design: false
        }
        dispatch(AppuserRegister(values))
        // notify()
        resetForm()
    }

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

    const notify = () => toast.success("Successfully Submitted", { theme: "colored" });//, 

    return <Dashboard>
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
                <div className="Service_contentPanel">
                    <small>App Development</small>
                    <h1>App Development <br />To Make Robust Solution for Web, Mobile and Cloud.</h1>
                    {/*<h1>App Development <br />
                        Where experience meets
                        innovation</h1>*/}
                    <p>
                        Being the top app development company India, we can assure you to deliver robust solutions that can be integrated on web, smart devices and cloud. Our team of developers are well equipped with knowledge and latest technique that can meet the today’s business needs.
                        <br />
                        Share your business goal with our app development service experts and they will make dream comes true!
                    </p>
                </div>
                <div className="servicesImageHalfBox">
                    <img src="assets/img/app-development.png" alt="" />
                </div>
            </div>
        </section>

        <section className="technologyStack">
            <div className="container">
                <div className="stacks">
                    <div className="stackTitle">
                        <h2>Technology <strong>Stack</strong> We Used.</h2>
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
                    <h2 className="light">Have an awesome <br /><strong>App Application idea </strong> and not sure <br />how to get started?</h2>
                </div>
                <div className="right">
                    <Link to="/contact-us" className="btn-light btn-icon">TALK TO OUR EXPERTS </Link>
                </div>
            </div>
        </section>

        <section className="process">
            <div className="container">
                <div className="processBox">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                            <div className="ProcessContent">
                                <h3>Our <br />Software development <br />Process</h3>
                                <p>
                                    We offer customized, industry-specific software development services that will match the business needs and within its budget. Our development service is completely based on the latest technical platforms and programming languages and frameworks.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                            <div className="processSlider">
                                <div className="webIcon">
                                    <img src="assets/img/app_grapics.png" />
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
                                            <div className="processTitle">Research and Consulting </div>
                                            <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="processContentPanel">
                                            <div className="number">02</div>
                                            <div className="processTitle">Wireframe and Prototype  </div>
                                            <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="processContentPanel">
                                            <div className="number">03</div>
                                            <div className="processTitle">Architecture and Database  </div>
                                            <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="processContentPanel">
                                            <div className="number">04</div>
                                            <div className="processTitle">Web Development </div>
                                            <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="processContentPanel">
                                            <div className="number">05</div>
                                            <div className="processTitle">Testing and QA</div>
                                            <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="processContentPanel">
                                            <div className="number">06</div>
                                            <div className="processTitle">Deployment to Live Server  </div>
                                            <p>
                                                We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="processContentPanel">
                                            <div className="number">07</div>
                                            <div className="processTitle">Custom Software Development</div>
                                            <p>
                                                Being the professional custom software development company and industry leader, Nestormind offers custom software development for the fast-changing B2C and B2B needs. Our team of developers knows how to develop future-rich websites that can handle the upcoming business needs.
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

        <Portfolio />

        <section className="formBox">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="form">
                            <div className="title">Need Help with Development?</div>
                            <Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={validationSchema}>
                                {({ handleSubmit, handleChange, errors, values, touched }) => (
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        handleSubmit()
                                    }}>
                                        <div className="input-form">
                                            <div className="label">Name</div>
                                            <div className="input-filed">
                                                <Field type="text" id={touched && touched.name && errors && errors.name ? "invalid" : ""} name="name" className="formControl" />
                                                {/*<ErrorMessage component="div" name="name" className="text-danger" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="label">Phone</div>
                                            <div className="input-filed">
                                                <Field type="text" id={touched && touched.phone && errors && errors.phone ? "invalid" : ""} name="phone" className="formControl" />
                                                {/*<ErrorMessage component="div" name="phone" className="text-danger" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="label">Email</div>
                                            <div className="input-filed">
                                                <Field type="email" id={touched && touched.email && errors && errors.email ? "invalid" : ""} name="email" className="formControl" />
                                                {/*<ErrorMessage component="div" name="email" className="text-danger" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="label">Message</div>
                                            <div className="input-filed">
                                                <Field as="textarea" id={touched && touched.message && errors && errors.message ? "invalid" : ""} name="message" type="text" rows="3" className="formControl" />
                                                {/*<ErrorMessage component="div" name="message" className="text-danger" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="input-filed">
                                                <input type="submit" className="getintouch" value="Get In Touch" />
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
                                Have an awesome<br />
                                App Application idea and not sure<br />
                                how to get started?
                            </div>
                            <div className="smallText">
                                Partner with us for affordable development supported by advanced frameworks, processes, automation, and expertise.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Dashboard>
}

export default AppDev
// class AppDev extends Component {
//     componentDidMount = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }// this changes the scrolling behavior to "smooth"
//     render() {
//         return (
//             <>

//                 <NavBar />

//                 <section className="ServiceMainBanners webDevlopBox">

//                     <div className="container">
//                         <div className="Service_contentPanel">
//                             <small>App Development</small>
//                             <h1>App Development <br/>
//                             Where experience meets
//                             innovation</h1>
//                             <p>We understand that projects come in all shapes and sizes. As trusted partners, our team of experts are here as an extension of your working team to ensure that your projects are met on time and budget.</p>
//                         </div>
//                         <div className="servicesImageHalfBox">
//                             <img src="assets/img/app-development.png" alt=""/>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="technologyStack">
//                     <div className="container">
//                         <div className="stacks">
//                             <div className="stackTitle">
//                                 <h2>Technology <strong>Stack</strong> We Used.</h2>
//                             </div>
//                             <ul>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/angular-icon.svg" />
//                                         </div>
//                                         <div className="stackTitle">Angular</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/nodejs-icon.svg" />
//                                         </div>
//                                         <div className="stackTitle">Node.js</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/react.svg" />
//                                         </div>
//                                         <div className="stackTitle">React.js</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/firebase.svg" />
//                                         </div>
//                                         <div className="stackTitle">Firebase</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/vue-js-logo.svg" />
//                                         </div>
//                                         <div className="stackTitle">Vue.js</div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="our-experts">
//                     <div className="container">
//                     <div className="left">
//                     <h2 className="light">Have an awesome <br/><strong>App Application idea </strong> and not sure <br/>how to get started?</h2>
//                     </div>
//                     <div className="right">
//                     <Link to="/contact-us" className="btn-light btn-icon">TALK TO OUR EXPERTS </Link>
//                     </div>
//                     </div>
//                 </section>

//                 <section className="process">
//                     <div className="container">
//                         <div className="processBox">
//                             <div className="row">
//                                 <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
//                                     <div className="ProcessContent">
//                                         <h3>Our<br/> App Development<br/> process</h3>
//                                         <p>We have delivered result-driven iOS application development solutions across industry
//                                             verticals that have helped our clients to achieve their desired digital goals. Be it prototyping,
//                                             application architecture or UI/UX experience; we deliver perfection at every stage.</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
//                                     <div className="processSlider">
//                                         <div className="webIcon">
//                                         <img src="assets/img/app_grapics.png" />
//                                         </div>
//                                         <OwlCarousel
//                                                 className="owl-theme"
//                                                 loop
//                                                 autoplay={true}
//                                                 items={1}
//                                                 margin={10}
//                                                 nav
//                                             >
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">01</div>
//                                                     <div className="processTitle">Research and Consulting </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">02</div>
//                                                     <div className="processTitle">Wireframe and Prototype  </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">03</div>
//                                                     <div className="processTitle">Architecture and Database  </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">04</div>
//                                                     <div className="processTitle">Web Development </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">05</div>
//                                                     <div className="processTitle">Testing and QA</div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">06</div>
//                                                     <div className="processTitle">Deployment to Live Server  </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                         </OwlCarousel>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <Portfolio/>

//                 <section className="formBox">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-12 col-md-5">
//                                 <div className="form">
//                                     <div className="title">Need Help with Development?</div>
//                                     <div className="input-form">
//                                         <div className="label">Name</div>
//                                         <div className="input-filed">
//                                             <input type="text" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Phone</div>
//                                         <div className="input-filed">
//                                             <input type="text" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Email</div>
//                                         <div className="input-filed">
//                                             <input type="email" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Message</div>
//                                         <div className="input-filed">
//                                             <textarea type="text" rows="3" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">

//                                         <div className="input-filed">
//                                             <input type="submit" className="getintouch" value="Get In Touch" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-1"> </div>
//                             <div className="col-12 col-md-6">
//                                 <div className="formContent">
//                                     <div className="bigText">
//                                             Have an awesome<br/>
//                                             App Application idea and not sure<br/>
//                                             how to get started?
//                                     </div>
//                                     <div className="smallText">
//                                     Partner with us for affordable development supported by advanced frameworks, processes, automation, and expertise.
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                  <Footer_new/>

//             </>
//         )
//     }
// };
// export default AppDev;