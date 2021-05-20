import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import '../services/ServicesMain.css';
import './caseStudies.css';
import Footer_new from '../Layout/Footer_new';


class Telemedician extends Component {
    componentDidMount = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }// this changes the scrolling behavior to "smooth"
    render() {
        return (
            <>

                <NavBar />

                <section className="caseStudies_Banner">
                    <div className="caseStudies_HalfBox">
                        <img src="assets/img/telemedicine_bg_cs.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="contentBox">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    <div className="bannerContent">
                                        <h1>Telemedician</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="storiesImg">
                                <img src="assets/img/telemedicine.png" />
                            </div>

                        </div>
                    </div>
                </section>
                
                <section className="caseStudies_AboutContent">
                    <div className="container">
                        <div className="caseStudies_About">
                            <div className="title">About</div>
                            <div className="caseStudies_details">
                                Telemedician is a real healthcare application that serves the users with its highly impressive features and functionalities. There are several app products in which the Zillow splits, that includes
                            </div>
                        </div>
                        <div className="caseStudies_About">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div className="storiesImg">
                                    <img src="assets/img/telemedicine.png" />
                                </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    <div className="caseStudies_details">
                                       <b> Doctor and Dental–</b> This app is specially designed for tenants, from where the user can find out a dream-like apartment (Zillow-like app development) . Some parameters can help the user choose their apartment, including GEO-location services and various filters such as price range, size, amenities, even the schools that are located nearby
                                    </div>
                                    <div className="caseStudies_details">
                                    <b>Dental Manager–</b> This application can also help the landlords. Here landlords can easily make a list of their property- as much as they can. One more opportunity given by the app is that landlords can verify their applicant honestly and perform a check of his credit score and criminal records.
                                    </div>
                                    <div className="caseStudies_details">
                                    <b>Estimate– </b>this is a type of online service that can offer an approximation of any of the house, which is based on the publicly available info, such as comparing prices of houses based nearby in the neighborhood.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="caseStudies_About">
                            <div className="title">Types of Real-Estate Apps:</div>
                            <div className="caseStudies_details">
                            You have to understand the type of app before you are hiring any real estate app development companies.
                            </div>
                            <div className="caseStudies_details">
                            There are about two types of apps that depend on how they function when talking about real estate’s mobile app development. The first is the agency based app, and the other one is a third party app. Now, let’s see how this app functions.
                            </div>
                        </div>


                        <div className="caseStudies_About">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                             <div className="title">The Agency App</div>
                                <div className="caseStudies_details">
                                 Just like its name, the agency app belongs to a specific real estate agency. The agency app lists all the houses under their listing. With the help of agency apps, they can keep track of their business improvements, see how many clients are connected with their agency, and know about their demands. So, this is an improved tool for improvement and business management.
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="storiesImg">
                                <img src="assets/img/telemedicine.png" />
                            </div>
                            </div>
                        </div>
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

           



                <section className="formBox">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <div className="form">
                                    <div className="title">Need Help with Development?</div>
                                    <div className="input-form">
                                        <div className="label">Name</div>
                                        <div className="input-filed">
                                            <input type="text" className="formControl" />
                                        </div>
                                    </div>
                                    <div className="input-form">
                                        <div className="label">Phone</div>
                                        <div className="input-filed">
                                            <input type="text" className="formControl" />
                                        </div>
                                    </div>
                                    <div className="input-form">
                                        <div className="label">Email</div>
                                        <div className="input-filed">
                                            <input type="email" className="formControl" />
                                        </div>
                                    </div>
                                    <div className="input-form">
                                        <div className="label">Message</div>
                                        <div className="input-filed">
                                            <textarea type="text" rows="3" className="formControl" />
                                        </div>
                                    </div>
                                    <div className="input-form">

                                        <div className="input-filed">
                                            <input type="submit" className="getintouch" value="Get In Touch" />
                                        </div>
                                    </div>
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

                <Footer_new />

            </>
        )
    }
};
export default Telemedician;