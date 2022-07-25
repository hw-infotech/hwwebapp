import React from "react";
import "./industries.css";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from "./industriesGraphic";
import IndustriesSolutions from "./industriesSolutions";
import { Link } from "react-router-dom";

function Finance() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>
            Choose Insurance App Development Company that ensures maximum ROI
          </h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#16304d"
        graphicTitle="Our insurance app development services will make you a market leader"
        graphicSubtitle="Here’s your chance to conquer and dominate the $7 trillion insurance market, with our powerful and scalable insurance app development services. Empower your users with knowledge, and trigger maximum conversions with user-friendly, robust & ROI-focussed insurance apps."
        graphicImgUrl="/assets/img/industries/insurancePic.png"
      />
      <IndustriesSolutions
        heading="The secret recipe of our insurance app development"
        eventFirst="Claims Management"
        eventFirstSub="We will develop an easy, quick and seamless claims management feature, that enables the policy-holders to quickly manage the claims."
        eventFirstGrap="/assets/img/industries/seamless-claims-management.jpeg"
        eventSecond="Access To Policies & IDs"
        eventSecondSub="A dedicated section in the insurance app will be created for storing all documents related to policies and the identity proofs of the users for easy access."
        eventSecondGrap="/assets/img/industries/Access-To-Policies-IDs.jpg"
        eventThird="Seamless Payments"
        eventThirdSub="We will include seamless online payments into the insurance app, so that the policy-holders can quickly make the premium payments or buy new policies."
        eventThirdGrap="/assets/img/industries/Seamless-Payments.jpg"
        eventFourth="Instant Connection With Agents"
        eventFourthSub="The insurance application will enable instant connection with the agents for real-time support and assistance, for anything related to the insurance policy."
        eventFourthGrap="/assets/img/industries/Instant-Connection-Agents.jpg"
        eventFifth="Knowledge Center"
        eventFifthSub="The new insurance app will have a dedicated Knowledge Center for sharing all relevant information and data related to the insurance policies: both old and new."
        eventFifthGrap="/assets/img/industries/Knowledge-Center.jpg"
        eventSix="Promotions & Offers"
        eventSixSub="The customers and policyholders can be provided with special promotions and offers related to insurance policies via this section."
        eventSixGrap="/assets/img/industries/insurance-policies.jpg"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Finances App Project in Mind?</h2>
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
export default withNewsletterAddress(Finance);
