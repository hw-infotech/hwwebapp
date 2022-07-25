import React from "react";
import "./industries.css";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from "./industriesGraphic";
import IndustriesSolutions from "./industriesSolutions";
import { Link } from "react-router-dom";

function healthcare() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>
            Trigger a Health Revolution with our Fitness App Development
            Services
          </h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        graphicTitle="Here’s your chance to inspire millions of Healthcare Enthusiasts"
        graphicSubtitle="We are an industry leader in designing and launching engaging, intuitive, and highly advanced fitness apps, that empower users to track and monitor their health in real-time, and also predict their health patterns. Partner with us, to unleash a fitness revolution for millions of users!"
        graphicImgUrl="/assets/img/industries/healthcarePic.png"
      />
      <IndustriesSolutions
      className="healthcareSolution"
        heading="Healthcare Software Development Services"
        eventFirst="Patient Portals"
        eventFirstSub=" An optimized digital patient experience is at the heart of
                    any effective healthcare IT system. Our expert UX/UI team
                    and healthcare app developers have the expertise necessary
                    to devise and deploy patient portals that make it quick,
                    intuitive, and seamless for patients to get care and make
                    payments — maximizing your EHR investment and ROI.
                    Healthcare facilities can also maximize their EHR investment
                    through Net Solutions’ seamless data flow between platforms
                    and parent EHR systems."
        eventFirstGrap="/assets/img/industries/Patient-Portals.jpg"
        eventSecond="Mobile Healthcare App Development Services"
        eventSecondSub="  Health and wellness are top-of-mind nowadays, and leveraging
                    a healthcare software solutions company can go a long way in
                    helping providers and patients collaborate from wherever
                    they are. Our expert healthcare app development services can
                    help you create custom mobile apps that track vital signs,
                    simplify sharing lab results, and create opportunities to
                    improve patients’ health and well-being. Our work can
                    provide positive real-world impact by making healthcare
                    services accessible to groups with traditional accessibility
                    issues, like seniors in retirement communities and private
                    homes."
        eventSecondGrap="/assets/img/industries/Mobile-Healthcare-App.jpg"
        eventThird="Medical Practice Management"
        eventThirdSub="   A savvy medical practice uses technology to automate and
                    streamline processes while maintaining HIPAA and other
                    regulatory compliance. Our custom healthcare software
                    development company is experienced in building medical data
                    management systems encompassing all business functions, from
                    patient registration to laboratory charting, pharmacy and
                    inventory management, insurance claims processing, and
                    accounting In addition, medical professionals can leverage
                    Net Solutions’ cutting-edge technology to manage everyday
                    office tasks like scheduling, route optimization, upcoming
                    visits, as well as patient and employee data."
        eventThirdGrap="/assets/img/industries/Medical-Practice-Management.jpg"
        eventFourth="Telemedicine"
        eventFourthSub=" One of the most significant digital healthcare
                    accomplishments has been making medical services accessible
                    to patients when they need them most. As a leading custom
                    mobile app development company, we have experience building
                    bespoke telemedicine systems that seamlessly integrate EHR
                    systems, deliver superior video quality, and empower
                    physicians and patients to connect securely and privately
                    for better outcomes. We’ve also helped our clients set up
                    eCommerce platforms for ordering and tracking OTC drugs, as
                    well as pharmacy transfers."
                    
        eventFourthGrap="/assets/img/industries/Telemedicine.jpg"
        eventFifth="Healthcare Analytics"
        eventFifthSub="Healthcare providers have a quantifiable and qualifiable
                    impact on their patients in today's digital world. Our
                    enterprise healthcare software development services include
                    state-of-the-art analytics to give you insights into all
                    areas of your business. Net Solutions can provide a
                    cutting-edge platform to handle everything from management
                    to patient records, costs, diagnoses, creative support,
                    better treatments and care, and waste and cost-cutting
                    measures."
        eventFifthGrap="/assets/img/industries/Healthcare-Analytics.jpg"
        eventSix="Compliance and Security"
        eventSixSub="Regulatory compliance and patient privacy are a top priority
                    for medical services companies. As a leading healthcare
                    software development company, we understand the complexities
                    of HIPAA and global privacy regulations and are experienced
                    in designing and building healthcare software solutions that
                    protect patient data, ensure proper use by providers, and
                    simply the auditing process."
        eventSixGrap="/assets/img/industries/Compliance-Security.jpg"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Healthcare App Project in Mind?</h2>
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

export default withNewsletterAddress(healthcare);
