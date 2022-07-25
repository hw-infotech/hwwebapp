import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import "./industries.css";

function IndustriesSolutions({
  heading,
  eventFirst,
  eventFirstSub,
  eventFirstGrap,
  eventSecond,
  eventSecondSub,
  eventSecondGrap,
  eventThird,
  eventThirdSub,
  eventThirdGrap,
  eventFourth,
  eventFourthSub,
  eventFourthGrap,
  eventFifth,
  eventFifthSub,
  eventFifthGrap,
  eventSix,
  eventSixSub,
  eventSixGrap,
  eventSeven,
  eventSevenSub,
  eventSevenGrap,
  className
}) {
  return (
    <div className="solutionBox">
      <div className="container">
        <h2>{heading}</h2>

        <div className="tabInfo">
          <Accordion defaultActiveKey="0" className={className}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{eventFirst}</Accordion.Header>
              <Accordion.Body>
                <div className="tabContent">
                  <div className="ContentSection">
                    <h4>{eventFirst}</h4>
                    <p>{eventFirstSub}</p>
                    <div className="tabGraphics">
                      <img src={eventFirstGrap} />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{eventSecond}</Accordion.Header>
              <Accordion.Body>
                <div className="tabContent">
                  <div className="ContentSection">
                    <h4>{eventSecond}</h4>
                    <p>{eventSecondSub}</p>
                    <div className="tabGraphics">
                      <img src={eventSecondGrap} />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{eventThird}</Accordion.Header>
              <Accordion.Body>
                <div className="tabContent">
                  <div className="ContentSection">
                    <h4>{eventThird}</h4>
                    <p>{eventThirdSub}</p>
                    <div className="tabGraphics">
                      <img src={eventThirdGrap} />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>{eventFourth}</Accordion.Header>
              <Accordion.Body>
                <div className="tabContent">
                  <div className="ContentSection">
                    <h4>{eventFourth}</h4>
                    <p>{eventFourthSub}</p>
                    <div className="tabGraphics">
                      <img src={eventFourthGrap} />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>{eventFifth}</Accordion.Header>
              <Accordion.Body>
                <div className="tabContent">
                  <div className="ContentSection">
                    <h4>{eventFifth}</h4>
                    <p>{eventFifthSub}</p>
                    <div className="tabGraphics">
                      <img src={eventFifthGrap} />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>{eventSix}</Accordion.Header>
              <Accordion.Body>
                <div className="tabContent">
                  <div className="ContentSection">
                    <h4>{eventSix}</h4>
                    <p>{eventSixSub}</p>
                    <div className="tabGraphics">
                      <img src={eventSixGrap} />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>{eventSeven}</Accordion.Header>
              <Accordion.Body>
                <div className="tabContent">
                  <div className="ContentSection">
                    <h4>{eventSeven}</h4>
                    <p>{eventSevenSub}</p>
                    <div className="tabGraphics">
                      <img src={eventSevenGrap} />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Tabs
            defaultActiveKey="1"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="1" title={eventFirst}>
              <div className="tabContent">
                <div className="ContentSection">
                  <h4>{eventFirst}</h4>
                  <p>{eventFirstSub}</p>
                  <div className="tabGraphics">
                    <img src={eventFirstGrap} />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="2" title={eventSecond}>
              <div className="tabContent">
                <div className="ContentSection">
                  <h4>{eventSecond}</h4>
                  <p>{eventSecondSub}</p>
                  <div className="tabGraphics">
                    <img src={eventSecondGrap} />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="3" title={eventThird}>
              <div className="tabContent">
                <div className="ContentSection">
                  <h4>{eventThird}</h4>
                  <p>{eventThirdSub}</p>
                  <div className="tabGraphics">
                    <img src={eventThirdGrap} />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="4" title={eventFourth}>
              <div className="tabContent">
                <div className="ContentSection">
                  <h4>{eventFourth}</h4>
                  <p>{eventFourthSub}</p>
                  <div className="tabGraphics">
                    <img src={eventFourthGrap} />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="5" title={eventFifth}>
              <div className="tabContent">
                <div className="ContentSection">
                  <h4>{eventFifth}</h4>
                  <p>{eventFifthSub}</p>
                  <div className="tabGraphics">
                    <img src={eventFifthGrap} />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="6" title={eventSix}>
              <div className="tabContent">
                <div className="ContentSection">
                  <h4>{eventSix}</h4>
                  <p>{eventSixSub}</p>
                  <div className="tabGraphics">
                    <img src={eventSixGrap} />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="7" title={eventSeven}>
              <div className="tabContent">
                <div className="ContentSection">
                  <h4>{eventSeven}</h4>
                  <p>{eventSevenSub}</p>
                  <div className="tabGraphics">
                    <img src={eventSevenGrap} />
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default IndustriesSolutions;
