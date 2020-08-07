import React, { Component } from 'react';
import Footer from '../Layout/Footer';
import NavBar from '../Layout/Navbar';

class ContactUsContent extends Component {
  render() { 
      return (
    <div>
        <NavBar />
        <section id="contact-us" className="contact-us section-padding fix">
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
        </section>
        <Footer />
    </div>
      )
  }
}

export default ContactUsContent;