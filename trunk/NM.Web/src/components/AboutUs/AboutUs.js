import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './AboutUs.css';
import Footer_new from '../Layout/Footer_new';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Dashboard from '../../layout/dashboard';
import withNewsletterAddress from '../../Shared/HOC/newsletterAddress';

const AboutUsContent = (props) => {
  const { newsletter, setNewsLetter } = props;

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
    // this changes the scrolling behavior to "smooth"

    return <div>
        <section className="aboutBanner">
            <div className="shapes"></div>
            <div className="container">
                <div className="caption aos-init aos-animate">
                    <h1>
                        A Torch-bearer of <br />New age Software revolution
                    </h1>
                    <a href="/contact-us" className="btn btn-flip" data-text="Let’s know more "><span>Let’s know more </span></a>
                </div>
            </div>
        </section>
        <section className="about-image-banner">
            <div className="image-wrap">
                <img src="assets/img/about-banner.jpg" alt="line white" />
            </div>
            <div className="container">
                <div className="lets">
                    <div className="left">
                        <h2>Let’s walk together<br /> for a digital transformation…… </h2>
                        <p>We aren’t a mere software development service provider but an industry leader in providing a top-notch digital solution to businesses across the globe.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="team-wrap">
            <div className="team-members">
                <div className="right">
                    <div className="content">
                        <h3>About Us</h3>
                        <p>
                            Initiated in 2010, Nestormind has come a long way based on honesty, hard-working and commitment. Our mantra is “Serve the clients beyond his expectation”. We forge each relationship with utmost dedication and with an intention to deliver exceptional client service. Ushering digital transformation along with product engineering strategies, our team assists the organization to develop a device or software solution that enhances business operations.
                        </p>
                        <p>
                            Being the industry leader, Nestormind provides web design, web development, UI/design, different type of application development, IoT solutions, Blockchain solutions, Digital marketing, and IT consulting services to both domestic and global business organizations.
                            Our dedicated team works hand in hand along with the client and ensures that the product on which they are working, not only draws business success but also empowers that business entity to solve futuristic solutions.  Due to our excellent customer-friendly services, we have already delivered more than 1500 projects so far and created a strong 200 satisfied client base.
                        </p>
                        <p>
                            We value your ideas and also deeply work to find out the solid solutions to your concerns. Our R & D team work round the clock to innovate futuristic solutions that can smoothen the business and the world altogether.
                        </p>
                        <div class="line">
                            <img src="assets/img/yellow-line.svg" alt="" />
                        </div>

                    </div>
                </div>
                <div className="left aos-init aos-animate" data-aos="fade-up">
                    <img src="assets/img/hw-team.png" alt="" />
                </div>
            </div>
        </section>



        <section className="gallery">
            <div className="container">
                <div className="gallery_heading">We live and <b>breathe</b> tech.</div>
                <div className="galleryBox">
                    <div className="row_one">
                        <div className="col-1">
                            <div className="galleryImages medium">
                                <img src="/assets/img/team/team_nestormind.png" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="headings">
                                We <strong>challenge</strong> our clients to think differently <br />
                                by asking the right questions, how can we <strong>leverage</strong> <br />
                                tech differently? Where are consumers talking <br />
                                and when, because the <strong>experience matters.</strong>
                            </div>
                            <div className="galleryImages small">
                                <img src="/assets/img/team/untitled-14.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="row_two">
                        <div className="col-1">
                            <div className="galleryImages small">
                                <img src="/assets/img/team/barbq.jpg" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="galleryImages medium">
                                <img src="assets/img/team/diwaliCel.jpg" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="galleryImages medium">
                                <img src="assets/img/stiker.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row_three">
                        <div className="col-1">
                            <div className="galleryImages large">
                                <img src="/assets/img/team/untitled-86.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        <section className="site-footer">
            <div class="project-in-mind">
                <div class="container">
                    <p class="light">Let’s co-create your <strong>success story</strong></p> <Link to="/contact-us" class="btn btn-flip" data-text="Let’s know more"><span>Let’s know more</span></Link>
                </div>
            </div>
        </section>
        {/*<Footer_new />*/}

        {/* <section className="policy-area pb-125">
                <div className="container">
                    <div className="row mtn-30"> 
                        <div className="col-lg-3 col-md-6">
                            <div className="service-policy-item mt-30">
                                <div className="service-policy-icon">
                                    <img src="assets/img/icon/icon-1.png" alt="icon"/>
                                </div>
                                <h3 className="service-policy-title">Creative Ideas</h3>
                                <p className="service-policy-desc">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean</p>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6">
                            <div className="service-policy-item mt-30">
                                <div className="service-policy-icon">
                                    <img src="assets/img/icon/icon-2.png" alt="icon"/>
                                </div>
                                <h3 className="service-policy-title">Low Cost</h3>
                                <p className="service-policy-desc">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean</p>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6">
                            <div className="service-policy-item mt-30">
                                <div className="service-policy-icon">
                                    <img src="assets/img/icon/icon-3.png" alt="icon"/>
                                </div>
                                <h3 className="service-policy-title">Talented Team</h3>
                                <p className="service-policy-desc">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean</p>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6">
                            <div className="service-policy-item mt-30">
                                <div className="service-policy-icon">
                                    <img src="assets/img/icon/icon-4.png" alt="icon"/>
                                </div>
                                <h3 className="service-policy-title">Online Support</h3>
                                <p className="service-policy-desc">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        {/* <section className="testimonial-wrapper testimonial-wrapper--style_2 section-padding pt-0 fix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5 order-2 order-lg-1 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="testimonial-inner mt-0">
                                <h2 className="h1 title">What <span>Client’s</span> say <br/> happy reviews </h2>
                                    <h3 className="subtitle">Create some exclusive way to solve our customer problems</h3>
                                    <div className="testimonial-carousel-active slick-arrow-style slick-arrow-style--testimonial_2 slick-initialized slick-slider"><button type="button" className="slick-prev slick-arrow"></button><div className="slick-list draggable" ><div className="slick-track" ><div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1"><div><div className="testimonial-item testimonial-item--style_2">
                                            <div className="testimonial-content">
                                                <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
                                                <h5 className="client-name">Roberto Carlox</h5>
                                                <h6 className="client-desig">CEO, Selorex</h6>
                                            </div>
                                        </div></div></div><div className="slick-slide" data-slick-index="0" aria-hidden="true" tabIndex="-1" ><div><div className="testimonial-item testimonial-item--style_2" >
                                            <div className="testimonial-content">
                                                <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
                                                <h5 className="client-name">Roberto Carlox</h5>
                                                <h6 className="client-desig">CEO, Selorex</h6>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" ><div><div className="testimonial-item testimonial-item--style_2" >
                                            <div className="testimonial-content">
                                                <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
                                                <h5 className="client-name">Roberto Carlox</h5>
                                                <h6 className="client-desig">CEO, Selorex</h6>
                                            </div>
                                        </div></div></div><div className="slick-slide" data-slick-index="2" aria-hidden="true" tabIndex="-1" ><div><div className="testimonial-item testimonial-item--style_2">
                                            <div className="testimonial-content">
                                                <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
                                                <h5 className="client-name">Roberto Carlox</h5>
                                                <h6 className="client-desig">CEO, Selorex</h6>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabIndex="-1"><div><div className="testimonial-item testimonial-item--style_2" >
                                            <div className="testimonial-content">
                                                <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
                                                <h5 className="client-name">Roberto Carlox</h5>
                                                <h6 className="client-desig">CEO, Selorex</h6>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabIndex="-1"><div><div className="testimonial-item testimonial-item--style_2" >
                                            <div className="testimonial-content">
                                                <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
                                                <h5 className="client-name">Roberto Carlox</h5>
                                                <h6 className="client-desig">CEO, Selorex</h6>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabIndex="-1"><div><div className="testimonial-item testimonial-item--style_2" >
                                            <div className="testimonial-content">
                                                <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
                                                <h5 className="client-name">Roberto Carlox</h5>
                                                <h6 className="client-desig">CEO, Selorex</h6>
                                            </div>
                                        </div></div></div></div></div><button type="button" className="slick-next slick-arrow"></button></div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 offset-xl-1 order-1 order-lg-2 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="testimonial-thumb testimonial-thumb--style_2">
                                <img src="assets/img/testimonial/testimonial.png" className="moving-vertical" alt="testimonial thumb"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <Footer />  */}
    </div>
}
export default withNewsletterAddress(AboutUsContent);

