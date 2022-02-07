import React from "react";
import "./portfolio.css";
import Tilt from "react-parallax-tilt";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const AppPortfolio = () => {
  const portStories = {
    loop: true,
    margin: 10,
    nav: true,
    autoPlay: true,
    fluidSpeed: true,
    autoplaySpeed: 10000,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };

  return (
    <div className="webPortfolioPanel appPort">
      <div className="bigtitle">App Creations</div>
      <div className="container">
        <div className="webPortFolioBox">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="showcaseHeadline heading">
                <label>Showcase</label>
                <h2 className="showcaseheader title">
                  Revamping App Development With Transforming Ideas
                </h2>
                <p className="showcaseSubheader subtitle">
                  With <b>beautifully designed</b> custom post types to show off
                  your works and collections!
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <OwlCarousel
                {...portStories}
                className="owl-theme"
                autoplay={true}
                items={2}
                margin={20}
                nav
              >
                <div className="item">
                  <div className="portfolioWebLeftContent">
                    <div className="mobileStoriesBox phone ">
                      <div className="deviceHolder">
                        <picture className="deviceFrame">
                          <img
                            loading="lazy"
                            src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/framePhone.png"
                            alt="Demo screenshot"
                          />
                        </picture>
                        <picture className="deviceScreen">
                          <img
                            loading="lazy"
                            src="../assets/img/employeesDashboard.png"
                            alt="Demo screenshot"
                          />
                        </picture>
                      </div>
                    </div>

                    <div className="mobileStoriesBox phone ">
                      <div className="deviceHolder">
                        <picture className="deviceFrame">
                          <img
                            loading="lazy"
                            src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/framePhone.png"
                            alt="Demo screenshot"
                          />
                        </picture>
                        <picture className="deviceScreen">
                          <img
                            loading="lazy"
                            src="../assets/img/Tasks-overview.png"
                            alt="Demo screenshot"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="portfolioWebLeftContent">
                    <Tilt
                      className="parallax-effect-glare-scale tiltBox"
                      perspective={1000}
                      glareEnable={true}
                      glareMaxOpacity={0.45}
                      scale={1.01}
                      gyroscope={true}
                      tiltMaxAngleX={3}
                      tiltMaxAngleY={3}
                    >
                      <div className="tiltImagePanel">
                        <img src="../assets/img/Home_dashbaord.png" />
                      </div>
                    </Tilt>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPortfolio;
