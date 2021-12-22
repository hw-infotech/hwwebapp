import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import { Link } from "react-router-dom";
import './ServicesMain.css';
import Footer_new from '../Layout/Footer_new';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Dashboard from '../dashboard';
import { useState } from 'react';
import { useEffect } from 'react';

const ServicesMain = () => {
    const [responsive, setResponsive] = useState(
        {
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
            }
        }
    )

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
    // this changes the scrolling behavior to "smooth"

    return <Dashboard>
        <section className="mainBanner_Services">
            <div className="container">
                <div className="bannerContent">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="bannerContentText">
                                <h1>Nestromind <br />Where Search Ends and <strong>Partnership</strong> <br />Begins</h1>
                                <p>
                                    We value your concerns and provide tailor-made solutions that fit perfectly your business ambition. Using cutting-edge technology, we deliver scalable, secure, and seamless solutions that can meet the futuristic approach of business.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="bannerService">
                                <div className="box-wrap">
                                    <div className="box strategy">
                                        <img src="assets/img/strategy.svg" alt="" />
                                    </div>
                                    <h4>Strategy Experts</h4>
                                    <img className="line" src="assets/img/grey-line.svg" alt="" />
                                </div>
                                <div className="box-wrap">
                                    <div className="box ui">
                                        <img src="assets/img/ui.svg" alt="" />
                                    </div>
                                    <h4>UI/UX Designers</h4>
                                    <img className="line" src="assets/img/grey-line.svg" alt="" />
                                </div>
                                <div className="box-wrap">
                                    <div className="box front">
                                        <img src="assets/img/front-end.svg" alt="" />
                                    </div>
                                    <h4>Full Stack Developers</h4>
                                    <img className="line" src="assets/img/grey-line.svg" alt="" />
                                </div>
                                <div className="box-wrap">
                                    <div className="box growth">
                                        <img src="assets/img/Growth.svg" alt="" />
                                    </div>
                                    <h4>Growth Experts</h4>
                                    <img className="line" src="assets/img/grey-line.svg" alt="" />
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
                        responsive={responsive}
                    >
                        <div className="item">
                            <div className="item_Services">
                                <span className="number top-circle"><img src="assets/img/mobile-app.svg" alt="" /></span>
                                <h4>Mobile App <br /><strong>Development</strong></h4>
                                <img className="line" src="assets/img/grey-line.svg" alt="" />
                                <p>
                                    Our profound knowledge of frameworks and mobile technology drives stunning mobile app development results. We craft mobile apps with a great user interface that can deliver 100% user satisfaction with an exceptional understanding of the brand performance.
                                </p>
                                <div className="actBtn">
                                    <a href="/app-development">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_Services">
                                <span className="number top-circle"><img src="assets/img/web-development.svg" alt="" /></span>
                                <h4>Web <br /><strong>Development</strong></h4>
                                <img className="line" src="assets/img/grey-line.svg" alt="" />
                                <p>
                                    Expertise with strong R & D drives in-depth focus on the website concept. Our award -winning developer team delivers 100% custom web development service with user-friendly navigation that makes us different.
                                </p>
                                <div className="actBtn">
                                    <Link to="/web-development">Explore</Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_Services">
                                <span className="number top-circle"><img src="assets/img/ui-design.svg" alt="" /></span>
                                <h4>UI & UX <br /><strong>Design</strong></h4>
                                <img className="line" src="assets/img/grey-line.svg" alt="" />
                                <p>
                                    Users grab a great online experience from our world-class UI & UX design. Focused on crafting interfaces that make every digital interaction a delightful user experience, our dedicated team brings design and technical aspects forth to prepare outstanding digital products.
                                </p>
                                <div className="actBtn">
                                    <a href="/ui-ux-design">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_Services">
                                <span className="number top-circle"><img src="assets/img/seo.svg" alt="" /></span>
                                <h4>SEO <br /><strong>Testing</strong></h4>
                                <img className="line" src="assets/img/grey-line.svg" alt="" />
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
                                <span className="number top-circle"><img src="assets/img/graphic-design.svg" alt="" /></span>
                                <h4>Graphics<br /> <strong>Design</strong></h4>
                                <img className="line" src="assets/img/grey-line.svg" alt="" />
                                <p>Our range of product design services covers
                                    everything from crafting intuitive user journeys to
                                    creating exceptional user interactions, helping app
                                    users perform any operation with ease. </p>
                                <div className="actBtn">
                                    <a href="/graphic-design">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_Services">
                                <span className="number top-circle"><img src="assets/img/graphic-design.svg" alt="" /></span>
                                <h4>Digital<br /> <strong>Marketing</strong></h4>
                                <img className="line" src="assets/img/grey-line.svg" alt="" />
                                <p>
                                    We understand your business needs and craft digital marketing strategy after thorough research on the current business position, competitor, and future business goal.  Our digital marketers have expertise in different aspects of digital marketing like SEO, SMO, Video Optimization, Brand Promotion, Email Marketing, and many more.
                                </p>
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
                                <h2>What We Do <br />For You</h2>
                                <p>
                                    We mingle technical expertise with creativity to deliver an outstanding result. Our services including Web development, UI & UX design, Mobile App Development, and Digital Marketing are completely dedicated to businesses. We are the partner of your digital transformation.
                                </p>
                                <div className="actionBtn">
                                    <Link to="/contact-us" className="btn-fill"> Request a free consultation</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="whatWeDo_img">
                                <img src="assets/img/whatWeDo.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="howItWork">
            <div className="container">
                <div className="how_It_Work_Content">
                    <div className="heading">What Does It <strong>Work?</strong></div>
                </div>
                <div className="process">
                    <ul>
                        <li>
                            <div className="contentOfProcess">
                                <div className="icon Planing"><img src="assets/img/plan.svg" alt="" /></div>
                                <div className="title"><strong>Planing</strong> <br />& Analysis</div>
                                <div className="SubTileContent">
                                    <p>
                                        Our expert designers are capable to deliver such unique designs that will serve your business purpose and can also boost the website to attain a top rank in the search engines. Our websites are compatible with all devices. This is a critical part of the responsive front-end development but can also be highly useful for a wide range of different marketing along with design purposes.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="contentOfProcess">
                                <div className="icon Design"><img src="assets/img/design-process.svg" alt="" /></div>
                                <div className="title"><strong>Web Page Design</strong> <br />& Finalization</div>
                                <div className="SubTileContent">
                                    <p>
                                        Our designers are capable to create unique logos, fliers, banners, business cards that can serve the purpose to promote the website on different platforms. We can ensure that these designed logos and other materials can draw attention and inspire
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="contentOfProcess">
                                <div className="icon Functionality"><img src="assets/img/programming.svg" alt="" /></div>
                                <div className="title"><strong>Functionality </strong><br />& Feature</div>
                                <div className="SubTileContent">
                                    <p>We bring a diverse team of experienced designers and developers to your project,
                                        aligning your business needs and goals with your users’ need for a friendly, intuitive,
                                        delightful experience. We’re your partner in digitally driven success.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="contentOfProcess">
                                <div className="icon Testing"><img src="assets/img/bug.svg" alt="" /></div>
                                <div className="title"><strong>Testing  &</strong><br />Fixing the Bugs</div>
                                <div className="SubTileContent">
                                    <p>We bring a diverse team of experienced designers and developers to your project,
                                        aligning your business needs and goals with your users’ need for a friendly, intuitive,
                                        delightful experience. We’re your partner in digitally driven success.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="contentOfProcess">
                                <div className="icon Delivery"><img src="assets/img/delivery.svg" alt="" /></div>
                                <div className="title"><strong>Final Delivery </strong><br />Of the Project</div>
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
                    <p class="light">Let’s co-create your
                        <strong>success story</strong>
                    </p>
                    <Link to="/contact-us" class="btn btn-flip" data-text="let’s talk"><span>let’s talk</span></Link>
                </div>
            </div>
        </section>
    </Dashboard>
}
export default ServicesMain

