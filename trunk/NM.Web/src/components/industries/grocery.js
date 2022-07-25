import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function Grocery() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>
            Take your Grocery business online with Grocery Delivery App
            Development
          </h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#fb683d"
        graphicTitle="Expand Your Restaurant Business With Our Grocery Delivery App Development Solutions"
        graphicSubtitle="Take your vegetable business online with Grocery Delivery App Development and let us customize our solution as per your branding and you are all set to sell vegetables online."
        graphicImgUrl="/assets/img/industries/groceryPic.png"
      />
      <IndustriesSolutions
        heading="A SNEAK-PEEK of our Grocery Delivery App Development Solution"
        eventFirst="Real-Time Tracking"
        eventFirstSub="Track your drivers in real-time, analyze their performance, and improve your business processes to streamline deliveries using a robust admin panel."
        eventFirstGrap="/assets/img/industries/Real-Time-Tracking.png"
        eventSecond="Multiple Payment Options"
        eventSecondSub="Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience."
        eventSecondGrap="/assets/img/industries/Multiple-Payment-Options.jpeg"
        eventThird="Reports and Analytics"
        eventThirdSub="Use the app's in-built advanced analytics to see and analyze how your business is performing. Identify problems and make informed decisions to grow your sales."
        eventThirdGrap="/assets/img/industries/Reports-and-Analytics.jpg"
        eventFourth="Manage Orders"
        eventFourthSub="Avoid messy ordering processes and long queues with our Grocery Delivery service app. Manage everything while sitting at your home with a robust Admin Panel."
        eventFourthGrap="/assets/img/industries/Manage-Orders.jpg"
        eventFifth="Better ROI"
        eventFifthSub="Make effective strategies by using features like Push Notifications and provide real-time updates to your customers about new deals to increase your ROI."
        eventFifthGrap="/assets/img/industries/Better-ROI.jpg"
        eventSix="Promote Your Business Effectively"
        eventSixSub="Provide your customer loyalty bonuses, introduce referrals and do a lot more to promote your business using all-in-one robust admin panel."
        eventSixGrap="/assets/img/industries/Promote-Your-Business-Effectively.png"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Grocerys App Project in Mind?</h2>
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
export default withNewsletterAddress(Grocery);