// class AboutUsContent extends Component {
//     componentDidMount = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }// this changes the scrolling behavior to "smooth"
//   render() {
//       return (
//           <div>
//             <NavBar />

//             <section className="aboutBanner">
//                 <div className="shapes"></div>
//                  <div className="container">
//                  <div className="caption aos-init aos-animate">
//                     <h1>A Global Leader in <br/>Digital Transformation</h1>
//                     <a href="/contact-us" className="btn btn-flip" data-text="Let’s talk"><span>Let’s talk</span></a>
//                 </div>
//                 </div>
//             </section>
//             <section className="about-image-banner">
//                     <div className="image-wrap">
//                         <img src="assets/img/about-banner.jpg" alt="line white"/>
//                     </div>
//                     <div className="container">
//                         <div className="lets">
//                             <div className="left">
//                             <h2>Let’s work together…</h2>
//                             <p>We ain’t your standard dev shop. Our user-centric approach puts your customer experience at the center of
//                             our design.</p>
//                             </div>
//                         </div>
//                     </div>
//             </section>

//             <section className="team-wrap">
//             <div className="team-members">
//             <div className="right">
//                    <div className="content">
//                         <h3>About Us</h3>
//                           <p>In 2010, we embarked on a journey to create a unique and powerful statement of value to clients summed in three simple phrases – Business Impact Created, Predictability in Execution, and Unique Client Experiences. Since then, all aspects of Nestormind and its ecosystem have been shaped to deliver this value repetitively and consistently in every client setting. We offer full-scale software solutions for mobile and desktop that has already contributed to the success of many enterprises across the world and different industries. Our software development consists of three parts-Front-end, middleware, and Backend. We work on creating beautiful and attractive designs, implementing features and data resources to make apps more functional, and also helps to enhance security while dealing with the back-end phase. We have a pool of both experienced and creative minds, who have produced various applications with outstanding user experiences and value-adding to the customers. We offer Ux/UI design, Web and Mobile development, Quality Assurance, Service Integration, Maintenance, AI/ML Solutions, IOT Solutions, Blockchain, IT Consulting and other services to ensure a strong online presence for enterprises, boost sales, improve visibility and grow customer base.</p>
//                           <div class="line">
//                             <img src="assets/img/yellow-line.svg" alt=""/>
//                             </div>

