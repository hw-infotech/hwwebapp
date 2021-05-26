import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import './ServicesMain.css';
import Footer_new from '../Layout/Footer_new';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


class graphicsD extends Component {
    componentDidMount = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }// this changes the scrolling behavior to "smooth"
    render() { 
        return (
            <>
                <NavBar />
                <section className="ServiceMainBanners webDevlopBox">
                    
                    <div className="container">
                        <div className="Service_contentPanel">
                         <small>Graphics Design</small>
                            <h1>Graphics Design <br/>
                            Where experience meets
                            innovation</h1>
                            <p>We understand that projects come in all shapes and sizes. As trusted partners, our team of experts are here as an extension of your working team to ensure that your projects are met on time and budget.</p>
                        </div>
                        <div className="servicesImageHalfBox">
                            <img src="assets/img/graphics-design.png" alt=""/>
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
                    <h2 className="light">Have an awesome <br/><strong>Graphics Design idea </strong> and not sure <br/>how to get started?</h2>
                    </div>
                    <div className="right">
                    <a href="#" className="btn-light btn-icon">TALK TO OUR EXPERTS </a>
                    </div>
                    </div>
                </section>

                <section className="process">
                    <div className="container">
                        <div className="processBox">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                                    <div className="ProcessContent">
                                        <h3>Our<br/> Graphics Design<br/> process</h3>
                                        <p>We have delivered result-driven iOS application development solutions across industry
                                            verticals that have helped our clients to achieve their desired digital goals. Be it prototyping,
                                            application architecture or UI/UX experience; we deliver perfection at every stage.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                                    <div className="processSlider">
                                        <div className="webIcon">
                                        <img src="assets/img/graphic-design_graphics.png" />
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
                                            Have an awesome<br/>
                                            Graphics Design idea and not sure<br/>
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

                 <Footer_new/>

            </>
        )
    }
};
export default graphicsD;