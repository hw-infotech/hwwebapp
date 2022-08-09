import React, { useState } from "react";
import Dashboard from "../../layout/dashboard";
import "./caseStudies.css";
import projectsList from "../../services/JSON/works.json";
import Modal from "react-bootstrap/Modal";
import { Button } from "bootstrap";

function OurWorks() {
  const [modalData, setModalData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const handleCaseStudyClick = (data) => {
    setOpenModal(true);
    setModalData(data);
  };
  const handleClose =()=>{
     setOpenModal(false);
  }

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
                    <div className="projectTitleBox">
                      <div>
                        <div className="projectName">{data.projectName}</div>
                        <div className="projectSubtitle">{data.projectSub}</div>
                      </div>
                      <div className="caseStudiesBtn">
                        {/* <button
                          className="cSBtn"
                          onClick={() => {
                            handleCaseStudyClick(data);
                          }}
                        >
                          View Case Study
                        </button> */}
                      </div>
                    </div>
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

      <Modal show={openModal} className="caseStudiesModal">
        <Modal.Header
          className="closeHeaderBtn"
          closeButton
          onClick={handleClose}
        ></Modal.Header>
        <div className="projectDetailsPanel">
          <div
            className="ProjectHeaderSection"
            style={{ backgroundColor: modalData.themeColor }}
          >
            <div className="leftSection" style={{ color: modalData.textColor }}>
              <div className="projectLogo">
                <img src={modalData.logo} />
              </div>
              <div className="projectTitle">{modalData.projectName}</div>
              <div className="overview">{modalData.overView}</div>
              <div className="projectTechknowlogy">
                <div className="projectTechTitle">
                  Project Technology & Framework
                </div>
                <div className="techIcon">
                  {modalData?.techLogoIcon?.map((img, i) => (
                    <div className="techIconBox" key={i}>
                      <img src={img} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rightSection">
              <img src={modalData.graphics} />
            </div>
          </div>
          <div className="overViewBox">
            <div className="overViewText">Project Overview</div>
            <div className="overViewContent">
              {modalData?.projectPera?.map((pera, i) => (
                <div className="projectsContentPera" key={i}>
                  {pera}
                </div>
              ))}
            </div>
          </div>

          <div className="projectSolution">
            <div className="projectSolutionText">Project Timeline</div>
            <div className="projectApproachRight">
              <div className="projectGraphics">
                <img src={modalData.timlineImage} />
              </div>
            </div>
            <div className="projectApproachLeft">
              <ul>
                {modalData?.approach?.map((approach, i) => (
                  <li key={i}>{approach}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overViewBox">
            <div className="overViewText">
              {" "}
              {modalData.projectName} App Idea and Challenges
            </div>
            <div className="overViewContent">
              {modalData?.appChallange?.map((appChallangeContent, i) => (
                <div className="projectsContentPera" key={i}>
                  {appChallangeContent}
                </div>
              ))}
            </div>
            <div className="projectApproachRight">
              <div className="projectGraphics">
                <img src={modalData.reaserchForApp} />
              </div>
            </div>
          </div>
          <div className="overViewBox">
            <div className="overViewText">User Flow</div>
            <div className="overViewContent">
              {modalData?.userFlow?.map((userFlowContent, i) => (
                <div className="projectsContentPera" key={i}>
                  {userFlowContent}
                </div>
              ))}
            </div>
            <div className="projectApproachRight">
              <div className="projectGraphics">
                <img src={modalData.userflow} />
              </div>
            </div>
          </div>
          <div className="overViewBox">
            <div className="overViewText">How Does the App Work?</div>
            <div className="overViewContent">
              {modalData?.appWork?.map((appWorkContent, i) => (
                <div className="projectsContentPera" key={i}>
                  {appWorkContent}
                </div>
              ))}
            </div>
            <div className="productImage">
              {modalData?.productImg?.map((proImage, i) => (
                <div className="prodImg" key={i}>
                  <img src={proImage} />
                </div>
              ))}
            </div>
          </div>
          <div className="overViewBox">
            <div className="overViewText">Result</div>

            <div className="resultBoxPanel">
              <div className="resultbox">
                <div className="icon">
                  <img src="assets/img/caseStudies/cost-per-visitor.png" />
                </div>
                <div className="targetText">40%</div>
                <div className="resultText">
                  Under CPA (Cost per action) Goal
                </div>
              </div>
              <div className="resultbox">
                <div className="icon">
                  <img src="assets/img/caseStudies/filter.png" />
                </div>
                <div className="targetText">40%</div>
                <div className="resultText">Conversion Rate in 2021</div>
              </div>
              <div className="resultbox">
                <div className="icon">
                  <img src="assets/img/caseStudies/zoom.png" />
                </div>
                <div className="targetText">40%</div>
                <div className="resultText">
                  Conversions Tracked all across all interactions
                </div>
              </div>
            </div>
          </div>
          <div className="overViewBox mb-5">
            <div className="overViewText">Conclusion</div>
            <div className="overViewContent">
              {modalData?.conclusion?.map((conclusionContent, i) => (
                <div className="projectsContentPera" key={i}>
                  {conclusionContent}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </Dashboard>
  );
}

export default OurWorks;