// class ServicesMain extends Component {
//     state= {
//         responsive:{
//             0: {
//                 items: 1,
//             },
//             575: {
//                 items: 2,
//             },
//             767: {
//                 items: 2,
//             },
//             1000: {
//                 items: 3,
//             },
//             1440: {
//                 items: 4,
//             },
//         },
//     }
//     componentDidMount = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }// this changes the scrolling behavior to "smooth"
//     render() {
//         return (
//             <>
//                  <NavBar />

//                     <section className="mainBanner_Services">
//                         <div className="container">
//                             <div className="bannerContent">
//                                <div className="row">
//                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                                        <div className="bannerContentText">
//                                            <h1>We’re your <strong>partner</strong><br/> not a vendor</h1>
//                                            <p>We understand that projects come in all shapes and sizes.
//                                                 As trusted partners, our team of experts are here as an
//                                                 extension of your working team to ensure that your
//                                                 projects are met on time and budget.</p>
//                                        </div>
//                                    </div>
//                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                                         <div className="bannerService">
//                                             <div className="box-wrap">
//                                                 <div className="box strategy">
//                                                 <img src="assets/img/strategy.svg" alt=""/>
//                                                 </div>
//                                                 <h4>Strategy Experts</h4>
//                                                 <img className="line" src="assets/img/grey-line.svg" alt=""/>
//                                             </div>
//                                             <div className="box-wrap">
//                                                 <div className="box ui">
//                                                 <img src="assets/img/ui.svg" alt=""/>
//                                                 </div>
//                                                 <h4>UI/UX Designers</h4>
//                                                 <img className="line" src="assets/img/grey-line.svg" alt=""/>
//                                             </div>
//                                             <div className="box-wrap">
//                                                 <div className="box front">
//                                                 <img src="assets/img/front-end.svg" alt=""/>
//                                                 </div>
//                                                 <h4>Full Stack Developers</h4>
//                                                 <img className="line" src="assets/img/grey-line.svg" alt=""/>
//                                             </div>
//                                             <div className="box-wrap">
//                                                 <div className="box growth">
//                                                 <img src="assets/img/Growth.svg" alt=""/>
//                                                 </div>
//                                                 <h4>Growth Experts</h4>
//                                                 <img className="line" src="assets/img/grey-line.svg" alt=""/>
//                                             </div>
//                                         </div>
//                                    </div>
//                                </div>
//                             </div>
//                         </div>
//                     </section>


