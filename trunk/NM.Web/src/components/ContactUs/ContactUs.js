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
    const { newsLetter, setNewsLetter } = props
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
        <section className="contact__panel contact-hero">
            <div className="container">
                <div className="formpanel">
                    <div className="contact-hero__item">
                        <h1>Let’s create progress together</h1>
                        <div className="contact-form" id="mc_embed_signup">
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit} >
                                {({ handleSubmit, handleChange, errors, values, touched }) => (
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        console.log('values error', errors)
                                        handleSubmit()
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
    </div>
}
export default withNewsletterAddress(ContactUsContent);
