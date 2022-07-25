import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function Sports() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>Developing Expert Sports & Fitness Software Solutions</h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#262934"
        graphicTitle="We Build Sports & Fitness Softwares That Exceeds Users Expectations"
        graphicSubtitle="In today’s digital era, users seek a lightning-fast experience tailored to their needs and desires. We have been building sports and fitness app solutions for our clients for more than seven decades. Here at Nestormind, we develop feature-rich mobile and web applications to help sports and fitness services providers to strengthen their business by assisting them in managing their tasks more precisely. We bring innovative ideas to our clients for the digital transformation of their business to life. We prioritize the preference of our clients and listen to their every need so we can develop solutions that meet their expectations."
        graphicImgUrl="/assets/img/industries/sportsPic.png"
      />
      <IndustriesSolutions
        heading="Our Sports & Fitness Software Development Services"
        eventFirst="Sports Analytics Software"
        eventFirstSub="Our developers implement custom sports analytic performance software with real-time predictive insights through pre/post-game analysis application motion/wearable tech sensor, camera, etc."
        eventFirstGrap="/assets/img/industries/sports1.jpg"
        eventSecond="Performance Analysis software"
        eventSecondSub="With immense years of work experience, we build robust software solutions for sports video analysis tools, including tagging, editing, photo sequencing, side-by-side viewing, and footage playback."
        eventSecondGrap="/assets/img/industries/sports2.jpg"
        eventThird="Tracking Technology"
        eventThirdSub="We build powerful custom performance tracking software that supports tactical and physical performance analysis with application integration of GPS/GIS and more for tracking/ data collecting through a wearable device."
        eventThirdGrap="/assets/img/industries/sports3.jpg"
        eventFourth="Data Management"
        eventFourthSub="We build customized data analytics applications that collect and integrate data from multiple sources. We program big data analytics, ETL (extract/transform/load), capabilities, and more for managing complex data sets."
        eventFourthGrap="/assets/img/industries/sports4.jpg"
        eventFifth="Fitness Club Management Software"
        eventFifthSub="With the help of our technical experts, we build complete software solutions for sports and fitness facilities, programming club management software platforms to enhance operational efficiency and streamline workflows."
        eventFifthGrap="/assets/img/industries/sports5.jpg"
        eventSix="Membership Management software"
        eventSixSub="We build robust membership management software with modules for enrollment applications, membership database, payment tracking software, digital signature, photo ID capture, integrated services, and mobile app services."
        eventSixGrap="/assets/img/industries/sports6.jpg"
        eventSeven="Gym Mobile App Development"
        eventSevenSub="We develop and design custom-branded mobile applications to boost clients’ engagement with fitness trackers, diet and nutrition planners, online coaching, capabilities to book classes, and more."
        eventSevenGrap="/assets/img/industries/sports7.jpg"
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
export default withNewsletterAddress(Sports);