//                     </div>
//                </div>
//                 <div className="left aos-init aos-animate" data-aos="fade-up">
//                           <img src="assets/img/hw-team.png" alt="" />
//                 </div>
//                 </div>
//             </section>



//             <section className="gallery">
//                 <div className="container">
//                 <div className="gallery_heading">We live and <b>breathe</b> tech.</div>
//                     <div className="galleryBox">
//                         <div className="row_one">
//                             <div className="col-1">
//                                 <div className="galleryImages medium">
//                                       <img src="assets/img/about-us-image1.png"/>
//                                 </div>
//                             </div>
//                             <div className="col-2">
//                             <div className="headings">
//                             We <strong>challenge</strong> our clients to think differently <br/>
//                             by asking the right questions, how can we <strong>leverage</strong> <br/>
//                             tech differently? Where are consumers talking <br/>
//                             and when, because the <strong>experience matters.</strong>
//                             </div>
//                             <div className="galleryImages small">
//                                       <img src="assets/img/confrence_room.jpg"/>
//                             </div>
//                             </div>
//                         </div>
//                         <div className="row_two">
//                         <div className="col-1">
//                                 <div className="galleryImages small">
//                                       <img src="assets/img/reception.png"/>
//                                 </div>
//                             </div>
//                             <div className="col-2">
//                                 <div className="galleryImages medium">
//                                       <img src="assets/img/team-about.png" />
//                                 </div>
//                             </div>
//                             <div className="col-3">
//                                 <div className="galleryImages medium">
//                                     <img src="assets/img/stiker.png"/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row_three">
//                         <div className="col-1">
//                                 <div className="galleryImages large">
//                                     <img src="assets/img/dev_room.jpg"/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </section>


//             <section className="site-footer">
//                 <div class="project-in-mind">
//                     <div class="container">
//                     <p class="light">Let’s co-create your <strong>success story</strong></p> <Link to="/contact-us" class="btn btn-flip" data-text="let’s talk"><span>let’s talk</span></Link>
//                     </div>
//                 </div>
//             </section>



//             <Footer_new/>





