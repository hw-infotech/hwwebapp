import React from "react";
import Dashboard from "../../layout/dashboard";
import "./caseStudies.css";

function ourWorks() {
  const projectsList = [
    {
      id: "0",
      category: ["Visual Design", "Ui Ux", "Healthcare"],
      projectName: "Planet Fitness",
      projectSub: " A whole body and mind approach to feeling great.",
      projectImg: [
        "/assets/img/caseStudies/PlanetFitness1.png ",
        "/assets/img/caseStudies/PlanetFitnessMobile.png ",
        "/assets/img/caseStudies/PlanetFitness2.png ",
      ],
      projectPera: [
        "Planet Fitness provides you the fitness solution that's more personal, intelligent and encouraging than ever before.",
        "Achieving the fitness results you want can sometimes   feel overwhelming with so many experts giving advice  on diet, exercise, and even sleep. Joining a gym can  be equally perplexing. From navigating the exercise machines to developing a routine that achieves your personal goals can be daunting tasks.",
      ],
      founder: "Robbie Anderson",
      place: " Founder & CEO of Planet Fitness, NY, USA",
    },
    {
      id: "1",
      category: ["Madical", "Visual Design", "Ui Ux", "Healthcare"],
      projectName: "MadiboX",
      projectSub: " A whole body and mind approach to feeling great.",
      projectImg: [
        "/assets/img/caseStudies/madibox1.png ",
        "/assets/img/caseStudies/madiboxMobile.png ",
        "/assets/img/caseStudies/madibox2.png ",
      ],
      projectPera: [
        "Accidents happen, injuries occur and illnesses crop up, but you or your loved one won’t face them alone. We have the medical training, experience and the heart to rebuild your health, confidence and quality of life.",
        "Changes in health can happen over time, or quickly and unexpectedly. When those changes occur, life can change, too. But with the support of our attentive, experienced nurses and therapists, you’ll have experts by your side for short-term treatment or long-term care.",
      ],
      founder: "Dr. Mark Anthony",
      place: " Founder & CEO of Madibox, NY, USA",
    },
    {
      id: "2",
      category: ["Shopping", "Products", "Grocery", "E-commerce"],
      projectName: "Buyer World",
      projectSub:
        "You can buy personal care products right from the comfort of your home by shopping online at Buyer world.",
      projectImg: [
        "/assets/img/caseStudies/buyerworld1.png ",
        "/assets/img/caseStudies/buyerworldMobile.png ",
        "/assets/img/caseStudies/buyerworld2.png ",
      ],
      projectPera: [
        "It's always difficult to pick what to wear and what to not during rainy season. This segment of Style Mynt will give you some ideas about monsoon styling. It's is much necessary that the hemlines should be high when it rains and that's why Piali selects a coral shorts and a crisp olive shirt.",
        "You can buy personal care products right from the comfort of your home by shopping online at Buyer world.",
      ],
      founder: "Margaret Wood",
      place: " Founder & CEO of Buyer World, NY, USA",
    },
    {
      id: "3",
      category: ["International", "Logtactics", "Transport", "Cargo"],
      projectName: "Logtactics International",
      projectSub:
        "Logtactics  International has a mission to provide our customers with safe and efficient transportation services around the globe.",
      projectImg: [
        "/assets/img/caseStudies/logitactics1.png ",
        "/assets/img/caseStudies/logitacticsMobile.png ",
        "/assets/img/caseStudies/logitactics2.png ",
      ],
      projectPera: [
        "Shipping internationally can be a complex process. Here at Logtactics  International, we minimize the complexity by offering a single point of contact for your shipment to assist, update and relay relevant information to you directly throughout the shipment process.",
        "Logtactics has provided premium customer service to ensure our needs are met to the fullest. Our customers and we have a piece of mind shipping with Cargo Solution Express knowing that the freight will be delivered on time.",
      ],
      founder: "Khao",
      place: " Founder & CEO of Logtactics, Russia",
    },
    {
      id: "4",
      category: ["Market", "Parts", "Machines", "Tracking"],
      projectName: "Braap",
      projectSub:
        "Owners of machines and assets to diagnose, repair, and maintain their mechanical stuff.",
      projectImg: [
        "/assets/img/caseStudies/Braap1.png ",
        "/assets/img/caseStudies/BraapMobile.png ",
        "/assets/img/caseStudies/Braap3.png ",
      ],
      projectPera: [
        "An intelligent solution built for service companies, technicians, enterprises, and owners of machines and assets to diagnose, repair, and maintain their mechanical stuff.",
        "A comprehensive, simple-to-use turnkey platform for service and repair businesses that offers unique features that enhance customer and technician collaboration.",
        "“According to several sources and our own interpretation “Braap” defines a flow, a connection between a customer and technician. We explain it as the unison of working together to maintain, diagnose, and fix mechanical problems in a comprehensive yet simple collaborative environment.",
      ],
      founder: "David",
      place: " Founder & CEO of Braap, UK",
    },
  ];

  return (
    <Dashboard>
      <div className="ourWorksBanner ">
        <div className="container">
          <div className="ourWorkbannerContent">
            <h1>
              Crafted With Love. <br /> Built With Passion{" "}
            </h1>
            <h3>
              Nestormind offers transformative technology and software solutions
              to startups, global brands & Fortune 500 companies. Some of our
              major clients include Craftstime, Visaguid's.
            </h3>
          </div>
        </div>
      </div>

      <div className="storiesBox">
        <div className="container">
          {projectsList?.map((data, index) => {
            return (
              <div className="storiesPanelItem" key={index}>
                <div className="headingPart">
                  <div className="projectDetails">
                    <div className="chips">
                      {data.category.map((chips, i) => (
                        <span key={i}>{chips}</span>
                      ))}
                    </div>
                    <div className="projectName">{data.projectName}</div>
                    <div className="projectSubtitle">{data.projectSub}</div>
                  </div>
                </div>
                <div className="projectsContentBox">
                  {data?.projectImg.map((image, i) => (
                    <div className="projectGraphics" key={i}>
                      <img src={image} />
                    </div>
                  ))}
                  <div className="projectDiscriptions">
                    <div className="projectDiscriptionsDetails">
                      {data?.projectPera?.map((pera, i) => (
                        <div className="projectsContentPera" key={i}>
                          {pera}
                        </div>
                      ))}
                    </div>
                    <div className="clientDetails">
                      <div className="clientName">{data.founder}</div>
                      <div className="clientPost">{data.place}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Dashboard>
  );
}

export default ourWorks;
