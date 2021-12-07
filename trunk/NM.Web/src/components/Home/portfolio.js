import React, { Component } from "react";
import "../Home/portfolio.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Portfolio extends Component {
  render() {
    const robin = {
      loop: true,
      margin: 10,
      nav: true,
      autoPlay: true,
      fluidSpeed:true,
      autoplaySpeed: 5000,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 2,
        },
      },
    };

    const brandLogo = {
      loop: true,
      margin: 20,
      nav: true,
      autoPlay: true,
      autoplayTimeout: 5000,
      fluidSpeed:true,
      autoplaySpeed: 1000,
      responsive: {
        0: {
          items: 3,
        },
        480: {
          items: 4,
        },
        600: {
          items: 5,
        },
        1000: {
          items: 8,
        },
      },
    };

    const logo = [
      {
        id: "0",
        image: "assets/img/brandLogo/vue-js-logo.svg",
      },
      {
        id: "1",
        image: "assets/img/brandLogo/angular-icon.svg",
      },
      {
        id: "2",
        image: "assets/img/brandLogo/react.svg",
      },
      {
        id: "3",
        image: "assets/img/brandLogo/firebase.svg",
      },
      {
        id: "4",
        image: "assets/img/brandLogo/nodejs-icon.svg",
      },
      {
        id: "5",
        image: "assets/img/brandLogo/bootstrap-4.svg",
      },
      {
        id: "6",
        image: "assets/img/brandLogo/sass-1.svg",
      },
      {
        id: "7",
        image: "assets/img/brandLogo/mysql.svg",
      },
    ];

    const slider = [
      {
        id: "1",
        image: "assets/img/portfolio/funderslink.png",
        title: "Funders Link",
        content:
          " Task Project Design has been updated in project ECommerce by Admin",
      },
      {
        id: "2",
        image: "assets/img/portfolio/skycomm.png",
        title: "Skycomm",
        content:
          " Task Project Design has been updated in project ECommerce by Admin",
      },
      {
        id: "3",
        image: "assets/img/portfolio/Hawalebnon.png",
        title: "Hawalebnon",
        content:
          " We makes it easy for businesses and marketing teams to manage your social account in a single place.",
      },
      {
        id: "4",
        image: "assets/img/portfolio/joinvet_BG.png",
        title: "joinvet",
        content:
          " We makes it easy for businesses and marketing teams to manage your social account in a single place.",
      },
      {
        id: "5",
        image: "assets/img/portfolio/Neoxcel_BG.png",
        title: "Neoxcel",
        content:
          " We present our unique, flexible and powerful suite of software to run your entire business on cloud.",
      },
      {
        id: "6",
        image: "assets/img/portfolio/telemedician.png",
        title: "Telemedician",
        content: " Virtual Care. Chat with your health team.",
      },
    ];
    return (
      <>
        <div className="portfolioBoxPanel">
          <div className="circleBluer"></div>
          <div className="container">
            <div className="bigTitle"> Portfolio </div>
            <div className="HeadingTitle">
              <div className="mainTitle"> Success Stories </div>
            </div>
          </div>

          <div className="container">
            <div className="SwipeSlider">
              <div className="swiperLeft">
                <h4>Transform the World With Your Idea</h4>
                <h5>
                  <span className="typewriter">
                    Your idea + Our execution = Revolution
                  </span>
                </h5>
                <h6>
                  From dream to reality, here are some apps we are proud to be
                  part of.
                </h6>
              </div>
              <div className="swiperRight">
                <OwlCarousel
                  {...robin}
                  className="owl-theme"
                  autoplay={true}
                  items={2}
                  margin={20}
                  nav
                >
                  {slider?.map((data) => (
                    <div className="item">
                      <div className="projectBox">
                        <img src={data.image} />
                        <div className="contant">
                          <h3>{data.title}</h3>
                          <p>{data.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
          <div className="stackLogo">
            <OwlCarousel
              {...brandLogo}
              className="owl-theme"
              autoplay={true}
              items={2}
              margin={20}
              nav
            >
              {logo?.map((data) => (
                <div className="item">
                  <div className="brandlogoBox">
                    <img src={data.image} />
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </>
    );
  }
}
export default Portfolio;
