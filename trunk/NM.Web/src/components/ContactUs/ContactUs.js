import React, { Component } from 'react';
import Footer from '../Layout/Footer';
import NavBar from '../Layout/Navbar';
import Footer_new from '../Layout/Footer_new';
import '../ContactUs/ContactUs.css';
import { ErrorMessage, Field, Formik, getIn } from 'formik';
import { useEffect } from 'react';
import { notify } from 'node-notifier';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { contactUSRegister } from '../../Redux/Action/Actionfunction';
import Dashboard from '../../layout/dashboard';
import withNewsletterAddress from '../../Shared/HOC/newsletterAddress';

const ContactUsContent = (props) => {
    const {newsLetter, setNewsLetter} = props
    const dispatch = useDispatch()
    const [services, setServices] = useState([])
    
    const notify = () => toast.success("Successfully Submitted")

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
    // this changes the scrolling behavior to "smooth"

    const initialValues = { services: [], name: "", email: "", companyName: "", projectDescription: "" }

    const handleServiceChange = (e) => {
        const { name, value, checked } = e.target
        if (checked) {
            setServices((old => ([...old, value])))
        }
        else {
            const res = services.filter((item) => (!item.includes(value)))
            setServices([...res])
        }
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Required'),
        name: Yup.string().required("Required").min(3).max(25).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        companyName: Yup.string().required("Required").min(10).max(255),
        projectDescription: Yup.string().required("Required").min(20)
    })

    const handleFormSubmit = (values, { resetForm }) => {
        values.services = services
        console.log("contactUSRegister(values) ", values);
        dispatch(contactUSRegister(values))
        // document.getElementById("service-option-animation").value = ""
        // document.getElementById("service-option-content").value = ""
        // document.getElementById("service-option-front-end").value = ""
        // document.getElementById("service-option-illustrations").value = ""
        // document.getElementById("service-option-website").value = ""
        // document.getElementById("service-option-mobile").value = ""
        // notify()
        resetForm()
    }

    const getStyles = (errors) => {
        console.log("errors ", errors);
        if (errors == "name") {
            return {
                border: '1px solid red',
            };
        }
    }


    return <div>
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
        <section className="contact__panel contact-hero">
            <div className="container">
                <div className="formpanel">
                    <div className="contact-hero__item">
                        <h1>Let’s create progress together</h1>
                        <div className="contact-form" id="mc_embed_signup">
                            {/*action="/thank-you/" method="post" name="contact-form" */}
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit} >
                                {({ handleSubmit, handleChange, errors, values, touched }) => (
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        console.log('values error', errors)
                                        // if (errors) {
                                        //     if (errors.companyName) {
                                        //         document.getElementById("companyName").style.border = "1px red solid"
                                        //     }
                                        //     if (errors.name) {
                                        //         document.getElementById("name").style.border = "1px red solid"
                                        //     }
                                        //     if (errors.email) {
                                        //         document.getElementById("email").style.border = "1px red solid"
                                        //     }
                                        //     if (errors.projectDescription) {
                                        //         document.getElementById("projectDescription").style.border = "1px red solid"
                                        //     }
                                        // } else {
                                        handleSubmit()
                                        // }
                                    }} className="form">
                                        <input type="hidden" name="form-name" value="contact-form" />
                                        <div className="input-group">
                                            <p>Services</p>
                                            {console.log("errors ", errors)}
                                            <ul>
                                                <li>
                                                    <label htmlFor="service-option-website">
                                                        <input type="checkbox" value="website" onChange={handleServiceChange} name="website" id="service-option-website" />
                                                        <span>Website</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor="service-option-mobile">
                                                        <input type="checkbox" value="mobile" onChange={handleServiceChange} name="mobile" id="service-option-mobile" />
                                                        <span>Mobile</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor="service-option-illustrations">
                                                        <input type="checkbox" value="illustrations" onChange={handleServiceChange} name="illustrations" id="service-option-illustrations" />
                                                        <span>Illustrations</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor="service-option-front-end">
                                                        <input type="checkbox" value="front-end" name="front-end" id="service-option-front-end" onChange={handleServiceChange} />
                                                        <span>Front-end</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor="service-option-content">
                                                        <input type="checkbox" value="content" name="content" id="service-option-content" onChange={handleServiceChange} />
                                                        <span>Content</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label htmlFor="service-option-animation">
                                                        <input type="checkbox" value="animation" name="animation" onChange={handleServiceChange}
                                                            id="service-option-animation" />
                                                        <span>Animation</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="input-form">
                                            {/*<Field type="text" name="name" placeholder="Name"></Field>*/}
                                            <div className="label">Name</div>
                                            {/*<div className="label">{touched && touched.name && errors && errors.name ? errors.name : "Name"}</div>*/}
                                            <div className="input-filed">
                                                <Field type="text" id={touched && touched.name && errors && errors.name ? "invalid" : ""} name="name" className="formControl" onChange={handleChange} />
                                                {/*<ErrorMessage name="name" className="text-danger" component="div" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="label">Email</div>
                                            <div className="input-filed">
                                                <Field type="Email" id={touched && touched.email && errors && errors.email ? "invalid" : ""} className="formControl" name="email" onChange={handleChange} />
                                                {/*<ErrorMessage name="email" className="text-danger" component="div" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="label">Company Name</div>
                                            <div className="input-filed">
                                                <Field type="text" className="formControl" id={touched && touched.companyName && errors && errors.companyName ? "invalid" : ""} name="companyName" onChange={handleChange} />
                                                {/*<ErrorMessage name="companyName" className="text-danger" component="div" />*/}
                                            </div>
                                        </div>
                                        <div className="input-form">
                                            <div className="label">Project Description</div>
                                            <div className="input-filed">
                                                <Field as="textarea" id={touched && touched.projectDescription && errors && errors.projectDescription ? "invalid" : ""} type="text" rows="3" className="formControl" name="projectDescription" onChange={handleChange} />
                                                {/*<ErrorMessage name="projectDescription" className="text-danger" component="div" />*/}
                                            </div>
                                        </div>
                                        <div className="clear">
                                            <input className="button" id="mc-embedded-subscribe" type="submit" value="Submit" />
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className="contact-hero__item">
                        <img src="assets/img/contact-us1.png" alt="line white" />
                    </div>
                </div>
                <p className="contact-hero--contact">Reach us out at <a href="mailto:hello@brucira.com">info@nestormind.com</a></p>
            </div>

        </section>
        {/* <section id="contact-us" className="contact-us section-padding fix">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Have a question?</h2>
                    <p>Drop us a message and we’ll get back to you.</p>
                </div>
                <div className="row contactus-shadow">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="contact-message">
                            <h2 className="h1 title contact-title"></h2>
                            <form id="contact-form" method="post" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input name="first_name" placeholder="Name *" type="text" required=""/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input name="phone" placeholder="Phone *" type="text" required=""/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input name="email_address" placeholder="Email *" type="text" required=""/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input name="contact_subject" placeholder="Subject *" type="text"/>
                                    </div>
                                    <div className="col-12">
                                        <div className="contact2-textarea text-center">
                                            <textarea placeholder="Message *" name="message" className="form-control2" required=""></textarea>
                                        </div>
                                        <div className="contact-btn">
                                            <button className="btn btn-all" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-center">
                                        <p className="form-messege"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 gradient-brand">
                        <div className="contact-information">
                            <h2 className="h1 title contact-title">Contact Us</h2>
                            <p>Having Business queries? Feel free to get in touch with us with no hesitation and we will get back to you as soon as possible.</p>
                            <ul>
                                <li><i className="bx bx-mail-send"></i> info@nestormind.com</li>
                                <li><i className="bx bxs-phone"></i> (0172) 4039142</li>
                            </ul>
                            <div className="row" style={{marginTop: "15px", marginLeft: "10px"}}>
                                <div className="contact-interact">
                                    <a href="tel:+91 9877 344996" className="btn btn-contact" title="Call Now!">Call Us</a>
                                    <a href="mailto:info@nestormind.com" className="btn btn-contact mg-10" title="Drop an email">Drop an email</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </div>
}
export default withNewsletterAddress(ContactUsContent);

// class ContactUsContent extends Component {
//     componentDidMount = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }// this changes the scrolling behavior to "smooth"
//   render() {
//       return (
//     <div>
//         <NavBar />
//         <section className="contact__panel contact-hero">
//             <div className="container">
//                 <div className="formpanel">
//                     <div className="contact-hero__item">
//                         <h1>Let’s create progress together</h1>
//                         <div className="contact-form" id="mc_embed_signup">
//                             <form action="/thank-you/" method="post" name="contact-form" className="form">
//                                 <input type="hidden" name="form-name" value="contact-form"/>
//                                     <div className="input-group">
//                                         <p>Services</p>
//                                         <ul>
//                                             <li>
//                                                 <label htmlFor="service-option-website">
//                                                     <input type="checkbox" value="website" name="" id="service-option-website"/>
//                                                     <span>Website</span>
//                                                 </label>
//                                             </li>
//                                             <li>
//                                                 <label for="service-option-mobile">
//                                                     <input type="checkbox" value="mobile" name="" id="service-option-mobile"/>
//                                                     <span>Mobile</span>
//                                                 </label>
//                                             </li>
//                                             <li>
//                                                 <label for="service-option-illustrations">
//                                                     <input type="checkbox" value="illustrations" name="" id="service-option-illustrations"/>
//                                                     <span>Illustrations</span>
//                                                 </label>
//                                             </li>
//                                             <li>
//                                                 <label for="service-option-front-end">
//                                                     <input type="checkbox" value="front-end" name="" id="service-option-front-end"/>
//                                                     <span>Front-end</span>
//                                                 </label>
//                                             </li>
//                                             <li>
//                                                 <label for="service-option-content">
//                                                     <input type="checkbox" value="content" name="" id="service-option-content"/>
//                                                     <span>Content</span>
//                                                 </label>
//                                             </li>
//                                             <li>
//                                                 <label for="service-option-animation">
//                                                     <input type="checkbox" value="animation" name="" id="service-option-animation"/>
//                                                     <span>Animation</span>
//                                                 </label>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Name</div>
//                                         <div className="input-filed">
//                                             <input type="text" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Email</div>
//                                         <div className="input-filed">
//                                             <input type="Email" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Company Name</div>
//                                         <div className="input-filed">
//                                             <input type="text" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Project Description</div>
//                                         <div className="input-filed">
//                                             <textarea type="text" rows="3" className="formControl" />
//                                         </div>
//                                     </div>

//                                         <div className="clear">
//                                             <input className="button" id="mc-embedded-subscribe" type="submit" value="Submit"/>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                             <div className="contact-hero__item">
//                                     <img src="assets/img/contact-us1.png" alt="line white"/>
//                             </div>
//                 </div>
//                 <p className="contact-hero--contact">Reach us out at <a href="mailto:hello@brucira.com">info@nestormind.com</a></p>
//             </div>

//         </section>
//         {/* <section id="contact-us" className="contact-us section-padding fix">
//             <div className="container" data-aos="fade-up">
//                 <div className="section-title">
//                     <h2>Have a question?</h2>
//                     <p>Drop us a message and we’ll get back to you.</p>
//                 </div>
//                 <div className="row contactus-shadow">
//                     <div className="col-lg-6 order-2 order-lg-1">
//                         <div className="contact-message">
//                             <h2 className="h1 title contact-title"></h2>
//                             <form id="contact-form" method="post" className="contact-form">
//                                 <div className="row">
//                                     <div className="col-lg-6 col-md-6 col-sm-6">
//                                         <input name="first_name" placeholder="Name *" type="text" required=""/>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6 col-sm-6">
//                                         <input name="phone" placeholder="Phone *" type="text" required=""/>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6 col-sm-6">
//                                         <input name="email_address" placeholder="Email *" type="text" required=""/>
//                                     </div>
//                                     <div className="col-lg-6 col-md-6 col-sm-6">
//                                         <input name="contact_subject" placeholder="Subject *" type="text"/>
//                                     </div>
//                                     <div className="col-12">
//                                         <div className="contact2-textarea text-center">
//                                             <textarea placeholder="Message *" name="message" className="form-control2" required=""></textarea>
//                                         </div>
//                                         <div className="contact-btn">
//                                             <button className="btn btn-all" type="submit">Send Message</button>
//                                         </div>
//                                     </div>
//                                     <div className="col-12 d-flex justify-content-center">
//                                         <p className="form-messege"></p>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 order-1 order-lg-2 gradient-brand">
//                         <div className="contact-information">
//                             <h2 className="h1 title contact-title">Contact Us</h2>
//                             <p>Having Business queries? Feel free to get in touch with us with no hesitation and we will get back to you as soon as possible.</p>
//                             <ul>
//                                 <li><i className="bx bx-mail-send"></i> info@nestormind.com</li>
//                                 <li><i className="bx bxs-phone"></i> (0172) 4039142</li>
//                             </ul>
//                             <div className="row" style={{marginTop: "15px", marginLeft: "10px"}}>
//                                 <div className="contact-interact">
//                                     <a href="tel:+91 9877 344996" className="btn btn-contact" title="Call Now!">Call Us</a>
//                                     <a href="mailto:info@nestormind.com" className="btn btn-contact mg-10" title="Drop an email">Drop an email</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section> */}
//         <Footer_new/>
//     </div>
//       )
//   }
// }

// export default ContactUsContent;