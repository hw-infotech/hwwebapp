import React, { Component } from 'react';
import Footer from '../Layout/Footer';
import NavBar from '../Layout/Navbar';
import Footer_new from '../Layout/Footer_new';
import '../ContactUs/ContactUs.css';

class ContactUsContent extends Component {
    componentDidMount = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }// this changes the scrolling behavior to "smooth"
  render() { 
      return (
    <div>
        <NavBar />
        <section className="contact__panel contact-hero">
            <div className="container">
                <div className="formpanel">
                    <div className="contact-hero__item">
                        <h1>Let’s create progress together</h1>
                        <div className="contact-form" id="mc_embed_signup">
                            <form action="/thank-you/" method="post" name="contact-form">
                                <input type="hidden" name="form-name" value="contact-form"/>
                                    <div className="input-group">
                                        <p>Services</p>
                                        <ul>
                                            <li>
                                                <label for="service-option-website">
                                                    <input type="checkbox" value="website" name="" id="service-option-website"/>
                                                    <span>Website</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="service-option-mobile">
                                                    <input type="checkbox" value="mobile" name="" id="service-option-mobile"/>
                                                    <span>Mobile</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="service-option-illustrations"> 
                                                    <input type="checkbox" value="illustrations" name="" id="service-option-illustrations"/>
                                                    <span>Illustrations</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="service-option-front-end"> 
                                                    <input type="checkbox" value="front-end" name="" id="service-option-front-end"/>
                                                    <span>Front-end</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="service-option-content"> 
                                                    <input type="checkbox" value="content" name="" id="service-option-content"/>
                                                    <span>Content</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="service-option-animation"> 
                                                    <input type="checkbox" value="animation" name="" id="service-option-animation"/>
                                                    <span>Animation</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="input-group">
                                        <div className="material-input">
                                            <input className="required" id="mce-FNAME" type="text" name="full-name"  required="required"/>
                                                <label className="control-label" for="mce-FNAME">Name</label>
                                        </div>
                                        <div className="material-input">
                                            <input className="required email" id="mce-EMAIL" type="email" name="email"  required="required"/>
                                                <label for="mce-EMAIL">Email</label>
                                        </div>
                                        </div>
                                        <div className="input-group material-input">
                                            <input id="mce-CNAME" type="text" name="company-name" />
                                            <label for="mce-CNAME">Company Name (optional)</label>
                                        </div>
                                        <div className="input-group material-input">
                                            <textarea className="required" id="mce-DESC" type="text" name="description"  required="required">
                                            </textarea>
                                                <label for="mce-DESC">Project Description</label>
                                        </div>
                                        <div className="clear">
                                            <input className="button" id="mc-embedded-subscribe" type="submit" value="Submit"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="contact-hero__item">
                                    <img src="assets/img/contact-us1.png" alt="line white"/>
                            </div>
                </div>
                <p class="contact-hero--contact">Reach us out <a href="tel:+919877344996"></a>  <a href="mailto:hello@brucira.com">info@hindwaves.com</a></p>
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
                                <li><i className="bx bx-mail-send"></i> info@hindwaves.com</li>
                                <li><i className="bx bxs-phone"></i> (0172) 4039142</li>
                            </ul>
                            <div className="row" style={{marginTop: "15px", marginLeft: "10px"}}>
                                <div className="contact-interact">
                                    <a href="tel:+91 9877 344996" className="btn btn-contact" title="Call Now!">Call Us</a>
                                    <a href="mailto:info@hindwaves.com" className="btn btn-contact mg-10" title="Drop an email">Drop an email</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <Footer_new/>
    </div>
      )
  }
}

export default ContactUsContent;