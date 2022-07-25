import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function Finance() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>Full Spectrum Of Financial Software Solutions</h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#407643"
        graphicTitle="We Provide End-to-End Financial Software Development Services"
        graphicSubtitle="Financial and banking software development covers mobile banking applications, loan systems, claim management applications, and more. Backed with immense years of experience, Nestormind is seasoned professionals that help businesses and companies with the digital transformation of financial services by delivering solutions to fintech software development. Our financial software applications are powered by modern technologies for various financial sector segments. We are the most trusted software development partner for many popular fintech companies worldwide."
        graphicImgUrl="/assets/img/industries/financePic.png"
      />
      <IndustriesSolutions
        heading="Our Financial Software Development Services"
        eventFirst="Custom Financial Application Development"
        eventFirstSub="As a renowned financial software development company delivers robust and highly scalable financial software development services on mobile and web platforms for custom reporting, better user engagement, and real-time data interaction."
        eventFirstGrap="/assets/img/industries/Custom-Financial-Application-Development.jpg"
        eventSecond="AI-Enabled Solutions"
        eventSecondSub="User engagement is the crucial and the most important of the development process. This is the reason our experts build AI-enabled financial management solutions that provide a better and more engaging experience to your users"
        eventSecondGrap="/assets/img/industries/AI-Enabled-Solutions.jpg"
        eventThird="Data & Analytics Software"
        eventThirdSub="We are professional services providers and what suits you the best. We design financial software solutions that enable you to deal with the big data masses and build additional business value."
        eventThirdGrap="/assets/img/industries/Data-Analytics-Software.jpg"
        eventFourth="ERP Systems"
        eventFourthSub="Our professional expert-designed ERP (Enterprise resource planning) financial systems would work with every department in your financial organization, which helps with increased productivity."
        eventFourthGrap="/assets/img/industries/ERP-Systems.jpg"
        eventFifth="Smart CRM Solutions"
        eventFifthSub="We develop from scratch and integrate cloud-enabled customer relationship management systems for our clients with modern technologies to provide you with the best financial software development solutions."
        eventFifthGrap="/assets/img/industries/Smart-CRM-Solutions.jpg"
        eventSix="Mobile Solutions"
        eventSixSub="We have expert mobile developers in our team that enable banking in your smart mobile devices that allows you to fulfill any functions anywhere and anytime from your smartphones with the help of a digital phone wallet."
        eventSixGrap="/assets/img/industries/Mobile-Solutions.jpg"
        eventSeven="Complete Banking Solution"
        eventSevenSub="We are good at building banking solutions and providing end-to-end finance and mobile application banking services. We build solutions that effectively work for both corporate banks and retail banks worldwide"
        eventSevenGrap="/assets/img/industries/Complete-Banking-Solution.jpg"
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