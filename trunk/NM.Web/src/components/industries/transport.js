import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function Transport() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>
            How Logistics Management Software helps in empowering your business
          </h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#e11d07"
        graphicTitle="Logistics & Transportation Software Development"
        graphicSubtitle="Custom software solutions to reduce 60% -70% fleet operational and management costs, facilitate route planning, speed up deliveries, improve communication with customers and partners, as well as ensure efficient data reporting."
        graphicImgUrl="/assets/img/industries/transportPic.png"
      />
      <IndustriesSolutions
        heading="Streamline your transportation & logistics management business with our logistics management software solutions."
        eventFirst="Schedule Trip"
        eventFirstSub="User can book the shipping services for a later period by providing details such as date time and destination."
        eventFirstGrap="/assets/img/industries/Schedule-Trip.png"
        eventSecond="Fare Estimation"
        eventSecondSub="Users can view the detailed fare estimation for the services they have opted for."
        eventSecondGrap="/assets/img/industries/Fare-Estimation.jpg"
        eventThird="Receive Shipment Request"
        eventThirdSub="Get real-time shipment requests on driver's app to improve fulfilment rate."
        eventThirdGrap="/assets/img/industries/Receive-Shipment-Request.jpg"
        eventFourth="Navigation"
        eventFourthSub="This feature shows the driver end-to-end navigation from the pick-up location to destination glitch free."
        eventFourthGrap="/assets/img/industries/Navigation.jpg"
        eventFifth="Managing Users"
        eventFifthSub="Admins can monitor & manage the users while assigning the driver, generate the invoice & much more."
        eventFifthGrap="/assets/img/industries/Managing-Users.jpg"
        eventSix="Manage & Track Revenue"
        eventSixSub="Admin has access to Monitor, track & manage the entire revenue cycle seamlessly"
        eventSixGrap="/assets/img/industries/Manage-Track-Revenue.jpg"
        eventSeven="Reports & Analytics"
        eventSevenSub="Get actionable data based insights to increase efficiency & grow your business.Manage a fleet of ten to thousands of vehicle hassle free via the robust admin panel."
        eventSevenGrap="/assets/img/industries/Reports-Analytics.jpg"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Transports App Project in Mind?</h2>
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
export default withNewsletterAddress(Transport);