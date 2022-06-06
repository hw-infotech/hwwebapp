import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer_new.css";

const Footer_new = () => {
  return (
    <section className="footerBox__Panel">

      <img src="assets/img/nestormind.png" width="250px" />
      <div className="container">
        <div className="footerContent">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">

              <div className="companyLinsk">
                <h4>About Us</h4>
                <div className="content">
                  <p>
                    We aren’t a mere software development service provider but
                    an industry leader in providing a top-notch digital solution
                    to businesses across the globe.
                  </p>
                </div>
                <div className="clb-social" >
                  <ul className="clb-social-holder font-titles icons mb-0">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/nestormindpvtltd"
                        className="facebook"
                      >
                        <i className="bx bxl-facebook"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/nestormindpvtltd/"
                        className="instagram"
                      >
                        <i className="bx bxl-instagram"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/nestormind/"
                        className="linkedin"
                      >
                        <i className="bx bxl-linkedin"> </i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/nestormindpvtld"
                        className="twitter"
                      >
                        <i className="bx bxl-twitter"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://join.skype.com/invite/hTYrZnJuUsHE"
                        className="skype"
                      >
                        <i className="bx bxl-skype"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <ul className="clb-social-holder font-titles icons pt-0">
                    {/*<li>
                      <a
                        target="_blank"
                        href="https://dribbble.com/nestormindpvtltd"
                        className="instagram"
                      >
                        <i className="bx bxl-dribbble"></i>{" "}
                      </a>
                    </li>
                     <li>
                      <a
                        target="_blank"
                        href="https://www.behance.net/nestormindpvtltd"
                        className="instagram"
                      >
                        <i className="bx bxl-behance"></i>{" "}
                      </a>
                    </li> 
                    <li>
                      <a
                        target="_blank"
                        href="https://join.skype.com/invite/hTYrZnJuUsHE"
                        className="skype"
                      >
                        <i className="bx bxl-skype"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a
                        target="_blank"
                        href="https://www.upwork.com/o/companies/~011aa54aaad2a9bad3/"
                        className="upwork"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          className="bxl-upwork"
                          viewBox="0 0 24 24"
                          style={{ fill: "rgba(0, 0, 0, 1)", transform: "" }}
                        >
                          <path d="M17.47,6.07h0a4.54,4.54,0,0,0-4.38,3.69,19.9,19.9,0,0,1-2.28-4.9H8.55l0,6a2.14,2.14,0,1,1-4.28,0l0-6L2,4.91l0,6a4.4,4.4,0,1,0,8.8-.05v-1a20.55,20.55,0,0,0,1.65,2.7l-1.38,6.61h2.32l1-4.81a5.61,5.61,0,0,0,3.11.89,4.57,4.57,0,0,0,0-9.14Zm0,6.83h0a4.09,4.09,0,0,1-2.55-1l.23-.91v-.05c.16-1,.66-2.6,2.35-2.6a2.25,2.25,0,0,1,2.27,2.24A2.41,2.41,0,0,1,17.5,12.9Z"></path>
                        </svg>
                      </a>
                    </li> 
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="companyLinsk">
                    <h4>Services</h4>
                    <div className="content">
                      <ul>
                        <li>
                          <Link to="/app-development">App Development</Link>
                        </li>
                        <li>
                          <Link to="/web-development">Web Development</Link>
                        </li>
                        <li>
                          <Link to="/ui-ux-design">UI UX Design</Link>
                        </li>
                        <li>
                          <Link to="/seo">Seo</Link>
                        </li>
                        <li>
                          <Link to="/graphic-design">Graphics Design</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="companyLinsk">
                    <h4>Latest Tech</h4>
                    <div className="content">
                      <ul>
                        <li>
                          {/* <Link to="/under-mantainence">Virtual Reality</Link> */}
                          <Link>Virtual Reality</Link>
                        </li>
                        <li>
                          <Link>Augmented Reality</Link>
                        </li>
                        <li>
                          <Link>AI</Link>
                        </li>
                        <li>
                          <Link>Internet of things</Link>
                        </li>
                        <li>
                          <Link>Blockchain</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="companyLinsk">
                    <h4>Company</h4>
                    <div className="content">
                      <ul>
                        <li>
                          <Link to="/about-us">About us</Link>
                        </li>
                        <li>
                          <Link to="/career">Career </Link>
                        </li>
                        <li>
                          <Link to="/contact-us">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/blogs">Blog</Link>
                        </li>
                        <li>
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                          {/* <Link to="/under-mantainence">Our Products</Link> */}
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomFooter">
          <div className="leftSec">&copy; 2021 Nestormind Pvt Ltd. All Rights Reserved</div>
        </div>
      </div>
    </section>
  );
};

export default Footer_new;
