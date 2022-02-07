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
                <div className="clb-social">
                  <ul className="clb-social-holder font-titles icons">
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
                        href="https://www.instagram.com/nestormindpvtltd/"
                        className="instagram"
                      >
                        <i className="bx bxl-instagram"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://dribbble.com/Nestormindpvtltd"
                        className="instagram"
                      >
                        <i className="bx bxl-dribbble"></i>{" "}
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
          <div className="leftSec">&copy; 2021 All Rights Reserved</div>
        </div>
      </div>
    </section>
  );
};

export default Footer_new;
