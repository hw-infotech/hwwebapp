import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function RetailEcommerce() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>
            Delight Your Customers with Innovative Digital Retail Solutions
          </h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#1c1717"
        graphicTitle="Data-forward, Digital-first Retail and eCommerce Solutions"
        graphicSubtitle="Today’s shoppers are savvy: with a slew of information at their fingertips, they make decisions in split seconds. For more than 3 years, we’ve been at the forefront of online shopping development, helping retailers leverage the power of IT to automate, personalize, and optimize every point along the customer journey. With full-stack development capabilities and expert UX/UI specialists, we create bespoke digital solutions for retail and eCommerce stores from scratch or customize leading platforms like Magento and Shopify."
        graphicImgUrl="/assets/img/industries/retailPic.png"
      />
      <IndustriesSolutions
        heading="Retail App Development Services"
        eventFirst="Retail Software Development"
        eventFirstSub="Digital transformation is the secret sauce in making every shopping experience optimal, whether online or in-store. We design and deploy omni channel infrastructure using state-of-the-art processes and technology for enterprise retail eCommerce solutions that personalize interactions across connected channels for better sales, ROI, and retention."
        eventFirstGrap="/assets/img/industries/Retail-Software-Development.jpg"
        eventSecond="Marketplace & eCommerce Solutions"
        eventSecondSub="Your customers expect a fast, seamless experience regardless of where, when, and how they’re shopping. Our eCommerce developers have experience developing everything from single online stores to complex marketplaces for B2B, B2C, and DTC businesses. With a focus on UX/UI, conversions, speed, and stability, our team includes certified developers in leading platforms like Magento, Shopify, Drupal and Kentico, integration experts, and seasoned omnichannel eCommerce engineers."
        eventSecondGrap="/assets/img/industries/Marketplace-eCommerce-Solutions.jpg"
        eventThird="CRM & ERP Integrations"
        eventThirdSub="Catering to your customers with a rich interactive experience while automating and optimizing your workflows brings your business the best of all worlds. We specialize in customized integrations, including CRM, ERP, and CMS, that help your organization sell more products/services faster and more efficiently."
        eventThirdGrap="/assets/img/industries/CRM-ERP-Integrations.jpg"
        eventFourth="Supply Chain Management Solutions"
        eventFourthSub="Your online business' success depends on the speed, accuracy, and strength of your supply chain. We help you take control of your eCommerce inventory on-the-go, with customized, feature-rich solutions for managing transportation, warehousing, orders, vendor/suppliers, and reverse logistics."
        eventFourthGrap="/assets/img/industries/Supply-Chain-Management-Solutions.jpg"
        eventFifth="Proximity Marketing/Sales Solutions"
        eventFifthSub="Marketing to your customer at the right place and right time with relevant, personalized interactions is a critical business driver. Our expert team of marketing pros and eCommerce developers are experienced in designing end-to-end, location-aware solutions based on GPS, NFC, BLE beacons, and QR codes that feed smart retail intelligence and fuel sales."
        eventFifthGrap="/assets/img/industries/Proximity-Marketing.jpg"
        eventSix="eCommerce Analytics & Optimization Services"
        eventSixSub="Technology evolves at the speed of light, and every advance can mean a better customer experience. Our team of QA experts, skilled designers and eCommerce developers, and data analysis specialists proactively detect problems, upgrade applications and processes, and uncover data-driven insights to maximize engagement, conversions, and sales."
        eventSixGrap="/assets/img/industries/eCommerce-Analytics.jpg"
        eventSeven="eCommerce Maintenance & Support Services"
        eventSevenSub="With attention at a premium, you can’t afford to lose customers because of avoidable glitches, security breaches, or other shopping experience interruptions. Our performance-focused maintenance and support services run the gamut, from simple updates to strategic upgrades, to keep your operations running smoothly for your customers’ satisfaction — and your peace of mind."
        eventSevenGrap="/assets/img/industries/eCommerce-Maintenance.jpg"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Sports App Project in Mind?</h2>
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
export default withNewsletterAddress(RetailEcommerce);