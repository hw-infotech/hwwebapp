import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function Entertainment() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>Customized Entertainment Apps Developed By Experts</h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#472eab"
        graphicTitle="Get World-Class & Result-Oriented Entertainment Software Development Solutions"
        graphicSubtitle="The entertainment industry is quite vast as it is taking lucrative benefits of the latest technology to offer its customers top-notch services with the help of entertainment app development solutions. Keeping in mind this popularity of entertainment app development trend, Nestormind provides the robust and most reliable entertainment development solutions to its clients worldwide. We are a renowned entertainment app development company that integrates the latest tools and technologies to develop a beautiful application that provides viewers with a great entertainment experience."
        graphicImgUrl="/assets/img/industries/entertainmentPic.png"
      />
      <IndustriesSolutions
        heading="Our Entertainment App Development Solutions"
        eventFirst="Mobile & Web Apps"
        eventFirstSub="We offer a comprehensive range of mobile and web app development services as we have a team of certified experts who are efficient in building entertainment applications for web and mobile platforms."
        eventFirstGrap="/assets/img/industries/entertainment1.jpg"
        eventSecond="On-Demand Apps"
        eventSecondSub="We build on-demand entertainment applications for our clients with a customized user interface, advanced administration panels, and powerful analysis panels by keeping your requirements in mind."
        eventSecondGrap="/assets/img/industries/entertainment2.jpg"
        eventThird="Customized Entertainment Apps"
        eventThirdSub="We provide customized solutions by developing customized entertainment applications for our clients. Our developers build apps based on AI that facilitates its use and maintains personalized touch."
        eventThirdGrap="/assets/img/industries/entertainment3.jpg"
        eventFourth="Enterprise Mobility Solutions"
        eventFourthSub="We provide solutions that are innovative, powerful, scalable, and glitch-free. Our entertainment app experts develop applications for different publishers, media houses, and other entertainment channels."
        eventFourthGrap="/assets/img/industries/entertainment4.jpg"
        eventFifth="ChatBot Development"
        eventFifthSub="We have master expertise in building interactive and advanced chatbots for media companies, ensuring their capabilities to enhance user experience and automate subscription purchasing and booking processes."
        eventFifthGrap="/assets/img/industries/entertainment5.jpg"
        eventSix="Custom ERP Solutions"
        eventSixSub="We provide custom ERP (Enterprise resource planning) solutions and build entertainment applications that enable the audience to get the best media entertainment support in their location."
        eventSixGrap="/assets/img/industries/entertainment6.jpg"
        eventSeven="Astonishing UI/UX Experience"
        eventSevenSub="We have a team of certified and experienced UI/UX designers that craft the remarkable, astonishing and innovative user interface for our clients to enjoy an excellent visualizing experience."
        eventSevenGrap="/assets/img/industries/entertainment7.jpg"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Entertainments App Project in Mind?</h2>
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
export default withNewsletterAddress(Entertainment);