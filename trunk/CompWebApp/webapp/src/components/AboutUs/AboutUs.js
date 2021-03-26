import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './AboutUs.css';
import Footer_new from '../Layout/Footer_new';

class AboutUsContent extends Component {
  render() { 
      return (
          <div>
            <NavBar />

            <section className="aboutBanner">  
                <div className="shapes"></div> 
                 <div className="container">
                 <div className="caption aos-init aos-animate">
                    <h1>A Global Leader in <br/>Digital Transformation</h1>
                    <a href="/contact-us" className="btn btn-flip" data-text="Let’s talk"><span>Let’s talk</span></a>
                </div>
                </div> 
            </section>
            <section className="about-image-banner">
                    <div className="image-wrap">
                        <img src="assets/img/about-banner.jpg" alt="line white"/>
                    </div>
                    <div className="container">
                        <div className="lets">
                            <div className="left">
                            <h2>Let’s work together…</h2>
                            <p>We ain’t your standard dev shop. Our user-centric approach puts your customer experience at the center of
                            our design.</p>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="team-wrap">
            <div className="team-members">
            <div className="right">
                   <div className="content">
                        <p>We have industry and <br/>technology <span>experts</span> to help <br/>you build the right solution to <br/>fulfill
                          your business needs.</p>
                          <div class="line">
                            <img src="assets/img/yellow-line.svg" alt=""/>
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
                                      <img src="assets/img/about-us-image1.png"/>
                                </div>
                            </div>
                            <div className="col-2">
                            <div className="headings">
                            We <strong>challenge</strong> our clients to think differently <br/>
                            by asking the right questions, how can we <strong>leverage</strong> <br/>
                            tech differently? Where are consumers talking <br/>
                            and when, because the <strong>experience matters.</strong>
                            </div>
                            <div className="galleryImages small">
                                      <img src="assets/img/confrence_room.jpg"/>
                            </div>
                            </div>
                        </div>
                        <div className="row_two">
                        <div className="col-1">
                                <div className="galleryImages small">
                                      <img src="assets/img/reception.png"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="galleryImages medium">
                                      <img src="assets/img/team-about.png" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="galleryImages medium">
                                    <img src="assets/img/stiker.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="row_three">
                        <div className="col-1">
                                <div className="galleryImages large">
                                    <img src="assets/img/dev_room.jpg"/>
                                </div>
                            </div>
                        </div>
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
      )
  }
}
export default AboutUsContent;