//                     <section className="services">
//                     <div className="backHeading">Services</div>
//                             <div className="container">
//                                 <div className="servicesItem">

//                                 <div className="heading">Services we <strong>offer.</strong></div>
//                                 <OwlCarousel
//                                     className="owl-theme"
//                                     loop
//                                     items={4}
//                                     margin={10}
//                                     nav={true}
//                                     responsive={state.responsive}

//                                 >
//                                    <div className="item">
//                                     <div className="item_Services">
//                                             <span className="number top-circle"><img src="assets/img/mobile-app.svg" alt=""/></span>
//                                             <h4>Mobile app <br/><strong>development</strong></h4>
//                                             <img className="line" src="assets/img/grey-line.svg" alt=""/>
//                                             <p>Our range of product design services covers
//                                                 everything from crafting intuitive user journeys to
//                                                 creating exceptional user interactions, helping app
//                                                 users perform any operation with ease. </p>
//                                             <div className="actBtn">
//                                                 <a href="/app-development">Explore</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="item">
//                                     <div className="item_Services">
//                                             <span className="number top-circle"><img src="assets/img/web-development.svg" alt=""/></span>
//                                             <h4>Web <br/><strong>Development</strong></h4>
//                                             <img className="line" src="assets/img/grey-line.svg" alt=""/>
//                                             <p>Our range of product design services covers
//                                                 everything from crafting intuitive user journeys to
//                                                 creating exceptional user interactions, helping app
//                                                 users perform any operation with ease. </p>
//                                             <div className="actBtn">
//                                             <Link to="/web-development">Explore</Link>

//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="item">
//                                     <div className="item_Services">
//                                             <span className="number top-circle"><img src="assets/img/ui-design.svg" alt=""/></span>
//                                             <h4>UI & UX <br/><strong>Design</strong></h4>
//                                             <img className="line" src="assets/img/grey-line.svg" alt=""/>
//                                             <p>Our range of product design services covers
//                                                 everything from crafting intuitive user journeys to
//                                                 creating exceptional user interactions, helping app
//                                                 users perform any operation with ease. </p>
//                                             <div className="actBtn">
//                                                 <a href="/ui-ux-design">Explore</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="item">
//                                     <div className="item_Services">
//                                             <span className="number top-circle"><img src="assets/img/seo.svg" alt=""/></span>
//                                             <h4>SEO <br/><strong>Testing</strong></h4>
//                                             <img className="line" src="assets/img/grey-line.svg" alt=""/>
//                                             <p>Our range of product design services covers
//                                                 everything from crafting intuitive user journeys to
//                                                 creating exceptional user interactions, helping app
//                                                 users perform any operation with ease. </p>
//                                             <div className="actBtn">
//                                                 <a href="/seo">Explore</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="item">
//                                     <div className="item_Services">
//                                             <span className="number top-circle"><img src="assets/img/graphic-design.svg" alt=""/></span>
//                                             <h4>Graphics<br/> <strong>Design</strong></h4>
//                                             <img className="line" src="assets/img/grey-line.svg" alt=""/>
//                                             <p>Our range of product design services covers
//                                                 everything from crafting intuitive user journeys to
//                                                 creating exceptional user interactions, helping app
//                                                 users perform any operation with ease. </p>
//                                             <div className="actBtn">
//                                                 <a href="/graphic-design">Explore</a>
//                                             </div>
//                                         </div>
//                                     </div>


