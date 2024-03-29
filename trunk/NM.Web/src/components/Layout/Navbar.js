import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PopupButton } from "react-calendly";

const NavBar = ({ NavbarStyle }) => {
  const history = useHistory();
  const [state, setState] = useState({ isTop: false });

  const onClickGoTo = (link) => {
    history.push(link);
  };

  useEffect(() => {
    window.onscroll = () => _handleScroll();
  }, []);

  const _handleScroll = () => {
    if (document.documentElement.scrollTop > 10) {
      setState({ isTop: true });
    } else {
      setState({ isTop: false });
    }
  };
  const ClassName =
    NavbarStyle == "appDevelopment"
      ? "appDevelopment"
      : NavbarStyle == "appDevelopment"
        ? "webDevelopment"
          ? "webDevelopment"
          : ""
        : "";

  return (
    <header
      id="header"
      className={
        state.isTop
          ? "fixed-top header-scrolled scroll"
          : "fixed-top header-scrolled"
      }
      onScroll={_handleScroll}
    >
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src="assets/img/nestormind_logo_250.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse menuLinksBar "
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto w-100 align-items-center pl-5">
              <li className="nav-item">
                <Link to="/our-works">Our Work</Link>
              </li>

              <li className="nav-item dropdown position-static">
                <a
                  href="/services"
                  onClick={() => {
                    onClickGoTo("/services");
                  }}
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Industries <span className="dropIcon"></span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="dropdownmenus two-col">
                    <Link className="dropdown-item" to="/entertainment">
                      <div className="servicesLinksBox">
                        Entertainment
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/sports">
                      <div className="servicesLinksBox">
                        Sports
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/retail-ecommerce">
                      <div className="servicesLinksBox">
                        Retails & eCommerce
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/finance">
                      <div className="servicesLinksBox">
                        Finance
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/healthcare">
                      <div className="servicesLinksBox">
                        Healthcare
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/restaurant">
                      <div className="servicesLinksBox">
                        Restaurant
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/real-estate">
                      <div className="servicesLinksBox">
                        Real estate
                        <span></span>
                      </div>
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/travel-and-hospitality"
                    >
                      <div className="servicesLinksBox">
                        Travel & hospitality
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/education">
                      <div className="servicesLinksBox">
                        Education
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/transport">
                      <div className="servicesLinksBox">
                        Transport
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/insurance">
                      <div className="servicesLinksBox">
                        Insurance
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/grocery">
                      <div className="servicesLinksBox">
                        Grocery
                        <span></span>
                      </div>
                    </Link>
                  </div>
                  <div className="integratedLinks">
                    <div className="webformsBottom">
                      <p>Our Socials</p>
                      <div className="socialintegratedLinks">
                        <a
                          className="webformsIntegration"
                          href="https://www.facebook.com/nestormindpvtltd"
                          target="_blank"
                        >
                          <img
                            src="assets/img/facebookNavIcon.png"
                            alt="Facebook"
                            title="Facebook"
                            loading="lazy"
                          />
                          Facebook
                        </a>

                        <a
                          className="webformsIntegration"
                          href="https://www.instagram.com/nestormindpvtltd/"
                          target="_blank"
                        >
                          <img
                            src="assets/img/instagramNavIcon.png"
                            alt="Google Workspace"
                            title="Google Workspace"
                            loading="lazy"
                          />
                          Instagram
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://www.linkedin.com/company/nestormind/"
                          target="_blank"
                        >
                          <img
                            src="assets/img/linkedinNavIcon.png"
                            alt="LinkedIn"
                            title="LinkedIn"
                            loading="lazy"
                          />
                          LinkedIn
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://twitter.com/nestormindpvtld"
                          target="_blank"
                        >
                          <img
                            src="assets/img/twitterNestormind.svg"
                            alt="LinkedIn"
                            title="LinkedIn"
                            loading="lazy"
                          />
                          Twitter
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://dribbble.com/nestormindpvtltd"
                          target="_blank"
                        >
                          <img
                            src="assets/img/dribbbleNestormind.svg"
                            alt="LinkedIn"
                            title="Dribbble"
                            loading="lazy"
                          />
                          Dribbble
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://www.behance.net/nestormindpvtltd"
                          target="_blank"
                        >
                          <img
                            src="assets/img/behanceNestormind.svg"
                            alt="LinkedIn"
                            title="Dribbble"
                            loading="lazy"
                          />
                          Behance
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://join.skype.com/invite/hTYrZnJuUsHE"
                          target="_blank"
                        >
                          <img
                            src="assets/img/skypeNestormind.svg"
                            alt="LinkedIn"
                            title="Skype"
                            loading="lazy"
                          />
                          Skype
                        </a>
                        {/* <a
                          className="webformsIntegration"
                          href="https://www.upwork.com/o/companies/~011aa54aaad2a9bad3/"
                          target="_blank"
                        >
                          <img
                            src="assets/img/upworkNestormind.svg"
                            alt="LinkedIn"
                            title="Skype"
                            loading="lazy"
                          />
                          upwork
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown position-static">
                <a
                  href="/services"
                  onClick={() => {
                    onClickGoTo("/services");
                  }}
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services <span className="dropIcon"></span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="dropdownmenus">
                    <Link className="dropdown-item" to="/app-development">
                      <div className="servicesLinksBox">
                        App Development
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/web-development">
                      <div className="servicesLinksBox">Web Development</div>
                    </Link>
                    <Link className="dropdown-item" to="/ui-ux-design">
                      <div className="servicesLinksBox">UI UX Design</div>
                    </Link>
                    <Link className="dropdown-item" to="/seo">
                      <div className="servicesLinksBox">Seo</div>
                    </Link>
                    <Link className="dropdown-item" to="/graphic-design">
                      <div className="servicesLinksBox">Graphics Design</div>
                    </Link>
                  </div>

                  <div className="integratedLinks">
                    <div className="webformsBottom">
                      <p>Our Socials</p>
                      <div className="socialintegratedLinks">
                        <a
                          className="webformsIntegration"
                          href="https://www.facebook.com/nestormindpvtltd"
                          target="_blank"
                        >
                          <img
                            src="assets/img/facebookNavIcon.png"
                            alt="Facebook"
                            title="Facebook"
                            loading="lazy"
                          />
                          Facebook
                        </a>

                        <a
                          className="webformsIntegration"
                          href="https://www.instagram.com/nestormindpvtltd/"
                          target="_blank"
                        >
                          <img
                            src="assets/img/instagramNavIcon.png"
                            alt="Google Workspace"
                            title="Google Workspace"
                            loading="lazy"
                          />
                          Instagram
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://www.linkedin.com/company/nestormind/"
                          target="_blank"
                        >
                          <img
                            src="assets/img/linkedinNavIcon.png"
                            alt="LinkedIn"
                            title="LinkedIn"
                            loading="lazy"
                          />
                          LinkedIn
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://twitter.com/nestormindpvtld"
                          target="_blank"
                        >
                          <img
                            src="assets/img/twitterNestormind.svg"
                            alt="LinkedIn"
                            title="LinkedIn"
                            loading="lazy"
                          />
                          Twitter
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://dribbble.com/nestormindpvtltd"
                          target="_blank"
                        >
                          <img
                            src="assets/img/dribbbleNestormind.svg"
                            alt="LinkedIn"
                            title="Dribbble"
                            loading="lazy"
                          />
                          Dribbble
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://www.behance.net/nestormindpvtltd"
                          target="_blank"
                        >
                          <img
                            src="assets/img/behanceNestormind.svg"
                            alt="LinkedIn"
                            title="Dribbble"
                            loading="lazy"
                          />
                          Behance
                        </a>
                        <a
                          className="webformsIntegration"
                          href="https://join.skype.com/invite/hTYrZnJuUsHE"
                          target="_blank"
                        >
                          <img
                            src="assets/img/skypeNestormind.svg"
                            alt="LinkedIn"
                            title="Skype"
                            loading="lazy"
                          />
                          Skype
                        </a>
                        {/* <a
                          className="webformsIntegration"
                          href="https://www.upwork.com/o/companies/~011aa54aaad2a9bad3/"
                          target="_blank"
                        >
                          <img
                            src="assets/img/upworkNestormind.svg"
                            alt="LinkedIn"
                            title="Skype"
                            loading="lazy"
                          />
                          upwork
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown ">
                <a
                  href="/services"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company <span className="dropIcon"></span>
                </a>
                <div
                  className="dropdown-menu smallDrop"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="dropdownmenus two-col">
                    <Link className="dropdown-item" to="/about-us">
                      <div className="servicesLinksBox">
                        About Us
                        <span></span>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/Career">
                      <div className="servicesLinksBox">
                        Career
                        <span></span>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              {/* <li className="nav-item">
                <Link to="/under-mantainence">Blog</Link>
              </li> */}

              <li className="nav-item">
                <Link to="/contact-us">Contact Us</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="w-o-btn" onClick={openModal}>
                  Get free consultation
                </Link>
              </li> */}
              <li className="nav-item w-o-btn ml-auto">
                <Link to="/meeting"> Free Consultation</Link>
              </li>
              <li className="nav-item p-0 ml-2">
                <a
                  href="https://join.skype.com/invite/hTYrZnJuUsHE"
                  className="circleIcon"
                >
                  <i class="bx bxl-skype"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="drop-down"><a href="">Services</a>
              <ul>
                <li><a href="javscript;">Drop Down 1</a></li>
                <li className="drop-down"><a href="javscript;">Deep Drop Down</a>
                  <ul>
                    <li><a href="javscript;">Deep Drop Down 1</a></li>
                    <li><a href="javscript;">Deep Drop Down 2</a></li>
                    <li><a href="javscript;">Deep Drop Down 3</a></li>
                    <li><a href="javscript;">Deep Drop Down 4</a></li>
                    <li><a href="javscript;">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="javscript;">Drop Down 2</a></li>
                <li><a href="javscript;">Drop Down 3</a></li>
                <li><a href="javscript;">Drop Down 4</a></li>
              </ul>
            </li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
        <a href="#about" className="get-started-btn scrollto">Get Quote</a> */}
      </div>
    </header>
  );
};

export default NavBar;
