import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function TourAndTravel() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>Innovative Ideas For Travel & Hospitality Industry</h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#008178"
        graphicTitle="Reliable Solutions to Improve Your Business Processes & Automate Services"
        graphicSubtitle="Travel and hospitality are growing businesses these days because they are truly dynamic and have immense competition. This industry is more than just a growing community because it helps to increase the community. Nestormind is a travel and hospitality software development company offering online travel app and web solutions across the tourism industry. We help you digitally transform your business because we know how to effectively leverage the latest technologies to solve the tough operational challenges and gain market share, converting an indifferent guest into a loyal client."
        graphicImgUrl="/assets/img/industries/TourAndTravelPic.png"
      />
      <IndustriesSolutions
        heading="Our Travel & Hospitality Software Development Services"
        eventFirst="Custom App & Web Portal"
        eventFirstSub="We provide development solutions to a broad spectrum of travel and hospitality businesses across the globe. We build a portal to improve the versatility of the company through client management and customer experience."
        eventFirstGrap="/assets/img/industries/Custom-App-Web-Portal.jpg"
        eventSecond="Booking Portals"
        eventSecondSub="With our top-notch design and development services, we build user-friendly and the most appropriate booking portals for our clients. We make solutions that best suits your traveling business needs."
        eventSecondGrap="/assets/img/industries/Booking-Portals.jpg"
        eventThird="Custom Fleet Management"
        eventThirdSub="  After spending years in the industry, we have rich experience in transportations and fleet management, including features like GPS fleet tracking, fuel management, vehicle maintenance, and more to deliver expertise."
        eventThirdGrap="/assets/img/industries/Custom-Fleet-Management.png"
        eventFourth="B2B Travel Portal"
        eventFourthSub=" Our developers build B2B travel portals that provide white label solutions and access to real-time online bookings. We strive to deliver the best to our clients and develop a user-friendly platform for your users."
        eventFourthGrap="/assets/img/industries/B2B-Travel-Portal.png"
        eventFifth="Travel ERP Solutions"
        eventFifthSub="We give assistance to travel companies and to render exceptional customer service and maintain healthy coordination between departments. We provide travel ERP solutions that help in increasing the company’s efficiency."
        eventFifthGrap="/assets/img/industries/Travel-ERP.png"
        eventSix="Travel Broker & Agent Software"
        eventSixSub="Our development builds feature-rich broker and agent software with sharp brains and years of development experience to provide ease of booking to your user based on their unique requirements."
        eventSixGrap="/assets/img/industries/Travel-Broker-Agent-Software.jpg"
        eventSeven="CRM For Hotels"
        eventSevenSub="We build a custom CRM for hotels that enable hotel managers to track and optimize the stages of building relationships with customers and finding new business marketing opportunities."
        eventSevenGrap="/assets/img/industries/CRM-For-Hotels.png"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Tour And Travel App Project in Mind?</h2>
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
export default withNewsletterAddress(TourAndTravel);