//                                 </OwlCarousel>
//                                 </div>
//                             </div>
//                     </section>

//                     <section className="banner-bottom-sec">
//                         <div className="container">
//                             <div className="contentPanel">
//                                 <div className="row">
//                                     <div className="col-12 col-sm-12 col-md-6 col-lg-6">
//                                         <div className="whatWeDo">
//                                             <h2>What We Do <br/>For You</h2>
//                                             <p>We bring a diverse team of experienced designers and developers to your project,
//                                             aligning your business needs and goals with your users’ need for a friendly, intuitive,
//                                             delightful experience. We’re your partner in digitally driven success.</p>
//                                             <div className="actionBtn">
//                                                 <Link to="/contact-us" className="btn-fill"> Request a free consultation</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-12 col-sm-12 col-md-6 col-lg-6">
//                                         <div className="whatWeDo_img">
//                                         <img src="assets/img/whatWeDo.jpg" alt=""/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                     <section className="howItWork">
//                         <div className="container">
//                             <div className="how_It_Work_Content">
//                                 <div className="heading">How  Its <strong>Work</strong></div>
//                             </div>
//                             <div className="process">
//                                 <ul>
//                                     <li>
//                                         <div className="contentOfProcess">
//                                             <div className="icon Planing"><img src="assets/img/plan.svg" alt=""/></div>
//                                             <div className="title"><strong>Planing</strong> <br/>& Analysis</div>
//                                             <div className="SubTileContent">
//                                             <p>We bring a diverse team of experienced designers and developers to your project,
//                                             aligning your business needs and goals with your users’ need for a friendly, intuitive,
//                                             delightful experience. We’re your partner in digitally driven success.</p>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <div className="contentOfProcess">
//                                             <div className="icon Design"><img src="assets/img/design-process.svg" alt=""/></div>
//                                             <div className="title"><strong>Web Page Design</strong> <br/>& Finalization</div>
//                                             <div className="SubTileContent">
//                                             <p>We bring a diverse team of experienced designers and developers to your project,
//                                             aligning your business needs and goals with your users’ need for a friendly, intuitive,
//                                             delightful experience. We’re your partner in digitally driven success.</p>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <div className="contentOfProcess">
//                                             <div className="icon Functionality"><img src="assets/img/programming.svg" alt=""/></div>
//                                             <div className="title"><strong>Functionality </strong><br/>& Feature</div>
//                                             <div className="SubTileContent">
//                                             <p>We bring a diverse team of experienced designers and developers to your project,
//                                             aligning your business needs and goals with your users’ need for a friendly, intuitive,
//                                             delightful experience. We’re your partner in digitally driven success.</p>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <div className="contentOfProcess">
//                                             <div className="icon Testing"><img src="assets/img/bug.svg" alt=""/></div>
//                                             <div className="title"><strong>Testing  &</strong><br/>Fixing the Bugs</div>
//                                             <div className="SubTileContent">
//                                             <p>We bring a diverse team of experienced designers and developers to your project,
//                                             aligning your business needs and goals with your users’ need for a friendly, intuitive,
//                                             delightful experience. We’re your partner in digitally driven success.</p>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <div className="contentOfProcess">
//                                             <div className="icon Delivery"><img src="assets/img/delivery.svg" alt=""/></div>
//                                             <div className="title"><strong>Final Delivery </strong><br/>Of the Project</div>
//                                             <div className="SubTileContent">
//                                             <p>We bring a diverse team of experienced designers and developers to your project,
//                                             aligning your business needs and goals with your users’ need for a friendly, intuitive,
//                                             delightful experience. We’re your partner in digitally driven success.</p>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>


//                         </div>
//                     </section>



//                     <section className="site-footer">
//                         <div class="project-in-mind">
//                             <div class="container">
//                             <p class="light">Let’s co-create your <strong>success story</strong></p> <Link to="/contact-us"> class="btn btn-flip" data-text="let’s talk"><span>let’s talk</span></Link>
//                             </div>
//                         </div>
//                     </section>

//                  <Footer_new/>

//             </>
//         )
//     }
// }

// export default ServicesMain;