//             {/* <section className="policy-area pb-125">
//                 <div className="container">
//                     <div className="row mtn-30">
//                         <div className="col-lg-3 col-md-6">
//                             <div className="service-policy-item mt-30">
//                                 <div className="service-policy-icon">
//                                     <img src="assets/img/icon/icon-1.png" alt="icon"/>
//                                 </div>
//                                 <h3 className="service-policy-title">Creative Ideas</h3>
//                                 <p className="service-policy-desc">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6">
//                             <div className="service-policy-item mt-30">
//                                 <div className="service-policy-icon">
//                                     <img src="assets/img/icon/icon-2.png" alt="icon"/>
//                                 </div>
//                                 <h3 className="service-policy-title">Low Cost</h3>
//                                 <p className="service-policy-desc">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6">
//                             <div className="service-policy-item mt-30">
//                                 <div className="service-policy-icon">
//                                     <img src="assets/img/icon/icon-3.png" alt="icon"/>
//                                 </div>
//                                 <h3 className="service-policy-title">Talented Team</h3>
//                                 <p className="service-policy-desc">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6">
//                             <div className="service-policy-item mt-30">
//                                 <div className="service-policy-icon">
//                                     <img src="assets/img/icon/icon-4.png" alt="icon"/>
//                                 </div>
//                                 <h3 className="service-policy-title">Online Support</h3>
//                                 <p className="service-policy-desc">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}
//             {/* <section className="testimonial-wrapper testimonial-wrapper--style_2 section-padding pt-0 fix">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-xl-5 col-lg-5 order-2 order-lg-1 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
//                             <div className="testimonial-inner mt-0">
//                                 <h2 className="h1 title">What <span>Client’s</span> say <br/> happy reviews </h2>
//                                     <h3 className="subtitle">Create some exclusive way to solve our customer problems</h3>
//                                     <div className="testimonial-carousel-active slick-arrow-style slick-arrow-style--testimonial_2 slick-initialized slick-slider"><button type="button" className="slick-prev slick-arrow"></button><div className="slick-list draggable" ><div className="slick-track" ><div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1"><div><div className="testimonial-item testimonial-item--style_2">
//                                             <div className="testimonial-content">
//                                                 <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
//                                                 <h5 className="client-name">Roberto Carlox</h5>
//                                                 <h6 className="client-desig">CEO, Selorex</h6>
//                                             </div>
//                                         </div></div></div><div className="slick-slide" data-slick-index="0" aria-hidden="true" tabIndex="-1" ><div><div className="testimonial-item testimonial-item--style_2" >
//                                             <div className="testimonial-content">
//                                                 <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
//                                                 <h5 className="client-name">Roberto Carlox</h5>
//                                                 <h6 className="client-desig">CEO, Selorex</h6>
//                                             </div>
//                                         </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" ><div><div className="testimonial-item testimonial-item--style_2" >
//                                             <div className="testimonial-content">
//                                                 <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
//                                                 <h5 className="client-name">Roberto Carlox</h5>
//                                                 <h6 className="client-desig">CEO, Selorex</h6>
//                                             </div>
//                                         </div></div></div><div className="slick-slide" data-slick-index="2" aria-hidden="true" tabIndex="-1" ><div><div className="testimonial-item testimonial-item--style_2">
//                                             <div className="testimonial-content">
//                                                 <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
//                                                 <h5 className="client-name">Roberto Carlox</h5>
//                                                 <h6 className="client-desig">CEO, Selorex</h6>
//                                             </div>
//                                         </div></div></div><div className="slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabIndex="-1"><div><div className="testimonial-item testimonial-item--style_2" >
//                                             <div className="testimonial-content">
//                                                 <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
//                                                 <h5 className="client-name">Roberto Carlox</h5>
//                                                 <h6 className="client-desig">CEO, Selorex</h6>
//                                             </div>
//                                         </div></div></div><div className="slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabIndex="-1"><div><div className="testimonial-item testimonial-item--style_2" >
//                                             <div className="testimonial-content">
//                                                 <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
//                                                 <h5 className="client-name">Roberto Carlox</h5>
//                                                 <h6 className="client-desig">CEO, Selorex</h6>
//                                             </div>
//                                         </div></div></div><div className="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabIndex="-1"><div><div className="testimonial-item testimonial-item--style_2" >
//                                             <div className="testimonial-content">
//                                                 <p><i className="fa fa-quote-left"></i>labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur <i className="fa fa-quote-right"></i></p>
//                                                 <h5 className="client-name">Roberto Carlox</h5>
//                                                 <h6 className="client-desig">CEO, Selorex</h6>
//                                             </div>
//                                         </div></div></div></div></div><button type="button" className="slick-next slick-arrow"></button></div>
//                             </div>
//                         </div>
//                         <div className="col-xl-6 col-lg-7 offset-xl-1 order-1 order-lg-2 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
//                             <div className="testimonial-thumb testimonial-thumb--style_2">
//                                 <img src="assets/img/testimonial/testimonial.png" className="moving-vertical" alt="testimonial thumb"/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//            <Footer />  */}
//           </div>
//       )
//   }
// }
// export default AboutUsContent;