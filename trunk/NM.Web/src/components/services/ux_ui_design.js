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
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { UIUXuserRegister } from '../../Redux/Action/Actionfunction';
import Dashboard from '../../layout/dashboard';

const UIUX = () => {
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
            webdevelopment: false,
            uiuxDesign: true,
            seo: false,
            graphic_design: false
        }
        console.log("values,", values);
        dispatch(UIUXuserRegister(values))
        resetForm()
    }

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
                    <small>UI UX Design</small>
                    <h1>
                        At Nestormind,   <br />
                        Where experience meets
                        innovation
                    </h1>
                    <p>
                        We thrive to provide aesthetically rich and well functional B2B applications. We are a UX design company, and we believe that everything that affects the end-user is part of the design process. We research and go deep to find the solutions to meet our client's specific needs, and we ensure that by creating user interfaces that are expandable, intuitive, and clean.
                    </p>
                </div>
                <div className="servicesImageHalfBox">
                    <img src="assets/img/ui-ux-banner.png" alt="" />
                </div>
            </div>
        </section>

        <section className="technologyStack">
            <div className="container">
                <div className="stacks">
                    <div className="stackTitle">
                        <h2>Tools being used by Nestormind for UI/UX design </h2>
                    </div>
                    <ul>
                        <li>
                            <div className="stackBox">
                                <div className="icon">
                                    <img src="assets/img/brandLogo/adobe-xd.svg" />
                                </div>
                                <div className="stackTitle">Adobe XD</div>
                            </div>
                        </li>
                        <li>
                            <div className="stackBox">
                                <div className="icon">
                                    <img src="assets/img/brandLogo/photoshop-cc.svg" />
                                </div>
                                <div className="stackTitle">Photoshop</div>
                            </div>
                        </li>
                        <li>
                            <div className="stackBox">
                                <div className="icon">
                                    <img src="assets/img/brandLogo/sketch.svg" />
                                </div>
                                <div className="stackTitle">Sketch</div>
                            </div>
                        </li>
                        <li>
                            <div className="stackBox">
                                <div className="icon">
                                    <img src="assets/img/brandLogo/figma.svg" />
                                </div>
                                <div className="stackTitle">Figma</div>
                            </div>
                        </li>
                        <li>
                            <div className="stackBox">
                                <div className="icon">
                                    <img src="assets/img/brandLogo/balsmiq.png" />
                                </div>
                                <div className="stackTitle">Balsamiq</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="our-experts">
            <div className="container">
                <div className="left">
                    <h2 className="light">Have an awesome <br /><strong>UI UX Design idea </strong> and not sure <br />how to get started?</h2>
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
                                <h3>Our<br />UI UX Design <br /> process</h3>
                                <p>We have delivered result-driven iOS application development solutions across industry
                                    verticals that have helped our clients to achieve their desired digital goals. Be it prototyping,
                                    application architecture or UI/UX experience; we deliver perfection at every stage.</p>
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
                                            <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
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
                            <Formik onSubmit={handlFormSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                                {({ handleSubmit, handleChange, values, errors, touched }) => (
                                    <form onSubmit={e => {
                                        e.preventDefault()
                                        handleSubmit()
                                    }}>
                                        <div className="input-form">
                                            <div className="label">Name</div>
                                            <div className="input-filed">
                                                <Field name="name" type="text" className="formControl" id={touched && touched.name && errors && errors.name ? "invalid" : ""} />
                                                {/*<ErrorMessage name="name" className="text-danger" component="div" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="label">Phone</div>
                                            <div className="input-filed">
                                                <Field name="phone" type="text" className="formControl" id={touched && touched.phone && errors && errors.phone ? "invalid" : ""} />
                                                {/*<ErrorMessage name="phone" className="text-danger" component="div" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="label">Email</div>
                                            <div className="input-filed">
                                                <Field name="email" id={touched && touched.email && errors && errors.email ? "invalid" : ""} type="email" className="formControl" />
                                                {/*<ErrorMessage name="email" className="text-danger" component="div" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="label">Message</div>
                                            <div className="input-filed">
                                                <Field id={touched && touched.message && errors && errors.message ? "invalid" : ""} as="textarea" name="message" type="text" rows="3" className="formControl" />
                                                {/*<ErrorMessage name="message" className="text-danger" component="div" />*/}
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
                                UI UX Design idea and not sure<br />
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

export default UIUX

// class UIUX extends Component {
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
//                             <small>UI UX Design</small>
//                             <h1>UI UX Design   <br/>
//                             Where experience meets
//                             innovation</h1>
//                             <p>We understand that projects come in all shapes and sizes. As trusted partners, our team of experts are here as an extension of your working team to ensure that your projects are met on time and budget.</p>
//                         </div>
//                         <div className="servicesImageHalfBox">
//                             <img src="assets/img/ui-ux-banner.png" alt=""/>
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
//                                         <img src="assets/img/brandLogo/adobe-xd.svg" />
//                                         </div>
//                                         <div className="stackTitle">Adobe XD</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/photoshop-cc.svg" />
//                                         </div>
//                                         <div className="stackTitle">Photoshop</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/sketch.svg" />
//                                         </div>
//                                         <div className="stackTitle">Sketch</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/figma.svg" />
//                                         </div>
//                                         <div className="stackTitle">Figma</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/balsmiq.png" />
//                                         </div>
//                                         <div className="stackTitle">Balsamiq</div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="our-experts">
//                     <div className="container">
//                     <div className="left">
//                     <h2 className="light">Have an awesome <br/><strong>UI UX Design idea </strong> and not sure <br/>how to get started?</h2>
//                     </div>
//                     <div className="right">
//                      <Link to="/contact-us" className="btn-light btn-icon">TALK TO OUR EXPERTS </Link>
//                     </div>
//                     </div>
//                 </section>

//                 <section className="process">
//                     <div className="container">
//                         <div className="processBox">
//                             <div className="row">
//                                 <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
//                                     <div className="ProcessContent">
//                                         <h3>Our<br/>UI UX Design <br/> process</h3>
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
//                                             UI UX Design idea and not sure<br/>
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
// export default UIUX;