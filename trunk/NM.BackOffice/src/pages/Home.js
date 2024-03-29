import React, { useEffect, useMemo, useRef } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { BiDirections, BiTab, BiWallet } from "react-icons/bi";
import { Chart } from "react-charts";
import { FcList, FcBarChart, FcBullish } from "react-icons/fc";
const Home = () => {
  const graphRef = useRef();
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const data = useMemo(
    () => [
      {
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  const series = useMemo(
    () => ({
      type: "bar",
      showPoints: false,
    }),
    []
  );
  const series1 = useMemo(
    () => ({
      type: "area",
      showPoints: false,
    }),
    []
  );
  useEffect(() => {
    // graphRef.current.style.background="yellow"
  }, []);

  return (
    <div>
      <div className="main_dashboard_content">
        <Row>
          <Col md={6} sm={12} lg={3} xl={3}>
            <div className="card1">
              <div className="card-header1">
                <div className="icon-card1 background_box1">
                  <BiDirections size={24} />
                </div>
                <div className="innerCard">
                  <span>Pending Enquiry</span>
                  <h4 className="font-weight-bold">$5k</h4>
                </div>
              </div>
              <div className="card-footer1">
                {" "}
                <span className="text-decoration-green">+5% </span>than
                yesterday
              </div>
            </div>
          </Col>
          <Col md={6} sm={12} lg={3} xl={3}>
            <div className="card1">
              <div className="card-header1">
                <div className="icon-card1 background_box2">
                  <BiTab size={24} />
                </div>
                <div className="innerCard">
                  <span>Job Subscribers</span>
                  <h4 className="font-weight-bold">$53k</h4>
                </div>
              </div>
              <div className="card-footer1">
                {" "}
                <span className="text-decoration-red">-3%</span> than yesterday
              </div>
            </div>
          </Col>
          <Col md={6} sm={12} lg={3} xl={3}>
            <div className="card1">
              <div className="card-header1">
                <div className="icon-card1 background_box3">
                  <BiWallet size={24} />
                </div>
                <div className="innerCard">
                  <span>Newsletter Subscribers</span>
                  <h4 className="font-weight-bold">$53k</h4>
                </div>
              </div>
              <div className="card-footer1">
                {" "}
                <span className="text-decoration-green">+9% </span>than
                yesterday
              </div>
            </div>
          </Col>
          <Col md={6} sm={12} lg={3} xl={3}>
            <div className="card1">
              <div className="card-header1">
                <div className="icon-card1 background_box4">
                  <BsSearch size={24} />
                </div>
                <div className="innerCard">
                  <span>Performance</span>
                  <h4 className="font-weight-bold">$3k</h4>
                </div>
              </div>
              <div className="card-footer1">
                {" "}
                <span className="text-decoration-green">+8% </span>than
                yesterday
              </div>
            </div>
          </Col>
        </Row>
        <div className="main_graphcard_box">
          <Row>
            <Col md={7} sm={12} lg={6} xl={4}>
              <div className="card1">
                <div className="card-graphheader">
                  <div className="chart-card">
                    <div className="userDetail1">
                      <button
                        type="button"
                        className="btn"
                        id="dropdownIconMenu"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="actionIcon">
                          {" "}
                          <i className="bi bi-three-dots-vertical"></i>{" "}
                        </span>
                      </button>
                      <ul
                        className="IconDropdown dropdown-menu context-menu11 "
                        aria-labelledby="dropdownIconMenu"
                      >
                        <li className="dropdownList">
                          <div className="actionBtns context-menu1">
                            <span
                              className="editAction"
                              data-bs-toggle="modal"
                              data-bs-target="#editbtn"
                            >
                              <FcBullish />
                            </span>
                            <button
                              type="button"
                              className="btn btn-outlined-secondary fs_13"
                              onClick={() => {}}
                            >
                              Monthly
                            </button>
                          </div>
                        </li>
                        <li className="dropdownList">
                          <div className="actionBtns context-menu1">
                            <span
                              className="deleteAction"
                              data-bs-toggle="modal"
                              data-bs-target="#deletebtn"
                            >
                              {" "}
                              <FcBarChart />
                            </span>
                            <button
                              type="button"
                              className="btn btn-outlined-secondary fs_13"
                            >
                              Quaterly
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <Chart data={data} axes={axes} series={series} />
                  </div>
                </div>
                <div className="chart-footer">
                  <h5 className="heading-chartstyle">Website Views</h5>
                  <span className="chattext-size">
                    Last Campaign Performance
                  </span>
                </div>
                <div className="lower-footer">
                  <div>
                    {" "}
                    <BiWallet />
                  </div>
                  <span className="chattext-size">
                    campaign sent 5 days ago
                  </span>
                </div>
              </div>
            </Col>
            <Col md={7} sm={12} lg={6} xl={4}>
              <div className="card1">
                <div className="card-graphheader">
                  <div className="chart-card">
                    <div className="userDetail1">
                      <button
                        type="button"
                        className="btn "
                        id="dropdownIconMenu"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="actionIcon">
                          {" "}
                          <i className="bi bi-three-dots-vertical"></i>{" "}
                        </span>
                      </button>
                      <ul
                        className="IconDropdown dropdown-menu context-menu11 "
                        aria-labelledby="dropdownIconMenu"
                      >
                        <li className="dropdownList">
                          <div className="actionBtns context-menu1">
                            <span
                              className="editAction"
                              data-bs-toggle="modal"
                              data-bs-target="#editbtn"
                            >
                              <FcBullish />
                            </span>
                            <button
                              type="button"
                              className="btn btn-outlined-secondary fs_13"
                              onClick={() => {}}
                            >
                              Monthly
                            </button>
                          </div>
                        </li>
                        <li className="dropdownList">
                          <div className="actionBtns context-menu1">
                            <span
                              className="deleteAction"
                              data-bs-toggle="modal"
                              data-bs-target="#deletebtn"
                            >
                              <FcBarChart />
                            </span>
                            <button
                              type="button"
                              className="btn btn-outlined-secondary fs_13"
                            >
                              Quaterly
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <Chart data={data} axes={axes} series={series1} />
                  </div>
                </div>
                <div className="chart-footer">
                  <h5 className="heading-chartstyle">Website Views</h5>
                  <span className="chattext-size">
                    Last Campaign Performance
                  </span>
                </div>
                <div className="lower-footer ">
                  <div>
                    {" "}
                    <BiWallet />
                  </div>
                  <span className="chattext-size">
                    campaign sent 8 days ago
                  </span>
                </div>
              </div>
            </Col>
            <Col md={7} sm={12} lg={6} xl={4}>
              <div className="card1">
                <div className="card-graphheader">
                  <div className="chart-card">
                    <div className="userDetail1 ">
                      <button
                        type="button"
                        className="btn "
                        id="dropdownIconMenu"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="actionIcon">
                          {" "}
                          <i className="bi bi-three-dots-vertical"></i>
                        </span>
                      </button>
                      <ul
                        className="IconDropdown dropdown-menu context-menu11 "
                        aria-labelledby="dropdownIconMenu"
                      >
                        <li className="dropdownList">
                          <div className="actionBtns context-menu1">
                            <span
                              className="editAction"
                              data-bs-toggle="modal"
                              data-bs-target="#editbtn"
                            >
                              <FcBullish />
                            </span>
                            <button
                              type="button"
                              className="btn btn-outlined-secondary fa_13"
                              onClick={() => {}}
                            >
                              Monthly
                            </button>
                          </div>
                        </li>
                        <li className="dropdownList">
                          <div className="actionBtns context-menu1">
                            <span
                              className="deleteAction"
                              data-bs-toggle="modal"
                              data-bs-target="#deletebtn"
                            >
                              {" "}
                              <FcBarChart />
                            </span>
                            <button
                              type="button"
                              className="btn btn-outlined-secondary fa_13"
                            >
                              Quaterly
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <Chart data={data} axes={axes} />
                  </div>
                </div>
                <div className="chart-footer">
                  <h5 className="heading-chartstyle">Website Views</h5>
                  <span className="chattext-size">
                    Last Campaign Performance
                  </span>
                </div>
                <div className="lower-footer ">
                  <div>
                    {" "}
                    <BiWallet />
                  </div>
                  <span className="chattext-size">
                    campaign sent 2 days ago
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-4">
            <Row>
              <Col md={8} sm={12}>
                <div className="card1">
                  <div>
                    <h5 className="font-weight-bold">Project</h5>
                  </div>
                  <div className="">
                    <div>
                      <p className="chattext-size1">30 done this month</p>
                    </div>
                  </div>
                  <Table>
                    <thead>
                      <tr>
                        <th className="text-decorationn">Companies</th>
                        <th className="text-decorationn">Companies</th>
                        <th className="text-decorationn">Companies</th>
                        <th className="text-decorationn">Companies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="card1"></div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

{
  /* <div className="padding-30">
             <div className="row">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                                    <div className="icon-size">
                                        <i class="fs-1 bi  bi-calendar2-heart"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-sm col-md col-lg">
                                    <div className="textsizecolor">
                                        <div>Number
                                        </div>
                                        <h5>150GB</h5>

                                    </div>
                                </div>
                                <div className="card-footer">
                                    <SecurityUpdateGoodTwoToneIcon />Update Now
        </div>
    </div>
                        </div >
                    </div >

                </div >
                <div className="col-3">
                    <div className=" card-stats card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-size">
                                        <i class="fs-1 bi-calendar-date"></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="textsizecolor">
                                        <div>Number
                                        </div>
                                        <h5>150GB</h5>

                                    </div>
                                </div>
                                <div className="card-footer">
                                   Update Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-stats card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-size">
                                        <i className="fs-1 bi-bell" ></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="textsizecolor">
                                        <div>Number
                                        </div>
                                        <h5>150GB</h5>
                                    </div>
                                </div>
                                <div className="card-footer">
                                   Update Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className=" card-stats card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-size">
                                        <i className="fs-1 bi-window" ></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="textsizecolor">
                                        <div>Number
                                        </div>
                                        <h5>150GB</h5>
                                    </div>
                                </div>
                                <div className="card-footer">
                                     Update Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</div >*/
}
