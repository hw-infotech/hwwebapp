import React from "react";
import "./portfolio.css";
import Tilt from "react-parallax-tilt";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const UiUxPortfolio = () => {
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
    <div className="webPortfolioPanel uiUxPort">
      <div className="bigtitle">UI UX</div>
      <div className="container">
        <div className="webPortFolioBox">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-lg-5 mb-sm-3">
              <div className="showcaseHeadline heading">
                <label>Showcase</label>
                <h2 className="showcaseheader title">
                  Leading UI UX Design Company
                  <br /> To Build Next-Gen Apps SEE WHAT WE DO
                </h2>
                <p className="showcaseSubheader subtitle">
                  Nestormind is a top-notch UI UX Design company. We are aware
                  of the importance of user interface design and we use the 3+
                  years of experience to provide our client with a solid well
                  thought user interface design.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 m-auto">
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
                            src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/PortfolioLayoutType4_Mobile.jpg"
                            alt="Demo screenshot"
                          />
                        </picture>
                      </div>
                    </div>

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
                        <img src="../assets/img/uiuxPetDog.png" />
                      </div>
                    </Tilt>
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
                        <img src="../assets/img/DemoTemplate16_Home.jpg" />
                      </div>
                    </Tilt>

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
                            src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/PortfolioLayoutType4_Mobile.jpg"
                            alt="Demo screenshot"
                          />
                        </picture>
                      </div>
                    </div>
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

export default UiUxPortfolio;
