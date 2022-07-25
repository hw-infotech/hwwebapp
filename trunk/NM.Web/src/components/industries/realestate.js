import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function Realestate() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>
            Make Digitized Presence of <br />
            Real Estate Business
          </h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#0000dd"
        graphicTitle="Get Our Innovative Digital Solutions For Your Real Estate Business"
        graphicSubtitle="If you are finding solutions to build a future-ready real estate website, you are at the right place. Nestormind is the one-stop place where you can get the top-rated website design, the portal development company for realtors, real estate agents and real estate companies that will help you dominate the real estate market. We are the leading real estate web development company with an extensive industry portfolio in real estate and have developed hundreds of websites for real estate groups and projects. Our advanced solutions are robust and work amazingly on search engines."
        graphicImgUrl="/assets/img/industries/realestatePic.png"
      />
      <IndustriesSolutions
        heading="Get Our Innovative Digital Solutions For Your Real Estate Business"
        eventFirst="Responsive Real Estate Web Design"
        eventFirstSub=" Nestormind's real estate web design services are innovative to grab the customer’s attention. We build creative, flawless, and responsive websites to work on every device to provide the best user experience."
        eventFirstGrap="/assets/img/industries/Real-Estate-Web-Design.jpg"
        eventSecond="Integration Solutions"
        eventSecondSub=" Along with the real estate website portal, our team also provides internet data exchange (IDX) and multiple listing services (MLS). These robust integrations will bring more potential clients to your website."
        eventSecondGrap="/assets/img/industries/Integration-Solutions.jpg"
        eventThird="Digital Marketing Solutions"
        eventThirdSub=" We also provide you with effective digital marketing solutions to increase the reach of your real estate website. The enhanced digital presence in the market will help you to engage with customers around the globe."
        eventThirdGrap="/assets/img/industries/Digital-Marketing-Solutions.jpg"
        eventFourth="Branding Services"
        eventFourthSub=" We have a team of skilled designers who provide you the creative designs for your website. Our designers have created many marketing pieces to help our clients achieve the desired results in this competitive world."
        eventFourthGrap="/assets/img/industries/Branding-Services.jpg"
        eventFifth="Custom Website Design"
        eventFifthSub="We craft modern and commercial real estate sites with a highly visual user interface as a leading service provider. Our all real estate website projects are unique, powerful, and highly tailored for your brand."
        eventFifthGrap="/assets/img/industries/Custom-Website-Design.jpg"
        eventSix="WordPress Based Real Estate Website"
        eventSixSub="We are experts in WordPress and can build a highly responsive and fully functional WordPress real estate website. We offer end-to-end solutions by using the latest development tools and technologies."
        eventSixGrap="/assets/img/industries/WordPress-Based-Real-Estate-Website.jpg"
        eventSeven="Maintenance Services"
        eventSevenSub="Our clients build stunning real estate websites and for client satisfaction they provide support and maintenance services to, which plays a significant role in enhancing the online performance."
        eventSevenGrap="/assets/img/industries/Maintenance-Services.jpg"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Real Estate App Project in Mind?</h2>
            <a
              href="/contact-us"
              class="outline-btn lets-talk-btn"
              title="Let's Talk"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default withNewsletterAddress(Realestate);