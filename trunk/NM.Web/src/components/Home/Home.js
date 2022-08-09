import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Portfolio from "../Home/portfolio";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import { PopupButton } from "react-calendly";

const HomeContent = (props) => {
  const { navbar } = props;

  console.log(navbar);
  const [state, setState] = useState({
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
      },
      767: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1440: {
        items: 1,
      },
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // setNavbar("Preet Singh")
  }, []);
  // this changes the scrolling behavior to "smooth"

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        // closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section id="hero" className="d-flex align-items-center">
        <div className="container " style={{ position: "relative" }}>
          <video
            id="vid"
            className="globeVideo"
            width="820"
            height="600"
            loop
            autoPlay
            muted
          >
            <source src="assets/music/globe.mp4" type="video/mp4" />
          </video>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
              <h1>
                <span>Excellent Tech Solution </span>To Meet Your Business Needs{" "}
              </h1>
              <h2>
                We are a leading software development company. Our services
                include custom app development, web development, SEO, UI/UX
                design, and graphic design. Our services are meant for both
                domestic and international market. With our vast experience and
                a team that is comprised of skilled professionals, we deliver
                top-rated service to propel your business another level.
              </h2>
              {/* <div className="d-lg-flex mt-5">
                <PopupButton
                  className="w-o-btn scrollto"
                  url="https://calendly.com/nestormindpvtltd"
                  rootElement={document.getElementById("root")}
                  text="Book an appointment!"
                />
  </div>*/}
            </div>
            {/* <div
                className="col-lg-7 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/img/hind-banner.png"}
                  className="img-fluid "
                  alt=""
                />
              </div> */}
          </div>
        </div>
      </section>

      <section className="servicesArea">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5">
              <div className="serviceBox">
                <p className="subTitle">Services</p>
                <div className="divider"></div>
                <h2 className="title">
                  We develop robust web applications, design stunning websites,
                  enhance brand awareness and craft social media buzz.
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 serviceRedirect">
                  <Link to="/services">
                    <div className="serviceBox">
                      <p className="subTitle"> Development </p>
                      <div className="divider"></div>
                      <h4 className="title">
                        Website & Mobile App Development{" "}
                      </h4>
                      <p>
                        Our in-depth knowledge of web, mobile technologies and
                        framework assists us to develop secure, well functioned
                        both web and mobile applications for multiple platforms.
                      </p>
                      <img
                        className="arrowIcon"
                        src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 serviceRedirect">
                  <Link to="/services">
                    <div className="serviceBox">
                      <p className="subTitle"> DESIGN </p>
                      <div className="divider"></div>
                      <h4 className="title"> UX/UI Design and Development </h4>
                      <p>
                        Visitors grab great online experience when well planned
                        UX strategy is visualized. We at Nestormind make this
                        happen using our skill and experience.
                      </p>
                      <img
                        className="arrowIcon"
                        src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 serviceRedirect">
                  <Link to="/services">
                    <div className="serviceBox">
                      <p className="subTitle"> SEO </p>
                      <div className="divider"></div>
                      <h4 className="title">Digital Marketing</h4>
                      <p>
                        We have partnership with Google and assure that, the
                        business will reincarnated with our search engine
                        friendly optimization techniques.
                      </p>
                      <img
                        className="arrowIcon"
                        src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 serviceRedirect">
                  <Link to="/services">
                    <div className="serviceBox">
                      <p className="subTitle"> PRODUCT </p>
                      <div className="divider"></div>
                      <h4 className="title"> Quality Assurance/Testing </h4>
                      <p>
                        Driven by the objective to produce top-notch web
                        solutions, we never compromise with quality and
                        functionality. Our QC team is readily available to
                        ensure global standard products.
                      </p>
                      <img
                        className="arrowIcon"
                        src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
      <section>
        <div className="">
          <div className="container">
            <div className="common-heading ptag">
              <h2>Industries We Serve</h2>
              <p>Successfully delivered digital products</p>
            </div>
            <div className="row mt30">
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/mobile-app.svg" alt="img" />
                  <h6>Entertainment</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/joystick.svg" alt="img" />
                  <h6>Sports</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/smartphone.svg" alt="img" />
                  <h6>eCommerce</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/money-growth.svg" alt="img" />
                  <h6>Finance</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="0.9s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/healthcare.svg" alt="img" />
                  <h6>Healthcare</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="1.1s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/baker.svg" alt="img" />
                  <h6>Restaurant</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="1.3s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/house.svg" alt="img" />
                  <h6>Real estate</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="1.5s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/travel-case.svg" alt="img" />
                  <h6> Travel & hospitality</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeIn"
                data-wow-delay="1.7s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/video-tutorials.svg" alt="img" />
                  <h6>Education</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="1.9s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/taxi.svg" alt="img" />
                  <h6>Transport</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="2.1s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/event.svg" alt="img" />
                  <h6>Insurance</h6>
                </div>
              </div>

              <div
                className="col-lg-3 col-sm-6  wow fadeIn"
                data-wow-delay="2.3s"
              >
                <div className="industry-workfor hoshd">
                  <img src="assets/img/groceries.svg" alt="img" />
                  <h6>Grocery</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="capebilities">
        <div className="container">
          <div className="capebilities_heading">
            <p className="subtitle">Capabilities </p>
            <h2 className="title">
              More than 1500s of projects have been successfully delivered{" "}
              <br />
              And we have a strong base of 200 satisfied clients around the
              globe.
            </h2>
          </div>
        </div>
      </section>

      <section className="accordian-section">
        <div className="container">
          <div className="row" style={{ flexDirection: "row-reverse" }}>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="accordianPanel">
                <div className="accordianLeft">
                  <div className="hidden-space"></div>
                  <div
                    className="imagesBox"
                    style={{
                      backgroundImage:
                        "url(" + "assets/img/confrence_room.jpg" + ")",
                    }}
                  ></div>
                  <div className="hidden-space"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1 col-lg-1"></div>
            <div className="col-12 col-md-5 col-lg-5">
              <div className="collapseBox">
                {/* <div className="playBtn">
                                <button className="round-btn"><i className='bx bx-right-arrow'></i> </button>
                            </div> */}
                <div className="collapseHeading">
                  <h3 className="title">
                    Dive To Know More About Our Expertise in These Respective
                    Fields.
                  </h3>
                </div>

                <div id="accordion" className="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Web and Mobile App development
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Our team of developers offer agile mobile app
                        development services and our approach is to provide
                        tailored enterprise-grade mobile applications for both
                        Andriod and iOS platforms. We also profound on providing
                        highly functional web applications to meet your need.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          UX/UI Design
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Implementing creativity we deliver alluring UX strategy
                        that figures out with top design aesthetics. Our experts
                        believe in creating affects that make ample head turns
                        while elevating the brand stature.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Search Engine Optimization
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Being the best SEO company and having partnership with
                        Google, we deliver awesome result that multiplies
                        conversion rate and elevate business stature
                        simultaneously.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-love-home">
        <div className="container">
          <div className="row row-flexible-center ">
            <div className="col-md-8 col-sm-12 cta-texter-home offset-md-2 mb-5">
              <h4>TOP-NOTCH WEB & MOBILE APP DEVELOPMENT COMPANY IN GLOBE</h4>
            </div>

            <h4></h4>
          </div>
        </div>
        <div className="container">
          <div className="awards_accolades_parts">
            <div className="awa_rds awa_rds_one">
              <a
                href="https://www.google.com/search?q=nestormind&rlz=1C1GCEA_enIN1002IN1002&oq=nest&aqs=chrome.1.69i60j69i59j69i57j46i199i291i433i512j46i131i199i291i433i512j0i131i433i512l2j69i60.2226j0j7&sourceid=chrome&ie=UTF-8"
                target="_blank"
                aria-label="Awards"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img src="../../assets/img/google_review.png" />
                </div>
              </a>
              <div className="hm_awcnt">
                <h3>
                  5.0
                  <img src="../../assets/img/stars.svg" />
                </h3>
                <p>
                  Certified app development company, acknowledged by Google.
                </p>
              </div>
            </div>

            <div className="awa_rds awa_rds_one">
              <a
                href="https://www.designrush.com/agency/mobile-app-design-development/in"
                target="_blank"
                aria-label="Awards"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img src="../../assets/img/design-rush-badge.svg" />
                </div>
              </a>

              <div className="hm_awcnt">
                <p>
                  Certified Mobile App & Web development company, acknowledged
                  by Designrush.
                </p>
              </div>
            </div>

            <div className="awa_rds awa_rds_one">
              <div
                className="clutch-widget"
                data-nofollow="true"
                data-url="https://widget.clutch.co"
                data-widget-type="2"
                data-darkbg="false"
                data-height="45"
                data-clutchcompany-id="1883044"
              ></div>

              <div className="hm_awcnt">
                <p>
                  Certified app development company, acknowledged by Clutch.
                </p>
              </div>
            </div>

            <div className="awa_rds awa_rds_two">
              <a
                href="https://www.goodfirms.co/company/nestormind-pvt-ltd"
                target="_blank"
                aria-label="Awards"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img src="https://assets.goodfirms.co/badges/normal-badge/top-software-development-companies.svg" />
                </div>
              </a>
              <div className="hm_awcnt">
                <h3>
                  5.0
                  <img src="../../assets/img/stars.svg" />
                </h3>
                <p>
                  Certified by GoodFirms as one of the best app development
                  company
                </p>
              </div>
            </div>

            {/* <div className="awa_rds awa_rds_five">
              <a
                href="https://www.upwork.com/o/companies/~011aa54aaad2a9bad3/"
                target="_blank"
                aria-label="Awards"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img src="../../assets/img/upwork.svg" />
                </div>
              </a>
              <div className="hm_awcnt">
                <h3>100% Job Success</h3>
                <p>
                  Recognized as the “top- rated plus” company and earned high
                  rate job success on Upwork.
                </p>
              </div>
            </div> */}
          </div>

          {/* <ul className="list-addon list-addon-home">
            <li>
              <img
                className="lazy_a"
                src="assets/img/developer.png"
                alt="App Developers"
              />
              <h4>25+</h4>
              <p>App Developers </p>
            </li>
            <li>
              <img
                className="lazy_a"
                src="assets/img/talking.png"
                alt="Initial Consultant"
              />
              <h4> 0.5K+</h4>
              <p>Initial Consultant</p>
            </li>
            <li>
              <img
                className="lazy_a"
                src="assets/img/client.png"
                alt="Global icon"
              />
              <h4> 30+</h4>
              <p>Global Clients</p>
            </li>
            <li>
              <img
                className="lazy_a"
                src="assets/img/layer-523@2x.png"
                alt="upwork icon"
              />
              <h4>5/5</h4>
              <p>Upwork</p>
            </li>
          </ul> */}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="testimonialBox">
            <img
              className="dotImage"
              src="assets/img/testimonial-left-bg-index.svg"
            />
            <div className="headings">Startups and Enterprises since 2018</div>
            <div className="testi_Slider">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators" style={{ display: "none" }}>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  >
                    <img src="assets/img/pw.png" />
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  >
                    <img src="assets/img/fa.png" />
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  >
                    <img src="assets/img/ap.png" />
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  >
                    <img src="assets/img/nh.png" />
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="4"
                  >
                    <img src="assets/img/VP.png" />
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="5"
                  >
                    <img src="assets/img/gs.png" />
                  </li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="userContent">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                          <div className="clientProfilePic">
                            <div className="userPic">
                              <img src="assets/img/pw.png" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                          <div className="clentDetails">
                            <div className="clientName">Paul W</div>
                            <div className="clientPlace">United State</div>
                            <div className="clientFeedback">
                              <img src="assets/img/quote-gray-index.svg" />
                              <br />I will admit - originally the thought of
                              outsourcing scared the hell out of me. As a
                              business owner I am used to control and always
                              having my finger on the pulse of my employees and
                              contractors. Nestormind has delivered great
                              results and has convinced me of the value of
                              outsourcing. In the beginning of the relationship
                              between us and Nestormind, there were times when
                              it was difficult to communicate but if you can
                              just get through the first week or so everything
                              starts to come together.
                              <br />
                              <br />I have really enjoyed working with Ravinder
                              and Gurpreet they are great team players and can
                              really deliver outstanding results. I would be
                              proud to have either one of them on my team in the
                              U.S.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="userContent">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                          <div className="clientProfilePic">
                            <div className="userPic">
                              <img src="assets/img/fa.png" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                          <div className="clentDetails">
                            <div className="clientName">Fahad Ashraf</div>
                            <div className="clientPlace">Saudi Arab</div>
                            <div className="clientFeedback">
                              <img src="assets/img/quote-gray-index.svg" />
                              <br />
                              Nestormind resources are a real high achievers.
                              They waste no time getting started on the project.
                              I believe their developers even worked Christmas
                              eve to get the job done. That's how I work and I
                              appreciated it. I like to be challenged, and
                              Nestormind gave me demonstrations on things that
                              went beyond the project scope. For example, they
                              showed me ways to modify my Azure Account, and now
                              I will be saving probably close to $1000 on my
                              Azure expenses for the coming year. Their
                              resources are extremely experienced in ASP.NET
                              Core, SQL Server, and Azure and can come up with a
                              great solution.
                              <br />
                              <br />A Great Development Company!"
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="userContent">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                          <div className="clientProfilePic">
                            <div className="userPic">
                              <img src="assets/img/ap.png" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                          <div className="clentDetails">
                            <div className="clientName">Ash Patel </div>
                            <div className="clientPlace">London UK</div>
                            <div className="clientFeedback">
                              <img src="assets/img/quote-gray-index.svg" />
                              <br />
                              It all started with the need to redesign our
                              landing page. Although, we have our in-house
                              designing team as we were running late to meet our
                              deadlines. We decided to outsource a professional
                              designer and in the process, Nestormind provided
                              us with the rightful candidate we were looking
                              for. Robin was incredibly professional and easy to
                              work with. He is very creative, fast, and
                              understands problems immediately. As well as
                              responsive, adaptive, and works with the client to
                              make the project successful. He designed the
                              landing page for our website, did some cool
                              graphics stuff & made a few changes in our
                              existing code for our other website for
                              responsiveness.
                              <br />
                              <br />
                              It was a great experience to work with him.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="userContent">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                          <div className="clientProfilePic">
                            <div className="userPic">
                              <img src="assets/img/nh.png" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                          <div className="clentDetails">
                            <div className="clientName">
                              Nicholaz Harmann Svensson{" "}
                            </div>
                            <div className="clientPlace">Denmark</div>
                            <div className="clientFeedback">
                              <img src="assets/img/quote-gray-index.svg" />
                              <br />
                              Nestormind exceeded expectations, creating a
                              high-quality product. The team works within budget
                              and delivers on time. Their customer service
                              approach complemented their excellent professional
                              management style.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="userContent">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                          <div className="clientProfilePic">
                            <div className="userPic">
                              <img src="assets/img/VP.png" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                          <div className="clentDetails">
                            <div className="clientName">Vince Panuccio </div>
                            <div className="clientPlace">Australia</div>
                            <div className="clientFeedback">
                              <img src="assets/img/quote-gray-index.svg" />
                              <br />
                              The experience has been a very good one. We are
                              very happy. Their work was quite extensive, and
                              the productivity of their team was great. We are
                              very delighted to have this team of developers for
                              our application. With this application, we were
                              aiming for a lot of user activity on a large
                              scale, and I think they've met that goal. I think
                              the kind of engagement and interactivity that
                              Nestormind offered was superb. We feel like our
                              investment was well worth it.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="userContent">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                          <div className="clientProfilePic">
                            <div className="userPic">
                              <img src="assets/img/gs.png" />
                            </div>
                          </div>
                          {/* <div className="clientFeedbackVideo">
                            <iframe
                              width="1180"
                              height="664"
                              src="https://www.youtube.com/embed/HSgjpQBkR0c"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div> */}
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                          <div className="clentDetails">
                            <div className="clientName">George Saad</div>
                            <div className="clientPlace">United States</div>
                            <div className="clientFeedback">
                              <img src="assets/img/quote-gray-index.svg" />
                              <br />
                              II was really pleased choosing Nestormind for our
                              dev shop.. We had a large project and they
                              delivered as promised. Aman Kumar was the project
                              lead at Nestormind and he did an exceptional job
                              coordinating the project. The entire team was
                              amazing and friendly to work with. Everyone from
                              front-end, back-end, QA, and designer delivered
                              high quality work.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dddl">
        <div className="container">
          <div className="dddl-inner">
            <div className="left-inner">
              <div className="teamSprint">Team Sprit</div>
              <OwlCarousel
                className="owl-theme"
                loop
                items={1}
                margin={10}
                nav
                responsive={state.responsive}
              >
                <div className="item">
                  <span className="number top-circle">01</span>
                  <h4>Core values</h4>
                  <h3>Instant problem solvers </h3>
                  <p>
                    Team Nestormind doesn’t learn to give up! No matter what the
                    challenges are, we as a team of experts, react positively,
                    respond thoroughly and overcome as a pro. This defines our
                    determination and team sprit.
                  </p>
                </div>
                <div className="item ">
                  <span className="number top-circle">02</span>
                  <h4>Core values</h4>
                  <h3>Tech Savvy </h3>
                  <p className="padding_bottom">
                    Nestormind developed an ecosystem that is comprised with
                    tech savvy professionals who proud to brand themselves as
                    the techie animals. Each our actions and reactions are
                    around technology and we value it most.
                  </p>
                </div>

                <div className="item ">
                  <span className="number top-circle">03</span>
                  <h4>Core values</h4>
                  <h3>Learners throughout life </h3>
                  <p className="padding_bottom">
                    Learning is the best food to brain and we assume that.
                    Nestormind is pioneering in delivering global standard
                    products implementing out-of-box ideas and it is all
                    possible because our team values the learning. Tech world is
                    fast changing and through learning we deliver what the
                    market needs.
                  </p>
                </div>
                <div className="item padding_bottom">
                  <span className="number top-circle">04</span>
                  <h4>Core values</h4>
                  <h3>Outstanding Team Spirit </h3>
                  <p className="padding_bottom">
                    We work as a team by speaking up, sharing ideas and offering
                    support while remaining humble and ready to learn from the
                    mistakes. Robust team spirit is our mantra of success and we
                    believe in it.
                  </p>
                </div>
              </OwlCarousel>
            </div>

            {/* <div className="right-inner">
              <div className="workProcess">Our Process</div>
              <ul>
                <li>
                  <div className="image">
                    <img src="assets/img/discover.svg" alt="Discover" />
                  </div>
                  <div className="text">
                    <h4>Discover</h4>
                    <p>and strategize</p>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="assets/img/design.svg" alt="Design" />
                  </div>
                  <div className="text">
                    <h4>Design</h4>
                    <p>that stands out</p>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="assets/img/develop.svg" alt="Develop" />
                  </div>
                  <div className="text">
                    <h4>Develop</h4>
                    <p>with experts</p>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="assets/img/cuc_automate.svg" alt="Develop" />
                  </div>
                  <div className="text">
                    <h4>Quality Assurance</h4>
                    <p>Testing and QA</p>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="assets/img/launch.svg" alt="Launch" />
                  </div>
                  <div className="text">
                    <h4>Launch</h4>
                    <p>and optimize</p>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
              </ul>
            </div> */}

            <div className="right-process">
              <div className="workProcess">Agile Methodology</div>
              <div className="workProcessSlogan">Deriving Test Plan</div>
              <ul>
                <li className="">
                  <div className="image ">
                    <img src="assets/img/discover.svg" alt="Discover" />
                  </div>
                  <div className="text">
                    <small></small>
                    <h4>Ideation</h4>
                    <p>Based on market Analysis and Customer's Expections</p>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li className="">
                  <div className="image ">
                    <img src="assets/img/design.svg" alt="Design" />
                  </div>
                  <div className="text">
                    <small>Developing & Validatios</small>
                    <h4> Usage Scenarios</h4>
                    <p>Complementory Outcomes from this step is UAT plan</p>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="assets/img/develop.svg" alt="Develop" />
                  </div>
                  <div className="text">
                    <small>Creating</small>
                    <h4>User Stories</h4>
                    <p>Listing Functional & Non-Functional Requirements</p>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="assets/img/cuc_automate.svg" alt="Develop" />
                  </div>
                  <div className="text">
                    <small></small>
                    <h4>Core Development</h4>
                    <p>
                      Running Automated and semi-automated tests in parallel
                    </p>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="assets/img/launch.svg" alt="Launch" />
                  </div>
                  <div className="text">
                    <h4>Functional &</h4>
                    <h4>Regression Testing</h4>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="assets/img/people.svg" alt="people"></img>
                  </div>
                  <div className="text">
                    <h4>User Acceptance</h4>
                    <h4>Testing</h4>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="assets/img/gear.svg" alt="Launch" />
                  </div>
                  <div className="text">
                    <h4>Markit Acceptance</h4>
                    <h4>Testing</h4>
                    <img src="assets/img/line-white.svg" alt="line white" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default withNewsletterAddress(HomeContent);
