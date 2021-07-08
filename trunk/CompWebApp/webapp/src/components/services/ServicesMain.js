import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import { Link } from "react-router-dom";
import './ServicesMain.css';
import Footer_new from '../Layout/Footer_new';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class ServicesMain extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            767: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1440: {
                items: 4,
            },
        },
    }
    componentDidMount = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }// this changes the scrolling behavior to "smooth"
    render() { 
        return (
            <>
                 <NavBar />
                   
                    <section className="mainBanner_Services">
                        <div className="container">
                            <div className="bannerContent">
                               <div className="row">
                                   <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                       <div className="bannerContentText">
                                           <h1>We’re your <strong>partner</strong><br/> not a vendor</h1>
                                           <p>We understand that projects come in all shapes and sizes.
                                                As trusted partners, our team of experts are here as an
                                                extension of your working team to ensure that your
                                                projects are met on time and budget.</p>
                                       </div>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="bannerService">
                                            <div className="box-wrap">
                                                <div className="box strategy">
                                                <img src="assets/img/strategy.svg" alt=""/>
                                                </div>
                                                <h4>Strategy Experts</h4>
                                                <img className="line" src="assets/img/grey-line.svg" alt=""/>
                                            </div>
                                            <div className="box-wrap">
                                                <div className="box ui">
                                                <img src="assets/img/ui.svg" alt=""/>
                                                </div>
                                                <h4>UI/UX Designers</h4>
                                                <img className="line" src="assets/img/grey-line.svg" alt=""/>
                                            </div>
                                            <div className="box-wrap">
                                                <div className="box front">
                                                <img src="assets/img/front-end.svg" alt=""/>
                                                </div>
                                                <h4>Full Stack Developers</h4>
                                                <img className="line" src="assets/img/grey-line.svg" alt=""/>
                                            </div>
                                            <div className="box-wrap">
                                                <div className="box growth">
                                                <img src="assets/img/Growth.svg" alt=""/>
                                                </div>
                                                <h4>Growth Experts</h4>
                                                <img className="line" src="assets/img/grey-line.svg" alt=""/>
                                            </div>
                                        </div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </section>

                    
                    <section className="services">
                    <div className="backHeading">Services</div>
                            <div className="container">
                                <div className="servicesItem">
                                
                                <div className="heading">Services we <strong>offer.</strong></div>
                                <OwlCarousel
                                    className="owl-theme"
                                    loop
                                    items={4}
                                    margin={10}
                                    nav={true}
                                    responsive={this.state.responsive}
                                    
                                >
                                   <div className="item">
                                    <div className="item_Services">
                                            <span className="number top-circle"><img src="assets/img/mobile-app.svg" alt=""/></span>
                                            <h4>Mobile app <br/><strong>development</strong></h4>
                                            <img className="line" src="assets/img/grey-line.svg" alt=""/>
                                            <p>Our range of product design services covers
                                                everything from crafting intuitive user journeys to
                                                creating exceptional user interactions, helping app
                                                users perform any operation with ease. </p>
                                            <div className="actBtn">
                                                <a href="/app-development">Explore</a>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="item">
                                    <div className="item_Services">
                                            <span className="number top-circle"><img src="assets/img/web-development.svg" alt=""/></span>
                                            <h4>Web <br/><strong>Development</strong></h4>
                                            <img className="line" src="assets/img/grey-line.svg" alt=""/>
                                            <p>Our range of product design services covers
                                                everything from crafting intuitive user journeys to
                                                creating exceptional user interactions, helping app
                                                users perform any operation with ease. </p>
                                            <div className="actBtn">
                                            <Link to="/web-development">Explore</Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                    <div className="item_Services">
                                            <span className="number top-circle"><img src="assets/img/ui-design.svg" alt=""/></span>
                                            <h4>UI & UX <br/><strong>Design</strong></h4>
                                            <img className="line" src="assets/img/grey-line.svg" alt=""/>
                                            <p>Our range of product design services covers
                                                everything from crafting intuitive user journeys to
                                                creating exceptional user interactions, helping app
                                                users perform any operation with ease. </p>
                                            <div className="actBtn">
                                                <a href="/ui-ux-design">Explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                    <div className="item_Services">
                                            <span className="number top-circle"><img src="assets/img/seo.svg" alt=""/></span>
                                            <h4>SEO <br/><strong>Testing</strong></h4>
                                            <img className="line" src="assets/img/grey-line.svg" alt=""/>
                                            <p>Our range of product design services covers
                                                everything from crafting intuitive user journeys to
                                                creating exceptional user interactions, helping app
                                                users perform any operation with ease. </p>
                                            <div className="actBtn">
                                                <a href="/seo">Explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                    <div className="item_Services">
                                            <span className="number top-circle"><img src="assets/img/graphic-design.svg" alt=""/></span>
                                            <h4>Graphics<br/> <strong>Design</strong></h4>
                                            <img className="line" src="assets/img/grey-line.svg" alt=""/>
                                            <p>Our range of product design services covers
                                                everything from crafting intuitive user journeys to
                                                creating exceptional user interactions, helping app
                                                users perform any operation with ease. </p>
                                            <div className="actBtn">
                                                <a href="/graphic-design">Explore</a>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </OwlCarousel>
                                </div>
                            </div>
                    </section>

                    <section className="banner-bottom-sec">
                        <div className="container">
                            <div className="contentPanel">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="whatWeDo">
                                            <h2>What We Do <br/>For You</h2>
                                            <p>We bring a diverse team of experienced designers and developers to your project, 
                                            aligning your business needs and goals with your users’ need for a friendly, intuitive,
                                            delightful experience. We’re your partner in digitally driven success.</p>
                                            <div className="actionBtn">
                                                <a href="#" className="btn-outline"> Explore Our Process</a>
                                                <a href="#" className="btn-fill"> Request a free consultation</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="whatWeDo_img">
                                        <img src="assets/img/whatWeDo.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                
                    <section className="howItWork">
                        <div className="container">
                            <div className="how_It_Work_Content">
                                <div className="heading">How  Its <strong>Work</strong></div>
                            </div>
                            <div className="process">
                                <ul>
                                    <li>
                                        <div className="contentOfProcess">
                                            <div className="icon Planing"><img src="assets/img/plan.svg" alt=""/></div>
                                            <div className="title"><strong>Planing</strong> <br/>& Analysis</div>
                                            <div className="SubTileContent">
                                            <p>We bring a diverse team of experienced designers and developers to your project, 
                                            aligning your business needs and goals with your users’ need for a friendly, intuitive,
                                            delightful experience. We’re your partner in digitally driven success.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contentOfProcess">
                                            <div className="icon Design"><img src="assets/img/design-process.svg" alt=""/></div>
                                            <div className="title"><strong>Web Page Design</strong> <br/>& Finalization</div>
                                            <div className="SubTileContent">
                                            <p>We bring a diverse team of experienced designers and developers to your project, 
                                            aligning your business needs and goals with your users’ need for a friendly, intuitive,
                                            delightful experience. We’re your partner in digitally driven success.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contentOfProcess">
                                            <div className="icon Functionality"><img src="assets/img/programming.svg" alt=""/></div>
                                            <div className="title"><strong>Functionality </strong><br/>& Feature</div>
                                            <div className="SubTileContent">
                                            <p>We bring a diverse team of experienced designers and developers to your project, 
                                            aligning your business needs and goals with your users’ need for a friendly, intuitive,
                                            delightful experience. We’re your partner in digitally driven success.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contentOfProcess">
                                            <div className="icon Testing"><img src="assets/img/bug.svg" alt=""/></div>
                                            <div className="title"><strong>Testing  &</strong><br/>Fixing the Bugs</div>
                                            <div className="SubTileContent">
                                            <p>We bring a diverse team of experienced designers and developers to your project, 
                                            aligning your business needs and goals with your users’ need for a friendly, intuitive,
                                            delightful experience. We’re your partner in digitally driven success.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contentOfProcess">
                                            <div className="icon Delivery"><img src="assets/img/delivery.svg" alt=""/></div>
                                            <div className="title"><strong>Final Delivery </strong><br/>Of the Project</div>
                                            <div className="SubTileContent">
                                            <p>We bring a diverse team of experienced designers and developers to your project, 
                                            aligning your business needs and goals with your users’ need for a friendly, intuitive,
                                            delightful experience. We’re your partner in digitally driven success.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>    


                        </div>
                    </section>


                    
                    <section className="site-footer">
                        <div class="project-in-mind">
                            <div class="container">
                            <p class="light">Let’s co-create your <strong>success story</strong></p> <a href="#" class="btn btn-flip" data-text="let’s talk"><span>let’s talk</span></a>
                            </div>
                        </div>
                    </section>

                 <Footer_new/>

            </>
        )
    }
}

export default ServicesMain;