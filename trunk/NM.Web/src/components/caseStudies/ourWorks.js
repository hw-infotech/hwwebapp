import React from "react";
import Dashboard from "../../layout/dashboard";
import "./caseStudies.css";
import projectsList from "../../services/JSON/works.json"

function ourWorks() {
 
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
              major clients include Craftstime, Visaguide's.
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
