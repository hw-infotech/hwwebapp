import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function Restaurant() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>Restaurant Apps That Define Your Brand Story</h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#ef661e"
        graphicTitle="Rull Over The Market Industry By Building High-Performing Restaurant App"
        graphicSubtitle="If you are on the quest for reliable restaurant app development services, you have landed in the right place. Nestormind is the most sought-after restaurant app development company that helps boost your restaurant business with its innovative skills. We have decades of experience building Android and iOS applications for multiple industries, but building restaurant applications is our specialty. We have built robust restaurant app solutions for our overseas clients. Essentially, we carefully examine our clients’ business, listen to their objectives, give our suggestions, and then build the complete mobile application."
        graphicImgUrl="/assets/img/industries/restaurantPic.png"
      />
      <IndustriesSolutions
        heading="Services That Makes US The Most Trusted Restaurant App Development Company"
        eventFirst="Location-Based Deals"
        eventFirstSub=" To ease your customers, we use the practical GPS feature that helps you send location-based deals to the customers who have downloaded the application. GPS integration allows your customers with easy driving instructions."
        eventFirstGrap="/assets/img/industries/Location-Based-Deals.jpg"
        eventSecond="Multiple Payment Option Integration"
        eventSecondSub=" We integrate varied payment options in your restaurant booking application; online transfers, e-wallets, card payments (Debit or Credit) or coupon redemption to provide a cashless dining experience to your customers."
        eventSecondGrap="/assets/img/industries/Multiple-Payment-Option.jpg"
        eventThird="Embeddable Media Content"
        eventThirdSub="  Our team facilitates embedding high-resolution videos, images, and other essential media content into your app. If you want, you can also add the restaurant images, food menu picks, or nearby landmarks for easy navigation."
        eventThirdGrap="/assets/img/industries/Embeddable-Media-Content.jpg"
        eventFourth="Referral feature"
        eventFourthSub=" We also enable a referral system that allows your users to earn bonus points while dining in or ordering food from your restaurant. By doing this, you will not only earn loyal customers but also can generate more revenue."
        eventFourthGrap="/assets/img/industries/referal-feature.jpg"
        eventFifth="Multiple Platform Compatibility"
        eventFifthSub="We develop a multi-platform application for your restaurant business that is also compatible with the different screen sizes that make them attractive for both Apple and Android users and increase their experience."
        eventFifthGrap="/assets/img/industries/Multiple-Platform-Compatibility.jpg"
        eventSix="Push Notifications"
        eventSixSub="We integrate a push notification mechanism in your restaurant booking application. By benefiting from this functionality, you can send personalized messages to your customers for new deals or discounts that lead to maximizing revenue."
        eventSixGrap="/assets/img/industries/Push-Notifications.jpg"
        eventSeven="Writing Reviews"
        eventSevenSub="Our skilled UI/UX experts will build a platform for you to collect your customers’ contact information and keep an extensive database that can be used to execute marketing strategies. You can check who has visited or viewed your app."
        eventSevenGrap="/assets/img/industries/Writing-Reviews.jpg"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Restaurant App Project in Mind?</h2>
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
export default withNewsletterAddress(Restaurant);