import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServicesMain.css";
import OwlCarousel from "react-owl-carousel";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";

const ServicesMain = (props) => {
  const [responsive, setResponsive] = useState({
    0: {
      items: 1,
    },
    575: {
      items: 1,
    },
    767: {
      items: 2,
    },
    1000: {
      items: 2,
    },
    1440: {
      items: 3,
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // this changes the scrolling behavior to "smooth"

  return (
    <div>
      <section className="mainBanner_Services">
        <div className="container">
          <div className="bannerContent">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="bannerContentText">
                  <h1>
                    Nestromind <br />
                    Where Search Ends and <strong>Partnership</strong> <br />
                    Begins
                  </h1>
                  <p>
                    We value your concerns and provide tailor-made solutions
                    that fit perfectly your business ambition. Using
                    cutting-edge technology, we deliver scalable, secure, and
                    seamless solutions that can meet the futuristic approach of
                    business.
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
                    <img
                      className="line"
                      src="assets/img/grey-line.svg"
                      alt=""
                    />
                  </div>
                  <div className="box-wrap">
                    <div className="box ui">
                      <img src="assets/img/ui.svg" alt="" />
                    </div>
                    <h4>UI/UX Designers</h4>
                    <img
                      className="line"
                      src="assets/img/grey-line.svg"
                      alt=""
                    />
                  </div>
                  <div className="box-wrap">
                    <div className="box front">
                      <img src="assets/img/front-end.svg" alt="" />
                    </div>
                    <h4>Full Stack Developers</h4>
                    <img
                      className="line"
                      src="assets/img/grey-line.svg"
                      alt=""
                    />
                  </div>
                  <div className="box-wrap">
                    <div className="box growth">
                      <img src="assets/img/Growth.svg" alt="" />
                    </div>
                    <h4>Growth Experts</h4>
                    <img
                      className="line"
                      src="assets/img/grey-line.svg"
                      alt=""
                    />
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
            <div className="heading">
              Services We <strong>Offer</strong>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop
              items={4}
              margin={10}
              nav={true}
              responsive={responsive}
            >
              <div className="item">
                <div className="item_Services appDevelopment">
                  <span className="number top-circle">
                    <img src="assets/img/app_development_vector.svg" alt="" />
                  </span>
                  <h4>
                    App <br />
                    <strong>Development</strong>
                  </h4>
                  <img className="line" src="assets/img/grey-line.svg" alt="" />
                  <p>
                    We offer agile app development services and our approach is
                    to provide tailored enterprise-grade mobile applications for
                    both Andriod and iOS platforms.
                  </p>
                  <div className="actBtn">
                    <a href="/app-development">Explore</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item_Services webDevelopment">
                  <span className="number top-circle">
                    <img src="assets/img/web_development_vector.svg" alt="" />
                  </span>
                  <h4>
                    Web <br />
                    <strong>Development</strong>
                  </h4>
                  <img className="line" src="assets/img/grey-line.svg" alt="" />
                  <p>
                    We offer futuristic customized web application development
                    solutions that help the business to reach new height.
                  </p>
                  <div className="actBtn">
                    <Link to="/web-development">Explore</Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item_Services uiUxDevelopment">
                  <span className="number top-circle">
                    <img src="assets/img/ui_ux_vector.svg" alt="" />
                  </span>
                  <h4>
                    UI & UX <br />
                    <strong>Design</strong>
                  </h4>
                  <img className="line" src="assets/img/grey-line.svg" alt="" />
                  <p>
                    We thrive to provides aesthetically rich and well functional
                    B2B applications. We are a UX design company and we believe
                    that everything that affects the end-user is part of the
                    design process.
                  </p>
                  <div className="actBtn">
                    <a href="/ui-ux-design">Explore</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item_Services seoDevelopment">
                  <span className="number top-circle">
                    <img src="assets/img/seo_vector.svg" alt="" />
                  </span>
                  <h4>
                    Search Engine <br />
                    <strong>Optimization</strong>
                  </h4>
                  <img className="line" src="assets/img/grey-line.svg" alt="" />
                  <p>
                    We have customized SEO techniques planned according to the
                    latest algorithmic updates of searching engine. Our SEO
                    technicians will ensure definite result within deadline.
                  </p>
                  <div className="actBtn">
                    <a href="/seo">Explore</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item_Services graphicsDevelopment">
                  <span className="number top-circle">
                    <img src="assets/img/graphics_vector.svg" alt="" />
                  </span>
                  <h4>
                    Graphics
                    <br /> <strong>Design</strong>
                  </h4>
                  <img className="line" src="assets/img/grey-line.svg" alt="" />
                  <p>
                    We have expertise in graphic designing and help the brands
                    to boost the impact on their audience that to outshine their
                    competitors through the power of visual communication.
                  </p>
                  <div className="actBtn">
                    <a href="/graphic-design">Explore</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item_Services digitalDevelopment">
                  <span className="number top-circle">
                    <img src="assets/img/digital_markiting_vector.svg" alt="" />
                  </span>
                  <h4>
                    Digital
                    <br /> <strong>Marketing</strong>
                  </h4>
                  <img className="line" src="assets/img/grey-line.svg" alt="" />
                  <p>
                    We understand your business needs and craft digital
                    marketing strategy after thorough research on the current
                    business position, competitor, and future business goal.
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
                  <h2>
                    What We Do <br />
                    For You
                  </h2>
                  <p>
                    We mingle technical expertise with creativity to deliver an
                    outstanding result. Our services including Web development,
                    UI & UX design, Mobile App Development, and Digital
                    Marketing are completely dedicated to businesses. We are the
                    partner of your digital transformation.
                  </p>
                  <div className="actionBtn">
                    <Link to="/contact-us" className="btn-fill">
                      {" "}
                      Request a free consultation
                    </Link>
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
            <div className="heading">
              What Does It <strong>Work?</strong>
            </div>
          </div>
          <div className="process">
            <ul>
              <li>
                <div className="contentOfProcess">
                  <div className="icon Planing">
                    <img src="assets/img/plan.svg" alt="" />
                  </div>
                  <div className="title">
                    <strong>Planing</strong> <br />& Analysis
                  </div>
                  <div className="SubTileContent">
                    <p>
                      Our expert designers are capable to deliver such unique
                      designs that will serve your business purpose and can also
                      boost the website to attain a top rank in the search
                      engines. Our websites are compatible with all devices.
                      This is a critical part of the responsive front-end
                      development but can also be highly useful for a wide range
                      of different marketing along with design purposes.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contentOfProcess">
                  <div className="icon Design">
                    <img src="assets/img/design-process.svg" alt="" />
                  </div>
                  <div className="title">
                    <strong> User Friendly </strong> <br />
                    Design
                  </div>
                  <div className="SubTileContent">
                    <p>
                      Our skilled designers can deliver diverse logos, banners,
                      filters, posts for the social media to serve the purpose
                      of the clinet’s business promotion by drawing attention
                      and appreciation from the audience.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contentOfProcess">
                  <div className="icon Functionality">
                    <img src="assets/img/programming.svg" alt="" />
                  </div>
                  <div className="title">
                    <strong>Functionality </strong>
                    <br />& Feature
                  </div>
                  <div className="SubTileContent">
                    <p>
                      Developed products are designed to provide 360-degree
                      functionality. We tend to offer cutting edge results that
                      not only add value but also suit with the latest business
                      requirements by solving challenges.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contentOfProcess">
                  <div className="icon Testing">
                    <img src="assets/img/bug.svg" alt="" />
                  </div>
                  <div className="title">
                    <strong>Testing &</strong>
                    <br />
                    Fixing the Bugs
                  </div>
                  <div className="SubTileContent">
                    <p>
                      Products that have been developed, have to go through
                      extensive testing phase to ensure that, they function
                      according to the business requirement without any glitch.
                      These are secure can’t be penetrated by any external
                      force.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contentOfProcess">
                  <div className="icon Delivery">
                    <img src="assets/img/delivery.svg" alt="" />
                  </div>
                  <div className="title">
                    <strong>Final Delivery </strong>
                    <br />
                    Of the Project
                  </div>
                  <div className="SubTileContent">
                    <p>
                      After testing and fixing the bugs when the team gets
                      satisfied with its overall functionality, then it goes to
                      be delivered. Developers also couple with clients to
                      provide postproduction services.
                    </p>
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
            <p class="light">
              Let’s co-create your
              <strong>success story</strong>
            </p>
            <Link to="/contact-us" class="btn btn-flip" data-text="let’s talk">
              <span>let’s talk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default withNewsletterAddress(ServicesMain);
